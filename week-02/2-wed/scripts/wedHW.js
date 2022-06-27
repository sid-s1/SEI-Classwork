function translator(){
    // emptying innnerHTML is not required because .textContent overrides everytime
    // document.getElementById("result").innerHTML="";
    const elem=document.getElementById("result");
    const userInput=document.getElementById("input").value;
    if (isNaN(parseInt(userInput))) {
        const output=translateToPigLatin(userInput);
        elem.textContent=output;
    }
    else {
        elem.textContent="Oi! Enter a proper sentence!"
    }
}



function translateToPigLatin(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const words = text.toLowerCase().split(' ')
    const result = []
    for (const word of words) {
        if (vowels.includes(word[0])) {
            result.push(word + "way")
        } else {
            const firstMatch = word.match(/[aeiou]/g) || 0;
            const vowelIndex = word.indexOf(firstMatch[0]);
            const newWord = word.substring(vowelIndex) + word.substring(0, vowelIndex) + "ay";
            result.push(newWord)
        }
    }
    return result.join(' ')
}