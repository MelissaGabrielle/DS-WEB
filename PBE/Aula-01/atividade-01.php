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

    return "Você está fechando um gloss de formato".$this->formato;

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

// CLASSE RÌMEL
class Esmalte {

    //Atributo
    public $textura;
    public $cor;
    public $formato;
    public $tipagem;
    public $marca; 

    //Método
    public function abrir() { 

         return "Você está abrindo um rímel da marca ".$this->tipagem;

    }
    
    //Método
    public function aplicar() { 

         return "Você está pintando a unha com um esmalte de cor ".$this->cor;

    }
    
    //Método
    public function tirar_excesso() { 

    }
}

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

    }
    
    //Método
    public function ajustar_temperatura() { 

    }
    
    //Método
    public function modo_frio() { 

    }
}

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

    }
    
    //Método
    public function fechar() { 

    }
    
    //Método
    public function colocar_itens() { 

    }
}

?>
