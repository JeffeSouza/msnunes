<template>
    <div id="home" class="container-fluid m-0" data-v-79358e78="">
        <div id="escritorio" class="session1 container">
            <div class="row g-0">
                <div class="col text">
                    <h2>O ESCRITÓRIO</h2>
                    <p> Movidos por ambições, nosso Escritório é jovem e inovador, atua com as melhores
                        técnicas
                        do mercado, garantindo aos nossos clientes, pessoas físicas ou jurídicas, abordagens criativas e
                        personalizadas em todo o território nacional. </p>
                    <p> Localizado no coração de São Paulo, na região da Luz, com ambiente aconchegante e
                        acolhedor, o Escritório, conta com uma equipe de profissionais altamente capacitados, aptos para
                        adotar a
                        melhor alternativa para cada situação, para isso, utilizamos a técnica e expertise, criando
                        soluções rápidas
                        e
                        eficazes. </p><a href="/escritorio" class=""><button>SAIBA
                            MAIS</button></a>
                </div>
                <div class="col-5 image d-none d-md-block"><img src="../assets/cbb0ec14c5dde2350fc80542cebcb9a8.png"
                        alt="">
                </div>
            </div>
        </div>
        <div id="atuacao" class="session2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2> TRANSPARÊNCIA, EFICÁCIA, PESSOALIDADE &amp; QUALIDADE. </h2>
                        <p> Oferecemos soluções jurídicas para empresas e pessoas físicas através de serviços nas
                            áreas do contencioso judicial e consultoria jurídica, abrangendo o Direito Civil, Comercial
                            e Trabalhista.
                        </p>
                    </div>
                    <div class="col segmentos">
                        <h5> Com dedicação técnica e personalíssima para os seguintes segmentos: </h5>
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
                    </div>
                </div>
            </div>
        </div>
        <div class="session3 container">
            <div class="row g-0">
                <div class="col text">
                    <h2> TRABALHAMOS<br> POR VOCÊ. </h2>
                    <p> Sempre pensando em como auxiliar nossos clientes e buscando inovar no setor jurídico,
                        os
                        advogados do Escritório, utilizando a prática do dia-a-dia e a técnica, trazem a melhor solução
                        jurídica aos
                        nossos clientes. </p>
                </div>
                <div class="col passos">
                    <div class="pass1"><img src="../assets/img_consultas.svg" alt="">
                        <h5>CONSULTAS</h5>
                        <p> A Equipe MS Nunes Faggion irá tirar suas dúvidas, aplicando a técnica ao caso
                            concreto.
                        </p>
                    </div>
                    <div class="bolinhas1">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div class="pass2"><img src="../assets/img_pessoalidade.svg" alt="">
                        <h5>PESSOALIDADE</h5>
                        <p> O atendimento é realizado de forma personalizada, para atender a necessidade de cada
                            caso. </p>
                    </div>
                    <div class="bolinhas2">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div class="pass3"><img src="../assets/img_especializacao.svg" alt="">
                        <h5>ESPECIALIZAÇÃO</h5>
                        <p> Os profissionais do escritório MS Nunes Faggion têm qualificações reconhecidas pelas
                            principais instituições de ensino. </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="contato" class="session35">
            <div class="container">
                <div class="row">
                    <div class="col contato-text">
                        <h2>ENTRE EM CONTATO <br>CONOSCO</h2>
                    </div>
                    <div class="col contato">
                        <div>
                            <form id="contato">
                                <div><input type="text" placeholder="Nome" v-model="name"></div>
                                <div><input type="text" placeholder="E-mail" v-model="mail"></div>
                                <div><input type="text" placeholder="Telefone para contato" v-model="phone"
                                        data-mask="[(##) #####-####,(##) ####-####]" data-mask-inited="true"
                                        data-mask-raw-value=""></div>
                                <div><textarea placeholder="Comentários" v-model="message"></textarea></div>
                                <div><button type="button" v-on:click="sendEmail">Enviar</button></div>
                                <div class="validation">{{validation}}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="session4">
            <div class="container">
                <div class="row">
                    <div class="col contatos">
                        <h2>CONTATO</h2>
                        <h5>Telefones</h5>
                        <div><img src="../assets/ic_tel.svg" alt=""><a href="tel:+551132272748">+55 11 3227-2748</a>
                        </div>
                        <div><img src="../assets/ic_whats.svg" alt=""><a href="https://wa.me/+5511988073158"
                                target="_blank">+55 11
                                9 8807-3158</a></div>
                        <h5>E-mail</h5>
                        <div><img src="../assets/ic_email.svg" alt=""><a
                                href="mailto:contato@msnunesfaggion.com.br">contato@msnunesfaggion.com.br</a></div>
                        <h5>Rededs Sociais</h5>
                        <div><img src="../assets/ic_facebook.svg" alt=""><a href="https://facebook.com/msnunesfaggion"
                                target="_blank">/msnunesfaggion</a></div>
                        <div><img src="../assets/ic_insta.svg" alt=""><a
                                href="https://www.instagram.com/msnunesfaggion/" target="_blank">/msnunesfaggion</a>
                        </div>
                        <div><img src="../assets/ic_linkedin.svg" alt=""><a
                                href="https://www.linkedin.com/company/ms-nunes-faggion/"
                                target="_blank">/msnunesfaggion</a></div>
                    </div>
                    <div class="col">
                        <h5>Endereço</h5><span>Rua João Jacinto, 70/72</span><br><span>Luz São Paulo -
                            SP</span><br><span>CEP:
                            01104-010</span><br><br>
                        <div class="map"><iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.62011161200823!2d-46.62459430942602!3d-23.53531537963406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f07f8e286b%3A0x6423f9ee16a4e4cf!2sMS%20Nunes%20Faggion%20Sociedade%20de%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1643930816110!5m2!1spt-BR!2sbr"
                                width="100%" height="250" allowfullscreen="" loading="lazy"
                                style="border: 0px;"></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
    name: 'HomeView',
    data: function () {
        return {
            name: "",
            mail: "",
            phone: "",
            message: "",
            validation: "",
            success: !1,
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,  /* eslint-disable-line */
        };
    },
    methods: {
        sendEmail: function () {
            var a = this;
            0 != this.name.length &&
                0 != this.mail.length &&
                0 != this.phone.length &&
                0 != this.message.length
                ? this.reg.test(this.mail)
                    ? ((this.validation = ""),
                        (this.validation = ""),
                        (this.success = !1),
                        axios
                            .post(
                                "https://us-central1-msnunesfaggion.cloudfunctions.net/emailMessage",
                                {
                                    name: this.name,
                                    email: this.mail,
                                    phone: this.phone,
                                    message: this.message,
                                }
                            )
                            .then(function () {
                                (a.name = ""),
                                    (a.mail = ""),
                                    (a.phone = ""),
                                    (a.message = ""),
                                    (a.success = !0),
                                    (a.validation = "Mensagem enviada com sucesso!");
                            })
                            .catch(function (e) {
                                console.log(e),
                                    (a.validation =
                                        "Falha ao enviar mensagem. Por favor, tente novamente mais tarde!");
                            }))
                    : (this.validation = "Por favor, insira um e-mail válido")
                : (this.validation = "Por favor, preencha todos os campos!");
        },
    },
}
</script>
<style scoped>
#home {
    padding: 45px 0 0 0;
}

