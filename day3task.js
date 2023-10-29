//compare two json value and same properties
let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
let val1=JSON.stringify(obj1);
let val2=JSON.stringify(obj2);
console.log(val1===val2);

//2.all country flags
let request=new XMLHttpRequest;
request.open("get","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    let result=JSON.parse(data);
    console.log(result);
    for(let i=0;i<result.length;i++){
    console.log(result[i].flags.png);
    }
   
}


//3.console all contry name,region,subregion,populattion
let request1=new XMLHttpRequest;
request1.open("get","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data=request.response;
    let result1=JSON.parse(data);
    for(let i=0;i<result1.length;i++){
    console.log("name:",result1[i].name.common);
    console.log("population:",result1[i].population);
    console.log("subregion:",result1[i].subregion);
    console.log("region:",result1[i].region);
    }
   
}
//4.question:
//task1:
//Declare four variables without assigning values and print them in console
var a;
let b;
var c;
let d;
console.log(a);//undefine
console.log(b);//undefine
console.log(c);//undefine
console.log(d);//undefine
//or
var e,f,g,h;
console.log(e,f,g,h);//undefine
// 2.How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");//call variable name no need ""
var myvar=1;
console.log(myvar);
//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname;
var lastname;
var marital;
var age;
//4. Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname,lastname,marital,age;
//5. Declare variables and assign string, boolean, undefined and null data types
var firstname="archana";//string
var lastname;//undefine
var age=null;//null
var x=1;
var y=2;
//6.convert the string to int
var convert=parseInt("20");
console.log(convert);
//7.ture or flase condition
var s=1;
var t=1;
var u=2;
console.log(s===t);
console.log(s===u);

//task2:
// 1.Square of a number
console.log("Square of a number:",Math.pow(2,2));
//2.Swapping 2 numbers
var e=10;
var f=20;
var temp=e;
console.log("before swapping",e);
console.log("before swapping",f);
e=f;
f=temp
console.log("after swapping",e);
console.log("after swapping",f);
//3.Addition of 3 numbers
var e=10;
var f=20;
var g=30;
var h=e+f+g;
console.log("Addition of 3 numbers",h);
//4.Celsius to Fahrenheit conversion
var Celsius=100;
Fahrenheit = (Celsius * 9/5) + 32;
console.log("Celsius to Fahrenheit conversion",Fahrenheit);
//5.Meter to miles
var meter=1;
var km=1000*meter;
const mi = km * 0.621371;
console.log("Meter to miles",mi);
//6.Pounds to kg
var pound=2;
var kg=pound*0.45359237;
console.log("Pounds to kg",kg);
//7.Calculate Batting Average
//8.Calculate five test scores and print their average
var tamil=80;
var english=70;
var maths=90;
var scince=80;
var socialscince=70;
var avg=(tamil+english+maths+scince+socialscince)/5;
console.log("average",avg);
//9.Power of any number x ^ y.
console.log("power",Math.pow(2,8));
//10.Calculate Simple Interest
var principal=100000;
var RateOfInterest=10;
var TimePeroid=2;//year
var Interest=(principal*RateOfInterest*TimePeroid)/100;
console.log("Simple Interest",Interest);
//11.Calculate area of an equilateral triangle
var a=3;
var area = ( 1.73 * a*a) / 4 ;  
console.log("area of an equilateral triangle",area);
//12.Area Of Isosceles Triangle
var Base=5;
var height=3.5;
var Area=(Base*height)/2;
console.log("Area Of Isosceles Triangle",Area);
//13.Volume Of Sphere
var radius=3;
var VolumeOfSphere=(4 / 3 * Math.PI * radius ** 3);
console.log("Volume Of Sphere",VolumeOfSphere);
//14.Volume Of Prism
var Area=5;
var height=10;
var prism=(Area*height);
console.log("Volume Of Prism",prism);
//15.Find area of a triangle.
var base=12;
var height=8;
var area=(base*height)/2;
console.log("area of a triangle:",area);
//16.Give the Actual cost and Sold cost, Calculate Discount Of 

