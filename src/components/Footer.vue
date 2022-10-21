<template>
    <div>
        <footer v-if="$route.name == 'home'">
            <p> MS Nunes Faggion, 2021. Todos os direitos reservados. <a href="#" target="_blank"
                    rel="Política de Privacidade">Política de Privacidade</a></p>
            <!---->
        </footer>
        <footer class="bg" v-else>
            <!---->
            <div class="container">
                <div class="rodape">
                    <div class="sitemap">
                        <h5>SITEMAP</h5>
                        <a href="/home" class="">HOME</a>
                        <a href="/escritorio" class="router-link-active router-link-exact-active"
                            aria-current="page">ESCRITÓRIO</a>
                        <a href="/atuacao" class="">ÁREAS DE ATUAÇÃO</a><a href="/contato" class="">CONTATO</a>
                    </div>
                    <div class="contatos">
                        <h5>Telefones</h5>
                        <div>
                            <img src="../assets/ic_tel.svg" alt="">
                            <a href="tel:+551132272748">+55 11 3227-2748</a>
                        </div>
                        <div>
                            <img src="../assets/ic_whats.svg" alt="">
                            <a href="https://wa.me/+5511988073158" target="_blank">+55 11 9 8807-3158</a>
                        </div>
                        <h5>E-mail</h5>
                        <div>
                            <img src="../assets/ic_email.svg" alt="">
                            <a href="mailto:contato@msnunesfaggion.com.br">contato@msnunesfaggion.com.br</a>
                        </div>
                    </div>
                    <div class="web">
                        <h5>WEB</h5>
                        <div>
                            <img src="../assets/ic_facebook.svg" alt="">
                            <a href="https://facebook.com/msnunesfaggion" target="_blank">/msnunesfaggion
                            </a>
                        </div>
                        <div><img src="../assets/ic_insta.svg" alt="">
                            <a href="https://www.instagram.com/msnunesfaggion/" target="_blank">/msnunesfaggion</a>
                        </div>
                        <div>
                            <img src="../assets/ic_linkedin.svg" alt="">
                            <a href="https://www.linkedin.com/company/ms-nunes-faggion/" target="_blank">/msnunesfaggion
                            </a>
                        </div>
                    </div>
                    <div class="endereco">
                        <h5>ENDEREÇO</h5>
                        <span>Rua João Jacinto, 70/72</span>
                        <br>
                        <span>Luz, São Paulo - SP</span>
                        <br>
                        <span>CEP: 01104-010</span>
                        <br>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'FooterMain'
}
</script>

<style>
.rodape {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 0;
}

.rodape h5 {
    font: normal normal 600 16px/19px Montserrat;
    letter-spacing: 0.58px;
    margin-top: 20px;
}

.rodape a,
.rodape h5 {
    text-align: left;
    color: #56276c;
    opacity: 1;
}

.rodape a {
    font: normal normal 600 13px/16px Montserrat;
    letter-spacing: 0.47px;
}

.rodape span {
    text-align: left;
    text-decoration: underline;
    font: normal normal normal 13px/16px Montserrat;
    letter-spacing: 0;
    color: #56276c;
    opacity: 1;
}

.rodape .sitemap {
    display: flex;
    flex-direction: column;
}

.rodape .sitemap a {
    text-decoration: none;
    margin-top: 15px;
}

.rodape .contatos {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.rodape .contatos img {
    margin-right: 10px;
    width: 16px;
    height: 16px;
}

.rodape .web div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.rodape .web div img {
    margin-right: 10px;
    width: 16px;
    height: 16px;
}

.rodape .endereco {
    text-align: left;
}

@media only screen and (max-width: 600px) {
    .rodape {
        flex-direction: column;
        align-items: center;
    }

    .rodape a,
    .rodape div,
    .rodape h5 {
        text-align: center;
    }
}
</style>