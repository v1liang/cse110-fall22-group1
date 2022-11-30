<<<<<<< HEAD
const { ModuleMocker } = require("jest-mock");
=======
>>>>>>> backend

window.addEventListener('DOMContentLoaded', init);

const items = document.getElementsByClassName("list-item");
const deleteButtons = document.getElementsByClassName("delete");
/**
 * Populate the document with items.
 */

// Global variables (items) cannot be used in init() function
function init() {
    // *** ADD ITEM BUTTON ***
<<<<<<< HEAD
    const addButton = document.getElementsByClassName('item-add-btn')[0];
    addButton.addEventListener('click', function() {
        addItem("", false, "");
        addDeleteEventListener(); 
    });
    let items = JSON.parse(localStorage.getItem("storage"));
    console.log(items[0]);
=======



    // const addButton = document.getElementsByClassName('item-add-btn')[0];
    // addButton.addEventListener('click', function() {
    //     addItem("", false, "");
    //     addDeleteEventListener(); 
    // });


    /// add listeners to existing categories' add item buttons

    const addButtons =  document.getElementsByClassName('item-add-btn');

    for (let i = 0; i < addButtons.length; i++){

        addButtons[i].addEventListener('click', function() {
            addItem("", false, addButtons[i].parentNode.getElementsByClassName("list-title")[0].innerText);
            addDeleteEventListener(); 

        });

        

    }






    // load in items from local storage
    let items = JSON.parse(localStorage.getItem("storage"));
>>>>>>> backend
    for (let i = 0; i < items.length; i++) {
        addItem(items[i][1], items[i][0], "");
    }
    // Add delete functionality to existing items on load
    window.addEventListener('load', addDeleteEventListnerOnLoad());
<<<<<<< HEAD
=======


      const addCategoryButton = document.getElementsByClassName("modal-cat")[0].getElementsByClassName("modal-content")[0].getElementsByClassName("addCategoryForm")[0].getElementsByClassName("category-add-btn")[0];
      const addCategoryName = document.getElementsByClassName("modal-cat")[0].getElementsByClassName("modal-content")[0].getElementsByClassName("addCategoryForm")[0].getElementsByClassName("category-name")[0];

    

      addCategoryButton.addEventListener('click', function() {
        addCategory(addCategoryName.value);

      });
    
>>>>>>> backend
}

/**
 * Add items to the document
 * @param {string} name - The name of the item.
 * @param {boolean} checked - The status of the item.
 * @param {string} category - The category of the item.
 */
