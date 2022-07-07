// задание - html tree
// let body =
// {
//     tagName: 'body',
//     subTags: [
//         {
//             tagName: 'div',
//             subTags: [
//                 {
//                     tagName: 'span',
//                     text: 'Enter a data please:',
//                 },
//                 {
//                     tagName: 'br',
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name',
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'surname',
//                     }
//                 }


//             ]
//         },
//         {
//             tagName: 'div',
//             subTags: [
//                 {
//                     tagName: 'button',
//                     text: 'OK',
//                     attrs: {
//                         id: 'ok',
//                     }
//                 },
//                 {
//                     tagName: 'button',
//                     text: 'Cancel',
//                     attrs: {
//                         id: 'cancel',
//                     }
//                 }
//             ]
//         }
//     ]
// }


// задание - declarative fields
// let notebook = {
//     brand: prompt('Enter a laptop brand'),
//     type:  prompt('Enter a laptop type'),
//     model: prompt('Enter a laptop model'),
//     ram: prompt('Enter a laptop RAM'),
//     size: prompt('Enter a laptop screen size'),
//     weight: prompt('Enter a laptop weight'),
//     resolution: {
//         width: prompt('Enter a laptop display width'),
//         height: prompt('Enter a laptop display height'),
//     },
// };
// let phone = {
//     brand: prompt('Enter a phone brand'),
//     model: prompt('Enter a phone model'),
//     ram: prompt('Enter a phone RAM'),
//     color: prompt('Enter a phone color'),
// };
// let person = {
//     name: prompt('Enter your name'),
//     surname: prompt('Enter your surname'),
//     married: confirm('You are married?'),
// }
// console.log('notebook - ');
// console.log(notebook);
// console.log('phone - ');
// console.log(phone);
// console.log('person - ');
// console.log(person);


// задание - object links
// let person;
// person = {
//     smartphone: {},
//     laptop: {},
// }
// person.smartphone.owner = person;
// person.laptop.owner = person;


// задание - imperative array fill 3
// let arr = [];
// arr[0] = prompt('1st element');
// arr[1] = prompt('2nd element');
// arr[2] = prompt('3th element');
// console.log(arr);


// задание - while confirm
// while (confirm ('Ок для завершения, Отмена - повтор') === false) {
//     console.log('Вы нажали отмена');
// }
// console.log('Ок');


// задание - array fill / fill nipush
// let arr = [];
// let arrIndex = 0;
// let el = '';
// do {
//     el = (prompt('добавить элемент в массив'));
//     if (el === null) break;
//     // arr.push(el);
//     arr[arrIndex] = el;
//     console.log(arr[arrIndex] + ' - element' + (arrIndex + 1));
//     arrIndex++;
// } while (el !== null);
// console.log(arr);


// задание - infinite probability
// let iterNum = 1;
// let x;
// while (true) {
//     x = Math.random();
//     console.log('x = ' + x);
//     if (x > 0.9) break;
//     iterNum++;
// }
// console.log('Колличество итераций = ' + iterNum);


// задание - empty loop
// let z = '';
// while ((z = prompt('Задайте значение')) == null && z == null) {
//     console.log ('попробуем ещё');
// }
// console.log('Вы ввели ' + z);


// задание - progression sum
// let n;
// let step;
// let sumProg = 0;
// while ((n = prompt('n =')) != parseFloat(n) || n < 1) {
//     alert('n дожно быть число >=1, попробуйте ещё');
// }
// while ((step = prompt('введите шаг')) != parseFloat(step) || step <= 0) {
//     alert('шаг дожен быть числом >0, попробуйте ещё');
// }
// n = parseFloat(n);
// step = parseFloat(step);
// console.log('n = ' + n);
// console.log('шаг = ' + step);
// for(let i = 1; i <= n; i = i + step) {
//     sumProg = sumProg + i;
//     console.log(i);
// }
// if (sumProg != sumProg.toFixed(2)) sumProg = sumProg.toFixed(2);
// console.log('Сумма прогрессии = ' + sumProg);


// задание - chess one line
// let n;
// while ((n = prompt('введите длинну строки ')) != parseInt(n) || n < 1) {
//     alert('это дожно быть целое число >=1, попробуйте ещё');
// }
// let str = '"';
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) str = str + '#';
//     else str = str + ' ';
// }
// str = str + '"';
// console.log(str);


// задание - numbers
// let x = 9;
// let y = 9;
// let str = '';
// for (let i = 0; i <= x; i++) {
//     for (let n = 0; n <= y; n++) {
//         str = str + n;
//     }
//     str = str + '\n';
// }
// console.log(str);


// задание - chess
// let m;
// let n;
// let desk = '';
// while ((m = prompt('введите ширину доски ')) != parseInt(m)|| m < 1) {
//     alert('это дожно быть целое число >0, попробуйте ещё');
// }
// while ((n = prompt('введите высоту доски ')) != parseInt(n) || n < 1) {
//     alert('это дожно быть целое число >0, попробуйте ещё');
// }
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//         if (i % 2 != 0) {
//             if (j % 2 != 0) desk = desk + '.';
//             else desk = desk + '#';
//         } else {
//             if (j % 2 != 0) desk = desk + '#';
//             else desk = desk + '.';
//         }
//     }
//     desk = desk + '\n';
// }
// console.log(desk);


// задание - cubes
// let arr = [];
// let n;
// while ((n = prompt('введите колличество элементов массива ')) != parseInt(n)|| n < 1) {
//     alert('это дожно быть целое число >0, попробуйте ещё');
// }
// for (let i = 0; i < n; i++) {
//     arr[i] = Math.pow(i, 3);
// }
// console.log(arr);


// задание - multiply table + matrix to html table
// let arr = [];
// for (let i = 0; i <= 10; i++) {
//     arr [i] = [];
//     arr [0] [i] = i;    
//     for (let j = 1; j <= 10; j++) {
//         arr [i] [j] = i * j;
//     }
//     arr [i] [0] = i;
// }
// console.log(arr);
// let trIn;
// let capt = document.createElement('caption');
// capt.innerHTML = 'Таблица умножения';
// table.prepend(capt);
// for (let i = 0; i <= 10; i++){
//     trIn = '';
//     let tr = document.createElement('tr');
//     for (let j = 0; j <= 10; j++) {
//         if (i === 0 || j === 0) {
//             trIn += '<td class="main_num">' + arr [i] [j] + '</td>';
//         } else {
//             trIn += '<td>' + arr [i] [j] + '</td>';
//         }
//     }
//     tr.innerHTML = trIn;
//     table > tbody.append(tr);
// }


