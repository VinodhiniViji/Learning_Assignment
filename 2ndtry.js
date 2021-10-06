// count vowels in provided string
function vowels(str){
    const matches=str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

}
console.log(vowels("variables are used to store data values"));


