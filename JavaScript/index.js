let str = "hello"
// console.log(str);
// console.log(typeof str);

let n = 4
// console.log(n);
// console.log(typeof n);

let b = true
// console.log(b);
// console.log(typeof b);

let u;
// console.log(u);
// console.log(typeof u);

let nu = null
// console.log(nu);
// console.log(typeof nu);




//Check the no is even or odd
let a = 40
// if(a%2==0)
// {
//     console.log(a, "the no is even");
// }
// else{
//     console.log(a, "the no is odd");
// }



//using comparision operator to check wheather the no is even or odd
let c = 34
let d = 53
// if(c>d)
// {
//     console.log(c , "is greater than", d );
// }
// else if(c==d)
// {
//     console.log(c, "is equals to ", d);
// }
// else{
//     console.log(d, "is greater than to" , c)
// }

// concatination of a string and a number

let no = 5
let s = 'hii'
// let re=no+s
// console.log(re);
// console.log(typeof re)


//printing 1-10 using for and while loops

// for (let a = 1; a <= 10; a++) {
//     console.log(a);
// }


// let num = 1
// while (num <= 10) {
//     console.log(num);
//     num++
// }



// do-while loop that print no from 5-1

let i = 5
// do{
//     console.log(i);
//     i--
// }
// while(i>0)



//print each element of an array by using forof and for loop
let arr = ["apple", "banana", "pineapple", "graphs", "strawary"]
// for(let e of arr)
// {
//     console.log(e);
// }

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

//adding element at the beggining and end of an array
let array = [1, 2, 4, 'apple', false, 5]
// array.push(3,4,5,true,"fruits")
// console.log(array)

// array.unshift(4,5,6,'bingo')
// console.log(array)

//using splice method
//  arr.splice(3,0,4,5,'solid')
//  console.log(arr);

//  arr.splice(3,2,'potato','spring',100)
//  console.log(arr);

//  arr.splice(3,2)
//  console.log(arr);


// function fun()
// {
//  console.log("normal function"); 
// }
// fun()



// function addition(a = 0, b = 0) {
//     return a + b
// }
//  console.log(addition(10, 30));



// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(45,4));




// let sum2= ()=>
// {
//     console.log("pritning the sum")
// }
// sum2();




// let sum1= function()
// {
//  console.log("priting the anonynomus function")
// }
// sum1();





//1.Create an array of colors and use a for-of loop to print each color.

let arrOfColor = ["pink", "yellow", "brown", "orange", "purple", "red", "white", "black"]
arrOfColor.forEach((color, index) => {
    //  console.log(color)
    //  console.log(index)
})

//2. Create an object with key-value pairs like {name: "Alice", age: 25} and use a for-in loop to log each key and value.
let object = {
    name: "anchal",
    rollno: 8,
    age: 20
}
for (let key in object) {
    // console.log(key + "=>")
    // console.log(object[key])
    // console.log(object)
}


// Use forEach() to iterate over an array of numbers and log the square of each number.
let number = [1, 3, 4, 5, 6, 7]
number.forEach((square) => {
    // console.log(square*square) 
})





//4. Create an array of marks and use forEach() to print "Pass" or "Fail" for each mark (pass >= 35).
let marks = [57, 23, 67, 78, 90.34, 80]
let qualify = marks.forEach((passmark) => {
    if (passmark > 35) {
        // console.log( "pass")
        return "pass"
    }
    else {
        // console.log( "fail")
        return "fail"
    }
})
// console.log(qualify)





//5. Use length, toUpperCase() and toLowerCase() on the string "JavaScript" and log the results.
let stri = "javascript"
// console.log(stri.length)
// console.log(stri.toUpperCase())
// console.log(stri.toLocaleLowerCase())



//6. Use slice() to extract "Script" from "JavaScript".
// console.log(stri.slice(4, 10))


//7. Replace "apples" with "mangoes" in the string "I like apples" using replace().
let string = "I like apples"
// console.log(string.replace("apple", "mango"))

//8. Use split() to turn the string "apple,banana,grapes" into an array.
let strin = "apple, banana, graphs"
// console.log(strin.split(","))

