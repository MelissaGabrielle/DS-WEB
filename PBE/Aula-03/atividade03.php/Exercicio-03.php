<?php

class Fabricante
{
    public $nome;
    public $paisOrigem;

    public function __construct($novoNome, $novopaisOrigem) {
        $this->nome = $novoNome;
        $this->paisOrigem = $novopaisOrigem;
    }

    
}

class Motor
{
    public $Potencia;
    public $combustivel;

    public function __construct($novaPotencia, $novoCombustivel) {
        $this->Potencia = $novaPotencia;
        $this->combustivel = $novoCombustivel;
    }

    
}

class Carro
{
    public $modelo;
    public $ano;
    public Fabricante $fabricante;
    public Motor $motor;

   public function __construct($novoModelo, $novoAno, Fabricante $fabricante, Motor $motor){
        $this->modelo = $novoModelo;
        $this->ano = $novoAno;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirDados() {
        return $this->modelo . " | " . " " . $this->ano . "<br>" 
        . "Fabricante: " . $this->fabricante->nome . " | " . "Origem: " . $this->fabricante->paisOrigem . "<br>"
        . "Motor: ". $this->motor->Potencia . " | " . "Combustível: " .  $this->motor->combustivel;
    }

}


//INSTANCIANDO
$fabricante1 = new Fabricante("Volkswagen", " Alemanha");
$motor1 = new Motor("120 cv", "Flex");
$carro1 = new Carro("Gol", "2010", $fabricante1, $motor1);

echo $carro1->exibirDados();
?>