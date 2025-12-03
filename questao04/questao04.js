function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const msg = document.getElementById("mensagem");

    if (nome === "" || cpf === "") {
        msg.innerText = "Os campos Nome e CPF são obrigatórios.";
        msg.style.color = "red";
        return;
    }

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!cpfValido.test(cpf)) {
        msg.innerText = "CPF inválido! Use o formato 000.000.000-00.";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Cadastro validado com sucesso!";
    msg.style.color = "green";
}
