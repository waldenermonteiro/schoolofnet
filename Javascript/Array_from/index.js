const arr = [2, 4, 6]
const arr2 = Array.from(arr, a => a * a)
console.log(arr2)

const arr3 = ['Leonan', 'Wesley', 'Jackson', 'Wesley']
const arr4 = Array.from(new Set(arr3))
console.log(arr4)

const arr5 = [...arr3]
const arr6 = Array.from(arr3)

console.log(arr5, arr6)

//Transformando um objeto literal em iterable
const obj = { length: 3,  0: '0', 1: '1', 2: '2' }
const arrObj = Array.from(obj)