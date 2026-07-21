SYLLABUS FOR MERN STACK WEB DEVELOPMENT 
---------------------------------------
1.HTML (STURCTURING THE WEBSITE)

2.CSS (styling the web pages)
     Bootstrap(light weight framework)
     Tailwind(light weight framework)

3.Javascript(building logic  / function)     
    react js(library of js)
    next js(framework of react js)

BACKEND part:-

4.Node Js
     Express Js(framework)
     Database part:-

5.MongoDB   
     Mongoose(framework)
     API intregrtion and security:-

6.restFul API integration

7.Authentication and Authorization

Artificial Intelligence:-

8.basic LLM'S model(large language model)
9.prompt Engineering
10.chatgpt/open AI/gemini..etc.
11.AI chatbot

Deploymemnt and Devops part:-

12.hosting in vercel,render like cloud platform
13.use Docker /AWS for deployment and pipeline

capstone project:-

14.build end-to-end MERN Stack project
15.AI integration with MERN 

HTML :-
-> HTML Stands for hyper text markup language.

->it is used for sturcturing the websites.

->html is markup language beacuse html contain the skeleton stucture of the web page 
  also it builts on tags so that why we tell them HTML is a markup languauge.

-> all the HTML written through some tag lines.
-> the main element of HTML is <html> tag.

Head:-
-> in head tag we have some tag like <title>  and some meta elements.

-> <title> tag contains our website title in the title bar.

-> meta elements helps us to create responsive with screen size.

-> we also attached some external style sheet  link in the head tag.

Body:-

-> body contain all the page structure of a web page.

-> we can design and development all the things in that body part.

Heading :-

-> heading is major element in our html page.

-> there are 6 types of headers are there like h1 to h6.

-> <h1> is the bigger heading and <h6> is the smaller heading. (ctrl + / for comment out)

paragraph :-

-> paragraph play a major role to describe our data briefly.

-> it is denoted by a element <p>.

 Break :-

 -> it is used to break the line and creating a new line.

 -> it is denoted by <br>.

 -> it is a single tag.

 Horizontal Tag :-

 -> it is used for creating a horizontal line.

 -> it is denoted by <hr>.

 -> it is also a single tag.

 Image tag :-

 -> when we put a image in our website we just need a <img> tag for put our image.

 -> <img> is also a single tag.

 -> in that <img> tag we have some elements to configure our image in a right direction
    so we need some attributes.

-> attributes means it is an behaviour of an html element.

-> in<img> tag we some attributes like src(image source),alt,height,width.

Anchor Tag:-

-> it is used to attached some outside links in our web pages.

-> it contains two attributes like href(hyper refference) and targe.
    -> href (hyper reference) : reference a point or page on another web page.
    -> target : how we can open that link.
          |-> _self : it opens that link in our own website itself.
          |-> _blank : it opens the link  by creating a new tab.

-> Anchor tag is denoted by <a>.

HTML formatting :-

-> to format our text in a proper way.

-> there are 10 types of formatting are present...
   1.<b>= bold the text
   2.<i>= italic the text
   3.<em> = emphasized the text
   4.<small> = smaller the text
   5.<ins> = inserted the text
   6.<del> = delete the text
   7.<mark> = marked the text
   8.<strong> = stronger the text
   9.<sup> = superscript the text
   10.<sub> = subscript the text


HTML Table:-

-> As we darw a normal table to maintain our data so html also provide a table like structure.

-> <table> is the main tag of html table.

-> inside html table we have 

    - <tr> -> table row

    - <td> -> table data

    - <th> -> table heading

 ex:
   SL.NO.       NAME       SALARY
    1            Rakesh     23000
    2            Ridhi      54000
    3            Sai        67000
    4            Ritesh     43000   

HTML List:-

-> As our day to day life, when we store some data inside a proper format that we called our list of data.

-> HTML also provide a list to store some data inside it.

-> in HTML there are 2 types list are there...

1. Unordered list:

-> when we store that data in a un-organized from that called our unordered list.

