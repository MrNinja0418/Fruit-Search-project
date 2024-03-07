const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  const searchTerm = str.toLowerCase(); // making it case insensitive to compare
  const results = fruit.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm)
  ); // iterating through fruits based on whether the searchTerm appears in the fruit name
  return results;
}

function showSuggestions(results) {
  const suggestionList = document.querySelector(".suggestions ul"); // selecting the suggestions div
  suggestionList.innerHTML = ""; // clearing the input
  results.forEach((result) => {
    // creating a list item for each result
    const listItem = document.createElement("li");
    listItem.textContent = result; //making the text content equal to the result
    suggestionList.appendChild(listItem); // appending li to the div
  });
  suggestionList.style.display = results.length ? "block" : "none";
}

input.addEventListener("input", function () {
  const inputValue = input.value.trim(); // Get input value and remove leading/trailing whitespace
  const searchResults = inputValue ? search(inputValue) : []; // Check if input value is not empty
  showSuggestions(searchResults);
});

function highlightSuggestion(e) {
  const suggestions = document.querySelectorAll(".suggestions ul li");
  suggestions.forEach((suggestion) => {
    suggestion.classList.remove("highlighted"); // making sure its not applied to all suggestions
  });
  e.target.classList.add("highlighted"); // applying highlighted to below the cursor
}

suggestions.addEventListener("mouseover", highlightSuggestion); // attacking it to mouseover event listener

function useSuggestion(e) {
  const suggestionText = e.target.textContent; // getting the text of the suggestion
  input.value = suggestionText; // making the input value the clicked suggestion
  const suggestionList = document.querySelector(".suggestions ul");
  suggestionList.style.display = "none"; // hiding the suggestions
}

suggestions.addEventListener("click", useSuggestion); //attaching to a click event listener
