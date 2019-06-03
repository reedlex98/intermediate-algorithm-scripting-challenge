/*
Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    return /^[^aeiou]/.test(str) ? str.split(/^[^aeiou]+/)[1].concat(str.match(/^[^aeiou]+/),'ay') : str.concat('way')
  }
  
  console.log(translatePigLatin("algorithm"));