-> it is denoted by <ul>

-> inside <ul> tag we have <li> tag.(<li> -> list item)

2. Ordered list:

-> when we store that data in a organized from that called our ordered list.
-> it is denoted by <ol>
-> inside <ul> tag we have <li> tag.(<li> -> list item)

Block level element and inline element in HTML:-

Block level element ->

-> a Block level element always starts on a new line, and the browser automatically add some space 
before and after the element.
-> a Block level element always takes up the full width available.
ex. <div>,<p>,<main>,<form>,<section> etc....

Inline element ->

-> an inline element does not starts on a new line.
-> an inline element only takes up as much with as neccessary.
ex:-
   <span>,<label>,<button>,<sup>,<br>,etc....

Form in HTML:-

-> an HTML form is used to collect some user input from the data storage purpose.
-> <form>Tag is main tag of HTML form.
-> inside <form> tag we have lavel & input tag for take the user input.
-> there are some input tags like ..

1.  <input type="text">
2.  <input type="button">
3.  <input type="checkbox">
4.  <input type="color">
5.  <input type="date">
6.  <input type="email">
7.  <input type="file">
8.  <input type="hidden">
9.  <input type="image">
10. <input type="month">
11. <input type="number">
12. <input type="password">
13. <input type="radio">
14. <input type="range">
15. <input type="search">
16. <input type="submit">
17. <input type="time">
18. <input type="url">
19. <input type="week">
20. <input type="tel">


___________________________________________________________________________________________________________________________________________


CSS(styling the web pages):-

-> CSS stands for cascadding style sheet.
-> Basically CSS works for designing and styling our web pages.
-> CSS is not a programming language, it's a styling language.
-> syntax:-

selector{
     properties:value;
}

ex.

h1{
     color:red;
}

-> in the avove example h1 is the selector,color is the properties and red is the value of that properties.
-> there are 3 types of CSS are present. like...

1. Inline CSS:-

-> we used inline css inside the tag name.
-> inline css have highest priority by compare with other types of css.
-> we can put our styling by creating a "style" attribute inside the tag.

2. Internal css:-

-> we used internal css inside <head> tag, by creating a <style> tag inside it.
-> internal css used many cases for small codebase.

3. External css :-

-> we used external css by creating a separate css file and link that file in our HTML page.
-> we can link the external css file by <link> tag.
-> it is most properly used because everyone wants to see the clean code so all files have to be separated.

Selectors in CSS :-

- we used css selectors for selecting an HTML element for the shake of designing.
- There are basically 5 types of selectors are there...

1. ID selector :-

- ID selector is a type of selector that used for unique design.
- It is denoted by "#".

2. Class selector :-

- Class selector is a type of selector that used for similar design in multiple element.
- it is denoted by "."

3. Group selector :-

- Group selector is a type of selector that used for design more than one element by creating a group.

4. Universal selector :- 

- Universal selector is a type of selector that used for design whole HTML element in a single design.
- It is denoted by "*".

5. Element selector :- 

- Element selector is a type of selector that used for design single single element separately.

Practice task :-

1. Create a simple div with an id "box". Add some text content inside th div. Set it's background color to "blue".

2. Create 3 headings with h1, h2, and h3. Give them all a class "heading" & set color of heading to "red".

Properties in CSS :-

1. color : red/blue/green etc...
2. background-color : red/green/blue etc...
3. text-align : left/right/center
4. text-decoration : underline/ overline/ line-through
5. font-weight : normal/ bold/ bolder/ 100/ 300/ 900 etc...
6. font-family : italic/ san-serif/ roboto/ cursive
7. line-height : 1/ 2/ 4/ 5 etc....
8. text-transform : uppercase/ lowercase/ capitalize

etc....

Box model in CSS :-

- Box model is used for properly placed the element in the right direction.
- It measures all the size of that particular element and place them.
- There are 5 types of box model are there....

1. Height
2. Width
3. Border (border-radius)
4. Margin (left, right, top, bottom)
5. Padding (left, right, top, bottom)

