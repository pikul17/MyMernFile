// asynchronous program->

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")

// },500)
// console.log("three")
// console.log("four")


// callback function example->

// function sum(a,b){  // normal function
//     console.log(a+b)

//     // a & b are the parametr
//     // here sum is the normal function 
// }
// function calc(a,b,sumCallback){ //main / callback function
//     sumCallback(a,b)

// }
// calc(1,3,sum) //function passed as an argument -(sum)

// .....................................

// function great(name){
//     console.log("hello"+ name)
// }
// // great() is a normal function
// // takes name & print the grittings.

// function user (name,callback){ // main / callback function
//     callback(name)
// }
// user("pikul",great)// callback -> great()

//-------------------------------------

// function getData( dataId, getNextData){
//     setTimeout(() => {
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData()
//         }

//     },4000);//4000ms = 4s
// }


// // callback nell problem ->

// console.log("getting data - 1........")
// getData(1,() =>{
//     console.log("getting data-2.......")
//     getData(2,() => {
//         console.log("getting data-3.....")
//         getData(3,() =>{
//             console.log("getting data-4......")
//             getData(4,() =>{
//                 console.log("getting data-5.....")
//                 getData(5)
//             })
//         })
//     })
// })

// // promise example -----------------------------------------

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         console.log("iam a promise")
//         resolve("success")
//         reject("some network issue occured")
//     },8000)
// })

// solution of callback hell by using promise ->>>>>>>>>>>>>>>>>>>>>>>.

// function getData(data1){
//     return new Promise((resolve,resolve)=>{
//         setTimeout(()=>{
//         },5000)

//     })
// }

// getData(1)
//     .then(()=>{
//         return getData(2)
//         .then(()=>{
//             return getData(3)
//             .then(()=>{
//                 return getData(4)
//                 .then(()=>{
//                     return getData(5)
//                 })
//             })
//         })
//     })


// example of .then & .catch methods ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise")
//         resolve("success")
//         reject("error")

//     })
// }
// let promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fulfielled",res)
// })
// promise.catch((err)=>{
//     console.log("promise reject",err)
// })

// Async & Await ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.



// function API(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("whather.app")
//             resolve("success")
//            // reject("error")
//         },6000)

//     })
// }
// async function getWhatherData() {
//     await API
    
// }
 
// solution of callback hell using async & await ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getData(dataId){
    return new Promise((resolve,reject)=>{
        
    })
}