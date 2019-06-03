// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    // str.toLowerCase().split(/[\s_]/).join('-');
    // str.match(/\s_|^\w+|[A-Z]\w+/g).join('-').toLowerCase()
    // /[\s_]|^[A-Z]w+/
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/\s+|_+/).join('-')
  }
  
  console.log(spinalCase('thisIsSpinalTap'));