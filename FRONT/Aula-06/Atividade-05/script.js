document.getElementById("formulario").addEventListener("submit", function (event) {

    event.preventDefault()
////addEventListener("submit", ...): Dizemos ao navegador: "Fique de olho no formulário.
//  Quando o usuário clicar no botão de enviar, execute esta função".

//event.preventDefault(): Essa é a regra de ouro. Por padrão, o formulário recarrega a página ao enviar. 
//Isso cancela esse comportamento para que possamos validar tudo antes da página sumir.
    // ============================================================
    // Validação Nome
    // ============================================================
//Aqui checamos se o nome não é vazio, se é muito curto
//e o mais importante: se não tem números ou símbolos estranhos.
    let nome = document.getElementById("nome").value
    let erroNome = document.getElementById("erro-nome")

    if (nome.length === 0) {
        erroNome.innerHTML = "Nome é obrigatório!"
    } else if (nome.length < 3) {
        erroNome.innerHTML = "Nome muito curto!"
    } else if (/[0-9]/.test(nome)) {
        erroNome.innerHTML = "Nome não pode ter números!"
    } else if (/[^a-zA-ZÀ-ú\s]/.test(nome)) {
        erroNome.innerHTML = "Nome não pode ter caracteres especiais!"
    } else {
        erroNome.innerHTML = ""
    }

    // ============================================================
    // Validação E-mail
    // ============================================================
//Essa "sopa de letrinhas" verifica a estrutura básica: texto + @ + texto + . + texto.

//^: Começa aqui.

//[^\s@]+: Qualquer coisa que NÃO seja espaço ou outro @.

//\.: O ponto final obrigatório (tipo .com).
    let email = document.getElementById("email").value
    let erroEmail = document.getElementById("erro-email")

    // ^        → começa aqui
    // [^\s@]+  → um ou mais caracteres que NÃO sejam espaço ou @  (o usuário)
    // @        → tem que ter o @
    // [^\s@]+  → um ou mais caracteres que NÃO sejam espaço ou @  (o domínio)
    // \.       → tem que ter o ponto
    // [^\s@]+  → um ou mais caracteres que NÃO sejam espaço ou @  (ex: com, br)
    // $        → termina aqui
    // O ! na frente significa "se NÃO passar nessa regex"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erroEmail.innerHTML = "E-mail inválido!"
    } else {
        erroEmail.innerHTML = ""
    }

    // ============================================================
    // Validação Senha
    // ============================================================
//Aqui usamos uma sequência de testes else if. Para a senha ser válida, ela precisa passar por todos os filtros:
//Pelo menos 8 caracteres.
//Uma letra MAIÚSCULA [A-Z].
//Uma letra minúscula [a-z].
//Um número [0-9].
//Um caractere especial [^a-zA-Z0-9] (algo que não seja letra nem número).

    let senha = document.getElementById("senha").value
    let erroSenha = document.getElementById("erro-senha")

    if (senha.length < 8) {
        erroSenha.innerHTML = "Senha muito curta! Mínimo 8 caracteres."
    } else if (!/[A-Z]/.test(senha)) {
        erroSenha.innerHTML = "Senha precisa ter pelo menos uma letra maiúscula."
    } else if (!/[a-z]/.test(senha)) {
        erroSenha.innerHTML = "Senha precisa ter pelo menos uma letra minúscula."
    } else if (!/[0-9]/.test(senha)) {
        erroSenha.innerHTML = "Senha precisa ter pelo menos um número."
    } else if (!/[^a-zA-Z0-9]/.test(senha)) {
        erroSenha.innerHTML = "Senha precisa ter pelo menos um caractere especial."
    } else {
        erroSenha.innerHTML = ""
    }

    // ============================================================
    // Validação CPF
    // ============================================================
//Validação de CPF (A Matemática por trás)
//Essa é a parte mais complexa. Não basta ter 11 números; eles precisam seguir uma lógica matemática oficial.
//Regex: Primeiro, vemos se ele escreveu no formato 000.000.000-00.
//Cálculo dos Dígitos: O CPF tem dois "dígitos verificadores" (os dois últimos). O código faz uma conta de multiplicação
//e soma com os 9 primeiros números para ver se o resultado bate com os 2 últimos.
//Se alguém inventar um número, o cálculo não bate!
    let cpf = document.getElementById("cpf").value
    let erroCpf = document.getElementById("erro-cpf")

    // \d{3} → exatamente 3 números | \. → ponto | \- → traço | \d{2} → 2 números
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        erroCpf.innerHTML = "CPF inválido! Use o formato 000.000.000-00"
    } else {
        let numeros = cpf.replace(/[.\-]/g, "")

        // --- Calculando o PRIMEIRO dígito verificador ---
        let soma = 0
        for (let i = 0; i < 9; i++) {
            soma += parseInt(numeros[i]) * (10 - i)
        }
        let primeiro = (soma * 10) % 11
        if (primeiro === 10 || primeiro === 11) primeiro = 0

        // --- Calculando o SEGUNDO dígito verificador ---
        soma = 0
        for (let i = 0; i < 10; i++) {
            soma += parseInt(numeros[i]) * (11 - i)
        }
        let segundo = (soma * 10) % 11
        if (segundo === 10 || segundo === 11) segundo = 0

        if (primeiro !== parseInt(numeros[9]) || segundo !== parseInt(numeros[10])) {
            erroCpf.innerHTML = "CPF inválido!"
        } else {
            erroCpf.innerHTML = ""
        }
    }

    // ============================================================
    // Validação Telefone
    // ============================================================
