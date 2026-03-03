<?php
class Veiculo {
    protected $marca;
    protected $modelo;
    private $velocidade = 0; // Inicializando com 0

    public function setVelocidade($velocidadeNova) {
        $this->velocidade = $velocidadeNova;
    }

    public function getVelocidade() {
        return $this->velocidade;
    }
}

class Carro extends Veiculo {
    public function acelerar() {
        // Pega a velocidade atual e soma 10, por exemplo
        $novaVelocidade = $this->getVelocidade() + 10;
        $this->setVelocidade($novaVelocidade);
    }
}

class Moto extends Veiculo {
    public function acelerar() {
        // Moto acelera mais rápido: soma 20
        $novaVelocidade = $this->getVelocidade() + 20;
        $this->setVelocidade($novaVelocidade);
    }
}

// Testando o código
$camaro = new Carro();
$camaro->setVelocidade(100); // Definindo velocidade inicial
echo "Velocidade Inicial: " . $camaro->getVelocidade() . " km/h<br/>";

$camaro->acelerar(); // Chama o método para aumentar a velocidade
echo "Após acelerar: " . $camaro->getVelocidade() . " km/h<br/>";