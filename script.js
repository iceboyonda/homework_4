const student = "Зима Дмитрий Владимирович"; 

document.getElementById("student").innerHTML = student;


function getRandomIntInclusive(min, max) { //Начало функции, выводящящей значение от 0 до 2
 min = Math.ceil(min); //округление в меньшую сторону
 max = Math.floor(max); //округление в большую сторону
return Math.floor(Math.random() * (max - min + 1)) + min; // Расшифровка:Рандом число сгенерированное 6й строкой умножить на (максимум - минимум + 1) + минимум
}
 function throwRandomError(errorRate) { //Начало второй функции (Ошибка)

  if (getRandomIntInclusive(0 , 100) <= errorRate) { //Если первая функция > второй, выводит новую ошибку 
     throw new Error('Ой, что-то сломалось'); //Ошибка которая выводится при (строка 13)
}
}
const errorRate = 0.2; // Константа вероятности ошибки (Заданна условиями)

try //блок, который ловит наличие ошибки
{
 throwRandomError(errorRate) ; //Ловит ошибку, при ее отсутствии выводит на сайт
 
 alert('Работает!)'); 

 console.log(not.eror); //Ловит ошибку, при ее отсутствии выводит в консоль
 
 } 
 catch (err) // Ловит ошибку, при ее наличии выводит на сайте
 {
alert ('Сломалось(');
 console.log(eror); //Ловит ошибку, при ее наличии выводит в консоль
 }