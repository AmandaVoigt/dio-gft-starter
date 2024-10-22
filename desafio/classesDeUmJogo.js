class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    retornarAtaque(tipo) {
        let ataque;

        switch (tipo) {
            case "mago":
                ataque = "mágia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "uma arma desconhecida";
                break;
        }
        return ataque;
    }

    atacar() {
        const tipoAtaque = this.retornarAtaque(this.tipo);
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);
    }
}

const heroi1 = new Heroi("Gandalf", 2000, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Li Mu Bai", 30, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto", 16, "ninja");
heroi4.atacar();

const heroi5 = new Heroi("Legolas", 300, "arqueiro");
heroi5.atacar();