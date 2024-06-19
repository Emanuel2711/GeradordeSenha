let sliderElement = document.querySelector("#slider"); // Tamanho da senha desejada passada pelo usuario 
let buttonElement = document.querySelector("#button"); //

let sizePassword = document.querySelector("#valor"); // tamanho da senha no tooltip 
let password = document.querySelector("#password"); // Senha que será gerada para o usuario

let containerPassword = document.querySelector("#container-password"); //

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRDTUVXWYZ0123456789!@#$%&*+-"; // Caracteres que poderão estar presentes na senha gerada
let novaSenha = ""; // Senha inicial igual a vazia por ainda não ter sido gerada

sizePassword.innerHTML = sliderElement.value; // igualando tamaho da senha igual ao tamanho escolhido no tooltip

sliderElement.oninput = function(){ // Função para atualizar em tempo real
    sizePassword.innerHTML = this.value;
}

function generatePassword(){ // função para gerar nova senha
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass; 
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("senha copiada com sucesso!");

}