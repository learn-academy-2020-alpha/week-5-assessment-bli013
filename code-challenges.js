// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
// Create a function called spyMessage👀 that takes in a string as an argument
spyMessage = (secret) => {
    // using .replce method to change the letters to the following number. using regx and declaring "g" it allows it to search and replace the whole string, not just the first instance.
    // replace a = 4, e = 3, i = 1, o = 0
    // return the output
    return secret.replace(/a/g, 4).replace(/e/g, 3).replace(/i/g, 1).replace(/o/g, 0)
}
console.log(spyMessage(secretCodeWord1));
console.log(spyMessage(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
// Create a function called aTeam that takes in an array as an argument
// Use filter() method to find the words with a or A in them 
// using to uppercase within the filter method to allow it to search for A through each word, but not mutate the returning array.
aTeam = (arr) => {
    return arr.filter(el => el.toUpperCase().includes("A"))
}
console.log(aTeam(arrayOfWords));



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// Create a function called youMightWin that takes in an array of 5 index's (0-4) 
youMightWin = (arr) => {
        // if card 1,2,3 are same and 4,5 are the same
    if ((arr[0] === arr[1] && arr[1]=== arr[2]) && (arr[3] === arr[4])) {
        return true
        // if card 3,4,5 are same and 1,2 are the same
    }else if((arr[2] === arr[3] && arr[3] === arr[4]) && (arr[0] === arr[1])){
        return true
        // if card 1,3,4 are same and 2,5 are the same
    }else if((arr[0] === arr[2] && arr[2] === arr[3]) && (arr[1] === arr[4])){
        return true
        // if card 2,4,5 are same and 1,3 are the same
    }else if((arr[1] === arr[3] && arr[3] === arr[4]) && (arr[0] === arr[2])){
        return true
        // if card 1,2,4 are same and 3,5 are the same
    }else if((arr[0] === arr[3] && arr[3] === arr[5]) && (arr[2] === arr[4])){
        return true
        // if card 2,3,4 are same and 1,5 are the same
    }else if((arr[1] === arr[2] && arr[2] === arr[3]) && (arr[0] === arr[4])){
        return true
        // if card 2,3,5 are same and 1,4 are the same
    }else if((arr[1] === arr[2] && arr[2] === arr[4]) && (arr[0] === arr[3])){
        return true
        // if card 1,4,5 are same and 2,3 are the same
    }else if((arr[0] === arr[3] && arr[3] === arr[4]) && (arr[1] === arr[2])){
        return true
        // if card 1,3,5 are same and 2,4 are the same
    }else if((arr[0] === arr[2] && arr[2] === arr[4]) && (arr[1] === arr[3])){
        return true
        // if card 1,2,5 are same and 3,4 are the same
    }else if((arr[0] === arr[1] && arr[1] === arr[4]) && (arr[2] === arr[3])){
        return true
        // if none of the above, then it is does not have 3 of a kind and a pair
    }else{
        return false
    }
}
console.log(youMightWin(hand1));
console.log(youMightWin(hand2));
