function soma(x:number, y:number) {
    return x + y
}

soma(1,2)

let test = 'Junior'

const num = 2

let juniorsName: string = 'Junior Monteiro'
let juniorsYearsOld: number = 23
let arrayStrings:Array<string> = ['a','b','c']
let arrayAny:Array<any> = ['a','b','c', 2, false, { name : 'teste'}]

enum civilState {Solteiro, Casado, Divorciado}
const myCivilState:civilState = civilState.Casado

let obj:object = {
    first_name: 'Luiz',
    last_name: 'Diniz'
}

let obj1: Object = {
    category: 'test'
}
obj1 = 2 // Ou seja, não utilizar Object e sim :object

let variable:any = 4
variable = {}
variable = ""
variable = false