var MarkedPrice =200;
var SellingPrice=190;
var Discount = (MarkedPrice-SellingPrice);
console.log("Discount",Discount);
//17.Given their radius of a circle and find its diameter, circumference and area.
var radius=6;
var circumference=2*Math.PI*radius;
var area=Math.PI*Math.pow(radius,2);
var diameter=2*radius;
console.log("circumference:",circumference);
console.log("area",area);
console.log("diameter",diameter);
//18.Given two numbers and perform all arithmetic operations.
function arithmetic(a,b){
    console.log("add",a+b);
    console.log("sub",a-b);
    console.log("mul",a*b);
    console.log("div",a/b);
    console.log("modu",a%b);

}
arithmetic(10,5)
//19.Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
//20.Calculate electricity bill?

function electricity(unit){
   
    if(unit=100){
        return unit*10;
    }
    else if(unit<=200){
        return (unit*10)+(unit-100)*15;
    }
    else if(unit<=300){
        return (unit*10)+(unit*15)+(unit-200)*20;
    }
    return 0;
   
} 
var unit=250
console.log(electricity(unit));
//21.Program To Calculate CGPA
function scoretype(score,unit1) {
    if(score >= 70){ return 5*unit1;}
    if(score >= 60){ return 4*unit1;}
    if(score >= 50){ return 3*unit1;}
    if(score >= 40){ return 2*unit1;}
    if(score >= 30){ return 1*unit1;}
    else{ return 0}
    }
console.log(scoretype(66.5,5))
//Task 3: Simple Programs todo for Condition , Looping and Arrays
//1.Write a loop that makes seven calls to console.log to output the following triangle:
for (var triangle = "#"; triangle.length <= 7; triangle += "#") 
  {console.log(triangle);}
  //2.write a code to count the elements in the array . Don’t use length property
  var myarray=[11,22,33,44,55];
   let total=0;
   for(i in myarray){
    total++;
   }
   console.log(total);

   let foods=[
    "idly","ediyappam",
   "puri","shavarma",
   "pongal","muttonbiriyani",
   "lemonrice","chickenbiriyani",
   "uppuma","mushroombiriyani",
   "biriyani","dhosha",
   "vegbiriyani","termicrice",
   "raggiboll","tomotorice",
   "sapathi", "samparsadham",
   "parotta","curdrice",
    ]
    console.log(foods[15]);
//Find the person is ur friend or not.
    // var frndarr = [
    //     "Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
            
    //     function dataHandling(frnd, name){
    //         for(i=0;i<frndarr-length;i++){
    //          console.log( frndarr.contains(name[i]));
    //         }
    //     }
        
    // let found= dataHandling(frndarr,"Jeff");
    // console.log(found);


      
//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.""
        var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
            
            var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET" ];
            const friendall=friends1.concat(friends2);
            function dataHandling(input){
            
            console.log(friendall.sort());
            }
            
            dataHandling(friendall);


// Get the first item, the middle item and the last item of the array
var array=["archana",25,"vengatesh",30];
console.log(array[0]);
console.log(array[array.length-1]);
// 2. Add your name to the end of the friends array, and add another name to beginning.
var friendarray=["archana","vengatesh"];
friendarray.push("harikrishna");
friendarray.unshift("kavin kalki");
console.log(friendarray);
// 3. Add Mr or Ms to the names in the friends array.

// 4. Concat all the names the friends array and return as comma “,” seperated string.
var concat=friendarray.join();
console.log(concat);
// 5. Find the friends names who has letter ‘a’ and return the list.
function list(){
for(i=0;i<friendarray.length;i++){
    console.log( friendarray[i].startsWith("a"));
}
}
list();


// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
var avg=(friendarray.join('').length-1)/friendarray.length;
console.log(avg);

// 7. Find the names and return the list starting with letter M.


// 8. Find the name with max characters and return the name.

// 9. Find the name with min characters and return the name.
        






