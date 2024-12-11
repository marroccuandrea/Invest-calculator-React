# Investment Calculator

## Descrizione

L'Investment Calculator è un'applicazione React progettata per aiutare gli utenti a calcolare il valore futuro dei loro investimenti. Gli utenti possono inserire dettagli come l'investimento iniziale, l'investimento annuale, il ritorno previsto e la durata dell'investimento. L'app fornisce quindi una tabella dettagliata che mostra l'andamento dell'investimento nel tempo.

## Come funziona

1. **Input dell'utente**: Gli utenti possono inserire i seguenti dati:

   - **Investimento iniziale**: L'importo iniziale investito.
   - **Investimento annuale**: L'importo aggiuntivo investito ogni anno.
   - **Ritorno previsto**: Il tasso di interesse annuale previsto (in percentuale).
   - **Durata**: La durata dell'investimento in anni.

2. **Calcolo dei risultati**: Una volta inseriti i dati, l'app calcola i risultati dell'investimento utilizzando la funzione `calculateInvestmentResults`. I risultati includono il valore dell'investimento alla fine di ogni anno, gli interessi annuali e totali, e il capitale investito.

3. **Visualizzazione dei risultati**: I risultati vengono visualizzati in una tabella che mostra i dettagli per ogni anno dell'investimento.

## Componenti principali

- **App.jsx**: Il componente principale che gestisce lo stato dell'input dell'utente e la logica di rendering.
- **UserInput.jsx**: Un componente che raccoglie i dati di input dall'utente.
- **Results.jsx**: Un componente che calcola e visualizza i risultati dell'investimento in una tabella.

## Installazione

Per eseguire l'app, assicurati di avere Node.js e npm installati. Quindi, esegui i seguenti comandi:

```bash
npm install
npm run dev
```

L'app sarà disponibile su `http://localhost:3000`.

## Licenza

Questo progetto è concesso in licenza sotto la MIT License.
