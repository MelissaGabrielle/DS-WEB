<?php

class Artista
{
    public $nome;
    public $genero;

    public function __construct($novoNome, $novoGenero) {
        $this->nome = $novoNome;
        $this->genero = $novoGenero;
    }

    
}

class Musica
{
    public $titulo;
    public $dura;
    public Artista $artista;

   public function __construct($novoTitulo, $novaDuracao, Artista $novoArtista){
        $this->titulo = $novoTitulo;
        $this->dura = $novaDuracao;
        $this->artista = $novoArtista;
    }

    public function exibirDados() {
        return $this->titulo . " | " . "Duração: " . $this->dura . "<br>" . "Artista: " . $this->artista->nome . " | " . "Gênero: " . $this->artista->genero;;
    }

}


//INSTANCIANDO
$artista1 = new Artista(" Melanie Martinez", " Pop, Dark Pop, Indie Pop, Alternativo");
$musica1 = new Musica("Dollhouse", "4:26", $artista1);

echo $musica1->exibirDados();
?>