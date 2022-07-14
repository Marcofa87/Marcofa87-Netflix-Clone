window.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#logaccount").onclick = function () {
        document.querySelector(".entrata").style.display = "block";
    }

    //Dichiaro Variabili

    var modulo = document.querySelector("#logaccount form");
    var mail = document.getElementById("emails");
    var password = document.getElementById("passw");
    var passwRpt = document.getElementById("passwrd")


    //Funzione per correzione Modulo


    modulo.onsubmit = function (e) {
        e.preventDefault();

        

        //check Email

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

        //Check 1 passaword



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

        //Check 2 passaword



        if (campoVuoto(passwRpt, 5) == true) {
            passwRpt.classList.add("errore");
            passwRpt.nextElementSibling.innerHTML = "Devi scrivere almeno 5 caratteri";
        } else {
            if(checkPsw(passwRpt) == false){
                passwRpt.classList.add("errore");
                passwRpt.nextElementSibling.innerHTML = "Password non corretta";
            }
            else {
                passwRpt.classList.remove("errore");
                passwRpt.nextElementSibling.innerHTML = "";
            }
        }

         if(passwRpt.value == password.value) {
             console.log("Password Ok")
         } else{
            passwRpt.classList.add("errore");
            passwRpt.nextElementSibling.innerHTML = "Password non coincidenti";
            password.classList.add("errore");
            password.nextElementSibling.innerHTML = "Password non coincidenti";
         }
        //Spedizione dati

        var numErrori = document.querySelectorAll(".errore").length;
        console.log(numErrori);

        if (numErrori == 0) {
            //qui ho la certezza di poter spedire i dati del modulo
            console.log("spedisci i dati");
            //modulo.submit();
        }


    }


        //Funzione per controllare lunghezza caratteri

    function campoVuoto(campo, max) {

        if (campo.value.trim().length < max) {
            return true; //tipo di dato booleano
        }
        else {
            return false;
        }

    }

    // Funzioni Regex per verificare i caratteri inseriti


    function checkMail(mail) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/
        return regex.test(mail.value.trim());
    }

    function checkPassword(password) {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        return passw.test(password.value.trim());

    }
    function checkPsw(passwRpt) {
        var psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        return psw.test(passwRpt.value.trim());

    }
})