function botaoTextoCor(){
    document.getElementById("conteudo").innerHTML = "<p>Melissa!</p>";
    document.getElementById("conteudo").style.backgroundColor = "lightblue";
    
    var paragrafo = document.getElementById("conteudo").innerHTML;
    console.log(paragrafo);
}