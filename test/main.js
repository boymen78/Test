// task 1

// const containsOnlyDigits = (str) => {
//     const regExp = /^\d+$/;
//     return regExp.test(str);
// };
//
// console.log(containsOnlyDigits("12345"));
// console.log(containsOnlyDigits("12a45"));

// task 2

// function startTimer() {
//     let seconds = 1;
//     setInterval(() => {
//         console.log(`Прошла секунда // ${seconds}`);
//         seconds++;
//     }, 1000);
// }
//
// startTimer();


// task 3

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval);
//         }
//         i++;
//     }, 1000);
// };
//
// count();


// task 4

// const box = document.getElementById('toggleBox');
//
// box.addEventListener('click', function() {
//     if (box.classList.contains('blue')) {
//         box.classList.remove('blue');
//         box.classList.add('transparent');
//     } else if (box.classList.contains('transparent')) {
//         box.classList.remove('transparent');
//     } else {
//         box.classList.add('blue');
//     }
// });

// task 5

// Создаем новый объект XMLHttpRequest

// const generateInfo = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET','../any.json');
//     request.send();
//     console.log(request.response);
// }
