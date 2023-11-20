function gerarSKU () {
    const nomeProduto = document.querySelector('#produto').value.substring(0, 5).toUpperCase();
    const marcaProduto = document.querySelector('#marca').value.substring(0, 3).toUpperCase();
    const tipoProduto = document.querySelector('#tipo').value.substring(0, 3).toUpperCase();
    const detalheCor = document.querySelector('#detalhe-cor').value.substring(0, 3).toUpperCase();
    const detalheTam = document.querySelector('#detalhe-tam').value.substring(0, 3).toUpperCase();
    const quantidade = document.querySelector('#quantidade').value.trim();
    const codUnico = document.querySelector('#code').value;

    const quantidadePrimeiraLetra = quantidade.slice(0, 5);

    const codigoSKU = `${nomeProduto}-${marcaProduto}-${tipoProduto}-${detalheCor}-${detalheTam}-${quantidadePrimeiraLetra}-${codUnico}`;

    document.querySelector('#resultadoSKU').textContent = `${codigoSKU}`;
}

function getCode() {
    
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&"
    let codeLength = 8;
    let code = "";

    for (var i = 0; i < codeLength; i++) {
        let randomCode = Math.floor(Math.random() * chars.length);
        code += chars.substring(randomCode, randomCode+1);
    }
    
    document.getElementById("code").value = code;
}

document.querySelector('#btnGerarSKU').addEventListener('click', gerarSKU);

function copyCode() {
    const textToCopy = document.querySelector('#resultadoSKU').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied')
    })
}

function limparCampos () {
    document.querySelector('#produto').value = '';
    document.querySelector('#marca').value = '';
    document.querySelector('#tipo').value = '';
    document.querySelector('#detalhe-cor').value = '';
    document.querySelector('#quantidade').value = '';
    document.querySelector('#detalhe-tam').value = '';
    document.querySelector('#resultadoSKU').value = '';
    document.querySelector('#code').value = '';
    document.querySelector('#resultadoSKU').value = '';
}

document.querySelector('#limparCampos').addEventListener('click', limparCampos);