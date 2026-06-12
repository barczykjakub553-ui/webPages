const CATEGORY_RANGES_IO = [
    { name: "Metodyki zwinne",                count: 12 },
    { name: "UML — diagramy",                 count: 14 },
    { name: "Wymagania",                      count: 10 },
    { name: "Testowanie",                     count: 9  },
    { name: "Git",                            count: 6  },
    { name: "Architektura i wzorce",          count: 8  },
    { name: "Szacowanie i metryki",           count: 7  },
    { name: "Jakość i procesy",               count: 8  },
    { name: "Inne zagadnienia IO",            count: 8  }
];

const QUESTIONS_IO = [
    // ===== Metodyki zwinne =====
    {
        q: "Funkcjonalności zaplanowane do implementacji wg metodyki zwinnej klient najczęściej formułuje w postaci:",
        a: ["wymagań niefunkcjonalnych", "przypadków użycia", "historii użytkownika", "zadań programistycznych"],
        correct: 2
    },
    {
        q: "Pracochłonność prawidłowo zdefiniowanego zadania w metodyce zwinnej:",
        a: ["powinna wynosić zawsze tyle ile wynosi czas iteracji", "powinna wynosić około 1-3 dni", "powinna wynosić około 1-3 tygodni", "może być dłuższa niż czas trwania iteracji"],
        correct: 1
    },
    {
        q: "Główną cechą wyróżniającą metodyki zwinne jest:",
        a: ["opracowanie szczegółowego i rygorystycznego sposobu zarządzania i przygotowania rozbudowanej dokumentacji projektowej", "odejście od długofalowego planowania, zarządzania i dokumentowania", "dokładne zaprojektowanie globalnej architektury oprogramowania w celu minimalizacji prac nad jej modyfikacją w przyszłości", "drastyczne ograniczenie udziału klienta w projekcie, żeby nie przeszkadzał deweloperom w ich pracach programistycznych"],
        correct: 1
    },
    {
        q: "Najdłuższa jednostka czasu wykorzystywana do planowania zakresu prac w metodyce zwinnej odzwierciedla czas:",
        a: ["wydania", "implementacji przyrostu produktu", "całego projektu", "iteracji"],
        correct: 0
    },
    {
        q: "Wybierając wymagania do implementacji w danej iteracji w metodyce zwinnej:",
        a: ["klient może wybrać dowolną ilość wymagań, w razie potrzeby każdorazowo ustalając czas trwania danej iteracji", "sumaryczna pracochłonność wybranych wymagań nie może przekroczyć ustalonej szybkości", "deweloperzy wybierają te wymagania wyłącznie wg własnych preferencji", "kierownik projektu dokonuje wyboru tych wymagań każdorazowo dokonując negocjacji ze zleceniodawcą pod kątem ustalenia kosztu ich implementacji"],
        correct: 1
    },
    {
        q: "Kiedy wyczerpie się czas przewidziany na iterację w metodyce zwinnej, a nie wszystkie funkcjonalności zostaną zaimplementowane, to:",
        a: ["klient przypisuje specjalne tzw. naprawcze historie użytkownika", "nieukończone funkcjonalności są wycofywane z dalszej realizacji w projekcie (anulowane)", "nieukończone funkcjonalności przechodzą do implementacji w następnej iteracji", "czas tej iteracji ulega wydłużeniu o taki, który jest potrzebny do ukończenia wszystkich funkcjonalności"],
        correct: 2
    },
    {
        q: "W metodyce zwinnej:",
        a: ["refaktoryzacja kodu stosowana jest sporadycznie", "podstawą wymiany informacji między członkami zespołu jest bezpośrednia komunikacja", "konieczne jest stosowanie programowania w parach przez co najmniej 30% czasu implementacji", "podstawowym sposobem przechowywania i udostępniania informacji członkom zespołu jest szczegółowa dokumentacja projektowa"],
        correct: 1
    },
    {
        q: "Punkty historii użytkownika (story points):",
        a: ["są liczbami naturalnymi oznaczającymi ilość osobodni potrzebnych na implementację", "są nieparzystymi liczbami naturalnymi", "są liczbami naturalnymi niewyrażonymi w żadnej jednostce czasu", "są liczbami naturalnymi oznaczającymi ilość osobotygodni potrzebnych na implementację"],
        correct: 2
    },
    {
        q: "Wielkość zespołu deweloperskiego w metodyce Scrum powinna wynosić:",
        a: ["co najmniej 10 osób", "metodyka Scrum nie określa tej wielkości", "ok. 5-9 osób", "maksymalnie 20 osób"],
        correct: 2
    },
    {
        q: "W skład Zespołu Scrumowego wchodzą następujące role:",
        a: ["Analityk, Architekt, Projektant, Programista, Tester, Mistrz Scruma, Kierownik projektu", "Zespół deweloperski, Właściciel Produktu, Kierownik projektu", "Zespół deweloperski, Właściciel Produktu, Mistrz Scruma", "Zespół deweloperski, Właściciel Produktu, Mistrz Scruma, Kierownik projektu"],
        correct: 2
    },
    {
        q: "Wytwarzanie sterowane testami (test driven development) polega na:",
        a: ["opracowaniu programu, z którego automatycznie generowane są testy", "opracowaniu testów, z których automatycznie generowany jest program", "opracowaniu testów przed implementacją programu", "opracowaniu testów niezwłocznie po implementacji programu"],
        correct: 2
    },
    {
        q: "Klasycznym procesem wytwarzania oprogramowania, w którym poszczególne fazy/etapy realizowane są szeregowo jest proces:",
        a: ["kaskadowy", "iteracyjny", "zwinny", "spiralny"],
        correct: 0
    },

    // ===== UML — diagramy =====
    {
        q: "Diagram przypadków użycia służy do zaprezentowania:",
        a: ["przepływu danych między poszczególnymi funkcjami", "funkcji realizowanych przez system z punktu widzenia użytkownika", "kolejności realizacji poszczególnych funkcji", "wymagań funkcjonalnych i niefunkcjonalnych"],
        correct: 1
    },
    {
        q: "Symbol związku (association) na diagramie przypadków użycia służy do połączenia:",
        a: ["co najmniej dwóch przypadków użycia", "aktora i przypadku użycia", "wyłącznie dwóch aktorów", "taki symbol nie występuje na diagramie przypadków użycia"],
        correct: 1
    },
    {
        q: "Symbol dziedziczenia na diagramie klas oznacza:",
        a: ["że obiekt jednej klasy przyjmuje obiekt drugiej klasy jako argument jednej z operacji", "że obiekty jednej klasy zawierają obiekty innej klasy", "że klasa dziedzicząca przejmuje cechy i zachowanie klasy bazowej", "że obiekt jednej klasy jest powiązany na zasadzie referencji/wskaźnika z obiektem innej klasy"],
        correct: 2
    },
    {
        q: "Diagram komponentów służy do pokazania:",
        a: ["struktury aplikacji na poziomie jednostek, które mogą być projektowane i wytwarzane niezależnie", "konfiguracji sprzętowej opracowywanego systemu", "zależności między aktorami i klasami", "elementów, z których składają się poszczególne klasy"],
        correct: 0
    },
    {
        q: "Diagram rozmieszczenia w języku UML służy do pokazania:",
        a: ["rozmieszczenia obiektów stanowiących implementację programu w pamięci RAM komputera", "rozmieszczenia geograficznego zespołu deweloperskiego", "rozmieszczenia komponentów programowych w węzłach sprzętowo/programowych", "rozmieszczenia geograficznego miejsca implementacji poszczególnych funkcjonalności oprogramowania"],
        correct: 2
    },
    {
        q: "Diagram czynności w języku UML służy do pokazania:",
        a: ["działań, które muszą wykonać deweloperzy, żeby opracować dany program", "działań, które składają się zawsze na pojedynczy kompletny przypadek użycia", "działań wykonywanych podczas realizacji procesów/algorytmów", "działań, które są realizowane przez zespół zarządzający danym projektem informatycznym"],
        correct: 2
    },
    {
        q: "Diagram sekwencji w języku UML służy do pokazania:",
        a: ["jednostek sprzętowych, na których realizowane są poszczególne funkcje systemu", "cyklu życia systemu wg metodyki zwinnej", "komunikatów wymienianych między jednostkami programowymi realizującymi dane zadanie", "ciągu działań podejmowanych przez deweloperów w celu opracowania danego programu"],
        correct: 2
    },
    {
        q: "Diagram klas służy do zaprezentowania:",
        a: ["hierarchii zarządzania w projekcie informatycznym", "komponentów oprogramowania i powiązań między nimi", "obiektów, które biorą udział w przetwarzaniu danych i powiązań między nimi", "wymagań funkcjonalnych"],
        correct: 2
    },
    {
        q: "Typowa klasa na diagramie klas zawiera oprócz nazwy:",
        a: ["listę scenariuszy i listę kroków dla każdego scenariusza", "przynajmniej jednego powiązanego aktora, ale nie może być powiązana z przypadkiem użycia", "zestaw atrybutów i zestaw operacji", "aktora i/lub przypadek użycia"],
        correct: 2
    },
    {
        q: "Symbol dziedziczenia można wykorzystać na diagramie przypadków użycia w celu połączenia:",
        a: ["klasy i aktora", "dwóch przypadków użycia", "klasy i przypadku użycia", "aktora i przypadku użycia"],
        correct: 1
    },
    {
        q: "Co oznacza związek zawierania na diagramie przypadków użycia?",
        a: ["że dany przypadek użycia jest bezpośrednio wywoływany przez danego aktora", "że dany aktor jest częścią danego przypadku użycia", "że dany przypadek użycia następuje bezpośrednio po ukończeniu innego przypadku użycia", "że jeden przypadek użycia jest częścią innego przypadku użycia"],
        correct: 3
    },
    {
        q: "Symbol agregacji na diagramie klas oznacza:",
        a: ["że obiekt jednej klasy jest powiązany z dokładnie jednym obiektem innej klasy", "że obiekty jednej klasy zawierają obiekty innej klasy", "że obiekt jednej klasy przyjmuje obiekt drugiej klasy jako argument jednej z operacji", "że jedna klasa dziedzicząca przejmuje cechy i zachowanie klasy bazowej"],
        correct: 1
    },
    {
        q: "Cechą charakterystyczną diagramu sekwencji w UML jest:",
        a: ["oś czasu, która nie występuje na innych diagramach", "diagram ten może jako jedyny posłużyć do wizualizacji hierarchii zarządzania danym projektem informatycznym", "na tym diagramie nie można umieszczać aktorów", "można na nim pokazać długi proces wykraczający poza pojedynczy przypadek użycia"],
        correct: 0
    },

    // ===== Wymagania =====
    {
        q: "Pod względem poziomu opisu wymagania możemy podzielić na:",
        a: ["biznesowe, użytkownika i systemowe", "funkcjonalne, niefunkcjonalne i zgodności", "postać tekstową w formie listy i postać graficzną w formie diagramu", "żadna z pozostałych odpowiedzi nie jest prawidłowa"],
        correct: 0
    },
    {
        q: "Wymagania niefunkcjonalne:",
        a: ["określają funkcje realizowane przez oprogramowanie", "określają aspekty jakościowe oprogramowania", "formułowane są zawsze w formie diagramu", "powinny być sformułowane niezwłocznie po ukończeniu implementacji oprogramowania"],
        correct: 1
    },
    {
        q: "Pod względem zakresu wymagania możemy podzielić na:",
        a: ["postać tekstową w formie listy i postać graficzną w formie diagramu", "żadna z pozostałych odpowiedzi nie jest prawidłowa", "biznesowe, użytkownika i systemowe", "funkcjonalne, niefunkcjonalne i zgodności"],
        correct: 3
    },
    {
        q: "Cecha jednoznaczności specyfikacji wymagań oznacza, że:",
        a: ["wskazano jednoznacznie, w jaki sposób można przeprowadzić weryfikację spełnienia wymagań przez finalny produkt", "opisane zostały tylko te wymagania, które są potrzebne użytkownikom", "wymagania nie mogą zawierać sprzeczności między sobą", "zapis każdego wymagania ma tylko jedną interpretację"],
        correct: 3
    },
    {
        q: "Cecha poprawności specyfikacji wymagań oznacza, że:",
        a: ["opisane zostały tylko te wymagania, które są potrzebne użytkownikom", "wskazano, w jaki sposób można przeprowadzić weryfikację spełnienia wymagań przez finalny produkt", "wymagania nie mogą zawierać sprzeczności między sobą", "sformułowano, w jaki sposób można modyfikować wymagania"],
        correct: 0
    },
    {
        q: "Czy wymaganie 'Oprogramowanie ma korzystać z przyjaznego interfejsu użytkownika' jest poprawnie zdefiniowane?",
        a: ["nie, ponieważ nie wskazano, jaka technologia/framework ma być użyta do implementacji", "tak, jest to poprawne wymaganie", "nie, ponieważ aspektów dotyczących przyjazności interfejsu użytkownika nie formułuje się w formie wymagań", "nie, ponieważ nie można zweryfikować spełnienia tak sformułowanego wymagania"],
        correct: 3
    },
    {
        q: "Metodami pozyskiwania wymagań są:",
        a: ["obserwacja i analiza obiegu dokumentów, metoda punktów przypadków użycia, metoda punktów funkcyjnych", "obserwacja i analiza obiegu dokumentów, studiowanie dostępnej dokumentacji, wywiady z przedstawicielami kierownictwa", "obserwacja i analiza obiegu dokumentów, metoda punktów przypadków użycia, wywiady z przedstawicielami kierownictwa", "obserwacja i analiza obiegu dokumentów, studiowanie dostępnej dokumentacji, metoda punktów przypadków użycia"],
        correct: 1
    },
    {
        q: "Specyfikacja pojedynczego przypadku użycia powinna obejmować:",
        a: ["listę scenariuszy i listę kroków dla każdego scenariusza", "dokładnie jeden scenariusz i przypisaną do niego listę kroków", "listę scenariuszy bez wskazania listy kroków", "listę kroków realizowanych przez wszystkich aktorów występujących na tym samym diagramie, co dany przypadek użycia"],
        correct: 0
    },
    {
        q: "W jaki sposób należy opracować model przypadków użycia, gdy musimy pokazać znaczną liczbę przypadków użycia?",
        a: ["zgrupować przypadki użycia w klasy i narysować na osobnych diagramach zawartość poszczególnych klas", "zgrupować przypadki użycia w pakiety i narysować na osobnych diagramach zawartość poszczególnych pakietów", "taka sytuacja nigdy nie występuje", "jeśli taka sytuacja wystąpiła, to znaczy, że źle zostały nazwane poszczególne przypadki użycia i należy dokonać stosownej korekty ich definicji"],
        correct: 1
    },
    {
        q: "Na diagramie czynności w języku UML mogą występować następujące elementy:",
        a: ["akcje, agregacje, punkty decyzyjne", "akcje, aktorzy, przejścia", "akcje, przejścia, punkty decyzyjne", "akcje, aktorzy, agregacje"],
        correct: 2
    },

    // ===== Testowanie =====
    {
        q: "Typowymi działaniami zaimplementowanymi w testach jednostkowych są:",
        a: ["przygotowanie niezbędnej konfiguracji, wywołanie testowanego fragmentu, sprawdzenie czy działa zgodnie z oczekiwaniami, rozmontowanie konfiguracji testu", "przygotowanie niezbędnej konfiguracji, wywołanie testowanego fragmentu, zapytanie testera czy program działa zgodnie z oczekiwaniami, podjęcie decyzji przez testera, rozmontowanie konfiguracji testu", "instalacja oprogramowania w docelowym środowisku, przygotowanie niezbędnej konfiguracji, uruchomienie oprogramowania i nawigacja za pomocą GUI do testowanego fragmentu, sprawdzenie czy działa zgodnie z oczekiwaniami, rozmontowanie konfiguracji testu", "przygotowanie niezbędnej konfiguracji, uruchomienie oprogramowania i nawigacja za pomocą GUI do testowanego fragmentu, sprawdzenie czy działa zgodnie z oczekiwaniami, rozmontowanie konfiguracji testu"],
        correct: 0
    },
    {
        q: "Defekt w oprogramowaniu:",
        a: ["zawsze ujawnia się w postaci awarii", "zawsze jest wynikiem błędnej konfiguracji sprzętowo-programowej", "można wykryć nawet jeśli oprogramowanie nie jest uruchomione", "można wykryć tylko w czasie działania programu"],
        correct: 2
    },
    {
        q: "Testowanie integracyjne ma na celu:",
        a: ["ocenę połączonych składników oprogramowania", "wykrycie defektów widocznych z punktu widzenia funkcji/wymagań użytkownika", "sprawdzenie oprogramowania w środowisku docelowym lub je imitującym", "sprawdzenie działania poszczególnych elementarnych składników oprogramowania"],
        correct: 0
    },
    {
        q: "Narzędzia testujące typu 'record & playback', które symulują działanie użytkownika:",
        a: ["są najczęściej używane do testowania jednostkowego", "są najczęściej używane do testowania integracyjnego", "są używane w metodach białej skrzynki", "są wykorzystywane do testowania systemowego"],
        correct: 3
    },
    {
        q: "Testowanie akceptacyjne ma na celu:",
        a: ["sprawdzenie oprogramowania w środowisku docelowym lub je imitującym", "sprawdzenie działania poszczególnych elementarnych składników oprogramowania", "ocenę połączonych składników oprogramowania", "wykrycie defektów w odniesieniu do specyfikacji wymagań oprogramowania"],
        correct: 3
    },
    {
        q: "Co można powiedzieć o adekwatności liczby przypadków testowych? (3 przypadki użycia × 2 scenariusze = 6 scenariuszy, przygotowano 3 przypadki testowe)",
        a: ["liczba przypadków testowych na pewno jest wystarczająca", "liczba przypadków testowych może być zbyt wysoka", "liczba przypadków testowych na pewno jest za niska", "liczba przypadków testowych może być wystarczająca"],
        correct: 3
    },
    {
        q: "Plan testów określa:",
        a: ["kroki wykonywane przez testera", "wymagania, które będą testowane", "dane, które będą użyte przez testera", "które testy zakończyły się sukcesem/porażką"],
        correct: 1
    },
    {
        q: "Poszczególne testy:",
        a: ["mogą być sprawdzane za pomocą innych testów (czyli 'testy testów')", "powinny być niezależne od siebie", "mogą być skonstruowane w taki sposób, że wynik danego testu zależy od wyniku/wywołania innego testu", "muszą być tak skonstruowane, żeby wszystkie łącznie zweryfikowały poprawność wszystkich instrukcji w kodzie źródłowym"],
        correct: 2
    },
    {
        q: "Przypadek testowy na poziomie testowania jednostkowego określa:",
        a: ["dane, które będą użyte w teście", "kolejność i sposób przeprowadzania poszczególnych testów", "wymagania, które będą testowane", "które testy zakończyły się sukcesem/porażką"],
        correct: 0
    },

    // ===== Git =====
    {
        q: "Jakie polecenie systemu Git służy do wycofania wcześniej wykonanej operacji zapisania zmian w repozytorium?",
        a: ["pull", "abort", "reset", "back"],
        correct: 2
    },
    {
        q: "Jakie polecenie systemu Git służy do wysłania lokalnej kopii repozytorium w celu synchronizacji z kopią na komputerze zdalnym?",
        a: ["pull", "commit", "push", "add"],
        correct: 2
    },
    {
        q: "System kontroli wersji Git jest systemem:",
        a: ["scentralizowanym", "zwinnym", "rozproszonym", "kaskadowym"],
        correct: 2
    },
    {
        q: "System kontroli wersji (np. Git) nie służy do:",
        a: ["odtworzenia stanu kodu programu z punktu czasu w przeszłości", "zapewnienia przenośności oprogramowania na różne platformy docelowe", "synchronizacji efektów pracy poszczególnych programistów", "sprawdzenia kto wprowadził daną modyfikację w kodzie programu"],
        correct: 1
    },
    {
        q: "Jakie polecenie systemu Git służy do pobrania zdalnej kopii repozytorium, która ma być zsynchronizowana z komputerem lokalnym?",
        a: ["commit", "add", "pull", "push"],
        correct: 2
    },
    {
        q: "Jakie polecenie Git służy do zatwierdzenia zmiany w repozytorium?",
        a: ["add", "commit", "push", "create"],
        correct: 1
    },

    // ===== Architektura i wzorce =====
    {
        q: "Architekturę oprogramowania opracowaną w etapie projektowania ilustrują diagramy:",
        a: ["komponentów", "przypadków użycia", "maszyny stanowej", "klas"],
        correct: 0
    },
    {
        q: "W oprogramowaniu wykorzystującym podział na partycje poszczególne partycje:",
        a: ["są niezależnymi od siebie komponentami działającymi na różnych węzłach sprzętowych", "mogą wywoływać partycje z warstwy wyższej", "stanowią implementację zamkniętego zestawu funkcjonalności widzianego z punktu widzenia użytkownika", "mogą wywoływać partycje z warstwy niższej"],
        correct: 2
    },
    {
        q: "Spoistość w odniesieniu do architektury oprogramowania mówi o tym, że:",
        a: ["powiązania między podsystemami powinny być ścisłe", "powiązania między podsystemami powinny być luźne", "powiązania wewnątrz poszczególnych podsystemów powinny być ścisłe", "powiązania wewnątrz poszczególnych podsystemów powinny być luźne"],
        correct: 2
    },
    {
        q: "Sprzężenie w odniesieniu do architektury oprogramowania mówi o tym, że:",
        a: ["powiązania między podsystemami powinny być ścisłe", "powiązania między podsystemami powinny być luźne", "powiązania wewnątrz poszczególnych podsystemów powinny być ścisłe", "powiązania wewnątrz poszczególnych podsystemów powinny być luźne"],
        correct: 1
    },
    {
        q: "Do wzorców architektonicznych należą:",
        a: ["singleton, adapter, dekorator", "klient-serwer, adapter, dekorator", "singleton, adapter, model-widok-kontroler", "klient-serwer, model-widok-kontroler, architektura trójwarstwowa"],
        correct: 3
    },
    {
        q: "Do wzorców projektowych należą:",
        a: ["singleton, adapter, dekorator", "klient-serwer, adapter, dekorator", "klient-serwer, model-widok-kontroler, architektura trójwarstwowa", "singleton, adapter, model-widok-kontroler"],
        correct: 0
    },
    {
        q: "W oprogramowaniu wykorzystującym podział na warstwy, elementy składowe z danej warstwy:",
        a: ["stanowią implementację zamkniętego zestawu funkcjonalności widzianego z punktu widzenia użytkownika", "mogą wywoływać składowe z warstwy niższej", "mogą wywoływać składowe z warstwy wyższej", "są niezależnymi od siebie komponentami działającymi na różnych węzłach sprzętowych"],
        correct: 1
    },
    {
        q: "Jakie polecenie systemu Git służy do sprawdzenia stanu zmian w katalogu roboczym?",
        a: ["status", "check", "push", "pull"],
        correct: 0
    },

    // ===== Szacowanie i metryki =====
    {
        q: "Które twierdzenie odnośnie liczby punktów funkcyjnych jest prawdziwe?",
        a: ["liczba ta ma bezpośrednie przełożenie na wielkość oprogramowania w liniach kodu źródłowego", "liczba ta wyraża wielkość nakładów na realizację całego projektu", "liczba ta wyraża wielkość nakładów na prace stricte programistyczne (kodowanie)", "liczba ta wyraża rozmiar oprogramowania"],
        correct: 3
    },
    {
        q: "W metodzie COCOMO II główną zmienną wpływającą na wynik jest:",
        a: ["nakłady projektowe", "wielkość oprogramowania", "liczba defektów w oprogramowaniu", "złożoność oprogramowania"],
        correct: 1
    },
    {
        q: "Liczba punktów funkcyjnych zależy od:",
        a: ["wejść, wyjść, logicznych plików, interfejsów, zapytań", "rozmiaru oprogramowania, parametrów skali, mnożników nakładów, stałych z możliwością kalibracji", "wielkości oprogramowania, złożoności problemu, jakości procesu wytwórczego", "przypadków użycia i aktorów"],
        correct: 0
    },
    {
        q: "Które twierdzenie odnośnie szacowania przez analogię jest nieprawdziwe?",
        a: ["nie jest wykorzystywana do szacowania liczby defektów w oprogramowaniu", "podstawą szacunku jest spotkanie robocze ekspertów", "za punkt odniesienia można wykorzystać projekt nie w pełni zgodny z projektem podlegającym ocenie", "bazuje na podobieństwie bieżącego projektu do projektu realizowanego wcześniej"],
        correct: 1
    },
    {
        q: "Gdy dysponujemy bardzo niewielką ilością danych empirycznych, a potrzebujemy dokonać oszacowania w obszarze inżynierii oprogramowania, to:",
        a: ["nie możemy wykorzystać standardowych modeli z kalibracją w docelowym środowisku", "nie możemy dokonać żadnego oszacowania", "nie możemy wykorzystać technik bazujących na szacowaniu przez eksperta", "skuteczne będą metody uczenia maszynowego"],
        correct: 0
    },
    {
        q: "Liczba punktów przypadków użycia zależy od:",
        a: ["rozmiaru oprogramowania, parametrów skali, mnożników nakładów, stałych z możliwością kalibracji", "wielkości oprogramowania, złożoności problemu, jakości procesu wytwórczego", "wejść, wyjść, logicznych plików, interfejsów, zapytań", "przypadków użycia i aktorów"],
        correct: 3
    },
    {
        q: "W metodzie punktów funkcyjnych IFPUG korygowanie miary punktów funkcyjnych następuje z wykorzystaniem:",
        a: ["wskaźnika złożoności technicznej", "wskaźnika złożoności środowiskowej", "wskaźnika korekcji wartości", "w tej metodzie nie dokonuje się korekcji"],
        correct: 2
    },

    // ===== Jakość i procesy =====
    {
        q: "Weryfikacja (verification) na danym etapie wytwarzania oprogramowania polega na odniesieniu ocenianego produktu do:",
        a: ["specyfikacji testowej", "oczekiwań i potrzeb biznesowych klienta", "produktu z poprzedniego etapu wytwarzania", "specyfikacji wymagań"],
        correct: 3
    },
    {
        q: "Zatwierdzenie (validation) oprogramowania polega na odniesieniu ocenianego produktu do:",
        a: ["projektu architektury oprogramowania", "specyfikacji testowej", "produktu z poprzedniego etapu wytwarzania", "oczekiwań i potrzeb biznesowych klienta"],
        correct: 3
    },
    {
        q: "Metodami zapewnienia jakości oprogramowania są:",
        a: ["testowanie, analiza środowiskowa i przeglądy", "testowanie i analiza środowiskowa", "testowanie, przeglądy i inspekcje, dowodzenie poprawności", "testowanie, analiza przedwdrożeniowa, przeglądy i inspekcje"],
        correct: 2
    },
    {
        q: "Przegląd jakości oprogramowania:",
        a: ["może być wykorzystany do oceny danego produktu projektu względem predefiniowanego zestawu kryteriów", "może być użyty wyłącznie do oceny kodu źródłowego", "ma na celu wykrycie defektów w oprogramowaniu", "można wykorzystać do oceny jakości pracy poszczególnych deweloperów"],
        correct: 0
    },
    {
        q: "Inspekcja jakości oprogramowania:",
        a: ["ma na celu wykrycie defektów w oprogramowaniu", "może być użyta wyłącznie do oceny projektu programu", "jest używana do oceny danego produktu projektu względem predefiniowanego zestawu kryteriów", "może być wykorzystana do oceny jakości pracy poszczególnych deweloperów"],
        correct: 0
    },
    {
        q: "Model CMMI jest używany do oceny: (pytanie 54)",
        a: ["dojrzałości procesu wytwórczego w firmie wytwarzającej dowolne produkty", "jakości poszczególnych elementów składowych oprogramowania", "jakości pracy poszczególnych deweloperów", "dojrzałości procesu wytwórczego w firmie programistycznej"],
        correct: 3
    },
    {
        q: "Model CMMI jest używany do oceny: (pytanie 70)",
        a: ["dojrzałości procesu wytwórczego w firmie wytwarzającej dowolne produkty", "dojrzałości procesu wytwórczego w firmie programistycznej", "jakości pracy poszczególnych deweloperów", "jakości poszczególnych elementów składowych oprogramowania"],
        correct: 0
    },
    {
        q: "Weryfikacja (verification) na danym etapie wytwarzania oprogramowania polega na odniesieniu ocenianego produktu do: (pytanie 72)",
        a: ["oczekiwań i potrzeb biznesowych klienta", "produktu z poprzedniego etapu wytwarzania", "specyfikacji testowej", "specyfikacji wymagań"],
        correct: 1
    },

    // ===== Inne zagadnienia IO =====
    {
        q: "Konserwacja oprogramowania dotyczy:",
        a: ["odkrycia sposobu działania i architektury w systemie odziedziczonym", "całego okresu wytwarzania od wytwórcy pierwszego produktu w ramach projektu", "opracowania nowej implementacji oprogramowania na podstawie sposobu działania i architektury odkrytych w systemie odziedziczonym", "okresu po przekazaniu do użytkowania"],
        correct: 3
    },
    {
        q: "Rola przypisana do danego końca związku na diagramie klas:",
        a: ["w takim miejscu nie jest możliwe przypisanie roli", "determinuje nazwę atrybutu, który będzie wygenerowany w kodzie na podstawie tego diagramu", "wskazuje nazwę klasy bazowej pod kątem dziedziczenia", "determinuje nazwę klasy, która będzie wygenerowana w kodzie na podstawie tego diagramu"],
        correct: 1
    },
    {
        q: "Co oznacza zasięg egzemplarzowy atrybutu na diagramie klas?",
        a: ["że dostęp do danego atrybutu mają wszystkie obiekty z danej klasy i klas potomnych", "że może istnieć tylko jeden egzemplarz (obiekt) danej klasy w skali całego systemu", "że dany atrybut ma jedną wspólną wartość dla wszystkich obiektów danej klasy", "że dany atrybut może przyjmować odrębne wartości dla poszczególnych obiektów danej klasy"],
        correct: 3
    },
    {
        q: "Inżynieria ponowna dotyczy:",
        a: ["opracowania testów przed implementacją oprogramowania", "odkrycia sposobu działania i architektury w systemie odziedziczonym", "opracowania nowej implementacji oprogramowania na podstawie sposobu działania i architektury odkrytych w systemie odziedziczonym", "aktualizacji dokumentacji po zaimplementowaniu nowych wymagań"],
        correct: 2
    },
    {
        q: "Na czym polega różnica między analizą a projektowaniem oprogramowania?",
        a: ["analiza ma na celu opracowanie planu zarządzania projektem, a projektowanie dotyczy interfejsu użytkownika i bazy danych", "analiza ma na celu pozyskanie i sformułowanie wymagań biznesowych, a projektowanie definiuje architekturę przyszłego rozwiązania", "na niczym istotnym — są to praktycznie synonimy", "analiza ma na celu opracowanie modelu abstrakcyjnego od technologii, a projektowanie definiuje schemat budowy oprogramowania w docelowej technologii"],
        correct: 1
    },
    {
        q: "Składnikami modelu analitycznego oprogramowania są zwykle:",
        a: ["model przypadków użycia, model klas, wymagania niefunkcjonalne", "architektura programowa, cele projektowe, graniczne przypadki użycia", "architektura programu, projekt bazy danych, plan testowania, projekt testów", "projekt bazy danych, projekt interfejsu użytkownika, projekt struktury programu, wymagania niefunkcjonalne"],
        correct: 0
    },
    {
        q: "Produktami projektowania są:",
        a: ["architektura programu, projekt bazy danych, plan testowania, projekt testów", "projekt bazy danych, projekt interfejsu użytkownika, projekt struktury programu, wymagania niefunkcjonalne", "architektura programowa, cele projektowe, graniczne przypadki użycia", "model przypadków użycia, model klas, wymagania niefunkcjonalne"],
        correct: 2
    },
    {
        q: "Załóżmy, że przy końcu związku łączącym się z klasą Autor podano liczebność 1…*. Co oznacza taki zapis?",
        a: ["że jeden obiekt klasy Książka musi być powiązany z co najmniej jednym obiektem klasy Autor", "że takie oznaczenie jest niedopuszczalne", "że jeden obiekt klasy Autor musi być powiązany z co najmniej jednym obiektem klasy Książka", "że w systemie musi istnieć co najmniej jeden obiekt typu Autor"],
        correct: 2
    }
];