<<<<<<< HEAD
const addItem = (name, checked, category) => {
    // console.log(items);
    const listDOM = document.getElementsByClassName('list')[0];
=======
function addItem(name, checked, category) {

    const listDOM = document.getElementsByClassName('list')[0];
    const categories = listDOM.getElementsByClassName("category-wrapper");
>>>>>>> backend
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.innerHTML = `
    <label>
      <input type="checkbox">
      <span class="bubble" ></span>
    </label>
    <div class="list-content">
        <input type="text" value ="" >
    </div>
    <div class = "actions">
        <button class = "edit">Edit</button>
        <button class = "delete">Delete</button>
    </div>
  `
    newItem.getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value = name;
    newItem.getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked = checked;
    // console.log(newItem.getElementsByClassName("list-content"));
<<<<<<< HEAD
    listDOM.appendChild(newItem);
=======
    // listDOM.appendChild(newItem);

    // console.log(listDOM);

    for (let i = 0; i < categories.length; i++){
        const categoryName = categories[i].getElementsByClassName("category-header")[0].getElementsByClassName("category-header-container")[0].getElementsByClassName("list-title")[0];

        if (categoryName.innerText === category){
            // console.log("x");

            // console.log(categories[i]);
             categories[i].getElementsByClassName("items-wrapper")[0].appendChild(newItem);
        }
    }
    



>>>>>>> backend
}

/**
 * Add delete functionality to each item.
 */
function addDeleteEventListnerOnLoad() {
  // let deleteButtons = document.getElementsByClassName("delete");
  for(let i = 0; i < deleteButtons.length; i++){
<<<<<<< HEAD
      console.log("inside the array");
=======
>>>>>>> backend
      deleteButtons[i].addEventListener("click", (e) => {
          const index = Array.from(deleteButtons).indexOf(e.target);
          removeItem(index);
      })
  }
}


function addDeleteEventListener() {
    const listDOM = document.getElementsByClassName("list-item");
    // console.log(`just added a new item, wanted to make sure the length of list is correct: ${items.length}`);
    let endIndex = deleteButtons.length-1;
    deleteButtons[endIndex].addEventListener("click", (e) => {
        const index = Array.from(deleteButtons).indexOf(e.target);
        removeItem(index);
  });
}

const removeItem = (index) => {
    items[index].remove();
}

/**
 * Update the status of all items to "uncheck".
 */
function uncheckAll() {
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach(item => {
        item.checked = false
    });
}

/**
 * Manually save all items to localStorage.
 */
function save() {
    // let items = document.getElementsByClassName("list-item");
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
}

/**
 * Save all items to localStorage before closing homepage.
 */
<<<<<<< HEAD
=======



>>>>>>> backend
window.onbeforeunload = confirmExit;
function confirmExit() {
    // let items = document.getElementsByClassName("list-item");
    console.log(items);
    let store = [];
    for (let i = 0; i < items.length; i++) {
        let a = [items[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked, items[i].getElementsByClassName("list-content")[0].getElementsByTagName("input")[0].value];
        console.log(a);
        store.push(a);
    }
    localStorage.setItem("storage", JSON.stringify(store));
    return false;
}

<<<<<<< HEAD
// module.exports = items;
// module.exports = deleteButtons;
// module.exports = addItem();
module.exports = { addItem, removeItem, uncheckAll, items};
=======




window.addEventListener('load', function () {


  let create_cat = document.querySelector('.create-cat-btn');
create_cat.addEventListener("click", function() {
    document.querySelector('.modal-cat').style.display = "flex";

    document.querySelector('.cancel-btn').addEventListener("click", function() {
        document.querySelector('.modal-cat').style.display = "none";
    });

    document.querySelector('.category-add-btn').addEventListener("click", function() {
        document.querySelector('.modal-cat').style.display = "none";
    });
})
});




function addCategory(name){


    const listDOM = document.getElementsByClassName('list')[0];
    const newCategory = document.createElement('div');
    newCategory.className = "category-wrapper"; 

    newCategory.innerHTML = `                           
    <legend class="category-header">
    <div class="category-header-container">
      <button class="cat-del-btn">-</button>
      <button id="collapse" class="collapse-add-btn">^</button>
      <button class="item-add-btn">+</button>
      <h2 class="list-title">Dairy</h2>
    </div>
  </legend>
  <span class="items-wrapper">
  </span>`

    newCategory.getElementsByClassName("category-header-container")[0].getElementsByClassName("list-title")[0].textContent = name; 



    listDOM.appendChild(newCategory); 


    const addButtons =  document.getElementsByClassName('item-add-btn');

    
    addButtons[addButtons.length-1].addEventListener('click', function() {
        addItem("", false, addButtons[addButtons.length-1].parentNode.getElementsByClassName("list-title")[0].innerText);
        addDeleteEventListener(); 

    });

    let coll = document.getElementsByClassName("collapse-add-btn");
    const cate = document.getElementsByClassName('items-wrapper');
    const leg = document.getElementsByClassName('category-header');


    console.log(cate);
    var i;
    for (i = 0; i < coll.length; i = i + 1) {
      let curr = i;
      coll[i].addEventListener("click", function() {
        console.log(cate, curr);
        if ((cate[curr]).style.display != "none") {
          (cate[curr]).style.display = 'none';
          coll[curr].textContent = ">";
          leg[curr].style.paddingBottom = '0px';
        } else {
          (cate[curr]).style.display = 'block';
          coll[curr].textContent = "^";
          leg[curr].style.paddingBottom = '8px';
        }
      });
    }






}
>>>>>>> backend