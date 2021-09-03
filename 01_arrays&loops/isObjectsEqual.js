// Функция сравнения двух объектов

function isObjEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  let values1 = Object.values(obj1)
  let values2 = Object.values(obj2)
  if(keys1.length !== keys2.length) {
    return false
  } 
  for(let i = 0; i < keys1.length; i++) {
    if(keys2.includes(keys1[i]) === false) {
      return false
    }
  }
  for(let i = 0; i < values1.length; i++) {
    if(typeof values1[i] === 'object') {
      return isObjEqual(values1[i], values2[i])
    } else if(values2.includes(values1[i]) === false) {
      return false
    }
  }
  return true
}


////////////////////
let obj1 = {
  name: 'Serik',
  age: 25,
  hobbies: {
    outdoor: 'football',
    indoor: 'computer games'
  }
}

let obj2 = {
  name: 'Nastya',
  age: 23,
  hobbies: {
    outdoor: 'voleyball',
    indoor: 'games'
  }
}
console.log(isObjEqual(obj1, obj2)) 

let obj3 = {
  name: 'Serik',
  age: 25,
  hobbies: {
    outdoor: 'football',
    indoor: 'computer games'
  }
}

let obj4 = {
  name: 'Serik',
  age: 25,
  hobbies: {
    outdoor: 'football',
    indoor: 'computer games'
  }
}
console.log(isObjEqual(obj3, obj4))

let obj5 = {
  name: 'Serik',
  age: 25
}

let obj6 = {
  name: 'Serik',
  age: 25
}
console.log(isObjEqual(obj5, obj6))

let obj7 = {
  name: 'Serik',
  age: 25,
  hobbies: {
    outdoor: 'football',
    indoor: 'computer games'
  }
}

let obj8 = {
  name: 'Serik',
  age: 25,
  hobbies: {
    outdoor: 'football',
    indoor: 'programming'
  }
}
console.log(isObjEqual(obj7, obj8))