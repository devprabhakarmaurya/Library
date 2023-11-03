// Get references to the elements
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicator = tabs.querySelector(".tab-indicator > div");

// Add click event listeners to the tab headers
tabHeaderElements.forEach((element, i) => {
    element.addEventListener("click", function() {
        // Remove the "active" class from the currently active tab and tab header element
        tabHeader.querySelector(".active").classList.remove("active");
        tabBody.querySelector(".active").classList.remove("active");
        
        // Add the "active" class to the clicked tab header and corresponding tab body
        element.classList.add("active");
        tabBodyElements[i].classList.add("active");
        
        // Update the tab indicator's left position
        tabIndicator.style.left = `${i * 25}%`;
    });
});
