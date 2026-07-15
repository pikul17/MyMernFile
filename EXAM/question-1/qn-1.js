let count = 0;
let display = document.getElementById("count");

function increment() {
    count++;
    display.innerText = count;
}

function decrement() {
    count--;
    display.innerText = count;
}

function reset() {
    count = 0;
    display.innerText = count;
}