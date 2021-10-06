//reversestring
function reversestring(str)

{
var reversedStr = str.split("").reverse().join("");
return reversedStr;
}

console.log(reversestring('Testing'))


//make the first letter caps for the given string
let input="dev";
let firstletter=input.charAt(0).toUpperCase()
let remain=input.slice(1)
let result=firstletter+remain
console.log(result);

// 5create the array and sort the array and print one by one using for each
var num=new Array(1); 
  num[0]="one";     
  num[1]="two";
  num[2]="three";
  num[3]="four"
  console.log(num);

  var newNum=num.sort();
  console.log(num.sort());

  var num=["one", "two", "three", "four"];
      for(var i=0; i<num.length; i++)
      {
          console.log(num[i]);
      }
  

  