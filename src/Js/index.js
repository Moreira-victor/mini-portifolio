/*

Meta - ao clicar em uma das duas abas é preciso que mostre somente o conteúdo dela
sendo assim, ao clicar em outra aba, o conteúdo deve mudar.


*/

// Primeiro passo - Fazer alguma forma de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

// Segundo passo - Fazer com que um clique seja identificado no elemento aba

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    // Terceiro passo - Quando houver um clique, desmarcar a aba selecionada

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    // Quarto passo - Marcar a aba clicada como selecionada

    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
     // Quinto passo - esconder o conteúdo anterior

     const informacaoSelecionada = document.querySelector(".informacao.selecionado");
     informacaoSelecionada.classList.remove("selecionado");

     //Sexto passo - mostrar o conteúdo da aba selecionada

     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

     const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")

}