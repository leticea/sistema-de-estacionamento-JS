document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e) {

    const modeloVeiculo = document.getElementById('modeloVeiculo').value;
    const placaVeiculo = document.getElementById('placaVeiculo').value;
    const time = new Date();

    if (!modeloVeiculo || !placaVeiculo) {
        alert("Por favor, preencha os campos em branco!");
        return false;
    }

    carro = {
        modelo: modeloVeiculo,
        placa: placaVeiculo,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    if (localStorage.getItem('patio2') === null) {

        const carros = [];
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));

    } else {

        const carros = JSON.parse(localStorage.getItem('patio2'));
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }

    document.getElementById('formulario').reset();

    mostrarPatio();

    e.preventDefault();
};

function apagarVeiculo(placa) {

    const carros = JSON.parse(localStorage.getItem('patio2'));

    for (var i = 0; i < carros.length; i++) {

        if (carros[i].placa == placa) {
            carros.splice(i, 1);
        }

        localStorage.setItem('patio2', JSON.stringify(carros));
    }

    mostrarPatio();
};

function mostrarPatio() {

    const carros = JSON.parse(localStorage.getItem('patio2'));
    const carrosResultado = document.getElementById('resultados');

    carrosResultado.innerHTML = '';

    for (var i = 0; i < carros.length; i++) {

        const modelo = carros[i].modelo;
        const placa = carros[i].placa;
        const hora = carros[i].hora;
        const minutos = carros[i].minutos;

        carrosResultado.innerHTML += 
        '<tr><td>' + modelo +
        '</td><td>' + placa +
        '</td><td>' + hora + ':' + minutos +
        '</td><td><button class="btn btn-danger" onclick="apagarVeiculo(\''+ placa +'\')">Excluir</button>'
        '</tr>';
    }
};