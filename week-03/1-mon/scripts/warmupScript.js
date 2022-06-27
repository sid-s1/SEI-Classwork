const heading = document.getElementById("title");
const cat = document.getElementById("catButton");
const dog = document.getElementById("dogButton");
cat.addEventListener("click",cats);
dog.addEventListener("click",dogs);

function cats(){
    heading.textContent = "I like cats!";
}
function dogs(){
    heading.textContent = "I like dogs!";
}