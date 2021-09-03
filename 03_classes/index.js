// 1
// Создать класс счетчика, который будет иметь поле count - значение счетчика. Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.

class Counter {
    constructor(count) {
        this.count = count
    }

    increment() {
        return ++this.count
    }

    decrement() {
        return --this.count
    }

    countValue() {
        return this.count
    }
}


// 2
// Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

class Worker {
    constructor(name, secondName, rate, days, countOfDetails) {
        this.name = name
        this.secondName = secondName
        this.rate = rate
        this.days = days
        this.countOfDetails = countOfDetails
    }

    getSalary() {
        return this.rate * this.days
    }

    getName() {
        return this.name
    }

    getSecondName() {
        return this.secondName
    }

    getRate() {
        return this.rate
    }

    getDays() {
        return this.days
    }

    setRate(newRate) {
        this.rate = newRate
    }

    setDays(newDays) {
        this.days = newDays
    }

    increaseDetailsCount() {
        ++this.countOfDetails
    }

    resetDetailsCount() {
        this.countOfDetails = 0
    }
}


// 3
// Реализуйте класс MyString, объект которого будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1); 
    }

    ucWords(str) {
        return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    }
}


// 4
// Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы: getFullName, getEmail.

class User {
    constructor(name, secondName, email) {
        this.name = name
        this.secondName = secondName
        this.email = email
    }

    getFullName() {
        return `${this.name} ${this.secondName}`
    }

    getEmail() {
        return this.email
    }
}


// 5
// Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).

class Student extends User {
    constructor(name, secondName, year) {
        super(name, secondName)
        this.year = year
    }

    getCourse() {
        let currentYear = new Date().getFullYear()
        return currentYear - this.year
    }
}

let student1 = new Student('Petro', 'Petrovich', 2016)

console.log(student1.getFullName()) 