#home .session1 h2 {
    text-align: left;
    font: normal normal 600 36px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #000;
    opacity: 1;
    border-bottom: 8px solid #56276c;
    margin-bottom: 35px;
}

#home .session1 p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    max-width: 410px;
    padding-top: 15px;
}

#home button {
    border: none;
    padding: 0 40px;
    height: 42px;
    margin-top: 20px;
    background-color: #56276c;
    text-align: center;
    font-size: 16px;
    font-family: Montserrat;
    letter-spacing: 0.7px;
    line-height: 0;
    color: #fff;
    min-width: 230px;
}

#home .session2 {
    background-image: url(../assets/bg_areas.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: 65px 0;
    margin-top: 60px;
}

#home .session2 h2 {
    text-align: left;
    font: normal normal 600 36px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #fff;
    opacity: 1;
    max-width: 350px;
    margin-top: 100px;
}

#home .session2 p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #fff;
    opacity: 1;
    max-width: 412px;
    margin-top: 25px;
}

#home .session2 h5 {
    font: normal normal normal 13px/16px Montserrat;
    letter-spacing: 0.47px;
    color: #fff;
    opacity: 1;
    max-width: 290px;
    margin-top: 45px;
}

#home .segmentos {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}

#home .blocos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

#home .blocos div {
    width: 154px;
    height: 90px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: rgba(0, 0, 0, 0.6470588235294118) 0 0 no-repeat padding-box;
    border: 1px solid #fff;
    opacity: 1;
}

