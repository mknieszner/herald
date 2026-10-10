# Herald — kompetencje i dobre praktyki dostępne dla całej organizacji

**[Otwórz demo Herald](https://mknieszner.github.io/herald/)**

Herald pokazuje, jak wiedzę ekspertów, najlepsze praktyki i pomysły na wykorzystanie AI można zamieniać w narzędzia dostępne dla całej organizacji. Użytkownik końcowy wybiera narzędzie z katalogu, poznaje jego zastosowanie i pracuje w uporządkowanym interfejsie — bez pisania kodu i umiejętności developerskich.

**Publiczne demo jest statyczną wizualizacją tej koncepcji.** Pozwala obejrzeć katalog, strukturę narzędzi i sposób ich konfigurowania. Do poznania demo wystarczy przeglądarka; akcje AI pokazują docelowy sposób pracy, ale demo nie uruchamia modeli.

## Co pokazuje Herald

W organizacji kompetencje często pozostają przy konkretnych osobach: ktoś potrafi dobrze opisywać wymagania, prowadzić analizę incydentu albo oceniać decyzje architektoniczne. Herald przedstawia sposób zapisania takiej praktyki w szablonie, który inni mogą odnaleźć, zrozumieć i dostosować do swoich potrzeb.

Szablon łączy strukturę dokumentu, wymagane informacje, wskazówki dotyczące materiałów źródłowych oraz instrukcje dla AI. Dzięki temu osoba przygotowująca narzędzie może określić sposób pracy, a odbiorca korzysta z czytelnych sekcji, pól i akcji.

Demo ilustruje kilka elementów zarządzania takimi narzędziami:

- **Odkrywanie i ponowne wykorzystanie** — wspólny Hub ułatwia znalezienie praktyki odpowiadającej konkretnej potrzebie.
- **Dostosowanie** — kopia szablonu pozwala rozwinąć pomysł dla innego zespołu lub procesu.
- **Rekomendacje i aktualność** — oznaczenia pomagają odróżnić polecane narzędzia od tych, które wymagają aktualizacji.
- **Rozwój katalogu** — autorstwo, wersje i widoczność zastosowań pomagają organizować utrzymanie praktyk.
- **Zgłaszanie potrzeb** — Challenges pokazują, jak potrzeba organizacji może stać się punktem wyjścia do stworzenia nowego narzędzia.

Celem jest skalowanie dostępu do kompetencji: dobra praktyka jednej osoby lub zespołu może stać się przystępnym narzędziem dla kolejnych użytkowników.

## Idea projektu

Herald powstał, zanim popularne stały się agenty oparte na instrukcjach zapisanych w Markdown. Rozwijał podobną ideę: utrwalenie kontekstu, instrukcji i sposobu wykonywania zadania tak, aby można było wielokrotnie z nich korzystać.

W Heraldzie te elementy są przedstawione jako konfigurowalne szablony i akcje dostępne przez interfejs. Organizacja może porządkować je w katalogu, rekomendować, rozwijać i udostępniać użytkownikom nietechnicznym. Odbiorca pracuje z narzędziem opisanym językiem jego zadania, a nie z plikami instrukcji lub kodem.

## Jak obejrzeć demo

1. **Otwórz [demo](https://mknieszner.github.io/herald/).** W nagłówku możesz wybrać język i kolorystykę.
2. **Kliknij przycisk uruchamiający demo**, aby przejść do **Template Hub** — katalogu szablonów.
3. **Uruchom Explore Template Hub.** Ikona przewodnika po wejściu na ekran delikatnie rozbłyska i pokazuje krótką podpowiedź. Tour objaśnia najważniejsze elementy katalogu.
4. **Wybierz szablon i obejrzyj Preview.** Zobacz, jak zadanie zostało rozłożone na sekcje i pola.
5. **Otwórz Smart Template Config.** Sprawdź, jak struktura i instrukcje opisują kompetencję, którą można przekazać innym.
6. **Użyj Fork, aby przejść do Playgroundu z własną kopią.** Możesz zmieniać strukturę i instrukcje oraz oglądać wynik. Własne warianty są zapisywane w przeglądarce; import i eksport JSON pozwalają zachować ich konfigurację.

Zwróć uwagę na wyszukiwanie, filtry, oznaczenia **Certyfikowany** i **Nieaktualny** oraz informacje na kartach. Pokazują, jak użytkownik może wybierać narzędzia, a organizacja — zarządzać ich katalogiem.

## Przykładowe kompetencje w katalogu

| Szablon | Praktyka, którą można udostępnić innym |
|---|---|
| **Od materiału źródłowego do historyjek** | Porządkowanie wymagań, tworzenie historyjek i kryteriów akceptacji oraz sprawdzanie pokrycia źródeł. |
| **Decyzja architektoniczna — ADR** | Dokumentowanie kontekstu, rozważanych opcji, uzasadnienia decyzji i jej konsekwencji. |
| **Deployment & DB Change Report (Liquibase-Aware)** | Przygotowanie uporządkowanego raportu zmian wdrożeniowych i bazodanowych. |
| **Karta systemu z kodu** | Opisywanie funkcji systemu, API, modelu danych i ograniczeń na podstawie implementacji. |
| **Scenariusze testowe z wymagań** | Przekładanie wymagań na scenariusze Given / When / Then i identyfikowanie luk. |
| **Dokumentacja kontra implementacja** | Porównywanie opisów z kodem i przygotowanie propozycji korekt. |
| **Ze spotkania do ustaleń** | Wyodrębnianie decyzji, przyjętych działań i otwartych pytań z notatek. |
| **Analiza incydentu — postmortem** | Porządkowanie wpływu incydentu, osi czasu, dowodów, hipotez i działań naprawczych. |

## Jak szablon opisuje pracę z AI

Każda sekcja może mieć własne instrukcje określające oczekiwany rezultat i sposób pracy z materiałem. Konfiguracja pokazuje cztery rodzaje akcji:

| Akcja | Rola w narzędziu |
|---|---|
| **Fill** | Przygotowanie propozycji uzupełnienia pól na podstawie źródeł i instrukcji. |
| **Explain** | Wyjaśnianie treści i rozmowa o kontekście sekcji. |
| **Evaluate** | Ocena treści według kryteriów określonych przez autora szablonu. |
| **Command** | Praca nad sekcją za pomocą poleceń użytkownika. |

Te instrukcje pozwalają autorowi zapisać coś więcej niż pojedynczy prompt: określić strukturę wyniku, wymagany kontekst i kryteria przeglądu. W docelowym sposobie pracy użytkownik przegląda propozycje zmian przed ich zaakceptowaniem.

**Sekcje pracują niezależnie.** Materiał wejściowy lub zaakceptowany wynik wcześniejszego kroku trzeba przekazać jawnie, zgodnie z instrukcją sekcji. Bloki wskazówek w szablonach pokazują, jak organizować taki przepływ.

## Pełna wersja Herald

Pełna wersja działa z dedykowanym backendem **Java + Spring Boot**, który można wdrożyć jako **JAR lub obraz kontenera**. Ma wbudowane integracje z produktami **Atlassian**, w tym **Jira i Confluence**, oraz z **GitLab i GitHub**.

Pełne środowisko umożliwia pracę na wspólnych zasobach organizacji: publikowanie szablonów i tworzenie **Smart Case’ów**, czyli konkretnych spraw prowadzonych na podstawie szablonu. Jira pełni rolę trwałego magazynu danych biznesowych.

Publiczne demo prezentuje interfejs i koncepcję tego rozwiązania. Wspólny zapis, integracje i wykonywanie akcji AI należą do pełnego środowiska.

**[Zobacz, jak może wyglądać wspólny katalog kompetencji i narzędzi AI](https://mknieszner.github.io/herald/)**
