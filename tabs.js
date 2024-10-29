
let tabs = 1; // Initial tab count

let currentTab = 1; // Current active tab

let tabContents = {}; // Object to store tab contents

// Function to go to the home screen (search screen with black background)

function goToHome() {



    document.querySelector(".search-bar").value = tabContents["tab" + currentTab] || ""; // Display content of current tab

}

// Function to add a new tab with the search screen

function addNewTab() {

    tabs++; // Increment tab count

    currentTab = tabs;

    var newTab = document.createElement("div");

    newTab.className = "tab";

    newTab.id = "tab" + tabs;

    newTab.innerHTML = "New Tab " + tabs;

    newTab.onclick = function() {

        switchTab(this); // Switch to this tab when clicked

    };

    document.querySelector(".tab-bar").appendChild(newTab);

    tabContents[newTab.id] = ""; // Initialize empty content for this tab

}

// Function to close the current tab

function closeTab() {

    if (tabs > 1) {

        let currentTabElement = document.getElementById("tab" + currentTab);

        currentTabElement.parentNode.removeChild(currentTabElement);

        delete tabContents["tab" + currentTab]; // Remove content of the closed tab

        tabs--; // Decrement tab count

        currentTab = Math.min(currentTab, tabs); // Ensure currentTab is within bounds

        goToHome(); // Update the search bar content when tab is closed

    }

}

// Function to switch to a specific tab

function switchTab(tab) {

    let tabId = tab.id.replace("tab", "");

    currentTab = parseInt(tabId);

    goToHome(); // Update the search bar content when tab is switched

}

// Function to display content of the current tab in the search bar

function displayTabContent() {

    let currentTabId = "tab" + currentTab;

    document.querySelector(".search-bar").value = tabContents[currentTabId];

}

// Function to go to the previous tab

function goToPreviousTab() {

    if (currentTab > 1) {

        currentTab--; // Move to previous tab

        let previousTabElement = document.getElementById("tab" + currentTab);

        switchTab(previousTabElement); // Switch to the previous tab

    }

}

// Function to refresh the current tab

function refreshTab() {

    // Logic to refresh or reload content of the current tab

    // For demonstration purposes, let's clear the content of the current tab

    tabContents["tab" + currentTab] = "";

    goToHome(); // Update the search bar content after refreshing

}

// Function to go to the next tab

function goToForwardTab() {

    if (currentTab < tabs) {

        currentTab++; // Move to next tab

        let nextTabElement = document.getElementById("tab" + currentTab);

        switchTab(nextTabElement); // Switch to the next tab

    }

}

// Function to expand to full screen

function expandFullScreen() {

    let element = document.documentElement;

    if (element.requestFullscreen) {

        element.requestFullscreen();

    } else if (element.mozRequestFullScreen) { /* Firefox */

        element.mozRequestFullScreen();

    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */

        element.webkitRequestFullscreen();

    } else if (element.msRequestFullscreen) { /* IE/Edge */

        element.msRequestFullscreen();

    }

}



function searchGoogle() {

var searchInput = document.querySelector(".search-bar");

var query = searchInput.value.trim();

if (query !== "") {

var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

window.open(searchUrl, '_top');

searchInput.value = ''; // Clear the search bar

}

}

function searchKeyPress(event) {

if (event.key === "Enter") {

searchGoogle();

}

}