#home .blocos span {
    text-align: center;
    font: normal normal normal 12px/15px Montserrat;
    letter-spacing: 0.43px;
    color: #fff;
    opacity: 1;
}

#home .session3 {
    margin-top: 60px;
}

#home .session3 h2 {
    text-align: left;
    font: normal normal 600 36px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #000;
    opacity: 1;
    border-bottom: 8px solid #56276c;
    margin-bottom: 35px;
}

#home .session3 p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    max-width: 410px;
    padding-top: 15px;
}

#home .session3 .passos {
    position: relative;
}

#home .session3 .passos div {
    width: 250px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#home .session3 .passos .bolinhas1 {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 40px;
    left: 215px;
}

#home .session3 .passos .bolinhas2 {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 223px;
    left: 80px;
}

#home .session3 .passos .bolinhas1 span,
#home .session3 .passos .bolinhas2 span {
    width: 6px;
    height: 6px;
    margin: 0 9px;
    border-radius: 25px;
    background-color: #56276c;
}

#home .session3 .passos .bolinhas1 span:nth-child(7) {
    position: relative;
    margin: 0;
    top: 25px;
    left: -15px;
}

#home .session3 .passos .bolinhas1 span:nth-child(8) {
    position: relative;
    margin: 0;
    top: 48px;
    left: -21px;
}

#home .session3 .passos .bolinhas1 span:nth-child(9) {
    position: relative;
    margin: 0;
    top: 71px;
    left: -27px;
}

#home .session3 .passos .bolinhas2 span:nth-child(2) {
    position: relative;
    margin: 0;
    top: 21px;
    left: 15px;
}

#home .session3 .passos .bolinhas2 span:first-child {
    position: relative;
    margin: 0;
    top: 42px;
    left: 21px;
}

#home .session3 .passos img {
    margin-bottom: 10px;
}

#home .session3 .passos h5 {
    text-align: center;
    font: normal normal 600 18px/22px Montserrat;
    letter-spacing: 0.65px;
    color: #56276c;
    opacity: 1;
}

#home .session3 .passos p {
    text-align: center;
    font: normal normal normal 12px/15px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    padding-top: 0;
}

#home .session3 .pass1 {
    background-color: #f6f4f7;
}

#home .session3 .pass2 {
    background-color: #e5dee8;
    margin-left: 230px;
    margin-top: -20px;
}

#home .session3 .pass3 {
    background-color: #b19bbb;
    margin-top: -20px;
}

#home .session3 .pass3 h5,
#home .session3 .pass3 p {
    color: #fff;
}

#home .session35 {
    background-image: url(../assets/bg_contato.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: 115px 0;
    margin-top: 60px;
}

#home .session35 p {
    max-width: 404px;
}

#home .session35 .contato-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#home .session35 .contato-text h2 {
    text-align: center;
    font: normal normal 600 36px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #fff;
    opacity: 1;
}

#home .session35 .contato {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#home .session4 {
    background-color: #f7f7f7;
    margin-top: 45px;
    padding: 60px 0;
}

#home .session4 h2 {
    text-align: left;
    font: normal normal 600 36px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #56276c;
    opacity: 1;
    margin-bottom: 45px;
}

#home .session4 h5 {
    text-align: left;
    font: normal normal 600 20px/24px Montserrat;
    letter-spacing: 0.72px;
    color: #56276c;
    opacity: 1;
    margin-bottom: 20px;
}

