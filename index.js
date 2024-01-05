document.addEventListener("DOMContentLoaded", function () {
    // Simula um tempo de carregamento (pode ser removido no ambiente de produção)
    setTimeout(function () {
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Redirecionamento após o carregamento
        window.location.href = "comeco.html";
        1000
    }, 1000); // Tempo de carregamento simulado de 2 segundos
});
