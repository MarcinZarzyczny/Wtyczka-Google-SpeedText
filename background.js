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

        rysyj_kafelek() {
            var kaf1Html = '<div class="kaf" id="kafelek1" title="'+ this.tekst+ '"><a class="a">' + this.skrut + '</a></div>';
            var ElwmentK = $(kaf1Html);
    

            $('#divzk').append(ElwmentK);
            y[i] = document.getElementsByClassName('kaf')[i];
            y[i].onclick = function () {
                console.log("dzia³a");
            };
            i++;
        };
    };

    tab1 = [];
     

    function onclickHandler() {

        k1.wstaw_tekst();

    }
    var i = 0;
     y = [];

    var x = document.getElementById('K_Dodaj');

    function NowyKafelek() {      

        var tekst = prompt("Wpisz tekst");
        var skrut = tekst[0] + tekst[1];

        k1 = new kafelek(skrut, tekst);
        
        
        k1.rysyj_kafelek();
        tab1.push(k1);
       
     };

    K_Dodaj.onclick = NowyKafelek;


   
});


