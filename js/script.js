document.addEventListener("DOMContentLoaded", function() {
    // Get all navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link");

    // Loop through each navbar link
    navbarLinks.forEach(function(navbarLink) {
        // Add click event listener to each navbar link
        navbarLink.addEventListener("click", function(event) {
            // Prevent default button behavior
            event.preventDefault();

            // Get the target page URL from the data attribute
            const targetPage = navbarLink.getAttribute("data-nav-link");

            // Navigate to the target page
            window.location.href = targetPage;
        });
    });
});
