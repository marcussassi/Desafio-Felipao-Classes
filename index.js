class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        switch(this.tipo){
            case "Mago":
                console.log(`O ${this.tipo} ${this.nome} atacou usando magia`);
                break;
            case "Guerreiro":
                console.log(`O ${this.tipo} ${this.nome} atacou usando espada`);
                break;
            case "Monge":
                 console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais`);
                 break;
            case "Ninja":
                console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken`);
                break;
        }
        
    }

}

let mago = new hero("MestreMago", 125, "Mago")
let guerreiro = new hero("Conan", 78, "Guerreiro")
let monge = new hero("Coen", 115, "Monge")
let ninja = new hero("LastNinja", 90, "Ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()