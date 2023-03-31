function validarLogin() {
    let email = document.forms["formulario"]["email"].value;
    let senha = document.forms["formulario"]["senha"].value;

    if (email == "" || !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("erro-email").innerHTML = "Por favor, informe um e-mail válido!";
      return false;
    }
    if (senha == "" || senha.length < 6) {
      document.getElementById("erro-senha").innerHTML = "Informe uma senha com pelo menos 6 caracteres!";
      return false;
    }

    return true;
  }

function validarContato() {
    let nome = document.forms["formularioContato"]["nome"].value;
    let mensagem = document.forms["formularioContato"]["mensagem"].value;

    if (nome == "" || nome.length < 10) {
      document.getElementById("erro-nome").innerHTML = "Informe seu nome completo!";
      return false;
    }
    
    if (mensagem == "" || mensagem.length < 16) {
      document.getElementById("erro-mensagem").innerHTML = "Detalhe sua mensagem o máximo possível!";
      return false;
    }

    return true;
  }
