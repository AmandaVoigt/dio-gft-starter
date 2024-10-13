let marca = "Apple"
console.log(marca !== "Samsung") 

marca = "Apple"
let resultado = marca !== "Samsung"
console.log(resultado)

let CPFBloqueado = "123.456.789-01"
let CPFUsuario = "987.654.321-10"
let ehCPFBloqueado = CPFUsuario === CPFBloqueado
console.log("O usuario está barrado? " + ehCPFBloqueado)

let CPFPermitido = "987.654.321-11"
let ehBloqueado = CPFUsuario !== CPFPermitido
console.log("É um usiario invalido? " + ehBloqueado)
