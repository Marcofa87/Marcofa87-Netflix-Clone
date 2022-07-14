document.addEventListener("DOMContentLoaded", function () {


        // Dichiaro Variabili Slider


    var imgVisibile, fratello, successiva;

    var imgVisibile = document.querySelector(".actualSlider");
    var successiva = document.querySelector(".nextSlider");
    var fratello = imgVisibile.nextElementSibling;

    //Dichiaro funzione slider destra

    function slider() {

        imgVisibile = document.querySelector(".actualSlider");
        successiva = document.querySelector(".nextSlider");
        fratello = successiva.nextElementSibling;

        imgVisibile.classList.remove("actualSlider");
        successiva.classList.replace("nextSlider", "actualSlider");

        if (fratello != null) {
            fratello.classList.add("nextSlider");
        }
        else {
            document
                .querySelector(".palinsesto ul")
                .children[0]
                .classList.add("nextSlider");
        }
    }

     //Dichiaro funzione slider Sinistra

    function sliderLeft() {
        console.log("sinistra");
        var ultimaImg = document.querySelector(".palinsesto ul").children.length - 1;
        var imgVisibile = document.querySelector(".actualSlider");
        var imgSucc = document.querySelector(".nextSlider");

        var imgPrec = imgVisibile.previousElementSibling;
        imgSucc.classList.remove("nextSlider");
        imgVisibile.classList.replace("actualSlider", "nextSlider");


        if (imgPrec != null) {
            imgPrec.classList.add("actualSlider");
        }
        else {
            document
                .querySelector(".palinsesto ul")
                .children[ultimaImg]
                .classList.add("actualSlider");
        }
    }

    // Gestione click frecce slider

    document.querySelector(".frecciasinistra img").onclick = function () {
        sliderLeft();
    }
    document.querySelector(".frecciadestra img").onclick = function () {
        slider();
    }

    // Gestione onclick login, kobra kai, equalizer


    document.querySelector("#log").onclick = function () {
        document.querySelector(".entrata").style.display = "block";
    }

    document.querySelector(".close").onclick = function () {
        document.querySelector(".entrata").style.display = "none";
    }

    document.querySelector("#kobrakai").addEventListener("click", function () {
        document.querySelector("#kobra").style.display="block";
    })

    document.querySelector("#kobra .close").addEventListener("click", function(){
        document.querySelector("#kobra").style.display="none"
    })

    document.querySelector("#equavid").addEventListener("click", function(){
        document.querySelector("#equa").style.display="block";
    })


    document.querySelector("#equa .close").addEventListener("click", function(){
        document.querySelector("#equa").style.display="none";
    })

    /*Partenza video Kobra, Equalizer*/

    //DIchiaro Variabili dei Video

    var videoKobra = document.querySelector("#kobrakai video") 
    var videoEqua = document.querySelector("#equavid video")
    
    
    document.querySelector("#kobrakai").addEventListener("mouseenter", function(){
        videoKobra.play();
        document.querySelector("#kobrakai video").style.display="block";
        document.querySelector("#kobrakai img").style.display="none";
    })

    document.querySelector("#kobrakai").addEventListener("mouseleave", function(){
        videoKobra.pause();
        document.querySelector("#kobrakai img").style.display="block";
        document.querySelector("#kobrakai video").style.display="none";
        videoKobra.currentTime=0;
    })


    document.querySelector("#equavid").addEventListener("mouseenter", function(){
        videoEqua.play();
        document.querySelector("#equavid video").style.display="block";
        document.querySelector("#equavid img").style.display="none";
    })

    document.querySelector("#equavid").addEventListener("mouseleave", function(){
        videoEqua.pause();
        document.querySelector("#equavid img").style.display="block";
        document.querySelector("#equavid video").style.display="none";
        videoEqua.currentTime=0;
    })


        //Verifica compilazione form

        //Dichiaro Variabili


    var modulo = document.querySelector("#login form");
    var mail = document.getElementById("email");
    var password = document.getElementById("pass");


    modulo.onsubmit = function (e) {
        e.preventDefault();

        //Email


        if (campoVuoto(mail, 8) == true) {
            //vuol dire che c'è un errore
            mail.classList.add("errore");
            mail.nextElementSibling.innerHTML = "Devi scrivere almeno 8 caratteri";
        }
        else {
            if (checkMail(mail) == false) {
                mail.classList.add("errore");
                mail.nextElementSibling.innerHTML = "Email errata";
            }
            else {
                mail.classList.remove("errore");
                mail.nextElementSibling.innerHTML = "";
            }
        }

        //Password

        if (campoVuoto(password, 5) == true) {
            //vuol dire che c'è un errore
            password.classList.add("errore");
            password.nextElementSibling.innerHTML = "Devi scrivere almeno 5 caratteri";
        }
        else {
            if (checkPassword(password) == false) {
                password.classList.add("errore");
                password.nextElementSibling.innerHTML = "Password non corretta";
            }
            else {
                password.classList.remove("errore");
                password.nextElementSibling.innerHTML = "";
            }
        }


        //devo decidere se spedire i dati

        var numErrori = document.querySelectorAll(".errore").length;
        console.log(numErrori);

        if (numErrori == 0) {
            //qui ho la certezza di poter spedire i dati del modulo
            console.log("spedisci i dati");
            //modulo.submit();
        }


    }


        //Funzione di verifica dei campi

    function campoVuoto(campo, max) {

        if (campo.value.trim().length < max) {
            return true; //tipo di dato booleano
        }
        else {
            return false;
        }

    }

    //Funzioni verifica corretto inserimento del testo


    function checkMail(mail) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/
        return regex.test(mail.value.trim());
    }

    function checkPassword(password) {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        return passw.test(password.value.trim());

    }

})
