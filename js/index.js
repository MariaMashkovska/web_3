import {
    addItemToPage,
    clearInputs,
    renderItemsList,
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
const calculateSizeButton = document.getElementById("calc_items");

let restaurants = [];
let foundRestaurants = [];

itemsSortDESC.addEventListener("click", (event) => {
    event.preventDefault();

    foundRestaurants.sort((a, b) => b.size - a.size);

    renderItemsList(foundRestaurants);
});

itemsSortASC.addEventListener("click", (event) => {
    event.preventDefault();

    foundRestaurants.sort((a, b) => a.size - b.size);

    renderItemsList(foundRestaurants);
});



let cnt = 0;

const addItem = ({ title, size }) => {
    const generatedId = ++ cnt;

    const newItem = {
        id: generatedId,
        title,
        size,
    };

    restaurants.push(newItem);
    foundRestaurants.push(newItem);

    addItemToPage(newItem);

    function getItemId(id) {
        return `item-${id}`;
    }

    let itemToEditId;

    const editButtons = document.querySelectorAll('.edit__button');
    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const itemID = button.parentElement.getAttribute('id');
            itemToEditId = itemID;
            const currentItem = restaurants.find(item => getItemId(item.id) === itemID);

            document.getElementById('editTitle').value = currentItem.title;
            document.getElementById('editSize').value = currentItem.size;

            document.getElementById('editModal').style.display = 'block';
            document.querySelector('.modal-content').style.display = 'block';
        });
    });


    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('editModal').style.display = 'none';
    });


    document.getElementById('save-changes').addEventListener('click', () => {
        console.log("Save Changes button clicked"); 
        const editedTitle = document.getElementById('editTitle').value;
        const editedSize = document.getElementById('editSize').value;
        console.log("Edited Title:", editedTitle); 
        console.log("Edited Size:", editedSize);
    
        const itemID = itemToEditId;
        console.log("Item ID:", itemID); 
    
        const itemIndex = restaurants.findIndex(item => getItemId(item.id) == itemID);
        console.log("Item Index:", itemIndex); 
    
        if (itemIndex !== -1) {
            restaurants[itemIndex].title = editedTitle;
            restaurants[itemIndex].size = editedSize;
    
            updateItemOnPage(itemID, editedTitle, editedSize);
            console.log("Item updated"); 
    
            document.getElementById('editModal').style.display = 'none';
        }
    });

    function updateItemOnPage(itemID, editedTitle, editedSize) {
        const itemElement = document.getElementById(itemID);
    
        if (itemElement) {

            itemElement.querySelector('.card-title').textContent = editedTitle;
            itemElement.querySelector('.card-paragraph').textContent = editedSize;

        }
    }
    
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

    if (findInput.value.trim() === "") {
        errorFind.textContent = "Please enter a search term";
    } else {
        const searchTerm = findInput.value.toLowerCase();

        foundRestaurants = restaurants
            .filter((restaurant) =>
                restaurant.title.toLowerCase().includes(searchTerm)
            );

        foundRestaurants.sort((a, b) =>
            a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
        );

        itemsCounter.innerHTML = `${foundRestaurants.length}`;

        errorFind.textContent = "";

        renderItemsList(foundRestaurants);
    }
});

cancelFindButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderItemsList(restaurants);

    itemsCounter.innerHTML = `${restaurants.length}`;
    findInput.value = "";
});

calculateSizeButton.addEventListener("click", (event) => {
    event.preventDefault();

    let totalSize = restaurants.reduce((total, restaurant) => total + parseFloat(restaurant.size), 0);

    document.getElementById('totalSize').textContent = `Total Size: ${totalSize}`;
});

renderItemsList(restaurants);
