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


    // let tar = document.querySelector("field")
    let btn = document.querySelector("#button")
    // btn.onclick=(e)=>
    // {
    //     console.log(e)
    //     console.log(e.target)
    //     console.log(e.type)
    // }

    // tar.onChange =(e)=>
    // {
    //     console.log(e)
    //     console.log(e.target.value);
        
    // }

    const eventHandle = document.querySelector("#field")
    btn.onmouseenter = (e) =>
    {
        // console.log(e)
        // console.log(e.target.value)
    }

    // const take= prompt("hlo")
    // console.log(take)

    // alert("alert message")

    let arr1=[2,3,4,5,6]
    // for( let i=0;i<arr1.length;i++)
    // {
    //     console.log(arr1[i])
    // }


    // for(let e of arr1 )
    // {
    //     console.log(e)
    // }

    let obje = {
        name : "one",
        no:1,
        roll:67
    }
    for(let k in obje)
    {
        // console.log(k);
        // console.log(obje[k]);
    }

    let mapp = [1, 2, 3, 4, 5]
   let result = mapp.map((item, i) =>
   {
    // console.log(item)
    // console.log(i)
    
            // console.log(item*item);
   }
)
   
let extract = [3,12,8,25,7]
let filter = extract.filter((item)=>
{
    return item>10
})
// console.log(filter)

let sum = extract.reduce((summing, item)=>
summing+=item,0)
// console.log(sum)



let mul =(no1, no2)=>
{
    // console.log(no1*no2)
}
mul(20, 10)



//addEventListener() = it is inbulit function which is used to handle the events .
let h1 = document.querySelector("h1")
let btns= document.querySelector("#button")
h1.addEventListener("mouseenter", ()=>{console.log("mouse was enter"); h1.style.color="red"})

function fun1()
{
    h1.style.fontSize="20px"
    console.log("clicked");
    h1.style.color="purple"
} 
// btns.addEventListener("click", fun1)
// btns.removeEventListener("click", fun1)


// setTimeout() = it is a inbuilt fuction of js used to execute the code after some time interval .
// setTimeout(()=>{console.log("timeout")}, 4000)

// setTimeout(()=>{btns.removeEventListener("click", fun1)}, 5000)






//prototype : Inbuilt feature in js by using this we can create object and cerate a child object and inherit the property from parent object.
let parent ={
    name:"father",
    age:47,
    address:"garhromita"
}

let ramparent =
{
    _proto_ : parent,
    name:"ram",
    gender:"male"   
}
// console.log(ramparent)
// console.log(parent.name)
// console.log(ramparent.gender)

let sita = Object.create(parent)
// console.log(sita.name)
sita={
    gender : "female"
}
// console.log(sita.)






//class is a template which is used to create the object
// you have to crate the object of a class to access it
class human {
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    check()
    {
        console.log(`my name is ${this.name}, and my age is ${this.age}`)
    }

}
const human1 = new human("anchal", 20)
// console.log(human1)
// human1.check()

class human2 extends human{
    check()
    {
         console.log(`i am ${this.name},i am ${this.age}`)
    }

}
const person2 = new human2("michal", 17)
// console.log(person2)
// person2.check()







// callbackhell : it is nested call back function and it have the asynchrous flow of excution
function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
// getUser(1, (user) => {
//     getUserPosts(user.id, (posts) => {
//         getPostComments(posts[0].postId, (comments) => {
//             console.log("Comments: ", comments);
//         });
//     });
// });


let createObj = {
    name : "anchal",
    class :"b.tech",
    rollNo : 22014304008
}
// console.log(createObj)
createObj.address = "kdp"
// console.log(createObj)
delete createObj.name
// console.log(createObj)


// Hoisting : It is a process where we can access the variable and function above the scope.
// console.log(an) 
let an = 12
// console.log(an)


//we can access the var keyword variable as hoisting
// console.log(anc)
var anc = 12
// console.log(anc)


 
//we can acess hoisting procsess on normal function
// func(4,6)
function func (a,b)
{
    console.group(a+b)
}
// func(4,6)


// sort()
let newArray =[1,4,67,34,89,9]
newArray.sort((a,b)=>a-b)
// console.log(newArray)       asending order

newArray.sort((a,b)=>b-a)
//  console.log(newArray) 




//promise : promises is used to handle the request and response in between client and server and it also help to handle the callback hell
fetch("https://jsonplaceholder.typicode.com/posts")
.then((resolve)=>
{
    // console.log(resolve)
    resolve.json().then((final)=>{
        // console.log(final)
    })
    .catch((error)=>{
        // console.log("error")
    })
})
    .catch((error)=>{
        // console.log("error")
    })

    const findData = async()=>{
    let responseObj = await fetch ("https://api.escuelajs.co/api/v1/products")
    console.log(responseObj);
    const data = await responseObj.json()
    console.log(data);
}
findData()

let targetDiv = document.querySelector(".parentcontainer")
async function loadProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <h2>${product.title}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <img src="${product.images?.[0] || ''}" alt="${product.title}" width="150" />
      `;
      targetDiv.appendChild(card);
    });
  } catch (error) {
   targetDiv.textContent = `Error: ${error.message}`;
    console.error('Fetch error:', error);
  }
}

// Load on page start
// loadProducts();



const find = document.querySelector(".parentcontainer")
let functionFind = async()=>
{
   let object = await fetch("https://api.escuelajs.co/api/v1/products")
   let resultIs = await object.json()
   resultIs.map((output)=>{
    const productName = document.createElement("h1")
     const description = document.createElement("p")
 const price = document.createElement("p")
 const images = document.createElement("img")


productName .textContent = output.title
description.innerText= output.description
price.innerText="price : $" + output.price
images.setAttribute("img", images[0])

   find.append(productName,description, price,images)
   });
 
}
functionFind()