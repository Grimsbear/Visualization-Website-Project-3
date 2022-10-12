// Shout out to a Youtube Channel named Web Dev Simplified for helping me
// get the search bar to work
const searchInput = document.getElementById("data-search-bar");

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    // console.log(value);
})

const searchButton = document.getElementById("data-search-button")

function searchSubmit(event) {
    event.preventDefault();
    filename = searchInput.value;
    // console.log(filename);
    window.location.href = `/countries/${filename}`;
}

// Shout out to John T who somehow made the function below work
searchButton.addEventListener("click", searchSubmit, false);
searchInput.addEventListener("change", searchSubmit, false);
// Shout out to it also breaking only when I displayed to the group
// Still works though... sometimes
