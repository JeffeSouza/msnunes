<template>
    <div class="container contato" data-v-79358e78="">
        <div class="row">
            <div class="col contato-text">
                <h2>ENTRE EM CONTATO CONOSCO</h2>
                <h5>Telefones</h5>
                <div><img src="../assets/ic_tel.svg" alt=""><a href="tel:+551132272748">+55 11 3227-2748</a></div>
                <div><img src="../assets/ic_whats.svg" alt=""><a href="https://wa.me/+5511988073158" target="_blank">+55
                        11 9 8807-3158</a>
                </div>
                <h5>E-mail</h5>
                <div><img src="../assets/ic_email.svg" alt=""><a
                        href="mailto:contato@msnunesfaggion.com.br">contato@msnunesfaggion.com.br</a>
                </div>
            </div>
            <div class="col">
                <div>
                    <form id="contato">
                        <div><input type="text" placeholder="Nome" v-model="name"></div>
                        <div><input type="text" placeholder="E-mail" v-model="mail"></div>
                        <div><input type="text" placeholder="Telefone para contato" v-model="phone"
                             data-mask="[(##) #####-####,(##) ####-####]" ></div>
                        <div><textarea placeholder="Comentários" v-model="message"></textarea></div>
                        <div><button type="button" v-on:click="sendEmail">Enviar</button></div>
                        <div class="validation">{{validation}}</div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mapa">
            <p>Você pode nos encontrar nesse endereço aqui:</p><span>Rua João
                Jacinto,
                70/72 - Luz, São Paulo - SP - CEP: 01104-010</span>
            <div class="map"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.62011161200823!2d-46.62459430942602!3d-23.53531537963406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f07f8e286b%3A0x6423f9ee16a4e4cf!2sMS%20Nunes%20Faggion%20Sociedade%20de%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1643930816110!5m2!1spt-BR!2sbr"
                    width="100%" height="350" allowfullscreen="" loading="lazy" style="border: 0px;"></iframe></div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'ContatoView',
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
.contato {
    margin-top: 55px;
}

.contato .contato-text p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
    margin-bottom: 45px;
}

.contato .contato-text h2 {
    text-align: left;
    font: normal normal 600 24px/44px Montserrat;
    letter-spacing: 1.3px;
    color: #56276c;
    opacity: 1;
    margin-bottom: 45px;
}

.contato .contato-text h5 {
    text-align: left;
    font: normal normal 600 20px/19px Montserrat;
    letter-spacing: 0.72px;
    color: #56276c;
    opacity: 1;
    margin-bottom: 20px;
}

.contato .contato-text a {
    text-align: left;
    text-decoration: underline;
    font: normal normal normal 16px/16px Montserrat;
    letter-spacing: 0;
    color: #56276c;
    opacity: 0.59;
}

.contato .contato-text span {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    color: #56276c;
    opacity: 0.51;
}

.contato .contato-text div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.contato .contato-text div img {
    margin-right: 10px;
    width: 16px;
    height: 16px;
}

.mapa {
    margin-top: 30px;
    margin-bottom: 55px;
}

.mapa p {
    color: #555;
}

.mapa p,
.mapa span {
    text-align: center;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0;
    opacity: 1;
}

.mapa span {
    color: #000;
    margin-bottom: 25px;
}

@media only screen and (max-width: 600px) {
    .contato {
        margin-top: 25px;
    }

    #contato {
        text-align: center;
    }

    .contato .contato-text {
        padding-left: 30px;
    }

    .contato .contato-text h2 {
        font: normal normal 600 19px/44px Montserrat;
        margin-bottom: 15px;
    }
}
</style>