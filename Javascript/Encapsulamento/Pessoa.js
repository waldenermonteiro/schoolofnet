class Pessoa {
    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }
    toString() {
        console.log(`Nome: ${this.nome} e idade: ${this.idade}`)
    }
    get nome() {
        return this._nome
    }
    set nome(nome) {
        this._nome = nome
    }
    get idade() {
        return this._idade
    }
    set idade(idade) {
        this._idade = idade
    }
}
var victor = new Pessoa('Junior Monteiro', 22)
victor.toString()