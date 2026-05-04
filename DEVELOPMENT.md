# Development Regels

Dit project is een simpele statische webapp. Elke wijziging die live moet komen, moet eerst lokaal gecontroleerd worden, daarna naar GitHub gepusht worden en vervolgens naar Vercel gepubliceerd worden.

## Basisregels

- Werk altijd vanuit de projectmap `C:\Codex\Codex-Fitness-App`.
- Controleer voor elke release of de app lokaal nog correct werkt.
- Commit alleen bewuste projectwijzigingen.
- Push elke release naar GitHub voordat je naar Vercel publiceert.
- Publiceer releases met een production deploy op Vercel.
- Laat de werkboom na afloop schoon achter.

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

4. Stage alleen de gewenste wijzigingen:

   ```powershell
   git add <bestanden>
   ```

5. Maak een duidelijke commit:

   ```powershell
   git commit -m "Beschrijf de wijziging"
   ```

6. Push naar GitHub:

   ```powershell
   git push
   ```

7. Publiceer naar Vercel production:

   ```powershell
   vercel deploy --prod --yes
   ```

8. Controleer de live website:

   ```powershell
   Invoke-WebRequest -Uri https://codex-fitness-app.vercel.app -UseBasicParsing | Select-Object -ExpandProperty StatusCode
   ```

   De verwachte statuscode is `200`.

9. Controleer dat er geen open wijzigingen meer zijn:

   ```powershell
   git status --short --branch
   ```

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
