function updateURL() {
    // Get the values from the input fields
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;

    // Initialize the base URL
    let url = "https://localhost:8080/";

    // Add query parameters if they exist
    if (name) {
        url += `?name=${(name)}`;
    }
    if (year) {
        url += (name ? "&" : "?") + `year=${(year)}`;
    }

    // Update the h3 element with the new URL
    document.getElementById("url").textContent = url;
}