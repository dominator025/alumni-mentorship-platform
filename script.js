// 1. Mentor Data Array
// This array holds the information for our 4 static mentors.
var mentors = [
    {
        id: 1,
        name: "Sarah Jenkins",
        domain: "Software Engineering",
        experience: "5 years",
        bio: "Sarah is a Software Engineer at Google. She specializes in building full-stack web applications using JavaScript and Python.",
        availability: "Weekends, 10 AM - 2 PM",
        photo: "assets/mentor1.png"
    },
    {
        id: 2,
        name: "David Chen",
        domain: "Product Management",
        experience: "8 years",
        bio: "David is a Senior Product Manager at Amazon. He helps guide students interested in product strategy, agile methods, and user experience.",
        availability: "Wednesdays, 6 PM - 8 PM",
        photo: "assets/mentor2.png"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        domain: "Data Science",
        experience: "4 years",
        bio: "Emily works as a Data Scientist at Netflix. She is passionate about machine learning, statistical modeling, and teaching Python.",
        availability: "Thursdays, 5 PM - 7 PM",
        photo: "assets/mentor3.png"
    },
    {
        id: 4,
        name: "Marcus Thompson",
        domain: "UX/UI Design",
        experience: "6 years",
        bio: "Marcus is a Lead Product Designer at Figma. He helps students build design portfolios, conduct user research, and learn visual design.",
        availability: "Mondays, 4 PM - 6 PM",
        photo: "assets/mentor4.png"
    }
];

// 2. Statistics Counter Variables
// These variables store the platform activity statistics in memory.
var totalMentorsCount = mentors.length;
var bookingRequestsCount = 0;
var discussionPostsCount = 0;

// Arrays to store submitted bookings and posts (in memory only)
var bookingsList = [];
var forumPostsList = [];

// 3. Select HTML Elements
// Selecting all elements we need to interact with.
var mentorGrid = document.querySelector("#mentor-grid");
var mentorSelect = document.querySelector("#mentor-select");
var bookingForm = document.querySelector("#booking-form");
var bookingSuccess = document.querySelector("#booking-success");
var forumForm = document.querySelector("#forum-form");
var postsList = document.querySelector("#posts-list");
var noPostsText = document.querySelector("#no-posts");

// Dashboard Element Selectors
var statMentors = document.querySelector("#stat-mentors");
var statBookings = document.querySelector("#stat-bookings");
var statPosts = document.querySelector("#stat-posts");
var dashboardBookings = document.querySelector("#dashboard-bookings");
var dashboardPosts = document.querySelector("#dashboard-posts");

// 4. Function to Update Dashboard Stats on Page
// This updates the text content of the dashboard counters.
function updateDashboard() {
    statMentors.textContent = totalMentorsCount;
    statBookings.textContent = bookingRequestsCount;
    statPosts.textContent = discussionPostsCount;
}

// 5a. Function to add a booking row to the Dashboard panel
function addBookingToDashboard(studentName, mentorName, date) {
    // Remove the "no bookings" placeholder text on first entry
    var emptyText = dashboardBookings.querySelector(".empty-text");
    if (emptyText) {
        dashboardBookings.removeChild(emptyText);
    }

    // Create a row element
    var row = document.createElement("div");
    row.className = "dashboard-row";
    row.innerHTML = "<span><strong>" + studentName + "</strong> &rarr; " + mentorName + "</span><span class='row-time'>" + date + "</span>";

    // Add to top of dashboard panel
    dashboardBookings.insertBefore(row, dashboardBookings.firstChild);
}

// 5b. Function to add a post row to the Dashboard panel
function addPostToDashboard(authorName, question) {
    // Remove the "no posts" placeholder text on first entry
    var emptyText = dashboardPosts.querySelector(".empty-text");
    if (emptyText) {
        dashboardPosts.removeChild(emptyText);
    }

    // Create a row element — trim question to 60 chars for readability
    var shortQuestion = question.length > 60 ? question.substring(0, 60) + "..." : question;
    var row = document.createElement("div");
    row.className = "dashboard-row";
    row.innerHTML = "<span><strong>" + authorName + ":</strong> " + shortQuestion + "</span><span class='row-time'>Just now</span>";

    // Add to top of dashboard panel
    dashboardPosts.insertBefore(row, dashboardPosts.firstChild);
}

