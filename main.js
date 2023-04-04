// const itemForm = document.querySelector('#item-form');
// const itemInput = document.querySelector('#item-input');
// const itemList = document.querySelector('#item-list');

// function addItem(e) {
//     const newItem = itemInput.value;
//     e.preventDefault();
//     //Add Validation
//     if (newItem === '') {
//         alert('Please add an Item');
//         return;
//     }
//     //Create ListItem
//     const li = createList('item');
//     li.appendChild(document.createTextNode(newItem));
    
    
//     const button = createButton("remove-item btn-link text-red");
//     const icon = createIcon("fa-solid fa-xmark");
//     button.appendChild(icon);
//     li.appendChild(button);


//     console.log(li);
// }

// function createList(classes) {
//     const li = document.createElement('li');
//     li.className = classes;
//     return li;
// }

// function createButton(classes) {
//   const button = document.createElement('button');
//     button.className = classes;
//     return button;
// }

// function createIcon(classes) {
//   const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }

// //Add Event Listeners
// itemForm.addEventListener('submit', addItem);


    //    <li class="item">
    //       Milk
    //       <button class="remove-item btn-link text-red">
    //         <i class="fa-solid fa-xmark"></i>
    //       </button>
    //     </li>


const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');



itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = itemInput.value;

    if (newItem === '') {
        alert('Please add an Item');
        return;
    }
    const li = createLi('item');
    const button = createButton("remove-item btn-link text-red");
    const icon = createIcon("fa-solid fa-xmark");

    li.appendChild(document.createTextNode(newItem));
    button.appendChild(icon);
    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = '';
});

function createLi(classes) {
    const li = document.createElement('li');
    li.className = classes;
    return li;
}
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}