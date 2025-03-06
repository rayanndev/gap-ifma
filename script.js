// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Função para buscar conteúdo
function searchContent() {
    const searchTerm = document.getElementById('search').value;
    alert(`Você buscou por: ${searchTerm}`);
}

// Função para postar comentário
function postComment() {
    const commentText = document.getElementById('comment').value;
    if (commentText.trim() === "") {
        alert("Por favor, escreva um comentário antes de enviar.");
        return;
    }

    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p>${commentText}</p>`;
    commentSection.appendChild(newComment);

    // Limpar a caixa de texto após o envio
    document.getElementById('comment').value = "";
}

// Redirecionar para o vídeo ao clicar no card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const videoURL = this.getAttribute('data-video');
        window.open(videoURL, '_blank');
    });
});

// Mostrar botões de quiz ao marcar como concluído
document.querySelectorAll('.progress-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const quizButton = this.parentElement.querySelector('.quiz-button');
        if (this.checked) {
            quizButton.style.display = 'block';
        } else {
            quizButton.style.display = 'none';
        }
    });
});

// Redirecionar para o quiz ao clicar no botão
document.querySelectorAll('.quiz-button').forEach(button => {
    button.addEventListener('click', function() {
        const quizURL = this.parentElement.getAttribute('data-quiz');
        window.open(quizURL, '_blank');
    });
});
