const input = document.getElementById("items");
const add = document.getElementById("add-item");
const container = document.getElementById("container");
add.addEventListener("click",addItem);

function addItem() {
    const result=document.getElementById("result");
    const className = document.getElementById("category").value;
    if (input.value !== "" && className !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = input.value;

        document.getElementById("list").appendChild(newItem);
        result.textContent="";

        newItem.classList.add(className);
        console.log(newItem.className);

        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        newItem.appendChild(delButton);

        delButton.onclick = function deleteItem() {
            newItem.remove();
        }

        const fruits = document.querySelectorAll(".fruit");
        const fruitDel = document.getElementById("fruitsRemove");
        fruitDel.onclick = function deleteFruits() {
            strike(fruits);
        }

        const meats = document.querySelectorAll(".meat");
        const meatDel = document.getElementById("meatsRemove");
        meatDel.onclick = function deleteFruits() {
            strike(meats);
        }

        const dairy = document.querySelectorAll(".dairy");
        const dairyDel = document.getElementById("dairyRemove");
        dairyDel.onclick = function deleteFruits() {
            strike(dairy);
        }

        const veggies = document.querySelectorAll(".veg");
        const vegDel = document.getElementById("veggiesRemove");
        vegDel.onclick = function deleteFruits() {
            strike(veggies);
        }
    }
    else {
        if (input.value === "")
        {
            result.textContent = "Please enter something! I want to buy something!";
        }
        else {
            result.textContent = "Please enter category of item!";
        }
    }
}

function strike(items) {
    for (item of items) {
        item.style.setProperty("text-decoration","line-through");
    }
}