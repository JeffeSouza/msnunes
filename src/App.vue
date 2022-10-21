<template>
    <NavBar />
    <router-view />
    <Footer />
</template>

<script>
import NavBar from '@/components/Nav-bar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);

#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    background-image: url(assets/bg_header.high_blur.svg);
    background-repeat: no-repeat;
    background-size: cover;
}

#nav .logo img {
    height: 120px;
    margin: 10px;
}

#nav .menu {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 27px;
}

#nav .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
}

#nav .header,
.hd {
    display: flex;
}

@media (min-width: 768px) {
    #nav .is_sticky .menu {
        margin-top: 0;
    }

    .is_sticky .hd {
        display: flex;
        align-items: center;
    }

    #nav .header.is_sticky {
        position: fixed;
        background: #fff 0 0 no-repeat padding-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1607843137254902);
        left: 0;
        right: 0;
        z-index: 9999;
    }

    #nav .header.is_sticky a {
        color: #56276c;
        opacity: 0.67 !important;
        font: normal normal 600 13px/16px Montserrat !important;
    }

    #nav .header.is_sticky img {
        height: 80px;
        margin: 10px 0;
    }

    #nav .is_sticky a.router-link-exact-active {
        font: normal normal 600 13px/16px Montserrat !important;
        letter-spacing: 0.47px;
        color: #56276c;
        opacity: 1;
    }

    #nav .is_sticky .redes-web {
        display: flex;
        width: 110px;
        height: 80px;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
    }

    #nav .is_sticky .redes-web img {
        height: 25px;
    }
}

#nav .menu a {
    text-decoration: none;
    font: normal normal 400 13px/16px Montserrat !important;
    letter-spacing: 0.47px;
    color: #fff;
    opacity: 0.67 !important;
    text-transform: uppercase;
    padding: 0 30px;
}

#nav a.router-link-exact-active {
    font: normal normal 500 13px/16px Montserrat !important;
}

footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer.bg {
    background: #f7f7f7 0 0 no-repeat padding-box;
    height: auto;
}

footer p {
    margin: 0;
}

footer a,
footer p {
    text-align: center;
    font: normal normal normal 13px/16px Montserrat;
    letter-spacing: 0;
    color: #56276c;
}

footer a {
    opacity: 1;
}

#nav .redes-web {
    display: flex;
    width: 110px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
}

@media only screen and (max-width: 600px) {
    #nav {
        background-image: url(assets/bg_header_mobile.png);
        padding: 0;
    }

    #nav .header {
        background: #fff;
        position: fixed;
        width: 100%;
        z-index: 9999;
    }

    #nav .header img {
        height: 80px;
    }

    #nav .navbar {
        position: absolute;
        width: 100%;
        top: 73px;
        left: 0;
        background: #fff;
        text-align: center;
    }

    #nav .navbar a {
        padding: 20px 0;
        font: normal normal 600 13px/16px Montserrat;
        letter-spacing: 0.47px;
        color: #000;
        opacity: 0.67;
    }

    #nav .hd {
        justify-content: space-between;
    }

    #nav .hd .controls {
        display: flex;
    }

    #nav .hd .controls img {
        width: 16px;
        height: 16px;
    }

    #nav .hd .controls .redes {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 25px;
    }

    .navbar-toggler-icon {
        width: 20px;
        height: 20px !important;
    }

    .navbar-toggler:focus {
        box-shadow: none !important;
    }

    #nav .hd-content {
        padding-top: 80px;
    }

    #nav .redes-web {
        display: none;
    }
}
input[type="text"] {
    height: 48px;
}

input[type="text"],
textarea {
    width: 520px;
    padding: 10px;
    margin: 5px;
    border: none;
    border: 0.5px solid #a7a7a7;
    border-radius: 2px;
}

textarea {
    height: 100px;
}

button {
    width: 520px;
    margin: 5px;
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
    min-width: 230px;
}

input[type="text"]::-moz-placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

input[type="text"]:-ms-input-placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

input[type="text"]::placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

textarea::-moz-placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

textarea:-ms-input-placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

textarea::placeholder {
    text-align: left;
    font: normal normal 700 12px/18px Montserrat;
    letter-spacing: 0;
    color: #555;
    opacity: 1;
}

.validation {
    color: #db4949;
    text-align: center;
    font: normal normal 700 14px/20px Montserrat;
}

.validation.success {
    color: #fff;
}

@media only screen and (max-width: 600px) {

    button,
    input[type="text"],
    textarea {
        width: 350px;
    }
}
</style>
