<template>
    <div id="nav" class="container-fluid">
        <div class="header" :class="isSticky ? this.stickyClass : ''">
            <div class="container hd">
                <div class="logo">
                    <a href="/">
                        <img v-if="isSticky" class="d-block d-md-block" src="../assets/Logo_home_menu.svg">
                        <img v-if="!isSticky" class="d-none d-md-block" src="../assets/Logo_home.svg">
                    </a>
                </div>
                <div class="controls d-flex d-md-none">
                    <div class="redes">
                        <a href="https://wa.me/+5511988073158" target="_blank">
                            <img src="../assets/ic_whats.svg" alt="">
                        </a>
                        <a href="https://facebook.com/msnunesfaggion" target="_blank">
                            <img src="../assets/ic_facebook.svg" alt="">
                        </a>
                        <a href="https://www.instagram.com/msnunesfaggion/" target="_blank">
                            <img src="../assets/ic_insta.svg" alt="">
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img class="navbar-toggler-icon" src="../assets/ic_hamburger_ppurple.svg" alt="">
                    </button>
                </div>
                <nav class="navbar navbar-expand-lg menu">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <router-link to="/">Home</router-link>
                            <router-link to="escritorio">O Escritório</router-link>
                            <router-link to="atuacao">Áreas de Atuação</router-link>
                            <router-link to="contato">Contato</router-link>
                        </ul>
                    </div>
                </nav>
                <div class="redes-web">
                    <a href="https://wa.me/+5511988073158" target="_blank">
                        <img src="../assets/ic_whats.svg" alt=""></a><a href="https://facebook.com/msnunesfaggion"
                        target="_blank">
                        <img src="../assets/ic_facebook.svg" alt="">
                    </a>
                    <a href="https://www.instagram.com/msnunesfaggion/" target="_blank">
                        <img src="../assets/ic_insta.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="container hd-content">
            <div class="conteudo">
                <div v-if="$route.name == 'home'">
                    <h1 class="home">Advocacia especializada.</h1>
                    <h2>Excelência jurídica para uma nova era da advocacia.</h2>
                    <p>Profissionais aptos para solucionar seus problemas.</p>
                    <a href="/contato" class="">
                        <button>Agende sua consulta</button>
                    </a>
                </div>
                <div v-else>
                    <h1>{{$route.name}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav-bar',
    data: function () {
        return {
            isSticky: false,
            stickyClass: "is_sticky",
            scrollPosition: 0,
            // mobileButton: t("d379"),
            close: !1,
        };
    },
    created: function () {
        window.addEventListener("scroll", this.handleScroll);
    },
    mounted: function () {
        new Date();
        (function () {
            var a = document.createElement("script"),
                e = document.getElementsByTagName("script")[0];
            (a.async = !0),
                (a.src =
                    "https://embed.tawk.to/61e89ee8f7cf527e84d30c65/1fpqapfpq"),
                (a.charset = "UTF-8"),
                a.setAttribute("crossorigin", "*"),
                e.parentNode.insertBefore(a, e);
        })();
    },
    unmounted: function () {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            (this.scrollPosition = window.scrollY),
                this.scrollPosition >= 100
                    ? (this.isSticky = true)
                    : (this.isSticky = false);
        },
        // toggleButton: function () {
        //     this.close
        //         ? ((this.mobileButton = t("d379")), (this.close = !1))
        //         : ((this.mobileButton = t("c9dd")), (this.close = !0));
        // },
    },
}
</script>

<style scoped>
h1 {
    text-align: left;
    font: normal normal normal 42px/59px Vollkorn;
    letter-spacing: 1.3px;
    color: #fff;
    opacity: 1;
}

.conteudo h2 {
    font: italic normal normal 38px Vollkorn !important;
    letter-spacing: 1.51px;
}

.conteudo,
.home {
    text-align: left;
    font: normal normal normal 42px/59px Vollkorn;
    letter-spacing: 1.51px;
    color: #fff;
    opacity: 1;
}

.conteudo {
    padding: 45px 0 45px 0;
}

.conteudo p {
    text-align: left;
    font: normal normal normal 16px/19px Montserrat;
    letter-spacing: 0.58px;
    color: #fff;
    opacity: 0.6;
    margin-top: 16px;
}

.conteudo button {
    border: none;
    padding: 0 40px;
    height: 42px;
    background-color: #56276c;
    text-align: center;
    font-size: 16px;
    font-family: Montserrat;
    letter-spacing: 0.7px;
    line-height: 0;
    color: #fff;
}

@media only screen and (max-width: 600px) {
    .conteudo h1 {
        font-size: 37px;
        line-height: 46px;
    }

    .conteudo h2 {
        font-size: 32px !important;
    }

    .conteudo {
        padding: 35px 0 35px 0;
        margin-top: 36px;
    }
}
</style>