//Telefone: /^\(\d{2}\) \d{4,5}-\d{4}$/ -> Espera (99) 99999-9999.
// O \d{4,5}
//Permite tanto telefones fixos (8 dígitos) quanto celulares (9 dígitos).

    let telefone = document.getElementById("telefone").value
    let erroTelefone = document.getElementById("erro-telefone")

    // \( → abre parêntese | \d{2} → DDD | \) → fecha parêntese
    // \d{4,5} → 4 ou 5 números (fixo ou celular) | \d{4}
    // → 4 números finais
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
        erroTelefone.innerHTML = "Telefone inválido! Use o formato (11) 99999-9999"
    } else {
        erroTelefone.innerHTML = ""
    }

    // ============================================================
    // Validação CEP
    // ============================================================
///^\d{5}-\d{3}$/ -> Garante os 5 números, o traço e os 3 finais.
    let cep = document.getElementById("cep").value
    let erroCep = document.getElementById("erro-cep")

    // \d{5} → 5 números | \- → traço | \d{3} → 3 números
    if (!/^\d{5}-\d{3}$/.test(cep)) {
        erroCep.innerHTML = "CEP inválido! Use o formato 00000-000"
    } else {
        erroCep.innerHTML = ""
    }

    // ============================================================
    // Validação Data
    // ============================================================
//O JavaScript é engraçadinho: se você colocar "31 de fevereiro",
// ele converte automaticamente para "03 de março".
//O Truque: O código cria a data e depois pergunta:
// "Ei, ainda é 31 de fevereiro?"
// Se o objeto responder que virou março,
// o código avisa que essa data não existe no calendário.
    let data = document.getElementById("data").value
    let erroData = document.getElementById("erro-data")

    // Como o type="date", o JS recebe no formato AAAA-MM-DD
    if (data.length === 0) {
        erroData.innerHTML = "Data é obrigatória!"
    } else {
        // ex: "2024-12-25" vira ["2024", "12", "25"]
        let partes = data.split("-")
        let ano = parseInt(partes[0])
        let mes = parseInt(partes[1])
        let dia = parseInt(partes[2])

        // Mês começa em 0 no JS, por isso mes-1
        let dataObj = new Date(ano, mes - 1, dia)

        if (dataObj.getMonth() + 1 !== mes || dataObj.getDate() !== dia) {
            erroData.innerHTML = "Essa data não existe!"
        } else {
            erroData.innerHTML = ""
        }
    }

    // ============================================================
    // Validação URL
    // ============================================================
