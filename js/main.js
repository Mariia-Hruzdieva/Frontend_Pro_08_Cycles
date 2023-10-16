document.write('1. Вивести на сторінку в один рядок через кому числа від 10 до 20:<br>');
const max = 20;
for (let i = 10; i < max; i++) {
    const end = (i === max - 1) ? '' : ', ';
    document.write(i + end);
}

document.write('<br><br>2. Вивести квадрати чисел від 10 до 20:<br>');
const max1 = 20;
for (let i = 10; i <= max1; i++) {
    const end1 = (i === max1) ? '' : ', ';
    document.write(i ** 2 + end1);
}

document.write('<br><br>3. Вивести таблицю множення на 7:<br>');
const a = 7;
let b = 1;
while (b < 11) {
    document.write(a + '*' + b + '=' + a * b + '<br>');
    b++;
}

document.write('<br><br>4. Знайти суму всіх цілих чисел від 1 до 15:<br>');
let sum = 0;
let num = 1;
while (num <= 15) {
    sum += num++;
}
document.write(sum);

document.write('<br><br>5. Знайти добуток усіх цілих чисел від 15 до 35:<br>');
let mult = 1;
let x = 15;
while (x <= 35) {
    mult *= x++;
}
document.write(mult);


document.write('<br><br>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500:<br>');
let average = 0;
let sum1 = 0;
let y = 1;
while (y <= 500) {
    sum1 += y++;
}
average = sum1 / 500;
document.write(average);

document.write('<br><br>7. Вивести суму лише парних чисел в діапазоні від 30 до 80:<br>');
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    const isEven = !(i % 2);
    sum2 += isEven ? i : 0;
}
document.write(sum2);

document.write('<br><br>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3:<br>');
const max2 = 200;
let numbers = [];
for (let i = 100; i <= max2; i++) {
    const isDiv3 = !(i % 3);
    if (isDiv3) {
        numbers.push(i);
    }
}
document.write(numbers.join(', '))

document.write('<br><br>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники:<br>');
let naturalNum = prompt('9. Введіть натуральне число, щоб знайти та вивести на сторінку всі його дільники:');
switch (naturalNum && isNaN(+naturalNum)) {
    case null:
        alert("Ви скасували");
        break;
    case "":
        alert("Введене значення не число");
        break;
    case true:
        alert("Введене значення не число");
        break;
    default:
        let numbers = [];
        for (let i = 1; i <= +naturalNum; i++) {
            const isDiv = !(+naturalNum % i);
            if (isDiv) {
                numbers.push(i);
            }
        }
        document.write(numbers.join(', '))
}

document.write('<br><br>10.Визначити кількість його парних дільників:<br>');
let numbers2 = [];
for (let i = 2; i <= +naturalNum; i += 2) {
    const isDiv2 = !(+naturalNum % i);
    if (isDiv2) {
        numbers2.push(i);
    }
}
document.write(numbers2.length)

document.write('<br><br>11.Знайти суму його парних дільників:<br>');
let sum11 = 0;
for (let i = 2; i <= +naturalNum; i += 2) {
    const isDiv2 = !(+naturalNum % i);
    if (isDiv2) {
        sum11 += i;
    }
}
document.write(sum11)

document.write('<br><br>12.Надрукувати повну таблицю множення від 1 до 10:<br>');
for (var number1 = 1; number1 <= 10; number1++) {
    for (var number2 = 1; number2 <= 10; number2++) {
        let result = number1 * number2;
        document.write(number1 + '*' + number2 + '=' + result + '<br>');
    }
    document.write('<br>');
}


// document.write('<br><br>3. Вивести таблицю множення на 7:<br>');
// const a = 7;
// let b = 1;
// while (b < 11) {
//     document.write(a + '*' + b + '=' + a * b + '<br>');
//     b++;
// }