Display properties in CSS :- 

- we used display property to showcase our element in a proper form to display.
- basically there are 4 types of display property like...

1. display-inline -> takes only the space required by the element.
2. display-block -> takes full space available in width.
3. display-inline-block -> similar to display inline but difference is that when we apply padding over here.
4. display-none -> to remove element from the document flow. (none - nothing)

Flex-Box in CSS :-


- we can use CSS flex-box to create one dimensional design in a single page.
- flex-box have some properties like..

1. display: flex;
2. flex-direction: row/row-reverse/column/column-reverse
3. justify-content: center/ space-between/ space-evenly/ space-around
4. align-item: center/top/bottom
5. flex-wrap: wrap/no-wrap

Grid-Layout in CSS :-

- CSS grid-layout is a two-dimensional layout system for the web.
- A grid is a collection of horizontal & vertical lines creating a pattern against which we can line up our design element.
- some important properties of grid-layout...

1. display: grid;
2. grid-template-columns: repeat(4,1fr)/ 100 200 300;
3. grid-gap: 20px/ 30px etc..
4. grid-auto-rows: 100px / 200px etc...

CSS Units :-

- Basically there are multiple units in CSS but we will discuss some important units.

1. px (pixel) - fixed
2. % (percentage) - percentage fully depends upon their parent element

ex.

rekesh - 100 -> 20% -> 20
bikash - 1000 -> 20% -> 200

3. vh (viewport height) & vw (viewport width) -> it will increase or decrease their size as per the screen size.

4. vmax (viewport maximum) -> if the screen size can be squized to a phone screen so our content can be small so it break that and create a new line of content.

5. em & rem (root units of css) -> we can handle all the tag by a root element/tag so that it would be feasible for our content.

html - semantic tags
css - animation (scale, skew, rotate, etc....)



___________________________________________________________________________________________________________________________________________



# JAVASCRIPT :

  - Javascript is used for building logics of the web page.
  - javascript is a hogh level programming language, used in both client side (frontend) as well as server side (backend).
  - javascript comes from echma script so we see the latest version of javascript in terms of echma script.
  - the latest version of javascript is ES16. 
  - NodeJs is the runtime environment of javascript.
  

 Variables is Javascript : 

  -  variables are the containers to store digital data inside it.
  - there are 3 types of variables in JS :
     
    1. var :
       it is a type of variable that is used to change the variable value in later stage.
       it was mostly used in older browser. it is now not so much in use.
    2. let :
        let is a type of variable which value can be changed at later stage.
        it is a block scope / function scope so it is used in most cases. 
    3. const : 
        constant.

      --------
      var age = 25
      
      function{
        let age = 15
        person = age ....
      }

  rules for creating variable name :

   1. Variable  names are Case- sensitive. {A is not same as a.}
   2. only letters,numbers,underscore, and some special characters($ and _ ) are allowed.
   3. do not keep white spaces pin between.
   4. only letters, underscore or special characters can be the first character, variable names cannot start with numbers.
   5. reserve words (like for, while, let,console, etc...) cannot be a variable name.

  Datatypes in Javascript :
   
   - datatype is an attribute associated with a piece of data that tells the computer system how to interpret it's value.
   - in datatype, we use type of operator to know which datatype has been used.
   - there are 2 types of datatypes in JS :
    1. primitive datatype.
      - primitive datatypes are of 7 types :
          1. number :
              contains numerical values.
          2. boolean :
              boolean values : "true" & "false"
          3. undefined :
              data which has undefined value.
          4. null :
              empty or null value
          5. bigInt :
              big Integer values
          6. string :
              sequence of characters.
              denoted by double quote "" 
          7. symbol :
              has more than one value.
              symbols are unique and used to create hidden or private properties.
              it is also used in large size application


    2. non-primitive datatypes/ reference datatypes.
      - they are the datatypes that can hold multiple data elements in a single frame.
      - they are 3 types of non-primitive datatypes:
          1. Array
          2. Object
          3. Function


2.Object