#home .session4 a {
    text-decoration: underline;
    opacity: 0.59;
}

#home .session4 a,
#home .session4 span {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #56276c;
}

#home .session4 span {
    opacity: 0.51;
}

#home .session4 .contatos div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

#home .session4 .contatos div img {
    margin-right: 10px;
    width: 23px;
    height: 23px;
}

#home .session4 button {
    width: 100%;
    margin-bottom: 35px;
}

#home .session4 .map {
    width: 100%;
    height: 220px;
}

@media only screen and (max-width: 600px) {
    #home button {
        width: 100%;
    }

    #home .session1 h2 {
        border-bottom: 4px solid #56276c;
    }

    #home .session1 p {
        text-align: left;
        font: normal normal normal 16px/19px Montserrat;
        letter-spacing: 0;
        color: #555;
        opacity: 1;
    }

    #home .session2 {
        background-image: url(../assets/bg_areas_mobile.png);
    }

    #home .session2 h2 {
        text-align: center;
        font: normal normal 600 28px/34px Montserrat;
        letter-spacing: 1.01px;
        color: #fff;
        opacity: 1;
        margin: 0;
        max-width: 100%;
    }

    #home .session2 p {
        text-align: center;
        font: normal normal normal 16px/19px Montserrat;
        letter-spacing: 0;
        color: #fff;
        opacity: 1;
    }

    #home .session2 h5 {
        text-align: center;
        font: normal normal normal 16px/16px Montserrat;
        letter-spacing: 0.47px;
        color: #fff;
        opacity: 1;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    #home .passos {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #home .session3 .passos div {
        width: 100%;
        padding: 20px 80px;
    }

    #home .passos .pass1,
    #home .passos .pass2,
    #home .passos .pass3 {
        margin: 0 0 0 0;
    }

    #home .session4 {
        padding: 40px 0;
        margin-top: 0;
    }

    #home .session4 h2 {
        text-align: center;
        font: normal normal 600 28px/34px Montserrat;
        letter-spacing: 1.01px;
        color: #56276c;
        opacity: 1;
    }

    #home .session35 {
        padding: 45px 0;
        background-image: url(../assets/bg_contato_mobile.png);
    }

    #home .session35 .contato-text h2 {
        text-align: center;
        font: normal normal 600 28px/34px Montserrat;
        letter-spacing: 1.01px;
        color: #fff;
        opacity: 1;
        margin-bottom: 40px;
    }

    #home .session3 .passos .bolinhas1,
    #home .session3 .passos .bolinhas2 {
        position: relative;
        display: flex;
        flex-direction: column;
        top: auto;
        left: auto;
        height: 50px;
        justify-content: space-between;
        padding: 10px;
    }

    #home .session3 .passos .bolinhas1 span,
    #home .session3 .passos .bolinhas2 span {
        width: 6px;
        height: 6px;
        margin: 0 9px;
        border-radius: 25px;
        background-color: #56276c;
    }

    .bolinhas1 span:first-child,
    .bolinhas1 span:nth-child(2),
    .bolinhas1 span:nth-child(3),
    .bolinhas1 span:nth-child(4),
    .bolinhas1 span:nth-child(5),
    .bolinhas1 span:nth-child(6),
    .bolinhas1 span:nth-child(7) {
        display: none;
    }

    #home .session3 .passos .bolinhas1 span:nth-child(8),
    #home .session3 .passos .bolinhas1 span:nth-child(9),
    #home .session3 .passos .bolinhas2 span:first-child,
    #home .session3 .passos .bolinhas2 span:nth-child(2) {
        position: relative;
        margin: 0;
        top: auto;
        left: auto;
    }

    .bolinhas2 span:nth-child(3),
    .bolinhas2 span:nth-child(4),
    .bolinhas2 span:nth-child(5),
    .bolinhas2 span:nth-child(6),
    .bolinhas2 span:nth-child(7),
    .bolinhas2 span:nth-child(8),
    .bolinhas2 span:nth-child(9) {
        display: none;
    }
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
</style>
