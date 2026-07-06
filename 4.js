const carro = {
    modelo: "fusca",
    velocidade: 0,

    acelerar: function () {
        this.velocidade += 10;
    }
};

carro.acelerar();
carro.acelerar();

console.log(carro.velocidade);