-> object is reference datatype where we can store more than one element in a single frame.
-> mainly objects are working on (key:value)

ex-
   let hari={
      "name"="NRUSINGHA",
      "phone-number"=9861231787,
      "address"="PURI"
   }
3.Function

3. function-

   - is a block of code that perform specific task.
   - function reduced code complexity, time and space complexity.
   - syntax-

   function creation-
   function my_schedule()
   {

   console.log("i wkw up at 5 am")
   console.log("then take a good shower")
   console.log("eat breakfast with cup of tea")
   }

   function calling-

   - my-schedule()
   - my-schedule()


operator in js:-

- operator are key features to do some task or operate some task.
- ex-A+B
- in the above example A & B are the operand & "+" sign is our operator.
- in javascript , there are 5 types of operator are there...


1.Arithmatic operator (+,-,*/,%,**)

2.asignment operator (=,+=,-=,*=,/=)

3.comparision operator(==,!=,===,<,>,<=,>=)

4.logical operator(&&,||,!)

5.unary operator(++,--) increment and decrement

conditional statement:-

-> to implements some condition in the code.

->there three types of conditional statement are there:
   1.if condition

   -> if condition is true then statement is true
   if(condition)
   {
      statement
   }

   2.if-else condition

   
   3.if-elif condition

Loop in js:-

->loops are used execute a peice of code again and again.

->there are 5types of loop
   1.for loop
   2.while loop
    
   3.do-while loop
   
   initialization
   do{
      statement;
      updation;
   }

   while(condition)
   4.for-in loop
   5.for-of loop 

String in js:-

-> basically string is a sequence of character used to represent text.

->create a string -> let str="web bocket".

-> we calculate  the string length->str.length property.

-> wer calculate the string index-> str[0],str[1],str[2] etc...

string literals and interpolation ->

string literals:-

-> it is a way to have embedded expression in string.

-> bit is denoted by symbol `` .

string interpolation:-

-> to create a string by doing substitution of placeholder.

-> string text $ string text.

escape symbol in string:-

   1.\n - is new line
   2.\t - is new tab

   string method:-

   1.str.toUppercase()
   2.str.toLowercase()
   3.str.trim()
   4.str.slice(start,(end-1))
   5.str.conct(str2)
   6.str.repalce(oldval,newval)
   7.str.repalceAll(oldval,newval)
   8.str.charAt(idx)

Array in js:-

-> array is a collection of similar items .

-> ex- arr=["iron man","bat man","spyder man"]

-> array index starts from "0".
->indexing of array arr[0],arr[1] etc.

looping over an array->
-> loop - iteration

syntax=

for(let i=0;i<arr.length;i++)

methods of array:-

   1.push()
   2.pop()
   3.toString() - convert array to string

   4.concat() - concat the array

   5.unshift() - add the element to the starting of an array

   6.shift() - remove the element to the starting of an array

   7.slice() - return a piece of array

   8.splice() - change original array(index,remove,replace)

  1. //for a given array with marks of student78,90,54,32,98,25,70
   //find the avg mark of student

   2.5items=789,543,590,432,489

function:-

->it is a block of code that perform specific task ,can be be invoked or call whenever we want

ex-(in-build function)

1.console.log("hello")-.here .log() is an in-build function.
2.toUppercase() is an in-build function.
3.push() is an in-build function.

-> there are 2types of function js 
   1.normal function
      i.type A function

      function creation:-

      function function_name(){
         //statement
      }
      function calling:-

      function_calling()

      ii.type B function

      function creation:-

         function function_name(para_1,para_2){
         //statement
      }
      function calling:-

      function_calling(arg1,arg2)

   2.Arrow function

-> it is a compact way of writting a function .

-> it uses map() function to retrive the backend data,filter()
function for filterise our data etc...

   function creation:-

   const/let/var function_name=(para_1,para_2)=>{
      //statement
   }

   function calling:-

   function_name(arg1,arg2)

   ex-function sum(a,b){
      return a+b
   }
   sum(2,3)

   const sum=(a,b)=>{
      return a+b
   }
   sum(2,3)

