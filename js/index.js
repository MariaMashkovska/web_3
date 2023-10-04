import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const itemsCounter = document.getElementById("items_counter");
const itemsSortASC = document.getElementById("sort_items_asc");
const itemsSortDESC = document.getElementById("sort_items_desc");
const titleInput = document.getElementById("title_input");
const sizeInput = document.getElementById("size_input");
const errorTitle = document.getElementById("errorTitle");
const errorsize = document.getElementById("errorsize");
const errorFind = document.getElementById("errorFind");


let restaurants = [];

itemsSortASC.addEventListener("click", (event) => {
    event.preventDefault();

    restaurants.sort((a, b) => a.size - b.size);

    renderItemsList(restaurants);
});

itemsSortDESC.addEventListener("click", (event) => {
    event.preventDefault();

    restaurants.sort((a, b) => b.size - a.size);

    renderItemsList(restaurants);
});

const addItem = ({ title, size }) => {
    const generatedId = Math.random().toString(36).substr(2, 9);

    const newItem = {
        id: generatedId,
        title,
        size,
    };

    restaurants.push(newItem);

    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {

    event.preventDefault();

    const title = titleInput.value;
    const sizeInputValue = sizeInput.value;

    if (title.trim() === "") {
        errorTitle.textContent = "Please enter a title";
    } else {
        errorTitle.textContent = "";

        const isNumeric = /^\d+$/.test(sizeInputValue);

        if (!isNumeric) {
            errorsize.textContent = "Please enter a valid number for size";
        } else if (sizeInputValue <= 0) {
            errorsize.textContent = "Please enter a valid number for size";
        } else {
            errorsize.textContent = "";

            clearInputs();

            addItem({
                title,
                size: sizeInputValue.replace(',', '.'),
            });
        }
    }
});

findButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(findInput.value == 0) {
        errorFind.textContent = "What you want to find?"
    } else {
        const foundrestaurants = restaurants
        .filter(d => d.title.search(findInput.value) !== -1);
    
    itemsCounter.innerHTML = `${foundrestaurants.length}`;

    errorFind.textContent = ""; 

    renderItemsList(foundrestaurants);
    }
});

cancelFindButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderItemsList(restaurants);

    itemsCounter.innerHTML = `${restaurants.length}`;
    findInput.value = "";
});

renderItemsList(restaurants);
