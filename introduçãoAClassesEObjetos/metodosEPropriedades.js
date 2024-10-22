class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio} `)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("baunilha", "coco")
let boloPremium = new formaDeBolo("chocolate", "nutella")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()