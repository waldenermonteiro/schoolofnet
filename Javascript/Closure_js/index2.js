let funcionario = function () {
    let salario = 1000

    return {
        nome: "Gilson",
        cargo: 'Programador',
        setSalario: function () {
            salario += valor
        },
        getSalario: function () {
            return salario
        }
    }
}

const func1 = funcionario()

console.log(func1.getSalario())