// Aguarda o DOM (Document Object Model) ser completamente carregado antes de executar o script.
// Isso garante que todos os elementos HTML, como o botão de download, estejam disponíveis.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de download usando sua classe CSS.
    // O querySelector retorna o primeiro elemento que corresponde ao seletor.
    const downloadButton = document.querySelector('.download-button');

    // Verifica se o botão de download foi encontrado na página.
    // Isso evita erros caso o elemento não exista.
    if (downloadButton) {
        // Adiciona um "ouvinte de evento" (event listener) para o clique no botão.
        // Toda vez que o botão for clicado, a função dentro será executada.
        downloadButton.addEventListener('click', (event) => {
            // Opcional: Para evitar que o link navegue para uma nova página,
            // mas como é um link de download com 'download' atributo,
            // geralmente não é necessário e pode até ser removido.
            // event.preventDefault(); 

            // Log no console para confirmar que o botão foi clicado.
            // Isso é útil para depuração e para ver a ação no console do navegador (F12).
            console.log('Botão de download do APK clicado!');

            // --- Exemplo de funcionalidade adicional (opcional) ---

            // Você pode adicionar uma mensagem ao usuário.
            // Por exemplo, criar ou exibir um elemento na página:
            const messageArea = document.createElement('p');
            messageArea.textContent = 'Seu download deve começar em breve...';
            messageArea.style.marginTop = '15px';
            messageArea.style.color = '#333';
            // Adiciona a mensagem logo abaixo do botão ou em outro lugar que você preferir
            document.querySelector('.container').appendChild(messageArea);

            // Remover a mensagem após alguns segundos (opcional)
            setTimeout(() => {
                if (messageArea.parentNode) {
                    messageArea.parentNode.removeChild(messageArea);
                }
            }, 3500); // Remove a mensagem após 3,5 segundos

        });
    } else {
        // Log se o botão não for encontrado, útil para depuração.
        console.warn('Elemento com a classe ".download-button" não encontrado.');
    }
});