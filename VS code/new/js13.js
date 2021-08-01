// Single element selector
// let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.children;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>'
// console.log(element.innerText)


let sel = document
    // sel = document.querySelector('#myfirst');
    // sel = document.querySelector('.childul');
    // sel = document.querySelector('div');
    // console.log(sel);


//multi element selector
let ele = document
    // ele = document.getElementById('myfirst');
    // ele = document.getElementsByClassName('child');
ele = document.getElementsByTagName('div');
console.log(ele);

// for (let index = 0; index < ele.length; index++) {
//     const element = ele[index];
//     console.log(element);
//     element.style.color = 'blue';
// }

// Array.from(ele).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });
console.log(ele[0].getElementsByClassName('child'));