let name = "Amanda"
let age = 23
let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("-----------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}