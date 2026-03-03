<?php
abstract class Animal {
    abstract public function fazerSom();
    
    public function mover() {
        return "Anda";
    }
}

class Cachorro extends Animal {
    public function fazerSom() { return "Au Au!"; }
}

class Gato extends Animal {
    public function fazerSom() { return "Miau!"; }
}

class Passaro extends Animal {
    public function fazerSom() { return "Piu Piu!"; }
    
    public function mover() {
        return "Voa e " . parent::mover();
    }
}

$animais = [new Cachorro(), new Gato(), new Passaro()];
foreach ($animais as $a) {
    echo get_class($a) . ": " . $a->fazerSom() . "/ Movimento: " . $a->mover() . "<hr>";
}