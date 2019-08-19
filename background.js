$(function () {
    //Prototyp schowka.
    var kafelek = function (skrut, tekst, id, lik) {
        this.skrut = skrut,
        this.tekst = tekst,
        this.id = id;
    }
    kafelek.prototype.rysyj_kafelek = function (kafelek) {//Tworzenie ikony dla schowka.
        var kaf1Html = '<div class="kaf" id="kafelek1" title="' + this.tekst + '"><a class="a">' + this.skrut + '</a><a class="a1">' + this.id + '</a></div>';
        ElwmentK = $(kaf1Html);
        $('#divzk').append(ElwmentK);


        const element = document.querySelectorAll('.kaf');//Dodanie funkcji kliknięcia dla każdej ikony.
        for (let i = 0; i < element.length; i++) {
            element[i].onclick = function () {
                console.log(tab1[i].tekst);

                this.style.backgroundColor = sygnalizacjaAkcji;//Zmiana koloru tła przy kliknięciu. 
                function pk() {
                    if (localStorage.getItem('myStyleElement') == null) {
                        element[i].style.backgroundColor = "#77A8C2";
                      } else {
                        element[i].style.backgroundColor = ZapisanyStyl[0].KolorIkon;//Powrut do wczesniejszego koloru po kliknięci.
                        }
                    }

                setTimeout(pk, 50);//Opuźnienie wywołania funkcji "pk".

                zwartosc_pola = $("#Tekst3").val();//Kopiowanie tekstu z naszego schowka do schowka w systemie.
                frazaPlusPole = tab1[i].tekst;
                $("#Tekst3").val(frazaPlusPole);

                var textField = document.querySelector("#Tekst3");
                textField.select();
                document.execCommand('copy');

            }
            const el = document.querySelectorAll('.kaf');//Dodanie funkcji kliknięcia dla karzdej ikony.
            for (let i = 0; i < el.length; i++) {
                el[i].onmouseover = function () {
                    this.style.color = sygnalizacjaAkcji
                    this.style.borderColor = sygnalizacjaAkcji;
                }
            for (let i = 0; i < el.length; i++) {
                el[i].onmouseout = function () {
                    if (localStorage.getItem('myStyleElement') == null) {
                        this.style.color = "#1F252A";
                        this.style.borderColor = "#1F252A";
                    } else {
                        this.style.color = ZapisanyStyl[0].RamkaOrazNapisyWSchowkach;
                        this.style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWSchowkach;
                    }
               }
             }
          }
        }
    }
//-------------Sprawdzenie czy przeglądarka wspiera HTML5 Web Storage. --------------------------
    if (typeof (Storage) !== "undefined") {
        console.log("Web Storage dostępny.");


        sygnalizacjaAkcji = "#DA0606";//Kolor sygnalizacji akcj.
        zm = "#77A8C2";
        //----- Odczytanie kolorów skórki z pamięci przeglądarki i przypisanie elementom. --------------------------------
        if (localStorage.getItem('myStyleElement') != null) {//Sprawdzenie zawartości HTML5 Web Storage 
        
            ZapisanyStyl = [];
            const retrievedObjects = localStorage.getItem('myStyleElement');//Odczytanie tablicy schowków z pamięci przeglądarki.
            ZapisanyStyl = JSON.parse(retrievedObjects);
            if (ZapisanyStyl.length > 1) {
                ZapisanyStyl.splice(0, 1);
            }
            zm = ZapisanyStyl[0].KolorIkon
            //body
            element91 = document.getElementsByTagName('body');
            for (var i = 0; i < element91.length; i++) {
                element91[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            }
            //Menu
            element1 = document.getElementsByClassName('gdiv');
            for (var i = 0; i < element1.length; i++) {
                element1[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            }         
            element2 = document.getElementsByClassName('kafelki_glowne');
            for (var i = 0; i < element2.length; i++) {
                element2[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element2[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element2[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
                element2[i].style.borderRadius = ZapisanyStyl[0].ZaokraglenieKrawedziM;
                element2[i].style.borderWidth = ZapisanyStyl[0].GruboscRamkiM;
            }
            element20 = document.getElementsByClassName('belka1');
            for (var i = 0; i < element20.length; i++) {
                element20[i].style.backgroundColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            }
            element21 = document.getElementsByClassName('belka2');
            for (var i = 0; i < element21.length; i++) {
                element21[i].style.backgroundColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            }
            element22 = document.getElementsByClassName('belka3');
            for (var i = 0; i < element22.length; i++) {
                element22[i].style.backgroundColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
            }
            // Komunikat 
            element15 = document.getElementsByClassName('st');
            for (var i = 0; i < element15.length; i++) {
                element15[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element15[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            }
            element33 = document.getElementsByClassName('komunikat');
            for (var i = 0; i < element33.length; i++) {
                element33[i].style.backgroundColor = ZapisanyStyl[0].TloMenu;
            }
            element6 = document.getElementsByClassName('prz');
            for (var i = 0; i < element6.length; i++) {
                element6[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element6[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element6[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
            }
            element61 = document.getElementsByTagName('textarea');
            for (var i = 0; i < element61.length; i++) {
                element61[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element61[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element61[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
            }
            element62 = document.getElementsByClassName('Text');
            for (var i = 0; i < element62.length; i++) {
                element62[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element62[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                element62[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;
            }

            //Tło za schowkami. 
            element4 = document.getElementsByClassName('kg');
            for (var i = 0; i < element4.length; i++) {
                element4[i].style.backgroundColor = ZapisanyStyl[0].TloZaSchowkami;
            }
        }
//-------------------------- Obsługa komunikatów. ------------------------------------------
        $("#kom").fadeOut(0);//Ukrycie okna komunikatów.
        FormularzUkryty2 = true;//Zmienna pomocnicza.


        OKK = document.getElementById('OKK');
        OKK.addEventListener('click', UkryjKomunikat, false);

        function UkryjKomunikat() {
            $("#kom").fadeOut(0);//Ukrycie okna komunikatów.
            FormularzUkryty2 = false;//Zmienna pomocnicza.
        }
//------------------------------------------ Odczytanie zapisanych schowków. -----------------------------

        tab1 = [];
        ZapisaneShowki = [];//Tablica pomocnicza.
        

        if (localStorage.getItem('myElement') == null) {//Sprawdzenie zawartości HTML5 Web Storage 
            localStorage.setItem('myElement', JSON.stringify(tab1 = []));
            
        }

        const retrievedObject = localStorage.getItem('myElement');//Odczytanie tablicy schowków z pamięci przeglądarki.
        ZapisaneShowki = JSON.parse(retrievedObject);

        console.log(ZapisaneShowki);
        if (ZapisaneShowki.length != 0) {
            for (var i = 0; i < ZapisaneShowki.length; i++) {

                var x = ZapisaneShowki[i].skrut;
                var y = ZapisaneShowki[i].tekst;
                var w = i + 1;
                var z = ZapisaneShowki[i].lik;

                var k1 = new kafelek(x, y, w, z);//Utworzenie nowego obiektu.
                k1.rysyj_kafelek();//Narysowanie nowego schowka.
                tab1.push(k1);
                ukryjOknoLadowania();
            }
            sis();
        }
        else{
            ukryjOknoLadowania();
        }
        
        //------------------------- Sprawdzenie zgody na urzycie localStorage. ------------------------------------------------
        zgodaLocalStorage = false;
        if (localStorage.getItem('localStorage') == null) {//Sprawdzenie zawartości HTML5 Web Storage 
            localStorage.setItem('localStorage', JSON.stringify(zgodaLocalStorage2 = false));

        }

        const retrievedObject2 = localStorage.getItem('localStorage');//Odczytanie tablicy schowków z pamięci przeglądarki.
        zgodaLocalStorage = JSON.parse(retrievedObject2);

        if (zgodaLocalStorage == false) {
            ukryjOknoLadowania();
         
            PokarzKomunikat("Uwaga!!! Używając tej wtyczki udzielasz zgody na zapisywanie danych na twoim komputerze.");
            localStorage.setItem('localStorage', JSON.stringify(zgodaLocalStorage2 = true));

        }
        
        //-------------------------- Dodawanie nowych schowków. -------------------------------------------------------------
        //formularz dodawania nowego schowka.
        var x = document.getElementById("K_Dodaj");
        $("#DTekst").fadeOut(0);//Ukrycie formularza.
        FormularzUkryty = true;//Zmienna pomocnicza.

        //Ujawnienie formularza.
        function NowyFormularz() {
            if (FormularzUkryty == true) {
                $("#DTekst").fadeIn(200);
               
                FormularzUkryty =+ false;
            }
            var E = document.getElementById("E");
            function UkryjFormularz() {
                pk2(E);

                $("#DTekst").fadeOut(200);//Ukrycie formularza.
                FormularzUkryty =+ true;//Zmiana wartości zmiennej pomocniczej.
            }
            E.onclick = UkryjFormularz;
            //Dodanie nowego schowka.
            var OK = document.getElementById("OK");
            function DodajSchowek() {

                pk2(OK);
                //Pobranie nazwy schowka.
                nazwa = document.getElementById("Tekst1");//Pobranie nazwy schowka
                Nazwa = nazwa.value;

                //Pobranie tekstu do zapisania.
                var Tekst = document.getElementById("Tekst");
                var tekst = Tekst.value;

                //Sprawdzenie czy długość tekstu jest dłurzsza niż 3.
                if (tekst.length >= 4) {
                    $("#DTekst").fadeOut(200);//Ukrycie showka.
                    FormularzUkryty = + true;//Zmiana wartości zmiennej pomocniczej.
                    
                    ws = tab1.length + 1;

                    var k1 = new kafelek(Nazwa, tekst, ws);//Utworzenie nowego obiektu.
                    k1.rysyj_kafelek();//Narysowanie nowego schowka.
                    tab1.push(k1);//Wstawienie nowego obiektu do tablicy obiektów.

                    localStorage.setItem('myElement', JSON.stringify(tab1));//Zapisanie tablicy schowków w przeglądarce.
                    const retrievedObject = localStorage.getItem('myElement');
                    // Styl ikon showków. 
                    if (localStorage.getItem('myStyleElement') != null) {//Sprawdzenie zawartości HTML5 Web Storage 

                        ZapisanyStyl = [];
                        const retrievedObjects = localStorage.getItem('myStyleElement');//Odczytanie tablicy schowków z pamięci przeglądarki.
                        ZapisanyStyl = JSON.parse(retrievedObjects);
                        if (ZapisanyStyl.length > 1) {
                            ZapisanyStyl.splice(0, 1);
                        }
                        sis();

                    }
                } else if (tekst.length < 4) {
                    PokarzKomunikat("Wpisałeś za mało znaków do zapisania w schowku. Może być minimum 4 znaki.");
                }
                document.getElementById("Tekst1").value = "";
                document.getElementById("Tekst").value = "";

            }
            OK.onclick = DodajSchowek;//Wywołanie zdarzenia onclick.
        }
        K_Dodaj.onclick = NowyFormularz;//Wywołanie zdarzenia onclick. 

        //Formularz usuwania schowka.
        var ux = document.getElementById("K_Usun");
        $("#UTekst").fadeOut(0);//Ukrycie formularza.
        function NowyFormularzUS () {      
            if (FormularzUkryty == true) {
                $("#UTekst").fadeIn(200);//Ujawnienie formularza.
                document.getElementById("Tekst2").value = null;//Wyczyszczenie.
                FormularzUkryty =+ false;//Zmiana wartości zmiennej pomocniczej.
            } 
            var UE = document.getElementById("UExit");
            function UkryjFormularzUsuwania() {
                pk2(UE);
                $("#UTekst").fadeOut(200);//Ukrycie formularza.
                FormularzUkryty =+ true;//Zmiana wartości zmiennej pomocniczej.
            }

            UE.onclick = UkryjFormularzUsuwania;

            //Usuwanie showka.
            var uok = document.getElementById("Usun");
            function UsunShowek() {
                pk2(uok);
                var Tekst2 = document.getElementById("Tekst2");
                var tekst2 = Tekst2.value;

                if (tekst2.length < 1) {
                    PokarzKomunikat("Wpisz numer schowka.");
                } else {
                    for (var i = 0; i < tab1.length; i++) {
                        if (tekst2 == tab1[i].id) {
                            tab1.splice(i, 1);
                        }              
                    }
                }
    
                with (document.getElementById("divzk")) {//Wyczyszczenie zawartosci diva. 
                    while (childNodes.length > 0) {
                        removeChild(childNodes[0]);
                    }
                }
                for (var i = 0; i < tab1.length; i++) {//Ponowne wczytanie tablicy showków.
                    tab1[i].rysyj_kafelek();
                    tab1[i].id =+ i + 1;
                }
           
                localStorage.setItem('myElement', JSON.stringify(tab1));//Zapisanie tablicy schowków.
                
                $("#UTekst").fadeOut(200);//Ukrycie formularza.
                FormularzUkryty = + true;//Zmiana wartości.
                if (localStorage.getItem('myStyleElement') != null) {//Sprawdzenie zawartości HTML5 Web Storage 

                    sis();
                }

            }
            uok.onclick = UsunShowek;
        }
        K_Usun.onclick = NowyFormularzUS;//Wywołanie zdarzenia onclick. 

       
//----------------- Sygnalizacja akcji myszką. -------------------------------

        //Sygnalizacja kliknięcia w kafelkach głuwnych zmianą koloru tłą.
        $(".dg .kafelki_glowne").click(function () {
            var aktywnaZakładka = $(".dg .kafelki_glowne");

            console.log(aktywnaZakładka);
            this.style.backgroundColor = "red";
            setTimeout(pkp, 150);
        });
        //Zmiana koloru obramowania i tekstu w kafelkach głuwnych oraz po opuszczeniu elementuw.
        $(".dg .kafelki_glowne").mouseover(function () {
            var najechanyPrzycisk = $(".dg .kafelki_glowne");
            this.style.color = "red";
            this.style.borderColor = "red";

            $(".dg .kafelki_glowne").mouseout(function () {
                if (localStorage.getItem('myStyleElement') == null) {
                    var najechanyPrzycisk = $(".dg .kafelki_glowne");
                    this.style.color = "#77A8C2";
                    this.style.borderColor = "#77A8C2";
                } else {
                    var najechanyPrzycisk = $(".dg .kafelki_glowne");
                    this.style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                    this.style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                }
            });
        });
        //Sygnalizacja kliknięcia w przyciskach zmianą koloru tłą.
        $(".dg .prz").click(function () {
            var aktywnaZakładka = $(".dg .prz");
            this.style.backgroundColor = "red";
            setTimeout(pkpp, 50);
        });

        //Zmiana koloru obramowania i tekstu w przyciskach oraz po opuszczeniu elementu.
        $(".dg .prz").mouseover(function () {
            var najechanyPrzycisk = $(".dg .prz");
            this.style.color = "red";
            this.style.borderColor = "red";

            $(".dg .prz").mouseout(function () {
                if (localStorage.getItem('myStyleElement') == null) {
                    var najechanyPrzycisk = $(".dg .prz");
                    this.style.color = "#77A8C2";
                    this.style.borderColor = "#77A8C2";
                    this.style.backgroundColor = "#1F252A";
                } else {
                    var najechanyPrzycisk = $(".dg .prz");
                    this.style.color = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                    this.style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWMenu;
                }
            });
        });
//-------------------------------- Funkcje ---------------------------------
        function ukryjOknoLadowania() {//Ukrycie animacji łądowanaio. 
            var prelouderEl = document.getElementById('preorder');

            prelouderEl.classList.add('preorderhiding');

            prelouderEl.addEventListener('transitionend', function () {
                this.classList.add('preorderhidden');
                this.classList.remove('preorderhiding');
            });
        }
        function PokarzKomunikat(tekst) {//Wywołanie komunikatu.
            document.getElementById('tz').innerHTML = tekst ;
            $("#kom").fadeIn(200);
        }

        function sis() {//Zmiana styli ikon schowków.
            if (localStorage.getItem('myStyleElement') != null) {//Sprawdzenie zawartości HTML5 Web Storage.              
                element5 = document.getElementsByClassName('kaf');
                for (var i = 0; i < element5.length; i++) {
                    element5[i].style.backgroundColor = ZapisanyStyl[0].KolorIkon;
                    element5[i].style.color = ZapisanyStyl[0].RamkaOrazNapisyWSchowkach;
                    element5[i].style.borderColor = ZapisanyStyl[0].RamkaOrazNapisyWSchowkach;
                    element5[i].style.borderRadius = ZapisanyStyl[0].ZaokraglenieKrawedziI;
                    element5[i].style.borderWidth = ZapisanyStyl[0].GruboscRamkiI;
                }
            }
        }
        function pk2(nazwa) {//Zmiana koloru tła ikon showków przy kliknięciu. 
            nazwa.style.backgroundColor = sygnalizacjaAkcji; 
            function pkr() {
                if (localStorage.getItem('myStyleElement') == null) {
                    nazwa.style.backgroundColor = "red";
                } else {
                    nazwa.style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;;//Powrut do wczesniejszego koloru po kliknięci.
                }
            }
            setTimeout(pkr, 50);//Opuźnienie wywołania funkcji "pkr2".
        }

        function pkp() {//Zmaina koloru ikon menu po kliknięciu.
            var kafelki_glowne = document.getElementsByClassName("kafelki_glowne");
            if (localStorage.getItem('myStyleElement') == null) {
                for (var i = 0; i < kafelki_glowne.length; i++) {
                    kafelki_glowne[i].style.backgroundColor = "#1F252A";
                }
            } else {
                for (var i = 0; i < kafelki_glowne.length; i++) {
                    kafelki_glowne[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;//Powrót do wczesniejszego koloru po kliknięci.
                }
            }
        }

        function pkpp() {//Zmaina koloru przycisków po kliknięciu.
            if (localStorage.getItem('myStyleElement') == null) {
                var przycisk = document.getElementsByClassName('prz');
                for (var i = 0; i < przycisk.length; i++) {
                    przycisk[i].style.backgroundColor = "#1F252A";
                }
            } else {
                var przycisk = document.getElementsByClassName('prz');
                for (var i = 0; i < przycisk.length; i++) {
                    przycisk[i].style.backgroundColor = ZapisanyStyl[0].KolorIkonMenu;//Powrót do wczesniejszego koloru po kliknięci.
                }
            }
        }
        


  }else {
        PokarzKomunikat("Zaktualizuj przegladarkę do najnowszej wersji.");
    }



});