Map():-

->create new array with result of some operation .the value it is callback return are used to form a new array.
  normally we create new array by calling the function in every element.

->map does not change the original array.

->it does not execute the function for empty array.

->
Syntax-

arr.map(callbackFunction (value,index.array))

Filter method/function in js:-

-> create a new array of element that gives true for a condition/filterization.

-> ex all given array in the given digits.

let newArr=arr.filter((val) => {
   return val%2==0;
})

for Each loop in array:-

-> arr.forEach(callbackFunction)

-> callbackFunction-> it is a function to execute for each element in the array.

-> callbackFunction is a function that passed as an argument of another function.

Advance js:-


1.DOM in js:-

-> DOM stands for document object model.

-> when a webpage is loaded,the browser create a document object model of that page.

-> the html dom model is constructed as tree like structure.

 windows-> document -> HTML -> head -> meta tags& title
                            -> body -> h1, h2, img etc...

Why we used DOM in js:-

-> js can change all the html element in the page.

-> js can create ,delete or edit any html page directly through DOM.

-> js can also access CSS styling directly.

window object:-

-> the window object represents an open window in a browser.

-> it is a browser object and it automatically created by browser.

-> it is also a global object with lots of propoties and methods.

DOM manipulation:-

1.selecting with id ->document.getElementById("myId")

2.selecting with class -> document.getElementsByClassName("myclass")

3.selecting with tag -> document.getElementsByTagName("h1")

4.Query selector -> 
   
     - document.querySelector("id/class/tag")
     - document.querySelectorAll("id/class/tag")

5.Attribute ->

      - getAttribute(attr) -> to get the attribute value

      - setAttribute(attr,value) -> to set the attribute value

6.insert element-> 

      - node.append (element) -> add at the end of the node (inside)

      - node.prepend (element) -> add at the starts of the node (inside)

      - node.after (element) -> adds after the node (outside)

      - node.before (element) -> adds before the node (outside)

7.Delete element:-

    - node.remove(element)


Event in javascript:-

-> the change in state of an object is known as Event.

-> some famous events are:-

1.mouse Events(onclick,ondbclick,onmouseover)

2.keyboard Events(keypress,keyUp,keyDown)

3.form Events(submit)

4.print Events

Event handling :-

-> syntax:-
node.event =()=>{
   //handle here
}

Event object:-

-> it is a special object that has details about the event.

-> all event handler have access to the event objects propoties and method.

-> syntax:-

node.event = (e) =>{
   //handle here
}

-> in methods youn can get -> e.target,e.type etc...

practice task:-

synchronous in js:-

Synchronous :-
- it means the code runs in a particular sequence of instruction give in the program.
- Each instruction waits for the privious instruction to complete it's execution.
ex.
console.log("one")
console.log("two")
console.log("three")

output -> one two three

Asynchronous :-

-> due to synchronous programming ,sometimes imp instruction get blocked due to some privious instruction ,which causes delay in the UI.

-> asynchronous code execution allows to execute next instruction immedeately and doesnot block the flow.

