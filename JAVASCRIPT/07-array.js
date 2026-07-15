//array ->

// let arr =[23,45,78,90,84,53,56,65,21,31]
// console.log(arr)//23, 45, 78, 90, 84, 53, 56, 65, 21, 31
// console.log(arr.length)//10
// console.log(arr[0])//23
// console.log(arr[4])//84
// console.log(arr[6])//56

// loop over an array

// let heros =[ "iron man","bat man", "super man", "spider man"]
// for(let i = 0; i< heros.length; i++){
//     console.log(heros[i])
// }

// let food = [ "borger","pizza","momo","pani-puri"]
// console.log(food)
// food.push("dahi bara")
// console.log(food)
// food.pop()
// console.log(food)
// food.unshift("poha")
// console.log(food)
// food.shift()
// console.log(food)

// toString()->

// let marks =[34,56,53,89,78]
// console.log(marks)
// let mark = marks.toString()
// console.log(marks)

// concat ->

// let food = [ "borger","pizza","momo","pani-puri"]
// let vegetable= [ "patato","onion","brinjal"]
// let drink = [ "mocktail","mozito","cocktail"]
// let res = food.concat(drink)
// console.log(res)
// let res1 = [food + drink + vegetable]
// console.log(res1)

// slice ->

// let arr = [ 23,45,78,90,54,43,32,21]
// console.log(arr.slice(2,5))
// console.log(arr.slice(0,6))
// console.log(arr.slice(4,8))
// console.log(arr.slice(2))
// console.log(arr.slice(-3))
// console.log(arr.slice(4,-2))

//splice->
// splice(add,remove,replace)


// question 1->

// let marks = [ 78,90,54,32,98,25,70]
// let sum = 0;
// for( let i =0; i<7; i++){
//     sum=sum+marks[i];
// }
// let avg =sum/7;
// console.log(avg)

// question 2->

let items = [ 789,543,500,432,489]
let i = 0;
for(let val of items ){
    console.log(`value of index ${i} = ${val}`);
    let offer = val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++
}





