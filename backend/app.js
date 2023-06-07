const path = require('path');
const express = require('express');

var app = express();
const PORT =  process.env.PORT ?? 3000;

app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

app.get('/page', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'html', 'index.html'));
});

// All other GET requests not handled before will return our React app

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`));
