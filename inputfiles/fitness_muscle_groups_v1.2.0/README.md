# Fitness Muscle Groups Dataset v1.2.0

Deze dataset bevat een zo volledig mogelijke basisindeling van spiergroepen voor een fitness-app.

## Bestanden

- `muscle_groups.v1.2.0.json`  
  Hoofddataset met spiergroepen, hiërarchie, slugs, aliases en body location metadata.

- `muscle_groups.lookup.v1.2.0.json`  
  Compact lookup-bestand voor snelle frontend/backend-validatie.

- `CHANGELOG.md`  
  Versiehistorie.

## Belangrijkste velden

| Veld | Betekenis |
|---|---|
| `id` | Stabiele technische sleutel |
| `slug` | URL/frontend-vriendelijke naam |
| `name` | Nederlandse naam |
| `englishName` | Engelse naam |
| `latinName` | Anatomische/Latijnse naam |
| `type` | `region`, `parent_group`, `muscle_group`, `functional_group` |
| `parentId` | Verwijzing naar bovenliggende groep |
| `bodyRegion` | Hoofdregio van het lichaam |
| `bodyPart` | Specifiekere plek in het lichaam |
| `side` | `left`, `right` of `both` |
| `views` | Relevante body-map views |
| `aliases` | Zoektermen/synoniemen |
| `isLeaf` | `true` als het een concrete spiergroep is |
| `importance` | Relatieve prioriteit voor app/game/training logic |

## Gebruik bij oefeningen

Voorbeeld:

```json
{
  "exerciseId": "bench_press",
  "primaryMuscleGroupIds": ["chest_mid_lower"],
  "secondaryMuscleGroupIds": ["triceps", "shoulders_front"],
  "trainingTypeIds": ["strength", "hypertrophy"]
}
```

## Visualisatie

Visualisatievelden zijn bewust nog niet toegevoegd.  
De dataset bevat wel `views`, `bodyRegion`, `bodyPart`, `side` en een canvas-definitie, zodat SVG/3D later veilig toegevoegd kan worden.

Canvas:
- width: `320`
- height: `520`

## Status

Bruikbaar voor:
- oefening-database
- filtering per spiergroep
- schema-generator
- AI-search via aliases
- frontend dropdowns/cards
- latere body-map visualisatie
