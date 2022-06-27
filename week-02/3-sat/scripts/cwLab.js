let array=["Fred","Jane","Richard Nixon","Miss America","Sid","Bid","Hid"];
const button=document.querySelector("button");
button.addEventListener("click",run);
// button.addEventListener("click",choice);
let newArray=[];
let res="";

function run() {
    document.getElementById("result").style.color="black";
    const op=document.querySelector("#options").value;
    switch(op) {
        case "sort":
            newArray=array.sort();
            res=newArray.join(", ");
            document.getElementById("result").textContent=res;
            break;
        case "shift":
            array.shift();
            res=array.join(", ");
            document.getElementById("result").textContent=res;
            break;
        case "unshift":
            const elem1=document.createElement("input");
            const newButton1=document.createElement("button");
            elem1.placeholder="Enter requisite details";
            newButton1.textContent="Submit";
            document.getElementById("parameters").appendChild(elem1);
            document.getElementById("parameters").appendChild(newButton1);
            newButton1.addEventListener("click",unshift);
            function unshift() {
                array.unshift(elem1.value);
                res=array.join(", ");
                document.getElementById("result").textContent=res;
            }
            break;
        case "push":
            const elem2=document.createElement("input");
            const newButton2=document.createElement("button");
            elem2.placeholder="Enter requisite details";
            newButton2.textContent="Submit";
            document.getElementById("parameters").appendChild(elem2);
            document.getElementById("parameters").appendChild(newButton2);
            newButton2.addEventListener("click",push);
            function push() {
                array.push(elem2.value);
                res=array.join(", ");
                document.getElementById("result").textContent=res;
            }
            break;
        case "pop":
            array.pop();
            res=array.join(", ");
            document.getElementById("result").textContent=res;
            break;
        case "splice":
            const elem3=document.createElement("input");
            const newButton3=document.createElement("button");
            elem3.placeholder="Enter requisite details";
            newButton3.textContent="Submit";
            document.getElementById("parameters").appendChild(elem3);
            document.getElementById("parameters").appendChild(newButton3);
            newButton3.addEventListener("click",splice);
            function splice() {
                const str1=elem3.value;
                const commaIndex=str1.indexOf(",");
                const index=Number(str1.substring(0,commaIndex));
                const numberOfItems=Number(str1.substring(commaIndex+1));
                array.splice(index,numberOfItems);
                res=array.join(", ");
                document.getElementById("result").textContent=res;
            }
            break;
        case "slice":
            const elem4=document.createElement("input");
            const newButton4=document.createElement("button");
            elem4.placeholder="Enter requisite details";
            newButton4.textContent="Submit";
            document.getElementById("parameters").appendChild(elem4);
            document.getElementById("parameters").appendChild(newButton4);
            newButton4.addEventListener("click",slice);
            function slice() {
                const str2=elem4.value;
                const commaIndex2=str2.indexOf(",");
                const start=Number(str2.substring(0,commaIndex2));
                const end=Number(str2.substring(commaIndex2+1));
                array=array.slice(start,end);
                res=array.join(", ")
                document.getElementById("result").textContent=res;
            }
            break;
        case "concat":
            const elem5=document.createElement("input");
            const newButton5=document.createElement("button");
            elem5.placeholder="Enter requisite details";
            newButton5.textContent="Submit";
            document.getElementById("parameters").appendChild(elem5);
            document.getElementById("parameters").appendChild(newButton5);
            newButton5.addEventListener("click",concat);
            function concat() {
                let str=elem5.value;
                let addOn=[];
                let element="";
                str=str+" ";
                for (let i=0;i<str.length;i++) {
                    if (str[i] !== "," && str[i] !== " ") {
                        element=element+str[i];
                    }
                    else {
                        addOn.push(element);
                        element="";
                    }
                }
                array=array.concat(addOn);
                res=array.join(", ")
                document.getElementById("result").textContent=res;
            }
            break;
        case "reset":
            document.getElementById("parameters").innerHTML="";
            document.getElementById("result").textContent="Array reset!";
            document.getElementById("result").style.color="green";
            array=["Fred","Jane","Richard Nixon","Miss America","Sid","Bid","Hid"];
            break;
    }
}

// function schtuff() {
//     const elem=document.createElement("input");
//     const newButton=document.createElement("button");
//     elem.placeholder="Input requisite details";
//     newButton.textContent="Submit";
//     document.getElementById("parameters").appendChild(elem);
//     document.getElementById("parameters").appendChild(newButton);
//     newButton.addEventListener("click",push);
//     function push() {
//         array.push(elem.value);
//         newArray=array;
//         document.getElementById("result").textContent=newArray;
//     }
// }