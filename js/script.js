function showDrinkMessage() {
    switch (drink) {
        case 'Кава':
            message = 'Ви обрали каву.';
            break;
        case 'Чай':
            message = 'Ви обрали чай.';
            break;
        case 'Сік':
            message = 'Ви обрали сік.';
            break;
        default:
            message = 'Будь ласка, оберіть напій.';
    }
    console.log(message);
}

function checkDay() {
    switch (day) {
        case 'понеділок':
        case 'вівторок':
        case 'середа':
        case 'четвер':
        case 'п’ятниця':
            message = day.charAt(0).toUpperCase() + day.slice(1) + ' - робочий день.';
            break;
        case 'субота':
        case 'неділя':
            message = day.charAt(0).toUpperCase() + day.slice(1) + ' - вихідний день.';
            break;
        default:
            message = 'Будь ласка, введіть правильний день тижня.';
}
}

function checkSeason() {
    if (month == 12 || month == 1 || month == 2) {
        message = 'Зима';
    } else if (month >= 3 && month <= 5) {
        message = 'Весна';
    } else if (month >= 6 && month <= 8) {
        message = 'Літо';
    } else if (month >= 9 && month <= 11) {
        message = 'Осінь';
    } else {
        message = 'Будь ласка, введіть номер місяця від 1 до 12.'; // Якщо введено неправильний номер
    }
}

function checkDaysInMonth() {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        days = 30;
    } else if (month == 2) {
        days = 28;
    } else {
        days = 'Будь ласка, введіть номер місяця від 1 до 12.';
    } 
}

function checkColor() {
    switch (color) {
        case 'червоний':
            message = 'Червоний - це колір енергії!';
            break;
        case 'синій':
            message = 'Синій - це колір спокою!';
            break;
        case 'зелений':
            message = 'Зелений - це колір природи!';
            break;
        default:
            message = 'Цей колір не має визначеної дії.';
    }
}

function calculate() {
   switch (operation) {
     case "+":
       result = num1 + num2;
       break;
     case "-":
       result = num1 - num2;
       break;
     case "*":
       result = num1 * num2;
       break;
     case "/":
       result =
         num2 !== 0 ? num1 / num2 : "Ділення на нуль недопустиме";
       break;
     default:
       result = "Будь ласка, оберіть операцію.";
   }
}
    