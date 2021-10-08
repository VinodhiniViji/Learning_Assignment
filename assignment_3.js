//replace
let text="workout on below string";
let newtext=text.replace("string","array");
console.log(newtext);


//replace all
let text1="workout on below string with given string";
let newtext1=text1.replace(/string/g,"array");
console.log(newtext1);

//slice
let text2="workout on below string with given string";
let newtext2=text2.slice(11,17);
console.log(newtext2);


//split
let text3="workout on below string";
let newtext3=text3.split("");
console.log(newtext3);

//trim
let text4="    workout below    ";
let newtext4=text4.trim();
console.log(newtext4);


//tolowercase
let text5="WORKOUT";
let newtext5=text5.toLowerCase();
console.log(newtext5);

//substr
let text6="workout on below string with";
let newtext6=text6.substr(11,6);
console.log(newtext6);

//charAt
let text7="characters";
let newtext7=text7.charAt(3)
console.log(newtext7);


//indexof
let str = 'declare three variables with the following names';
let index = str.indexOf('three');
console.log(index); 


