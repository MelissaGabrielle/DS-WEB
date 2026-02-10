function trocarFotoErro() {
    document.getElementById("foto").setAttribute("src", "imagemErro.jpg");
}

function trocarFoto1() {
    document.getElementById("foto").setAttribute("src", "imagem1.jpg");
}

function trocarFoto2() {
    document.getElementById("foto").setAttribute("src", "imagem2.webp");
}

function atributo() {
    console.log(document.getElementById("foto").getAttribute("src"));
}