//Aqui o objetivo é garantir que o link digitado seja funcional e siga 
//o padrão da internet.
//https?: O http é obrigatório, mas o s é opcional (o ? faz isso).
// Assim, aceitamos sites com ou sem certificado de segurança.
//:\/\/: Validamos o ://. Usamos a barra invertida \ 
// antes das barras normais para o JavaScript não achar que o código
//  acabou ali.
//[^\s]+: Significa "qualquer coisa que não seja um espaço".
//  Isso garante que a URL continue depois do protocolo,
// mas sem espaços no meio.
//O Erro: Se o usuário esquecer o http:// ou colocar um espaço
// no meio do link, a mensagem "URL inválida!" aparece na hora.

    let url = document.getElementById("url").value
    let erroUrl = document.getElementById("erro-url")

    // https? → "http" com "s" opcional | :\/\/ → :// | [^\s]+ → resto da URL
    if (!/^https?:\/\/[^\s]+$/.test(url)) {
        erroUrl.innerHTML = "URL inválida! Use o formato http:// ou https://"
    } else {
        erroUrl.innerHTML = ""
    }

    // ============================================================
    // Validação Valor Monetário
    // ============================================================
//Moeda: Ele limpa os pontos e vírgulas para transformar o texto 
// em um número real(parseFloat)
// e checa se está dentro de um limite de preço (0 a 99.999).
//é uma função nativa que analisa (parse) uma string e a converte
//em um número de ponto flutuante (decimal)
    let valor = document.getElementById("valor").value
    let erroValor = document.getElementById("erro-valor")

    // \d{1,3} → 1 a 3 números | (\.\d{3})* → grupo de milhares repetível
    // , → vírgula obrigatória | \d{2} → centavos
    if (!/^\d{1,3}(\.\d{3})*,\d{2}$/.test(valor)) {
        erroValor.innerHTML = "Valor inválido! Use o formato 1.299,90"
    } else {
        // ex: "1.299,90" vira 1299.90
        let numero = parseFloat(valor.replace(/\./g, "").replace(",", "."))

        // ← nomes diferentes para não conflitar com o texto livre!
        let minimoValor = 0
        let maximoValor = 99999.99

        if (numero < minimoValor || numero > maximoValor) {
            erroValor.innerHTML = `Valor deve ser entre ${minimoValor} e ${maximoValor}!`
        } else {
            erroValor.innerHTML = ""
        }
    }


    // ============================================================
    // Validação Cartão de Crédito
    // ============================================================
//Limpeza: numeroLimpo = cartao.replace(/[\s\-]/g, "") remove espaços
// e traços. O sistema só quer os 16 números puros.
//Identificação (BIN): O código olha para os primeiros dígitos
// (chamados de BIN) para identificar a bandeira:

//Visa: Sempre começa com 4.
//Mastercard: Começa com números de 51 a 55.
//Amex: Usa os prefixos 34 ou 37.

    let cartao = document.getElementById("cartao").value
    let erroCartao = document.getElementById("erro-cartao")

    // Remove espaços e traços → ex: "1234 5678 9012 3456" vira "1234567890123456"
    let numeroLimpo = cartao.replace(/[\s\-]/g, "")

    if (!/^\d{16}$/.test(numeroLimpo)) {
        erroCartao.innerHTML = "Cartão inválido! Digite os 16 números do cartão."
    } else {
        let bandeira = ""

        // Visa → começa com 4
        if (/^4/.test(numeroLimpo)) {
            bandeira = "Visa"
        // Mastercard → começa com números entre 51 e 55
        } else if (/^5[1-5]/.test(numeroLimpo)) {
            bandeira = "Mastercard"
        // Amex → começa com 34 ou 37
        } else if (/^3[47]/.test(numeroLimpo)) {
            bandeira = "American Express"
        // Elo → começa com alguns prefixos específicos
        } else if (/^(4011|4312|4389|6363)/.test(numeroLimpo)) {
            bandeira = "Elo"
        // Hipercard → começa com 606282
        } else if (/^606282/.test(numeroLimpo)) {
            bandeira = "Hipercard"
        } else {
            bandeira = "Bandeira não identificada"
        }

        erroCartao.innerHTML = `✅ Cartão válido! Bandeira: ${bandeira}`
    }

}) // ← fecha o addEventListener



