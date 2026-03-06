<?php

class Dono
{
    public $nome;
    public $telefone;

    public function __construct($novoNome, $novoTelefone) {
        $this->nome = $novoNome;
        $this->telefone = $novoTelefone;
    }

    public function exibirDados() {
        return "O nome do dono é " . $this->nome . " e o telefone é " . $this->telefone;
    }
}

class Animal
{
    public $nome;
    public $especie;
    public Dono $dono;

   public function __construct($novoNome, $novaEspecie, Dono $novoDono){
        $this->nome = $novoNome;
        $this->especie = $novaEspecie;
        $this->dono = $novoDono;
    }

}


//INSTANCIANDO
$dono1 = new Dono("Melissa", "15998402314");
$animal1 = new Animal("Hannah", "Porquinho-da-Ìndia", $dono1);

echo $animal1->nome . " | " . $animal1->especie;
echo "<br>";
echo "Dono: " . $animal1->dono->nome . " | Tel: " . $animal1->dono->telefone;

?>