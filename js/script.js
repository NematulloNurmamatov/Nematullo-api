// script.js

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    const items = ['Another item', 'Something else' , 'nema'];

    const filteredItems = items.filter(function(item) {
        return item.toLowerCase().includes(searchText);
    });

    displayResults(filteredItems);
});

function displayResults(items) {
    resultsList.innerHTML = '';

    items.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });
}
