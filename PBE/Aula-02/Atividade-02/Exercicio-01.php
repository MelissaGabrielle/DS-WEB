<?php
class Pessoa {
    public $nome;
    public $idade;
}

class Funcionario extends Pessoa {
    public $salario;

    public function calcularBonus() {
        return 0;
    }

    public function getDados() {
        return "Nome: {$this->nome} | Salário Base: R$ {$this->salario} | Bônus: R$ " . $this->calcularBonus();
    }
}

class Gerente extends Funcionario {
    public function calcularBonus() {
        return $this->salario * 0.20; // 20%
    }
}

class Desenvolvedor extends Funcionario {
    public function calcularBonus() {
        return $this->salario * 0.10; // 10%
    }
}

// --- CRIANDO OS OBJETOS E PREENCHENDO MANUALMENTE ---

$gerente = new Gerente();
$gerente->nome = "Melissa";    // Definindo o nome direto na propriedade
$gerente->idade = 17;
$gerente->salario = 10000;

$desenvolvedor = new Desenvolvedor();
$desenvolvedor->nome = "João";
$desenvolvedor->idade = 17;
$desenvolvedor->salario = 5000;

// Exibindo os resultados
echo $gerente->getDados() . "<br>";
echo $desenvolvedor->getDados() . "<br>";