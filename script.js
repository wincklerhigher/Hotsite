$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        alert('Mensagem enviada com sucesso! (Esta é uma mensagem fictícia)');

        $('#contact-form')[0].reset();
    });

    $('.popup-link').click(function (e) {
        e.preventDefault();
        openPopup($(this).data('type'));
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('#popup-content').length && !$(e.target).closest('.popup-link').length) {
            closePopup();
        }
    });

    function openPopup(type) {
        var popup = $('#popup');
        var content = $('#popup-content');
        content.empty();

        if (type === 'agenda') {
            content.html('<h3>Agenda de Eventos</h3>' +
                '<p><strong>Data:</strong> 10 de Fevereiro de 2023</p>' +
                '<p><strong>Evento:</strong> Caminhada da Saúde</p>' +
                '<p><strong>Descrição:</strong> Junte-se a nós para uma caminhada saudável pela comunidade. Vamos promover a importância do exercício físico para uma vida ativa e vibrante.</p>' +
                '<p><strong>Data:</strong> 18 de Março de 2023</p>' +
                '<p><strong>Evento:</strong> Workshop de Nutrição</p>' +
                '<p><strong>Descrição:</strong> Aprenda sobre escolhas alimentares saudáveis e como incorporar uma dieta equilibrada em sua rotina diária.</p>');
        } else if (type === 'dicas') {
            content.html('<h3>Dicas de Vida Saudável</h3>' +
                '<p><strong>Dica 1:</strong> Mantenha-se hidratado! Beba pelo menos 8 copos de água por dia para manter seu corpo funcionando adequadamente.</p>' +
                '<p><strong>Dica 2:</strong> Adote uma rotina de exercícios. Envolva-se em atividades físicas que você goste, como caminhadas, corridas ou danças.</p>' +
                '<p><strong>Dica 3:</strong> Alimente-se com cores! Consuma uma variedade de frutas e vegetais para obter uma ampla gama de nutrientes.</p>' +
                '<p><strong>Dica 4:</strong> Priorize o sono. Garanta uma boa qualidade de sono todas as noites para promover a recuperação e o bem-estar.</p>' +
                '<p><strong>Dica 5:</strong> Cultive relacionamentos saudáveis. Mantenha conexões sociais significativas para apoiar sua saúde mental.</p>');
        } else if (type === 'apoiadores') {
            content.html('<h3>Apoiadores</h3>' +
                '<ul class="apoiadores-list">' +
                '   <li>Faber-Castell</li>' +
                '   <li>Natura</li>' +
                '   <li>Cielo</li>' +
                '   <li>IBM</li>' +
                '   <li>Porto Seguro</li>' +
                '</ul>');
        }
        popup.fadeIn();
    }

    function closePopup() {
        var popup = $('#popup');
        popup.fadeOut();
    }
});
