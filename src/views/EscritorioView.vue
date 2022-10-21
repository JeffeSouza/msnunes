<template>
    <div class="container" data-v-79358e78="">
        <p> Movidos por ambições, nosso Escritório Boutique é jovem e inovador, atua com as melhores
            técnicas do mercado, garantindo aos nossos clientes, pessoas físicas ou jurídicas, abordagens criativas e
            personalizadas em todo o território nacional. </p>
        <p> Localizado no coração de São Paulo, na região da Luz, com ambiente aconchegante e
            acolhedor,
            o
            Escritório, conta com uma equipe de profissionais altamente capacitados, aptos para adotar a melhor
            alternativa
            para
            cada situação, para isso, utilizamos a técnica e expertise, criando soluções rápidas e eficazes. </p>
        <h3> A nossa cultura está atrelada a TRANSPARÊNCIA, EFICÁCIA, PESSOALIDADE &amp; QUALIDADE.
        </h3>
        <p> Oferecemos serviços nas áreas consultiva e contencioso judicial, abrangendo questão do
            Direito
            Civil, Consumidor, Trabalho e Digital e, de forma exemplificativa, segue abaixo lista de alguns casos em que
            podemos
            ajudá-lo: </p>
        <div class="blocos">
            <div><span>Ações Trabalhistas</span></div>
            <div><span>Acidente de trabalho</span></div>
            <div><span>Aposentadoria e Auxílio doença</span></div>
            <div><span>Bens móveis e imóveis</span></div>
            <div><span>Contratos e obrigações</span></div>
            <div><span>Consumidor</span></div>
            <div><span>Falimentar</span></div>
            <div><span>Família e Sucessões</span></div>
            <div><span>Revisional de FGTS</span></div>
            <div><span>Recuperação de Crédito</span></div>
            <div><span>Societário</span></div>
            <div><span>Sucessões Empresariais</span></div>
        </div>
        <p class="sbb"> Se Você não encontrou nesta lista o que estava procurando, não se preocupe,
            esta
            lista é meramente exemplificativa, mande suas dúvidas através de nossa caixa de perguntas e nossa equipe irá
            entrar
            em contato para agendar consulta com um dos nossos profissionais. </p>
        <p> Enquanto isso, conheça um pouco sobre a nossa estrutura e não se esqueça de nos fazer uma
            visita. </p><img src="../assets/galeria.jpg" alt="galeria">
        <div class="endereco">
            <h5>Você pode nos encontrar nesse endereço aqui:</h5>
            <p> Rua João Jacinto, 70/72 - Luz, São Paulo - SP - CEP: 01104-010 </p>
            <div class="map"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.62011161200823!2d-46.62459430942602!3d-23.53531537963406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f07f8e286b%3A0x6423f9ee16a4e4cf!2sMS%20Nunes%20Faggion%20Sociedade%20de%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1643930816110!5m2!1spt-BR!2sbr"
                    width="100%" height="350" allowfullscreen="" loading="lazy" style="border: 0px;"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
p:first-child {
    margin-top: 20px;
    padding-bottom: 0;
}

p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    padding: 20px 0;
    margin: 0;
}

h3 {
    text-align: center;
    font: normal normal 600 18px Montserrat;
    letter-spacing: 1.3px;
    color: #56276c;
    opacity: 1;
    margin: 0;
}

h5 {
    text-align: center;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    margin-top: 30px;
}

.sbb {
    padding-bottom: 0;
}

.endereco {
    margin-bottom: 55px;
}

.endereco p {
    text-align: center;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #000;
    opacity: 1;
}

.blocos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

.blocos div {
    border: 1px solid #555;
    width: 195px;
    height: 90px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    opacity: 1;
}

.blocos span {
    text-align: center;
    font: 700 normal normal 15px/15px Montserrat;
    letter-spacing: 0.6px;
    line-height: 20px;
    color: #56276c;
    opacity: 1;
}

img {
    width: 100%;
}

.gallery {
    width: 1040px;
}

.gallery img {
    margin: 8px;
}

.gallery .linha {
    display: flex;
}

.gallery .coluna {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.img1 {
    width: 608px;
    height: 400px;
    margin-left: 0 !important;
}

.img2,
.img3,
.img7,
.img8,
.img9,
.img10,
.img11,
.img12 {
    width: 192px;
    height: 192px;
}

.img4,
.img6 {
    width: 400px;
    height: 192px;
}

.gallery .img5 {
    width: 192px;
    height: 400px;
    margin-left: 0 !important;
}

@media only screen and (max-width: 600px) {
    .container {
        padding: 0 24px;
    }

    p:first-child {
        margin-top: 20px;
    }

    p {
        padding: 26px 0;
        text-align: justify;
    }

    h3 {
        font: normal normal 600 18px/38px Montserrat;
        line-height: 24px;
    }

    .blocos div {
        width: 150px;
    }
}
</style>
