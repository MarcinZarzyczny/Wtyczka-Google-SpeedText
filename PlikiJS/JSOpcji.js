$(function () {
    //Prototyp obiektu styli.
    var ObiektStyli = function (tm, ronwm, kim, tzs, ronws, ki, zkm, grm, zki, gri) {
        this.TloMenu = tm,
        this.RamkaOrazNapisyWMenu = ronwm,
        this.KolorIkonMenu = kim,
        this.TloZaSchowkami = tzs,
        this.RamkaOrazNapisyWSchowkach = ronws,
        this.KolorIkon = ki,
        this.ZaokraglenieKrawedziM = zkm,
        this.GruboscRamkiM = grm;
        this.ZaokraglenieKrawedziI = zki,
        this.GruboscRamkiI = gri;
    }

    if (typeof (Storage) !== "undefined") {
        console.log("Web Storage dostępny.");
        sygnalizacjaAkcji = "#DA0606"
        //--------------------------------------- Obsługa zakładek. ------------------------------------------
        var aktywnaZakładka = $(".container .menu .active a").attr("href");
        $(aktywnaZakładka).addClass("active2");

        $(".container .menu .kafelek a").click(function () {
            var aktywnaZakładka = $(this).attr("href");

            $(".container .treść_zakładek .zakładka").hide();
            $(aktywnaZakładka).show();

            $(".container .menu .kafelek").removeClass("active");
            $(this).parent().addClass("active");
       
            
            var elements911 = document.getElementsByClassName('kafelek');
            for (var i = 0; i < elements9.length; i++) {
                elements911[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
                elements911[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
                elements911[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
            }
            var elements92 = document.getElementsByClassName('active');
            for (var i = 0; i < elements92.length; i++) {
                elements92[i].style.backgroundColor = StylPierwszy.TloMenu;
                elements92[i].style.borderBottomColor = StylPierwszy.TloMenu;
            }
        });
        //------------------------ Ukrywanie komunikatu --------------------------------------
        $("#kom").fadeOut(0);//Ukrycie okna komunikatów.
        $("#komods").fadeOut(0);//Ukrycie okna komunikatów.


        FormularzUkryty2 = true;//Zmienna pomocnicza.


        OKK = document.getElementById('OKK');
        OKK.addEventListener('click', UkryjKomunikat, false);

        function UkryjKomunikat() {
            $("#kom").fadeOut(0);//Ukrycie okna komunikatów.
            FormularzUkryty2 = false;//Zmienna pomocnicza.
        }

        OKOdswiez = document.getElementById('OKOdswiez');
        OKOdswiez.addEventListener('click', UkryjKomunikatOdswiez, false);

        function UkryjKomunikatOdswiez() {
            $("#komods").fadeOut(0);//Ukrycie okna komunikatów.
            FormularzUkryty2 = false;//Zmienna pomocnicza.
            location.reload();// Załadowanie ponownie strony.
        }
        //------------------------ Wyczyszczenie wszystkich schowków. ------------------------
        przycisk = document.getElementById("b1");
        function WyczyśćSchowki() {

            tab1 = [];
            localStorage.setItem('myElement', JSON.stringify(tab1));//Zapisanie tablicy schowków.
            const retrievedObject = localStorage.getItem('myElement');

            console.log("działa");
            PokarzKomunikatOdswiez("Wszystkie schowki zostały usunięte. Strona zostanie odświeżona.");

        }
        przycisk.onclick = WyczyśćSchowki;
        //------------------------------------------ Obsługa styli. ------------------------------------------
        tab2 = [];
        ZapisanyStyl = [];


        //Utworzenie nowego obiektu styli i nadanie jego właściwościom początkowej wartości. 
        var StylPierwszy = new ObiektStyli("#1F252A", "#77A8C2", "#1F252A", "#77A8C2", "#1F252A", "#77A8C2",
                                            "20px", "2px", "5px", "2px");//Utworzenie nowego obiektu.
        tab2.push(StylPierwszy);

        if (localStorage.getItem('myStyleElement') == null) {//Sprawdzenie zawartości HTML5 Web Storage 
            localStorage.setItem('myStyleElement', JSON.stringify(tab2));
        }
        // Odczytanie kolorów stylu z pamięci przeglądarki i przypisanie elementom.
        const retrievedObjects = localStorage.getItem('myStyleElement');//Odczytanie tablicy schowków z pamięci przeglądarki.
        ZapisanyStyl = JSON.parse(retrievedObjects);
        if (ZapisanyStyl.length > 1) {
            ZapisanyStyl.splice(0, 1);
        }

        StylPierwszy.TloMenu = ZapisanyStyl[0].TloMenu;
        StylPierwszy.RamkaOrazNapisyWMenu = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
        StylPierwszy.KolorIkonMenu = ZapisanyStyl[0].KolorIkonMenu;
        StylPierwszy.TloZaSchowkami = ZapisanyStyl[0].TloZaSchowkami;
        StylPierwszy.RamkaOrazNapisyWSchowkach = ZapisanyStyl[0].RamkaOrazNapisyWSchowkach;
        StylPierwszy.KolorIkon = ZapisanyStyl[0].KolorIkon;

        //body
        element91 = document.getElementsByTagName('body');
        for (var i = 0; i < element91.length; i++) {
            element91[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            element91[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;

        }
        // Komunikat 
        element15 = document.getElementsByClassName('st');
        for (var i = 0; i < element15.length; i++) {
            element15[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            element15[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;;
        }
        element33 = document.getElementsByClassName('komunikat');
        for (var i = 0; i < element33.length; i++) {
            element33[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            element33[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;

        }
        element6 = document.getElementsByClassName('prz');
        for (var i = 0; i < element6.length; i++) {
            element6[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            element6[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            element6[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
        }
        //Menu
        var elements9 = document.getElementsByClassName('kafelek');
        for (var i = 0; i < elements9.length; i++) {
            elements9[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
            elements9[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            elements9[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;

        }
        var elements93 = $('.container .menu .kafelek a');
        for (var i = 0; i < elements93.length; i++) {
            elements93[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;

        }
        var elements92 = document.getElementsByClassName('active');
        for (var i = 0; i < elements92.length; i++) {
            elements92[i].style.backgroundColor = StylPierwszy.TloMenu;
            elements92[i].style.borderBottomColor = StylPierwszy.TloMenu;
        }
        var elements92 = $(".container .menu .active a");
        for (var i = 0; i < elements92.length; i++) {
            elements92[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
        }
        //Kontener zakałdek.
        var element1 = document.getElementsByClassName('treść_zakładek');
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.backgroundColor = StylPierwszy.TloMenu;
            element1[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            element1[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
        }
        //Stopka
        var stopka = document.getElementsByClassName('stopka');
        for (var i = 0; i < stopka.length; i++) {
            stopka[i].style.backgroundColor = StylPierwszy.TloMenu;
        }
        //Szablon wzoru.
        var element4 = document.getElementsByClassName('szablon');
        for (var i = 0; i < element4.length; i++) {
            element4[i].style.backgroundColor = StylPierwszy.TloMenu;
        }
        var element5 = document.getElementsByClassName('kafelki_glowne');
        for (var i = 0; i < element5.length; i++) {
            element5[i].style.backgroundColor = StylPierwszy.KolorIkonMenu;
            element5[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            element5[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
        }
        var element6 = document.getElementsByClassName('kg');
        for (var i = 0; i < element6.length; i++) {
            element6[i].style.backgroundColor = ZapisanyStyl[0].TloZaSchowkami; 
        }
        var element65 = document.getElementsByClassName('kaf');
        for (var i = 0; i < element65.length; i++) {
            element65[i].style.backgroundColor = StylPierwszy.KolorIkon;
            element65[i].style.color = StylPierwszy.RamkaOrazNapisyWSchowkach;
            element65[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWSchowkach;
        }
        var elements92 = document.getElementsByClassName('active');
        for (var i = 0; i < elements92.length; i++) {
            elements92[i].style.backgroundColor = StylPierwszy.TloMenu;
            elements92[i].style.borderBottomColor = StylPierwszy.TloMenu;
        }
        //Przyciski i inputy.
        var przycisk = document.getElementsByClassName('przycisk');
        for (var i = 0; i < przycisk.length; i++) {
            przycisk[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            przycisk[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
            przycisk[i].style.backgroundColor = StylPierwszy.KolorIkonMenu;
        }
        var textInput = document.getElementsByClassName('textInput');
        for (var i = 0; i < textInput.length; i++) {
            textInput[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            textInput[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
            textInput[i].style.backgroundColor = StylPierwszy.KolorIkonMenu;
        }
        //textarea
        var textarea2 = document.getElementsByClassName('textarea');
        for (var i = 0; i < textarea2.length; i++) {
            textarea2[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
            textarea2[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
            textarea2[i].style.backgroundColor = StylPierwszy.KolorIkonMenu;
        }
        //------------------------------- Style w menu. ------------------------------------
        // Zmiana koloru tła.
        background_color_Menu = document.getElementById('zk1');//Obsługa kliknięcia panelu rgb.
        background_color_Menu.addEventListener('change', BackgroundColorChange, false);

        function BackgroundColorChange() {
            StylPierwszy.TloMenu = background_color_Menu.value;

            var elements = document.getElementsByClassName('szablon');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = StylPierwszy.TloMenu;
            }
            StylPierwszy.TłoMenu = background_color_Menu.value;
        }
        // Zmiana koloru ramek oraz napisów w menu.
        color_RamkaOrazNapisyWMenu = document.getElementById('zk2');//Obsługa kliknięcia panelu rgb.
        color_RamkaOrazNapisyWMenu.addEventListener('change', ColorRamkaOrazNapisyWMenu, false);

        function ColorRamkaOrazNapisyWMenu() {
            StylPierwszy.RamkaOrazNapisyWMenu = color_RamkaOrazNapisyWMenu.value;

            var element7 = document.getElementsByClassName('kafelki_glowne');
            for (var i = 0; i < element7.length; i++) {
                element7[i].style.color = StylPierwszy.RamkaOrazNapisyWMenu;
                element7[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWMenu;
            }

            StylPierwszy.RamkaOrazNapisyWMenu = color_RamkaOrazNapisyWMenu.value;

        }
        //Kolor ikon w Menu. 
        kolorIkonMenu = document.getElementById('zk3');//Obsługa kliknięcia panelu rgb.
        kolorIkonMenu.addEventListener('change', KolorIkonMenu, false);

        function KolorIkonMenu() {
            StylPierwszy.KolorIkonMenu = kolorIkonMenu.value;

            var elements9 = document.getElementsByClassName('kafelki_glowne');
            for (var i = 0; i < elements9.length; i++) {
                elements9[i].style.backgroundColor = StylPierwszy.KolorIkonMenu;
            }
            StylPierwszy.KolorIkonMenu = kolorIkonMenu.value;

        }
        //------------------------------ Style schowków. -----------------------------------
        // Tło za schowkami.
        color_TłoZaSchowkami = document.getElementById('zk4');//Obsługa kliknięcia panelu rgb.
        color_TłoZaSchowkami.addEventListener('change', ColorTłoZaSchowkami, false);

        function ColorTłoZaSchowkami() {
            StylPierwszy.TloZaSchowkami = color_TłoZaSchowkami.value;

            var element41 = document.getElementsByClassName('kg');
            for (var i = 0; i < element41.length; i++) {
                element41[i].style.backgroundColor = StylPierwszy.TloZaSchowkami;
            }
            StylPierwszy.TloZaSchowkami = color_TłoZaSchowkami.value;
        }
        // Ramka oraz kolor napisów schowkach.
        color_RamkaOrazNapisyWSchowkach = document.getElementById('zk5');//Obsługa kliknięcia panelu rgb.
        color_RamkaOrazNapisyWSchowkach.addEventListener('change', ColorRamkaOrazNapisyWSchowkach, false);

        function ColorRamkaOrazNapisyWSchowkach() {
            StylPierwszy.RamkaOrazNapisyWSchowkach = color_RamkaOrazNapisyWSchowkach.value;

            var elements = document.getElementsByClassName('kaf');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = StylPierwszy.RamkaOrazNapisyWSchowkach;
                elements[i].style.borderColor = StylPierwszy.RamkaOrazNapisyWSchowkach;
            }
            StylPierwszy.TloZRamkaOrazNapisyWSchowkachaSchowkami = color_RamkaOrazNapisyWSchowkach.value;
        }
        //Kolor ikon.
        color_KolorIkon = document.getElementById('zk6');//Obsługa kliknięcia panelu rgb.
        color_KolorIkon.addEventListener('change', KolorIkon, false);

        function KolorIkon() {
            StylPierwszy.KolorIkon = color_KolorIkon.value;

            var elements = document.getElementsByClassName('kaf');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = StylPierwszy.KolorIkon;
            }
            StylPierwszy.KolorIkon = color_KolorIkon.value;

        }
        //---------------------- Zapisanie ustawien skurki. ----------------------------------- 
        Zapisz = document.getElementById('b6');//
        Zapisz.addEventListener('click', ZapisanieUstawien, false);

        function ZapisanieUstawien() {
            Zapisz.style.backgroundColor = sygnalizacjaAkcji;//Zmiana koloru tła przy kliknięciu. 
           
            if (tab2.length < 1) {
                delete tab2[0];
            }
            tab2.push(StylPierwszy);
            localStorage.setItem('myStyleElement', JSON.stringify(tab2));

            PokarzKomunikatOdswiez("Zmiany zostały zapisane. Nastąpi ponowne wczytanie strony w celu wprowadzenia zmian.");
        }
        //-----------------------------------Gotowe wzory styli. ---------------------------
        rs = document.getElementById('s1');
        rs.addEventListener('click', Skurka1, false);

        function Skurka1() {
            console.log("klik dziła")
            gotowyStyl("#1F252A", "#77A8C2", "#1F252A", "#77A8C2", "#1F252A", "#77A8C2");
            PokarzKomunikatOdswiez("Strona zostanie odświeżona, aby dokonać zmian.");
        }
        s1 = document.getElementById('s2');
        s1.addEventListener('click', Skurka2, false);

        function Skurka2() {
            console.log("klik dziła")
            gotowyStyl("#D8D8CA", "#737373", "#D8D8CA", "#D8D8CA", "#737373", "#D8D8CA");
            PokarzKomunikatOdswiez("Strona zostanie odświeżona, aby dokonać zmian.");

        }
        s2 = document.getElementById('s3');
        s2.addEventListener('click', Skurka3, false);

        function Skurka3() {
            console.log("klik dziła")
            gotowyStyl("#5A9431", "#1A2A0F", "#87EE3E", "#87EE3E", "#5A9431", "#1A2A0F");
            PokarzKomunikatOdswiez("Strona zostanie odświeżona, aby dokonać zmian.");
        }
        s3 = document.getElementById('s4');
        s3.addEventListener('click', Skurka4, false);

        function Skurka4() {
            console.log("klik dziła")
            gotowyStyl("#070503", "#DE5700", "#070503", "#070503", "#DE5700", "#070503");
            PokarzKomunikatOdswiez("Strona zostanie odświeżona, aby dokonać zmian.");
        }
        function gotowyStyl(tw, ronwm, kim, tzs, ronws, ki) {
            StylPierwszy.TloMenu = tw;
            StylPierwszy.RamkaOrazNapisyWMenu = ronwm;
            StylPierwszy.KolorIkonMenu = kim;
            StylPierwszy.TloZaSchowkami = tzs;
            StylPierwszy.RamkaOrazNapisyWSchowkach = ronws;
            StylPierwszy.KolorIkon = ki;

            if (tab2.length < 1) {
                delete tab2[0];
            }
            tab2.push(StylPierwszy);
            localStorage.setItem('myStyleElement', JSON.stringify(tab2));
        }

        //------------------------------------ Edycja ------------------------------------
        $(".container .treść_zakładek .zakładka #ed").click(function () {
            console.log("działa1");

          
            ZapisaneShowki = [];//Tablica pomocnicza.
            const retrievedObject = localStorage.getItem('myElement');//Odczytanie tablicy schowków z pamięci przeglądarki.
            ZapisaneShowki = JSON.parse(retrievedObject);

            console.log(ZapisaneShowki);

        
            var NrSchowka = document.getElementById("nrShowka");
            nrSchowka = NrSchowka.value;
            if(nrSchowka.length == 0){
                PokarzKomunikat("Nie wpisałeś numeru schowka.");
            } else if (nrSchowka == 0) {PokarzKomunikat("Nie ma numeru takiego schowka.");
            } else if (nrSchowka > ZapisaneShowki.length) {
                 for (var i = 0; i < ZapisaneShowki.length; i++) {
                    if (nrSchowka != ZapisaneShowki.id) {
                        console.log("Nie ma numeru takiego schowka.");
                        PokarzKomunikat("Nie ma numeru takiego schowka.");
                       }
                    }
             } else if (nrSchowka > 0 & nrSchowka <= ZapisaneShowki.length) {
                  var akrtywnaZakłądka2 = $(this).attr("href");
                   $(akrtywnaZakłądka2).show();
                   for (var i = 0; i < ZapisaneShowki.length; i++) {
                      if (nrSchowka == ZapisaneShowki[i].id) {
                          var nazwaSchowka = ZapisaneShowki[i].skrut;
                          var tekst = ZapisaneShowki[i].tekst

                           $(".container .treść_zakładek .zakładka #ed").hide();
                           $(".container .treść_zakładek .zakładka #nrShowka").hide();
                           $(".container .treść_zakładek .zakładka #1").hide();

                           document.getElementById("NazwaSchowka").value = nazwaSchowka;
                           document.getElementById("ZapisanyTekst").value = tekst;
                        }
                      }
                 }else if (ZapisaneShowki.length == 0) {
                    PokarzKomunikat("Nie masz jeszcze zapisanych żadnych schowków.");
                 } else {PokarzKomunikat("To nie jest numer schowka.");}
       })

       $(".container .treść_zakładek .zakładka .Edycja #An").click(function () {
           console.log("działa");

           var akrtywnaZakłądka2 = $(".container .treść_zakładek .zakładka .przycisk").attr("href");
           $(akrtywnaZakłądka2).hide();

           document.getElementById("nrShowka").value="";


           $(".container .treść_zakładek .zakładka #ed").show();
           $(".container .treść_zakładek .zakładka #nrShowka").show();
           $(".container .treść_zakładek .zakładka #1").show();
           PokarzKomunikat("Zmiany w schowku nie zostaną zapisane.");
       })

       $(".container .treść_zakładek .zakładka .Edycja #OK").click(function () {
          
           var NazwaSchowka = document.getElementById("NazwaSchowka");
           var nazwaSchowka = NazwaSchowka.value;
           var ZapisanyTekst = document.getElementById("ZapisanyTekst");
           var zapisanyTekst = ZapisanyTekst.value;

           for (var i = 0; i < ZapisaneShowki.length; i++) {

               if (nrSchowka == ZapisaneShowki[i].id) {
                 
                   ZapisaneShowki[i].skrut= nazwaSchowka;
                   ZapisaneShowki[i].tekst= zapisanyTekst;

                   var akrtywnaZakłądka2 = $(".container .treść_zakładek .zakładka .przycisk").attr("href");
                   $(akrtywnaZakłądka2).hide();

                   localStorage.setItem('myElement', JSON.stringify(ZapisaneShowki));//Zapisanie tablicy schowków w przeglądarce.
                   const retrievedObject = localStorage.getItem('myElement');

                   document.getElementById("nrShowka").value = "";
                   document.getElementById("NazwaSchowka").value = "";
                   document.getElementById("ZapisanyTekst").value = "";


                   $(".container .treść_zakładek .zakładka #ed").show();
                   $(".container .treść_zakładek .zakładka #nrShowka").show();
                   $(".container .treść_zakładek .zakładka #1").show();
                   PokarzKomunikat("Zmiany w schowku zostały zapisane.");

               }
           }       
           console.log(ZapisaneShowki);
       })
//---------------------------- Obsługa kliknięcia kafelków. --------------------------------------
       $(".container .kafelek").click(function () {
           var aktywnaZakładka = $(".container .kafelek");

           console.log(aktywnaZakładka);
           this.style.backgroundColor = "red";
           setTimeout(pkk, 150);
       });
//------------ Obsługa najechania na przycisk myszką. ----------------------------------- 
       $(".container .przycisk").mouseover(function () {
           var najechanyPrzycisk = $(".container .przycisk");

           this.style.color = "red";
           this.style.borderColor = "red";
       $(".container .przycisk").mouseout(function () {
           var najechanyPrzycisk = $(".container .przycisk");

           this.style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;;
           this.style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;;
       });
     });


//---------------------------- Obsługa kliknięcia przycisków. --------------------------------------
       $(".container .przycisk").click(function () {
           var aktywnaZakładka = $(".container .przycisk");

           console.log(aktywnaZakładka);
           this.style.backgroundColor = "red";
           setTimeout(pk, 150);         
       });
//------------------------------ Funkcje ----------------------------------------------------------

        //Obsługa zwykłego kumunikatu przy kliknięciu OK.
       function PokarzKomunikat(tekst) {//Obsługa przycisku Ok w komunikacie.
           document.getElementById('tz').innerHTML = tekst;
           $("#kom").fadeIn(200);
           
           clickPrzycisk();
           mauseover();
       }
        //Obsługa kumunikatu z odswierzeniem strony przy kliknięciu OK.
       function PokarzKomunikatOdswiez(tekst) {//Obsługa przycisku Ok w komunikacie.
           document.getElementById('tzw').innerHTML = tekst;
           $("#komods").fadeIn(200);

           clickPrzycisk();
           mauseover();
       }

      //Zmiana koloru tła przycisków przy kliknięciu;
       function clickPrzycisk() {
           $("#komods .prz").click(function () {
               var ppco = $("#komods .prz");
               this.style.backgroundColor = "red";
               setTimeout(pk, 150);
           });
       }
       //Zmiana koloru obramowania oraz napisów przy najechaniu myszką.
       function mauseover() {
           $(".komunikat .prz").mouseover(function () {
               var ppr = $(".komunikat .prz");
               this.style.color = "red";
               this.style.borderColor = "red";
               $(".komunikat .prz").mouseout(function () {
                   var najechanyPrzycisk = $(".komunikat .prz");
                   this.style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;;
                   this.style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;;
               });
           });
       }

       function pk() {//Zmaina koloru przycisku po kliknięciu w.
           var przycisk = document.getElementsByClassName("przycisk");
           if (localStorage.getItem('myStyleElement') == null) {
               for (var i = 0; i < przycisk.length; i++) {
                   przycisk[i].style.backgroundColor = "#77A8C2";
               }
           } else {
               for (var i = 0; i < przycisk.length; i++) {
                   przycisk[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;//Powrut do wczesniejszego koloru po kliknięci.
               }
           }
       }
       function pkk() {//Zmaina koloru kafe po kliknięciu w kafelkach.
           var kafelek = document.getElementsByClassName("kafelek");
           if (localStorage.getItem('myStyleElement') == null) {
               for (var i = 0; i < kafelek.length; i++) {
                   kafelek[i].style.backgroundColor = "#77A8C2";
               }
           } else {
               for (var i = 0; i < kafelek.length; i++) {
                   kafelek[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;//Powrut do wczesniejszego koloru po kliknięci.
               }
           }
           var elements92 = document.getElementsByClassName('active');
           for (var i = 0; i < elements92.length; i++) {
               elements92[i].style.backgroundColor = StylPierwszy.TloMenu;
               elements92[i].style.borderBottomColor = StylPierwszy.TloMenu;
           }
       }



    } else {
        console.log("Web Storage nie wspierany");
    }
    });      
    