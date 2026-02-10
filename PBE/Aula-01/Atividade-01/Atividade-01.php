<?php

// CLASSE ESMALTE
class Esmalte {

    //Atributo
    public $tamanho;
    public $cor;
    public $formato;
    public $tipagem;
    public $marca; 

    //Método
    public function pintar() { 

        return "Você está pintando a unha com um esmalte de cor ".$this->cor;

    }
    
    //Método
    public function palitar() { 

        return "Você esta palitando um esmalte da marca ".$this->marca;

    }
    
    //Método
    public function remover() {

        return "Você está removendo um esmalte do tipo ".$this->tipagem;

    }
}
echo "<h3>ESMALTE:</h3>";
// INICIANDO OBJETO 1
$EsmalteMelissa = new Esmalte();
// ATRIBUINDO VALORES
$EsmalteMelissa-> cor = "verde";
// EXIBINDO MÉTODO
echo $EsmalteMelissa->pintar();
echo "<br>";

// INICIANDO OBJETO 2
$EsmalteGaby = new Esmalte();
// ATRIBUINDO VALORES
$EsmalteGaby-> marca = "Rísque";
// EXIBINDO MÉTODO
echo $EsmalteGaby->palitar();
echo "<br>";

// INICIANDO OBJETO 3
$EsmalteSofia = new Esmalte();
// ATRIBUINDO VALORES
$EsmalteSofia-> tipagem = "Cremoso";
// EXIBINDO MÉTODO
echo $EsmalteSofia->remover();
echo "<br><br>";


// CLASSE GLOSS
class Gloss {

    //Atributo
    public $tamanho;
    public $cor;
    public $formato;
    public $cheiro;
    public $marca; 

    //Método
    public function fechar() { 

    return "Você está fechando um gloss de formato ".$this->formato;

    }
    
    //Método
    public function aplicar() { 

         return "Você está aplicando um gloss com cheiro de ".$this->cheiro;

    }
    
    //Método
    public function abrir() { 

    return "Você está abrindo um esmalte da marca ".$this->marca;

    }
}
echo "<h3>GLOSS:</h3>";
// INICIANDO OBJETO 1
$GlossMelissa = new Gloss();
// ATRIBUINDO VALORES
$GlossMelissa-> formato = "cilindro";
// EXIBINDO MÉTODO
echo $GlossMelissa->fechar();
echo "<br>";

// INICIANDO OBJETO 2
$GlossGaby = new Gloss();
// ATRIBUINDO VALORES
$GlossGaby-> cheiro = "Mel";
// EXIBINDO MÉTODO
echo $GlossGaby->aplicar();
echo "<br>";

// INICIANDO OBJETO 3
$GlossSofia = new Gloss();
// ATRIBUINDO VALORES
$GlossSofia-> marca = "FRANCINY EHLKE";
// EXIBINDO MÉTODO
echo $GlossSofia->abrir();
echo "<br><br>";

// CLASSE RÌMEL
class Rímel {

    //Atributo
    public $textura;
    public $cor;
    public $formato;
    public $tipagem;
    public $marca; 

    //Método
    public function abrir() { 

         return "Você está abrindo um rímel da marca ".$this->marca;

    }
    
    //Método
    public function aplicar() { 

         return "Você está aplicando um rímel da cor ".$this->cor;

    }
    
    //Método
    public function tirar_excesso() { 
        return "Você está tirando o excesso de um rímel do tipo ".$this->tipagem;
    }
}
echo "<h3>RÍMEL:</h3>";
// INICIANDO OBJETO 1
$RímelMelissa = new Rímel();
// ATRIBUINDO VALORES
$RímelMelissa-> marca = "Melu";
// EXIBINDO MÉTODO
echo $RímelMelissa->abrir();
echo "<br>";

// INICIANDO OBJETO 2
$RímelGaby = new Rímel();
// ATRIBUINDO VALORES
$RímelGaby-> cor = "Preto";
// EXIBINDO MÉTODO
echo $RímelGaby->aplicar();
echo "<br>";

// INICIANDO OBJETO 3
$RímelSofia = new Rímel();
// ATRIBUINDO VALORES
$RímelSofia-> tipagem = "peel off";
// EXIBINDO MÉTODO
echo $RímelSofia->tirar_excesso();
echo "<br><br>";

// CLASSE SECADOR DE CABELO
class SecadorCabelo {

    //Atributo
    public $cor;
    public $temperatura;
    public $velocidade;
    public $voltagem;
    public $marca; 

    //Método
    public function ligar() { 
        return "Você está ligando um secador da marca ".$this->marca;

    }
    
    //Método
    public function ajustar_temperatura() { 
        return "Você está ajustando a temperatura de um secador com a temperatura ".$this->temperatura;

    }
    
    //Método
    public function modo_frio() { 
        return "Você está colocando um secador no modo frio com a velocidade ".$this->velocidade;

    }
}
echo "<h3>SECADOR DE CABELO:</h3>";
// INICIANDO OBJETO 1
$SecadorMelissa = new SecadorCabelo();
// ATRIBUINDO VALORES
$SecadorMelissa-> marca = "Taiff";
// EXIBINDO MÉTODO
echo $SecadorMelissa->ligar();
echo "<br>";

// INICIANDO OBJETO 2
$SecadorGaby = new SecadorCabelo();
// ATRIBUINDO VALORES
$SecadorGaby-> temperatura = "60°C";
// EXIBINDO MÉTODO
echo $SecadorGaby->ajustar_temperatura();
echo "<br>";

// INICIANDO OBJETO 3
$SecadorSofia = new SecadorCabelo();
// ATRIBUINDO VALORES
$SecadorSofia-> velocidade = "entre 20 e 70 m/s";
// EXIBINDO MÉTODO
echo $SecadorSofia->modo_frio();
echo "<br><br>";



// CLASSE BOLSA
class Bolsa {

    //Atributo
    public $tamanho;
    public $cor;
    public $itens_dentro;
    public $material;
    public $marca; 

    //Método
    public function abrir() { 
        return "Você está abrindo uma bolsa da marca ".$this->marca;
    }
    
    //Método
    public function fechar() { 
        return "Você está fechando uma bolsa da cor ".$this->cor;
    }
    
    //Método
    public function colocar_itens() { 
        return "Você está colocando itens na bolsa com ".$this->itens_dentro;
    }
}
echo "<h3>BOLSA:</h3>";
// INICIANDO OBJETO 1
$BolsaMelissa = new Bolsa();
// ATRIBUINDO VALORES
$BolsaMelissa-> marca = "kipling";
// EXIBINDO MÉTODO
echo $BolsaMelissa->abrir();
echo "<br>";

// INICIANDO OBJETO 2
$BolsaGaby = new Bolsa();
// ATRIBUINDO VALORES
$BolsaGaby-> cor = "rosa";
// EXIBINDO MÉTODO
echo $BolsaGaby->fechar();
echo "<br>";

// INICIANDO OBJETO 3
$BolsaSofia = new Bolsa();
// ATRIBUINDO VALORES
$BolsaSofia-> itens_dentro = "um estojo dentro";
// EXIBINDO MÉTODO
echo $BolsaSofia->colocar_itens();
echo "<br><br>";


?>
