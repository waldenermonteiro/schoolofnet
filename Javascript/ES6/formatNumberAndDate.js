//app IntL

let date = new Date()

console.log(new Intl.DateTimeFormat('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' }).format(date))//BCP 47
console.log(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: 'BRL', style: 'currency' }).format(2000))//BCP 47