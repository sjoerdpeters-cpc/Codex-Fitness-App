# Development Regels

Dit project is een simpele statische webapp. Elke wijziging die live moet komen, moet eerst lokaal gecontroleerd worden, daarna naar GitHub gepusht worden en vervolgens naar Vercel gepubliceerd worden.

## Basisregels

- Werk altijd vanuit de projectmap `C:\Codex\Codex-Fitness-App`.
- Controleer voor elke release of de app lokaal nog correct werkt.
- Commit alleen bewuste projectwijzigingen.
- Push elke release naar GitHub voordat je naar Vercel publiceert.
- Publiceer releases met een production deploy op Vercel.
- Laat de werkboom na afloop schoon achter.
- Voer bij elke zichtbare UI-wijziging automatisch een UX/UI-check uit.
- Fix kleine hinderlijke UX/UI-zaken direct als ze veilig en beperkt zijn.

## Release Checklist

1. Controleer de git-status:

   ```powershell
   git status --short --branch
   ```

2. Controleer de app lokaal door `index.html` in de browser te openen, of start een simpele lokale server:

   ```powershell
   python -m http.server 8000
   ```

   Open daarna `http://localhost:8000`.

3. Controleer welke bestanden gewijzigd zijn:

   ```powershell
   git diff
   ```

4. Doe bij UI-wijzigingen een UX/UI-check:

   - controleer of navigatie en actieve states duidelijk zijn;
   - controleer of knoppen, filters en formulieren begrijpelijk reageren;
   - controleer of tekst op mobiel niet afkapt of overlapt;
   - controleer focus-states, `aria-current`, `aria-invalid` en foutmeldingen;
   - controleer of het bottom menu bruikbaar blijft op kleine schermen;
   - fix kleine hinderlijke zaken direct als er geen functioneel risico is.

5. Stage alleen de gewenste wijzigingen:

   ```powershell
   git add <bestanden>
   ```

6. Maak een duidelijke commit:

   ```powershell
   git commit -m "Beschrijf de wijziging"
   ```

7. Push naar GitHub:

   ```powershell
   git push
   ```

8. Publiceer naar Vercel production:

   ```powershell
   vercel deploy --prod --yes
   ```

9. Controleer de live website:

   ```powershell
   Invoke-WebRequest -Uri https://codex-fitness-app.vercel.app -UseBasicParsing | Select-Object -ExpandProperty StatusCode
   ```

   De verwachte statuscode is `200`.

10. Controleer dat er geen open wijzigingen meer zijn:

   ```powershell
   git status --short --branch
   ```

## UX/UI Regels

- Een UX/UI-check hoort standaard bij elke wijziging die de gebruiker ziet.
- Kleine visuele, interactie- of toegankelijkheidsproblemen mogen direct worden opgelost zonder extra akkoord.
- Grotere ontwerpkeuzes of wijzigingen in workflow worden eerst als genummerde opties voorgesteld.
- Houd de app mobile-first: het bottom menu moet altijd beschikbaar blijven.
- Gebruik duidelijke actieve states voor tabs, filters en klikbare visuele elementen.
- Gebruik inline validatie voor formulieren; vermijd browser-default popups.
- Controleer dat nieuwe UI werkt met touch, muis en toetsenbord waar redelijk mogelijk.

## Publicatie URLs

- GitHub: https://github.com/sjoerdpeters-cpc/Codex-Fitness-App
- Vercel: https://codex-fitness-app.vercel.app

## Vercel Regels

- Gebruik altijd `vercel deploy --prod --yes` voor releases die live mogen.
- Gebruik preview deployments alleen voor tussentijdse controles.
- De map `.vercel` blijft lokaal en wordt niet gecommit.
- Als Vercel om een projectnaam vraagt, gebruik `codex-fitness-app`.

## Git Regels

- Gebruik korte, duidelijke commitberichten.
- Commit geen lokale configuratie, tokens, logs of tijdelijke bestanden.
- Check altijd `git status --short --branch` voor en na een release.
- Push naar de gekoppelde remote `origin`.
