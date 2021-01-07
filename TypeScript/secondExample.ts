let myName: any = "Waldener Monteiro";
// convert to string
let count = (<string>myName).length;
//or
// let count = (myName as string).length;
let obj = {
  name: "Waldener Monteiro",
};
// add prop in a object
(<any>obj).texto = "School of Net";
//or
// (obj as any).texto = 'School of Net'

let num = 2;
let numString = num + ""; // transform in a string
let string = "234";
let stringNum = +string; // transform in a number

// const sum = function (x:number, y:number):number {
//   return x + y;
// };
//              or
const sum = (x: number, y: number): number => x + y;

let sumNumber: number = sum(3, 2);

let optionalParameters = (firstName:string, lastName?:string) =>{
    return `${firstName} ${lastName}`
}