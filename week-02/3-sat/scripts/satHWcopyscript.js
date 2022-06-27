let bands = ["The Beatles","Elvis Presley","Michael Jackson","Elton John","Madonna","Led Zeppelin","Rihanna","Pink Floyd","Eminem","Mariah Carey","Taylor Swift","Queen","Whitney Houston","Eagles","Celine Dion","AC/DC","The Rolling Stones","Drake","Garth Brooks","Kanye West","Justin Bieber","Ed Sheeran","Billy Joel","U2","Aerosmith","Barbra Streisand","Phil Collins","ABBA","Katy Perry","Chris Brown","Bruce Springsteen","Bruno Mars","Jay-Z","Metallica","Lady Gaga","Lil Wayne","Maroon 5","Adele","Beyoncé","Fleetwood Mac","Rod Stewart","Bee Gees","Nicki Minaj","Coldplay","Red Hot Chili Peppers","Linkin Park","Britney Spears","Bon Jovi","Pink","B'z","George Strait","Shania Twain","Guns N' Roses","Backstreet Boys","Eric Clapton","Neil Diamond","Prince","Paul McCartney","Kenny Rogers","Santana","Simon & Garfunkel","Janet Jackson","Julio Iglesias","Dire Straits","The Doors","Chicago","Bob Dylan","Cher","Def Leppard","Genesis","David Bowie","Stevie Wonder","James Taylor","Tina Turner","Olivia Newton-John","Linda Ronstadt","The Beach Boys","Donna Summer","Alicia Keys","The Carpenters","Earth, Wind & Fire","Lionel Richie","Johnny Cash","Justin Timberlake","Ariana Grande","R.E.M.","Post Malone","Flo Rida","Tim McGraw","Van Halen","Journey","Ayumi Hamasaki","George Michael","Foreigner","Meat Loaf","Tom Petty","Johnny Hallyday","The Weeknd","Imagine Dragons","Luke Bryan","Christina Aguilera","Shakira","Tupac Shakur","R. Kelly","Bob Seger","Nirvana","Kenny G","Enya","Bryan Adams","Bob Marley","The Police","Barry Manilow","Kiss","Aretha Franklin"];
let preferredBands = [];
const showAllBandsButton = document.querySelector("#all");
showAllBandsButton.addEventListener("click",showAllBands);
const showLikedBandsButton = document.querySelector("#liked");
showLikedBandsButton.addEventListener("click",showLikedBands);

let i=0;
for (band of bands) {
    const li = document.createElement("li");
    li.textContent = band;
    document.querySelector("#all-bands").appendChild(li);

    const preferenceButton = document.createElement("button");
    preferenceButton.textContent = "Like";
    li.appendChild(preferenceButton);

    preferenceButton.classList.add("likeOrUnlike");

    preferredBands[i] = false;
    i++;
}

const allLikeButtons = document.querySelectorAll(".likeOrUnlike");
const likedList = document.querySelector("#liked-bands");

for (const button of allLikeButtons) {
    button.addEventListener("click",function(){
        let item = button.parentElement.textContent;
        let bandName="";
        if (button.textContent === "Like") {
            bandName = item.slice(0,item.length-4);
            button.textContent = "Unlike";

            let newLikedBand = document.createElement("li");
            newLikedBand.textContent = bandName;
            likedList.appendChild(newLikedBand);

            let  bandIndex = bands.indexOf(bandName);

            preferredBands[bandIndex] = true;
        }
        else {
            bandName = item.slice(0,item.length-6);
            button.textContent = "Like";
            const allLikedBands = document.querySelectorAll("#liked-bands li");
            for (likedBand of allLikedBands) {
                if (likedBand.textContent.search(bandName) !== -1) {
                    likedBand.remove();
                }
            }
            bandIndex = bands.indexOf(likedBand.textContent);
            preferredBands[bandIndex] = false;
        }
    })
}

function showAllBands() {
    const showAllBandsButton = document.querySelector("#all");
    if (showAllBandsButton.textContent === "Show all bands!") {
        showAllBandsButton.textContent = "Hide all bands!";
        showLikedBandsButton.textContent = "Show 'My Liked' bands only!";
        document.querySelector("#liked-bands").style.display = "none";
        document.querySelector("#all-bands").style.display = "block";
    }
    else {
        showAllBandsButton.textContent = "Show all bands!";
        document.querySelector("#all-bands").style.display = "none";
    }
}

function showLikedBands() {
    const showLikedBandsButton = document.querySelector("#liked");
    if (showLikedBandsButton.textContent === "Show 'My Liked' bands only!") {
        showLikedBandsButton.textContent = "Hide 'My Liked' bands!";
        showAllBandsButton.textContent = "Show all bands!";
        document.querySelector("#all-bands").style.display = "none";
        document.querySelector("#liked-bands").style.display = "block";
    }
    else {
        showLikedBandsButton.textContent = "Show 'My Liked' bands only!";
        showAllBandsButton.textContent = "Show all bands!";
        document.querySelector("#liked-bands").style.display = "none";
    }
    console.log(preferredBands);
}