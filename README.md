# Paleta Malarza

Aplikacja internetowa do analizy kolorów, planowania palet i nauki kompozycji. Przygotowana jako PWA do publikacji w GitHub Pages i instalacji na telefonie.

## Galerie kompozycji — nowa wersja

Galeria zawiera 53 pojedyncze przykłady wycięte z trzech nowych plansz przesłanych przez użytkowniczkę:
- 16 schematów geometrycznych i podziałów kadru;
- 25 osobnych kompozycji pejzażowych;
- 12 przykładów zasad kompozycji: kształt C, złoty podział, kształt V, równowaga, nierównowaga i podwójna przekątna.

Każdy szkic jest osobnym plikiem JPG z ramką, tytułem i krótkim opisem. Wyszukiwarka i filtr działają na trzech nowych kategoriach. Stare, błędnie przycięte grafiki nie są już wykorzystywane przez galerię.

**Ważne:** pliki JPG są celowo umieszczone luzem w katalogu głównym — obok `index.html`, a nie w podfolderze.

## Publikacja na GitHub Pages

1. Rozpakuj ZIP.
2. Otwórz repozytorium `alutka411-ui/paleta-malarska`.
3. Przejdź do głównego katalogu gałęzi `main`.
4. Wybierz **Add file → Upload files**.
5. Przeciągnij całą zawartość rozpakowanego folderu. Wgraj `index.html`, `sw.js`, pliki JPG, ikony, manifest oraz `.nojekyll`.
6. Zatwierdź przez **Commit changes**.
7. W **Settings → Pages** pozostaw publikowanie z gałęzi `main` i katalogu `/(root)`.

Na najwyższym poziomie repozytorium powinny znajdować się `index.html`, `manifest.webmanifest`, `sw.js` oraz wszystkie pliki `schemat_*.jpg`, `pejzaz_*.jpg` i `zasada_*.jpg`.

Nie twórz dodatkowego folderu dla ilustracji. Nie usuwaj `manifest.webmanifest`, ikon ani `sw.js`. Stare, nieużywane ilustracje mogą pozostać w repozytorium — nowy `index.html` już ich nie odwołuje.

## Instalacja na telefonie

- Android: otwórz opublikowany adres HTTPS w Chrome → menu ⋮ → „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.
- iPhone: otwórz adres HTTPS w Safari → Udostępnij → „Dodaj do ekranu początkowego”.

Instalacja PWA wymaga publikacji pod HTTPS. Sam lokalny plik `index.html` otwarty z dysku nie zapewnia pełnej obsługi PWA.

## Pamięć podręczna

Service worker używa cache `paleta-malarza-v13` i zapisuje pliki aplikacji oraz 53 nowe ilustracje. Po aktualizacji zamknij starą kartę i otwórz ponownie opublikowaną stronę. Jeżeli telefon nadal pokazuje poprzednie grafiki, usuń i ponownie zainstaluj PWA lub wyczyść dane witryny.


## Scalona galeria kompozycji — wersja v14

W tej wersji połączono 53 nowe przykłady z 175 wcześniej przygotowanymi, poprawnymi ilustracjami. Zachowano wcześniejsze przykłady klasycznych zasad, pejzaży, linii prowadzących, równowagi, postaci, głębi, przestrzeni pozytywnej/negatywnej i rytmu. Usunięto wyłącznie 48 wadliwych wycinków z serii geom_final, zastępując je nowymi schematami geometrycznymi.

Łącznie galeria zawiera 228 pojedynczych przykładów. Wszystkie obrazy znajdują się luzem obok index.html — bez dodatkowego folderu. Service worker v14 buforuje wszystkie grafiki.

