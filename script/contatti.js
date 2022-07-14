window.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#accountlog").onclick = function () {
        document.querySelector(".entrata").style.display = "block";
    }

    var modulo = document.querySelector("#accountlog form");
    var mail = document.getElementById("e-mail");
    var nome = document.querySelector("#nome");
    var telefono = document.getElementById("phone");
    var commento = document.getElementById("textarea");
    


    modulo.onsubmit = function (e) {
        e.preventDefault();



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
                mail.classList.add("corretto")
                mail.nextElementSibling.innerHTML = "";
            }
        }

        if (campoVuoto(nome, 3) == true) {
            //vuol dire che c'è un errore
            nome.classList.add("errore");
            nome.nextElementSibling.innerHTML = "Devi scrivere almeno 4 caratteri";
        }
        else {
            if (checkName(nome) == false) {
                nome.classList.add("errore");
                nome.nextElementSibling.innerHTML = "Nome non corretto";
            }
            else {
                nome.classList.remove("errore");
                nome.classList.add("corretto")
                nome.nextElementSibling.innerHTML = "";
            }


        }
        if (campoVuoto(telefono, 5) == true) {
            telefono.classList.add("errore");
            telefono.nextElementSibling.innerHTML = "Numero di telefono non valido";
        } else {
            if (checkPhone(telefono) == false) {
                telefono.classList.add("errore");
                telefono.nextElementSibling.innerHTML = "Numero di telefono non valido";
            }
            else {
                telefono.classList.remove("errore");
                telefono.classList.add("corretto");
                telefono.nextElementSibling.innerHTML = "";
            }
        }

        if (campoVuoto(commento, 20) == true) {
            commento.classList.add("errore");
            commento.nextElementSibling.innerHTML = "Commento troppo breve: min 20 caratteri";
        }
        else {
            commento.classList.remove("errore");
            commento.classList.add("corretto");
            commento.nextElementSibling.innerHTML = "";

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


    function campoVuoto(campo, max) {

        if (campo.value.trim().length < max) {
            return true; //tipo di dato booleano
        }
        else {
            return false;
        }

    }


    function checkMail(mail) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/
        return regex.test(mail.value.trim());
    }

    function checkName(nome) {
        var name = /\b[a-df-z]+\b/
        return name.test(nome.value.trim());

    }
    function checkPhone(telefono) {
        var phone = /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/
        return phone.test(telefono.value.trim());

    }

})