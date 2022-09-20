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

    localStorage.setItem('teste', 'Olá!');
   
    e.preventDefault();
}

