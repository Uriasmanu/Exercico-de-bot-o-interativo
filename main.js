
const click = document.getElementById("button");

click.addEventListener("click", (event) => {
    var nome = window.prompt ("Digite o seu nome:")
    alert(` Bem vindo(a) ${nome} !` )
})

