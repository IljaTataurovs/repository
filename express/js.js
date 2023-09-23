// JavaScript for your HTML page

// Function to handle the GET request
document.getElementById('getForm').addEventListener('submit', function (event) {
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => response.json())
        .then(data => {
            // Display the GET response in a preformatted block
            document.getElementById('getResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('GET Error:', error);
        });
});

// Function to handle the POST request
document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Display the POST response in a preformatted block
            document.getElementById('postResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('POST Error:', error);
        });
});

// Function to get user's geolocation
function getUserLocation() {
    var userLocation = document.getElementById("userLocation");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showUserPosition);
    } else {
        userLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showUserPosition(position) {
    var userLocation = document.getElementById("userLocation");
    userLocation.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

// Function to handle drag-and-drop
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
