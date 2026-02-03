<?php

class Pessoa {

    public $nome; //Atributo

    public function falar() { //Método

        return "O meu nome é ".$this->nome;

    }
}

$Melissa = new Pessoa();
$Melissa->nome ="Melissa Gabrielle";
echo $Melissa->falar();

?>