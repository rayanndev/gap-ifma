// Modo Escuro com Interruptor de Lanterna
function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.querySelector(".dark-mode-button");

    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");

    // Animação do interruptor
    if (body.classList.contains("dark-mode")) {
        darkModeButton.innerHTML = `<i class="fas fa-sun"></i> Modo Claro`;
        darkModeButton.style.backgroundColor = "#333";
    } else {
        darkModeButton.innerHTML = `<i class="fas fa-moon"></i> Modo Escuro`;
        darkModeButton.style.backgroundColor = "#4CAF50";
    }
}

// Verificar modo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeButton = document.querySelector(".dark-mode-button");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeButton.innerHTML = `<i class="fas fa-sun"></i> Modo Claro`;
        darkModeButton.style.backgroundColor = "#333";
    } else {
        darkModeButton.innerHTML = `<i class="fas fa-moon"></i> Modo Escuro`;
        darkModeButton.style.backgroundColor = "#4CAF50";
    }
});
// Mostrar botão de quiz ao marcar como concluído
document.addEventListener("DOMContentLoaded", function () {
    let checkboxes = document.querySelectorAll(".progress-checkbox");

    checkboxes.forEach((checkbox, index) => {
        let storedValue = localStorage.getItem("card" + index);
        if (storedValue === "checked") {
            checkbox.checked = true;
            checkbox.parentElement.querySelector(".quiz-button").style.display = "block";
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem("card" + index, checkbox.checked ? "checked" : "unchecked");
            checkbox.parentElement.querySelector(".quiz-button").style.display = checkbox.checked ? "block" : "none";
        });
    });

    // Redirecionar para o quiz
    document.querySelectorAll(".quiz-button").forEach(button => {
        button.addEventListener("click", () => {
            let quizLink = button.parentElement.getAttribute("data-quiz");
            window.open(quizLink, "_blank");
        });
    });
});

// Pesquisa de Conteúdo
function searchContent() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Área de Comentários
function postComment() {
    let comment = document.getElementById("comment").value;
    if (comment.trim()) {
        document.getElementById("comment-section").innerHTML += `<p>${comment}</p>`;
        document.getElementById("comment").value = "";
    }
}