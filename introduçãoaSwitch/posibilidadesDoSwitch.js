let fruta = "banana"

switch (fruta){
    case "laranja":
    console.log("suco de laranja")
    console.log("segunda mensagem")
    break
    
    case "banana":
    case "morango":
    console.log("vitamina de " + fruta)
    break

    case "maça":
    console.log("vitamina")
    break 

    default:
    console.log("suco genérico")
}