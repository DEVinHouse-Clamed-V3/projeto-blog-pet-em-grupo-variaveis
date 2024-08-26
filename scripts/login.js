const users = [
    { email: "teste1@teste.com", password: "123456" },
    { email: "teste2@teste.com", password: "abcdef" }
];

localStorage.setItem('users', JSON.stringify(users));

document.getElementById('loginForm').addEventListener('submit', function(event) {
    console.log("teste");

    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //validacao dos campos do formulario
    if(email === "" && password === "") {
        document.getElementById('errorMessage').innerText = "Este campo é obrigatorio.";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById('errorMessage2').innerText = "Este campo é obrigatorio.";
        document.getElementById("password").style.border = "1px solid red";
        return;
    }

    if (email === "") {
        document.getElementById('errorMessage').innerText = "Este campo é obrigatorio.";
        document.getElementById("email").style.border = "1px solid red";
        return;
    }

    if (password === "") {
        document.getElementById('errorMessage2').innerText = "Este campo é obrigatorio.";
        document.getElementById("password").style.border = "1px solid red";
        return;
    }

    if(email.length < 5){
        document.getElementById('errorMessage').innerText = "Email inválido.";
        document.getElementById("email").style.border = "1px solid red";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        document.getElementById('errorMessage').innerText = "Email inválido.";
        document.getElementById("email").style.border = "1px solid red";
        return;
    }

    if (password.length < 6) {
        document.getElementById('errorMessage2').innerText = "A senha deve ter no mínimo 6 caracteres.";
        document.getElementById("password").style.border = "1px solid red";
        return;
    }

     // Simulação de usuários salvos no localStorage (Substitua por dados reais)
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = "cadastro_post.html"; // Redireciona para a tela "Home" (pode mudar para o link real)
    } else {
        alert("Usuário ou senha inválidos.");

        // Limpa os campos de email e senha
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";

        // Coloca o foco no campo de email
        document.getElementById('email').focus();

        // Limpa as mensagens de erro
        document.getElementById('errorMessage').innerText = "";
        document.getElementById("email").style.border = "";

        document.getElementById('errorMessage2').innerText = "";
        document.getElementById("password").style.border = "";
    }
});

document.getElementById('password').addEventListener('paste', function(event) {
    const pastedContent = event.clipboardData.getData('text');
    event.preventDefault();
    this.value += pastedContent + pastedContent;
});

document.getElementById("email").addEventListener("focus", function() {
    document.getElementById("email").style.border = "1px solid #ccc";
    document.getElementById('errorMessage').innerText = "";
});

document.getElementById("password").addEventListener("focus", function() {
    document.getElementById("password").style.border = "1px solid #ccc";
    document.getElementById('errorMessage2').innerText = "";
});