// 5. Function to Generate Mentor Cards Dynamically
// This loops through the mentors array and creates the HTML elements for each mentor card.
function displayMentors() {
    for (var i = 0; i < mentors.length; i++) {
        var mentor = mentors[i];

        // Create the mentor card container
        var card = document.createElement("article");
        card.className = "mentor-card";

        // Create mentor image
        var img = document.createElement("img");
        img.src = mentor.photo;
        img.alt = mentor.name;
        img.className = "mentor-photo";
        card.appendChild(img);

        // Create mentor name
        var heading = document.createElement("h3");
        heading.textContent = mentor.name;
        card.appendChild(heading);

        // Create mentor domain
        var domainParagraph = document.createElement("p");
        domainParagraph.className = "mentor-domain";
        domainParagraph.textContent = mentor.domain;
        card.appendChild(domainParagraph);

        // Create mentor experience
        var experienceParagraph = document.createElement("p");
        experienceParagraph.className = "mentor-exp";
        experienceParagraph.textContent = "Experience: " + mentor.experience;
        card.appendChild(experienceParagraph);

        // Create mentor bio
        var bioParagraph = document.createElement("p");
        bioParagraph.className = "mentor-bio";
        bioParagraph.textContent = mentor.bio;
        card.appendChild(bioParagraph);

        // Create mentor availability
        var availabilityDiv = document.createElement("div");
        availabilityDiv.className = "mentor-availability";
        availabilityDiv.textContent = mentor.availability;
        card.appendChild(availabilityDiv);

        // Create "Request Session" button
        var bookBtn = document.createElement("button");
        bookBtn.className = "btn btn-book";
        bookBtn.textContent = "Request Session";
        
        // Add event listener to standard "Request Session" button to select mentor in form and scroll
        // This makes the UI interactive and friendly
        bookBtn.addEventListener("click", (function(selectedMentorName) {
            return function() {
                // Set the select dropdown value to the corresponding mentor name
                mentorSelect.value = selectedMentorName;
                // Scroll down to the booking section smoothly
                var bookingSection = document.querySelector("#booking");
                bookingSection.scrollIntoView({ behavior: "smooth" });
            };
        })(mentor.name));

        card.appendChild(bookBtn);

        // Append the completed card to the mentor grid in HTML
        mentorGrid.appendChild(card);

        // Also dynamically populate the booking form dropdown select options
        var option = document.createElement("option");
        option.value = mentor.name;
        option.textContent = mentor.name + " (" + mentor.domain + ")";
        mentorSelect.appendChild(option);
    }
}

// 6. Handle Booking Form Submission
// This function handles the form submission when a student books a session.
bookingForm.addEventListener("submit", function(event) {
    // Prevent the default form behavior of reloading the page
    event.preventDefault();

    // Read form values before resetting
    var studentName = document.querySelector("#student-name").value;
    var selectedMentor = document.querySelector("#mentor-select").value;
    var selectedDate = document.querySelector("#booking-date").value;

    // Store booking in the bookings array
    bookingsList.push({ student: studentName, mentor: selectedMentor, date: selectedDate });

    // Increment booking requests counter variable
    bookingRequestsCount = bookingRequestsCount + 1;

    // Update the dashboard statistics display
    updateDashboard();

    // Add this booking to the dashboard panel
    addBookingToDashboard(studentName, selectedMentor, selectedDate);

    // Display the success message block
    bookingSuccess.style.display = "block";

    // Clear form inputs
    bookingForm.reset();

    // Hide the success message after 5 seconds
    setTimeout(function() {
        bookingSuccess.style.display = "none";
    }, 5000);
});

// 7. Handle Discussion Forum Post Submission
// This function handles adding a new discussion post.
forumForm.addEventListener("submit", function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Select form inputs values
    var authorName = document.querySelector("#forum-name").value;
    var questionText = document.querySelector("#forum-question").value;

    // Hide the "No posts" placeholder if it is visible
    if (noPostsText) {
        noPostsText.style.display = "none";
    }

    // Create the post container element
    var postItem = document.createElement("div");
    postItem.className = "post-item";

    // Create the post header (Name and Time)
    var postHeader = document.createElement("div");
    postHeader.className = "post-header";

    var authorSpan = document.createElement("span");
    authorSpan.className = "post-author";
    authorSpan.textContent = authorName;

    var timeSpan = document.createElement("span");
    timeSpan.className = "post-time";
    timeSpan.textContent = "Just now";

    postHeader.appendChild(authorSpan);
    postHeader.appendChild(timeSpan);
    postItem.appendChild(postHeader);

    // Create the post body text
    var contentDiv = document.createElement("div");
    contentDiv.className = "post-content";
    contentDiv.textContent = questionText;
    postItem.appendChild(contentDiv);

    // Add the new post to the top of the discussion list
    // Prepend is standard, but using insertBefore or appendChild works. Let's use appendChild or insertBefore.
    // If there is a first child, insert before it to show most recent post at top.
    if (postsList.firstChild) {
        postsList.insertBefore(postItem, postsList.firstChild);
    } else {
        postsList.appendChild(postItem);
    }

    // Store post in the forum posts array
    forumPostsList.push({ author: authorName, question: questionText });

    // Increment discussion posts counter variable
    discussionPostsCount = discussionPostsCount + 1;

    // Update the dashboard statistics display
    updateDashboard();

    // Add this post to the dashboard panel
    addPostToDashboard(authorName, questionText);

    // Reset the forum form inputs
    forumForm.reset();
});

// 8. Initialize Page Content
// When the script loads, we display the mentors and initialize the dashboard values.
displayMentors();
updateDashboard();
