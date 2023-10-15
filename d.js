document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("planForm");
    const recommendationDiv = document.getElementById("recommendation");
    const planRecommendation = document.getElementById("planRecommendation");
    const planDetails = document.getElementById("planDetails");
    const planImage = document.getElementById("planImage");

    // Slide-in effect for the form
    document.querySelector(".left-section button").addEventListener("click", function() {
        const formSection = document.querySelector(".right-section");
        
        if (formSection.style.transform === "translateX(0px)" || formSection.style.transform === "") {
            formSection.style.transform = "translateX(100%)";
        } else {
            formSection.style.transform = "translateX(0px)";
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect and process the form data
        collectFormData();
    });
});

function collectFormData() {
    const ageInput = document.querySelector('input[name="age"]').value;
    const occupationInput = document.querySelector('input[name="occupation"]').value;
    const locationInput = document.querySelector('input[name="location"]').value;
    const travelsInput = document.querySelector('input[name="travels"]').value;
    const genderInput = document.querySelector('input[name="gender"]').value;

    // Create a query string from the form data
    const queryParams = new URLSearchParams();
    queryParams.set("age", ageInput);
    queryParams.set("occupation", occupationInput);
    queryParams.set("location", locationInput);
    queryParams.set("travels", travelsInput);
    queryParams.set("gender", genderInput);

    // Construct the URL with the query string
    const apiUrl = "http://127.0.0.1:5500/hack.html?" + queryParams.toString();

    // Perform a GET request to send the data to the server
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Request failed.");
            }
        })
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
}

function fetchDataAndDisplay() {
    const ageInput = document.getElementById('age').value;
    const occupationInput = document.getElementById('occupation').value;
    const locationInput = document.getElementById('location').value;
    const travelsInput = document.getElementById('travels').value;
    const genderInput = document.getElementById('gender').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "Age: " + ageInput + "<br>Occupation: " + occupationInput + "<br>Location: " + locationInput + "<br>Travels: " + travelsInput + "<br>Gender: " + genderInput;
}
