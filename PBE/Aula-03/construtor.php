<?php

class Pessoa
{
    public $nome;
    public $idade;

    public function __construct($novoNome, $novaIdade) {
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }

    public function exibirDados() {
        return "O nome da pessoa é" . $this->nome . "e a idade é " . $this->idade;
    }

    public function alterarDados($novoNome, $novaIdade){
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }
}

//INSTANCIANDO
$pessoa = new Pessoa("Melissa", 17);

echo $pessoa->exibirDados();

$pessoa->alterarDados("João", 17);

echo "<br>";

echo $pessoa->exibirDados();