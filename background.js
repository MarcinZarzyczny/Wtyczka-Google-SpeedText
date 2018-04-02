$(function () {

    class WKafelek {
        constructor(type, skrut, tekst) {
            this.skrut = skrut;
            this.tekst = tekst;
        }
    }

    class kafelek extends WKafelek {
        constructor(skrut, tekst) {
            super('kafelek', skrut, tekst)
        }

        wstaw_tekst() {
            console.log(this.tekst);
        }

    }



    var x = document.getElementById('K_Dodaj');

    OtwartyFormularz = false;//Zmienna pomocnicza.

    //Otwieranie formularza.
    function NowyFormularz() {
        console.log("dzia³");

        if (OtwartyFormularz == false) {
            var DTekst = '<div id="DTekst">' +
                '<a>Wpisz tekst:</a>' +
                '<input type="text" size="8">' +
                '<input type="button" value="Ok" />' +
                '<input type="button" value="Exit" id="E" />' +
                '</div>';
            var El = $(DTekst);

            OtwartyFormularz += true;

                 ak = document.getElementById('E');
            //Zamykanie formularza.
                function ZamknijFormularz() {
                    if (OtwartyFormularz == true) {
                        alert = ("Dzia³a.")
                    };
                };
                E.onclick = ZamknijFormularz;

                $('#Body').append(El);
               // E.onclick = ZamknijFormularz;



        } else alert("Zamknij formularz.")
       
    };

    K_Dodaj.onclick = NowyFormularz;
    //Zamykanie formularza.


});


