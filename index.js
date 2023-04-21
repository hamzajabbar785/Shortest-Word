// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


const findShort = (str) => {
    const arr = str.split(" ")
    let length = arr.map((word) => word.length)
    return Math.min(...length)
}

findShort("you are my faacour")