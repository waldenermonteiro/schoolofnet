let myArray: Array<number> = [] //type parameter

function test <T>(param: T) : T { // retornar o mesmo tipo do parametro
    return param
}

let variable:number = test<number>(2)

class List<T> {
    items: Array<T> = []

    add(item: T){

    }

    remove(item: T){

    }
}

let list = new List<number>() //generalizou
