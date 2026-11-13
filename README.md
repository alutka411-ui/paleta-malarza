# Paleta Malarza

Aplikacja internetowa do analizy kolorów, budowania palet i studiowania kompozycji. Jest przygotowana jako PWA do instalacji na telefonie przez GitHub Pages.

## Co zawiera ta wersja
- analiza kolorów fotografii, propozycje harmonii i plan malarski;
- biblioteka palet inspiracyjnych;
- Warsztat Koloru podzielony na osobne podzakładki;
- Biblioteka wiedzy i Kompozycja obrazu;
- 26 autorskich schematów SVG oraz galeria 242 osobnych przykładów kompozycji;
- poprawione, pełne kadry szkiców z planszy geometrycznej i miniatur pejzażowych;
- jasny, ciepły motyw z wysokim kontrastem;
- manifest i service worker PWA z cache `paleta-malarza-v9`.

## Publikacja na GitHub Pages
1. Rozpakuj ZIP.
2. Wejdź do repozytorium GitHub `paleta-malarska`.
3. Otwórz główny katalog repozytorium (root).
4. Wgraj **całą zawartość** rozpakowanego folderu, a nie sam ZIP. Zastąp stare pliki.
5. Koniecznie zachowaj folder `kompozycje-mini` wraz ze wszystkimi plikami JPG.
6. Kliknij **Commit changes**.
7. Wejdź w **Settings → Pages**. Ustaw **Deploy from a branch**, gałąź `main`, katalog `/(root)`, kliknij **Save**.

W katalogu głównym muszą znajdować się `index.html`, `manifest.webmanifest`, `sw.js`, ikony oraz folder `kompozycje-mini`.

## Instalacja na telefonie
- **Android:** otwórz opublikowany adres HTTPS w Chrome → menu ⋮ → „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.
- **iPhone:** otwórz opublikowany adres HTTPS w Safari → Udostępnij → „Dodaj do ekranu początkowego”.

**Ważne:** nie otwieraj lokalnego `index.html` dwuklikiem, aby instalować PWA. Adres `file:///.../index.html` służy tylko do podglądu; instalacja PWA wymaga publikacji pod HTTPS. GitHub Pages zapewnia HTTPS.

## Po aktualizacji
Jeśli po publikacji widzisz starą wersję, zamknij kartę/aplikację i otwórz stronę ponownie. Service worker ma nową nazwę cache `paleta-malarza-v9`, więc przeglądarka powinna pobrać nową wersję i usunąć poprzednią pamięć podręczną.


## Ponowne wycinanie kompozycji — 13 listopada 2026

Na podstawie ponownie przesłanych oryginalnych plansz przebudowano galerię. Nie dzielono już plansz według przybliżonej siatki podglądu: problematyczne plansze wycięto ponownie w pełnych współrzędnych plików, a siatkę małych szkiców geometrycznych oparto na wykrytych obramowaniach.

- Galeria zawiera **223 pojedyncze kadry**.
- Każdy kadr jest osobnym plikiem JPG z tytułem, kategorią i dopasowanym opisem.
- Zachowano całe obramowania szkiców; przycięto wyłącznie margines planszy lub podpis spoza kadru, gdy przeszkadzał w samodzielnej prezentacji.
- Szkice z planszy z widocznym znakiem wodnym nie zostały dodane.
- Kategorie galerii zostały ujednolicone z filtrami w interfejsie.
- Wszystkie pliki z galerii są lokalne i buforowane przez service worker.
- Pamięć PWA: `paleta-malarza-v10`.
