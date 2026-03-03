<?php
abstract class Produto {
    public $nome;
    public $preco;
    public $estoque;

    abstract function calcularDesconto();

}

class Eletronico extends Produto {

    // ELETRONICO CALCULA 10%OFF (PREÇO = PREÇO - (PREÇO * 10/100)) OU (PREÇO = PREÇO * 90/100)
    public function calcularDesconto(){
        return $this->preco = $this->preco - ($this->preco * 10/100) ;
    }
}

class Roupa extends Produto{
    //ROUPA CALCULA 20%OFF (PREÇO = PREÇO - (PREÇO * 20/100))
    //SE ESTOQUE < 5 30%OFF

    public function calcularDesconto() {

        if ($this->estoque < 5){
            return $this->preco = $this->preco - ($this->preco * 30/100) ;
        }
        else {
            return $this->preco = $this->preco - ($this->preco * 20/100) ;
        }
    }
}

// INSTÂNCIA ELETRONICO
$Fone = new Eletronico();
echo $Fone->nome = "Fone" . "<br>";
$Fone->preco = 100;
echo "Preço inicial: " . $Fone->preco . "<br>";
$Fone->calcularDesconto();
echo "Preço com desconto: " . $Fone->preco . "<br>";




// INSTÂNCIA ROUPA
$camiseta = new Roupa();
echo $camiseta->nome = "Camiseta preta" . "<br>";
$camiseta->preco = 75.00;
echo "Preço inicial: " . $camiseta->preco . "<br>";
$camiseta->estoque = 10; // Menos que 5, deve aplicar 30%
$camiseta->calcularDesconto();
echo "Preço com o desconto: " . $camiseta->preco . "<br>";