//9. Create a normal function called greet that logs "Hello, World!".
function greet() {
    // console.log("Hello, World!")
}
greet()

//10. Write an arrow function that returns the square of a number.
let fun = (a) => {
    return a * a
}
// console.log(fun(4));


//11. Create an anonymous function and assign it to a variable that logs "I am anonymous".
const anony = function (a) {
    return a
}
//  console.log(anony("I an am an Anomymous function"))


//12. Create a function that takes a name as an argument and returns "Hello, [name]". Use both normal and arrow function versions.
function normal(name) {
    return name
}
//  console.log(`hello, ${"anchal"}`)
// console.log("hello, " + "anchal")


let arrowname = (anme) => {
    return anme
}
// console.log(arrowname("hello " + "lisha"))





//forEach loop use for iterate each element in an array and it work as a higher oder and call back function use in forEach . We can only iterate the vlaue in forEach loop can't return.
let mark = [90, 56, 78, 33]
// mark.forEach((val)=>console.log(val))
let passMark = mark.forEach((value, i) => {
    // console.log(value)
    if (value > 60) {
        // console.log(value)
        // console.log(i)

    }
})
// console.log(passMark)




// map : arrays inbuilt method where we can iterate to all the index and create a new array and return the value also.
let filterMark = mark.map((val, i) => {
    // console.log(val)
    // console.log(i)
    // return val+12                 it can't return the >,< it takes it as true and false
    // if(val>80)
    // {
    //     return val
    // }
})
// console.log(filterMark)



//filter : filter method return the value without any undefine value msg
// let pass = mark.filter((marks)=>
// {
//     return marks>45
// })
// console.log(pass)




//reduce : it can return the final value
// let total = mark.reduce((sum, item)=> sum+=item, 0)
// console.log(total)







// DOM :(Document Object Model)  it is a programming interface which helps to handle/manupulate the Html/Xml document and it represt as tree style structre each element is represent as NodeList.
//getElementById()
let idSelector = document.getElementById('paraid')
// console.log(idSelector);



//getElementsByClassName() : return in array 
let classSelector = document.getElementsByClassName("para")
// console.log(classSelector);


//getElementsByTagName() : return in array
let tagName = document.getElementsByTagName("p")
// console.log(tagName);

//getElementsByName() : return in array
let name = document.getElementsByName('find1')
// console.log(name);


//querySelector() : it only return the 1st ocurrance of the document wheather there is a id selector or a class selector 
let querySelector = document.querySelector(".para")
// console.log(querySelector);


//querySelectorAll()
let allSelector = document.querySelectorAll('#paraid')
// console.log(allSelector);





// getAttribute :
let imgdetails = document.getElementById("images")
// let getvalue = imgdetails.getAttribute("hright")
// console.log(getvalue);


//setAttribute
//  imgdetails.setAttribute("height", "200px")
// imgdetails.setAttribute("class", "img img1")
// console.log(imgdetails);



//Targeting a element and change it's properties :
const paragraph = document.querySelector("#paraid")
// console.log(paragraph);

paragraph.style.color="pink"
paragraph.style.fontSize="40px"
paragraph.style.backgroundColor="black"
paragraph.innerText="I had already change the text"


//Creating a new Element :
const newElement = document.createElement("h1")
// console.log(newElement);
newElement.innerText="I am creating a new Element"

//Storing the new newElement :
let store = document.querySelector(".box")
//append insert the element next to the existing data
// store.append(newElement);

//prepend: it store before the existing data
// store.prepend(newElement);

//after : it will store at bottom part
// store.after(newElement);

//before : it will store the newElement at the top
store.before(newElement);




// const bg = document.querySelector("#box1")
// const btn = document.querySelector("#btn")
// btn.onclick = ()=>
//     {
//         bg.style.backgroundColor=bg.style.backgroundColor === "black" ? "white" : "black" 
        
//     }


    let tar = document.querySelector("field")
    let btn = document.querySelector("#button")
    btn.onclick=(e)=>
    {
        console.log(e)
        console.log(e.target)
        console.log(e.type)
    }

    tar.onChange =(e)=>
    {
        console.log(e)
        console.log(e.target.value);
        
    }