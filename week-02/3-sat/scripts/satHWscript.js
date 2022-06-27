let bands = ["The Beatles","Elvis Presley","Michael Jackson","Elton John","Madonna","Led Zeppelin","Rihanna","Pink Floyd","Eminem","Mariah Carey","Taylor Swift","Queen","Whitney Houston","Eagles","Celine Dion","AC/DC","The Rolling Stones","Drake","Garth Brooks","Kanye West","Justin Bieber","Ed Sheeran","Billy Joel","U2","Aerosmith","Barbra Streisand","Phil Collins","ABBA","Katy Perry","Chris Brown","Bruce Springsteen","Bruno Mars","Jay-Z","Metallica","Lady Gaga","Lil Wayne","Maroon 5","Adele","Beyoncé","Fleetwood Mac","Rod Stewart","Bee Gees","Nicki Minaj","Coldplay","Red Hot Chili Peppers","Linkin Park","Britney Spears","Bon Jovi","Pink","B'z","George Strait","Shania Twain","Guns N' Roses","Backstreet Boys","Eric Clapton","Neil Diamond","Prince","Paul McCartney","Kenny Rogers","Santana","Simon & Garfunkel","Janet Jackson","Julio Iglesias","Dire Straits","The Doors","Chicago","Bob Dylan","Cher","Def Leppard","Genesis","David Bowie","Stevie Wonder","James Taylor","Tina Turner","Olivia Newton-John","Linda Ronstadt","The Beach Boys","Donna Summer","Alicia Keys","The Carpenters","Earth, Wind & Fire","Lionel Richie","Johnny Cash","Justin Timberlake","Ariana Grande","R.E.M.","Post Malone","Flo Rida","Tim McGraw","Van Halen","Journey","Ayumi Hamasaki","George Michael","Foreigner","Meat Loaf","Tom Petty","Johnny Hallyday","The Weeknd","Imagine Dragons","Luke Bryan","Christina Aguilera","Shakira","Tupac Shakur","R. Kelly","Bob Seger","Nirvana","Kenny G","Enya","Bryan Adams","Bob Marley","The Police","Barry Manilow","Kiss","Aretha Franklin"];
let preferredBands = [];
let i = 0;

for (const band of bands) {
    preferredBands[i] = false;
    i++;

    const elem = document.createElement("li");
    elem.textContent = band;
    const list = document.querySelector("#all-bands");
    list.appendChild(elem);
}

function allBands(){
    document.getElementById("result").textContent="";
    if (document.querySelector("#all").textContent === "Show all bands!") {
        document.querySelector("#all").textContent = "Hide all bands!";
        if (document.querySelector("#liked").textContent === "Show 'My Liked' bands!"){
            document.querySelector("#liked").textContent = "Hide 'My Liked' bands!";
        }

        document.querySelector("#all-bands").style.display = "block";
        document.querySelector("#liked-bands").style.display = "none";

        const allItems = document.querySelectorAll("li");
        for (const item of allItems) {
            if (item.querySelector(".but") === null) {
                const button = document.createElement("button");
                button.textContent = "Like";
                item.appendChild(button);
                button.classList.add("but");
            }
        }

        const list = document.querySelector("#all-bands");
        const allButtons = list.querySelectorAll("button");
        for (const button of allButtons) {
            button.addEventListener("click",function(){
                if (button.textContent === "Like") {
                    button.textContent = "Unlike";
                    const item = button.parentElement;
                    const index = bands.indexOf(item.textContent.slice(0,item.textContent.length - 6));
                    preferredBands[index] = true;
                    
                    const likedBands = document.querySelector("#liked-bands");
                    const likedBand = document.createElement("li");
                    likedBand.textContent = item.textContent.slice(0,item.textContent.length - 6);
                    likedBands.appendChild(likedBand);
                    
                }
                else {
                    button.textContent = "Like";
                    const item = button.parentElement;
                    const index = bands.indexOf(item.textContent.slice(0,item.textContent.length - 6));
                    preferredBands[index] = true;

                    const unlikedBand = document.querySelector("#liked-bands li");
                    unlikedBand.remove();
                }
            })
        }
    }
    else {
        document.querySelector("#all").textContent = "Show all bands!";
        document.querySelector("#all-bands").style.display = "none";
        document.querySelector("#liked-bands").style.display = "none";
    }
}

function showLikedBands() {
    if (document.querySelector("#liked").textContent === "Show 'My Liked' bands only!") {
        document.querySelector("#liked").textContent = "Hide 'My Liked' bands!"
        document.querySelector("#all").textContent = "Show all bands!";
        document.querySelector("#all-bands").style.display = "none";
        document.querySelector("#liked-bands").style.display = "block";
    }
    else {
        document.querySelector("#liked").textContent = "Show 'My Liked' bands only!";
        document.querySelector("#all-bands").style.display = "none";
        document.querySelector("#liked-bands").style.display = "none";
    }
}