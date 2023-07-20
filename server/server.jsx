import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App'; 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static('build'));


app.get('/', (req, res) => {
  const appMarkup = renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React rendue côté serveur</title>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
