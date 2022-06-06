let a = 25;
let b = 35;
let c = 45
let d = 55
let result =0;
result = a+b;

result +=a;
document.getElementById('id1').innerHTML = "add ---"+result 
result -=a;
document.getElementById('id2').innerHTML = "substruct ---"+result 

result *=a;
document.getElementById('id3').innerHTML = "multiply ---"+result 
result %=a;
document.getElementById('id4').innerHTML = "modulus ---"+result 

result /=a;
document.getElementById('id5').innerHTML = "divide ---"+result 

result =4;
d= 2;
result <<= d; // equivalent result = result << d; result = 4 << 2=
document.getElementById('id6').innerHTML="left shift   assignment operator ---"+result;


let numbers = [ 23,56,78,90,100]

document.getElementById('id6').innerHTML = 'Numbrs are'+numbers;

let text ="<ul>";
for (let index = 0; index < numbers.length; index++) {
   text += '<li>'+numbers[index]+'</li>';

    
}

const course1 = "Math";
const course2 = "Biology";
const course3 = "Chemistry";

document.getElementById('id7').innerHTML = course1+ "..." +course2+"..."+course3;

document.getElementById('id8').innerHTML = "The data type is " +typeof(course1);

var students = ["Ermiyas", "Emmanuel", "Yacob", 'Etenesh', "Brukti", 'Nehemiya'];
let text1 ='<ol>'

students.forEach(studentsFunction);
text1+='</ol>'
function studentsFunction(data) {
   text1 += '<li>'+data+'</li>';
}
document.getElementById('id9').innerHTML =text1;

const num = [2,4,6,8,10,12,14,16,18,20];
let text2 = '';
numbers.forEach(toFilterNumbersFunction);
function toFilterNumbersFunction(data){
   text2=text2+data+'<br>';
}
document.getElementById('id10').innerHTML = text2;