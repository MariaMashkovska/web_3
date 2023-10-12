const titleInput = document.getElementById("title_input");
const sizeInput = document.getElementById("size_input");
const itemsContainer = document.getElementById("items_container");

// local functions 
const getItemId = (id) => `item-${id}`;
const getItemEdit = (id) => `edit-${id}`;

const itemTemplate = ({ id, title, size }) => `
    <li id="${getItemId(id)}" class="item-card">
        <img
        src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/06/still-from-five-nights-at-freddy-s.jpeg"
        class="card-img"
        width="375"
        alt="card image"
        />
        <div class="card-body">
            <div>
                <h5 class="card-title">${title}</h5>
                <p class="card-paragraph">${size}</p>
            </div>
        </div>
        <button class="edit__button" style="color: black;">Edit</button>
    </li>
`

// exposed functions

export const clearInputs = () => {
    titleInput.value = "";
    sizeInput.value = "";
};

export const addItemToPage = ({ id, title, size}) => {
    console.log("Adding item with id = " + id)
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({ id, title, size })
    );

};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        size: sizeInput.value,
    };
};
