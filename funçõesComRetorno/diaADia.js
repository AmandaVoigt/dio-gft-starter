let userName = getFirstName("Helena-Voigt-Martins", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Amanda Santos Barbosa", " ")
console.log("Seja bem vindo " + userName)
 
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}