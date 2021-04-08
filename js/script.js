// alert('Hello');
"use strict";
/*
1) Следующим переменным присвоить значения 
   - money - любое число “Доход за месяц”,
   - income - строка с дополнительными доходом (например: фриланс), 
   - addExpenses - строка с перечислением дополнительных расходов через запятую 
        (например: интернет, такси, коммуналка), 
   - deposit - любое булево значение,
   - mission - любое число (Какую сумму хотите накопить),
   - period - число от 1 до 12 (месяцев)
2) Используя методы и свойства:
   - Вывести в консоль тип данных значений переменных money, income, deposit;
   - Вывести в консоль длину строки addExpenses
   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
   - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
   - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
   - Вывести в консоль budgetDay
*/
const money = 30000,
    income = 'Фриланс',  // дополнительные доходы
    addExpenses = 'Садик, такси, интернет', // дополнительные расходы
    deposin = true,
    mission = 50000,
    period = 6;
let budgetDay = money / 30;

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцев');
    console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(''));
    console.log(budgetDay);
    // console.log();