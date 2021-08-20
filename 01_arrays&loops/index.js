// №1
// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

let numbers = [1, 2, 5, 8, 9, 12, 3, 7, 100, 102]
let squaredNumbers = numbers.map(item => Math.pow(item, 2))


// №2 
// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let numbers = [1, 2, 5, 8, 9, 12, 3, 7, 100, 102, 1, 2, 5, 8, 9, 12, 3, 7, 100, 102]
let sumArr = numbers.reduce((prev, curr) => prev + curr, 0)


// №3
// Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

function setColon(num) {
    let strArr = ('' + num).split('')
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i - 1] % 2 && strArr[i] % 2) {
            strArr.splice(i, 0, ':')
        }
    }
    return strArr.join('')
}


// №4 
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

let arr1 = [1,20,33,14,5,6,7,8,9,10]
let arr2 = [6,7,41,9,10]
let arrDiff = []

function setDiffArray(arr1, arr2) {
    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
    for(let i = 0; i < maxLength; i++) {
        if(!arr1[i]) {
            arr1.push(0)
        } else if(!arr2[i]) {
            arr2.push(0)
        }
        arr1[i] > arr2[i] ? arrDiff.push(arr1[i] - arr2[i]) : arrDiff.push(arr2[i] - arr1[i])
    }
}

setDiffArray(arr1, arr2)


// №5 
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [1,2,3,4,5,6,7]
let arrSum = []

function setSumArray(arr1, arr2) {
    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
    for(let i = 0; i < maxLength; i++) {
        if(!arr1[i]) {
            arr1.push(0)
        } else if(!arr2[i]) {
            arr2.push(0)
        }
        arrSum.push(arr1[i] + arr2[i])
    }
}

setSumArray(arr1, arr2)


// №6 
// Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let arr = [1,2,3,4,5]

function flipArray(arr) {
    return arr.reverse()
}

let reversedArr = flipArray(arr)


// №7 
// Фильтр юзеров Создать массив объектов для юзеров. Пример:
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let users = [
    {name: 'Seriy', age: 18},
    {name: 'Nastya', age: 12},
    {name: 'Sidor', age: 26},
    {name: 'Vasek', age: 15},
    {name: 'Pyatro', age: 103},
    {name: 'Igar', age: 19},
]

adultUsers = []
notAdultUsers = []

function rankUsers(users) {
    users.forEach(item => item.age >= 18 ? adultUsers.push(item) : notAdultUsers.push(item))
}

rankUsers(users)


// №8 
// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

let arr = [12,4,3,1,1,2,3,4,5,5,6,7,0,8,0,6,3]

function deleteDuplicates(arr) {
    const set = new Set(arr)
    return Array.from(set)
}


// №9 
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

function isPalindrom(str) {
    return str === str.split('').reverse().join('')
}


// №10 
// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

function getItemIndex(arr, value) {
    let a = -1
    arr.forEach((item, index) => {
        if(item === value) {
            a = index
        }
    })
    return a
}


// №11 
// Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:

// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

function search(arr, str) {
    return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()))
}


// №12 
// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false

function checkIsEqual(arr1, arr2) {
    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
    for(let i = 0; i <= maxLength; i++) {
        if(arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}