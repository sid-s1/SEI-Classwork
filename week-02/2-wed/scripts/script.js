const container=document.getElementById("container");
function addCute(){
    const image=document.createElement("img");
    image.src="https://dogfoodsmart.com/wp-content/uploads/2017/04/How_Much_To_Feed_A_Lab_Puppy.jpg";
    container.appendChild(image);
}
function addAggro(){
    const image=document.createElement("img");
    image.src="https://i.ytimg.com/vi/UtTxmMQhpBM/sddefault.jpg";
    container.appendChild(image);
}
function checkBreed(){
    const input=document.getElementById("breed");
    const choice=input.value;
    if (choice === "cute") {
        addCute();
    }
    else if (choice === "maybe bites owner") {
        addAggro();
    }
    else {
        alert ("Your input is invalid! INPUT VALID STUFF AND SEE CUTE IMAGES NOW! \"labrador\" or \"rottweiler\"")
    }
}