ex.
console.log("one")
console.log("two")
setTimeout(()=>{
   console.log("three)
},4000)
console.log("four")
console.log("five")
o/p-> 1,2,4,5,....3

callback in javascript:-

-> a callback function which passed as an argument of another function.

 callback hell:-
 -> it is a nested callback stacked below one after another forming a pyramid structure.

 -> this style of prograaming becomes difficult to understand and manage.

 promise in js:-

 -> it is a solution of callback hell .

 syntax:-
 let promise=new Promise(resolve,reject)=>{
   //statemnt
 }

-> a javascript promise object can  be -

1.pending - the result is undefined

2.resolved - the result is a value(fullfilled)

3.reject -> the result is an error

-> promise.then((res)=>{

})

-> promise.catch((err)=>{

})

Async & Await in js ->

- async function always return a promise.
- syntax:-

async function myFunc(){
    //statement
}
note:- await pauses the exeucation of its surrounding async function until the promise is settled.

API Handling / fetch API :-

- the fetch API provides an interface for fetching data.
- it uses Request & Response object.
- the Fetch() methods is used fetch data.

- syntax:-
 let demo = fetch(URL)

 - json -> javascript object notation


status code of node js ->
- 200 -> ok
- 201 -> created
- 202 -> accepted
- 300 -> multiple choice
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> not found
- 406 -> not accept
- 408 -> request timeout
- 500 -> internal server error
- 502 -> bad geteway
- 504 -> geteway timeout

----------------------------------------------------------------------------------------

React JS :-

 - raect js is a frontend javascript library.
 - react was developed by facebook by softaware engineer jordan walke.
 - react is also known as react js or ReactJS.
 - basically react is a tool for building UI(user interface) components.


NPX :-

- npx stands for node package execute
- purpose -> it is an npm package runner bundled automarically with npm.
- function -> it allows you to run & execute javascript package directlly form the npm, 
without needing to install them permanentlly .
- storage -> it download the package to a temorary cache memory, execute the command & clear it up right after.

NPM :-

- npm stands for node package maneger.
- purpose -> it is the default package maneger for node js.
- function -> it installs, updates, & deletes javascript packages and
dependecies for our project.
- storage -> it saves package permanenlly either locally inside our project's "node modules"
folder or globally on our system.


React js History :-

- latest versoin of react js is 19.2.7
- initial release to the public was in july 2013.
- React js was 1st used in 2011 for facebook's newsfeed features.
- initialy react gained lots of hates for the mix of javascript+HTML
but in later stage or now these days 45% of software developer used react js as the core library for software develope.
- ".jsx" is the extenstion of react js.
 - jsx stands for' javascript XLM' means javascript + HTML.
 
 -------------------------------------------------------------------------------------------------------------------
 - when you are installing rect it will have multiple way to install and setup but there are 2 common way that we are using react js is --
    
    1. CRA (create-react-app)
    2. Vite(fastest way to install react js)

    File strecture of a react js folder ->

    1. readme.md->

    - we will use readme.md for write some description or outline of our project.

    2. package.json ->

    - it will keep scripts , versions details & dependency of our project.

    3. package- lock.json ->
    
    - it basically store dependency of package.json file.

    4. .gitignore ->

    - files & folder ignored by git tracking.....
    
    5. src(source folder) ->

    - it is main source of folder where we can create file & write code in it.
   
   6. Public ->  
       
   -  Public is used to take our website logo that show publically and we can store images and videos in that       public folder by creating separate separate folder.
   
   7. node_modules -> 
   
   - Auto manages external dependencies that need for execute the project and we can say it is the god father  of the react js project.

props in React JS :-

- props stands for properties.
- props are passed to componets via HTML atributes.

pratice Qustion from React JS :-

1. create a functional componet called "Greeting" that takes a "name" prop and disply "Hello, <name>!"

2. create a componet "userCard" that takes props: name, age & city and display them in a card format. 

expected output -> 
name : Rakesh 
Age : 23 
City : Bhubaneswar

3. create a component Button that accepts a label prop. if no label is passed, it should display "Click Me".

4. create a parent component App that passes a message prop to a child component "MessageBox". The child should display the message. 

expected output -> App -> MessageBox

React Hooks :-

- Hooks allow functions to have access to state & other react features without using classes.
- they provide direct API  to react concept like props, state,context etc......
- Basically Hooks is a function that let us "Hook into" react state & lifecycle feature


1. useState()
2. use


1. useState() Hook in react ->
- the react useState() hook allows us to track the state of a function component.
- state generally refers to data or properties that need to be tracking in an application.
import useState ->

import {useState} from 'react'

initialize useState ->

- we initialize our state by calling useState in our function component.
- useState accepts an initial state & return two value.

      1. the current state
      2. a function that updates the state

      syntax :->const [state, setState] = useState("initial value")

      ex -> const [color, setState] = useState("red")

    












          