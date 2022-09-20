document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e) {

    var modeloVeiculo = document.getElementById('modeloVeiculo').value;
    var placaVeiculo = document.getElementById('placaVeiculo').value;
    var time = new Date();

    carro = {
        modelo: modeloVeiculo,
        placa: placaVeiculo,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    console.log(carro);
    
    if (localStorage.getItem('patio2') === null) {
        var carros = [];
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    } else {
        var carros = JSON.parse(localStorage.getItem('patio'));
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }
   
    e.preventDefault();
}

