const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.get('/api/menu', (req, res) => {
    // Read JSON file
    fs.readFile('data.json', 'utf8', (err, jsonString) => {
      if (err) {
        console.log("Error reading file:", err);
        res.status(500).send('Internal Server Error');
        return;
      }
      try {
        const data = JSON.parse(jsonString);
        res.json(data); // Send JSON response
      } catch (err) {
        console.log("Error parsing JSON:", err);
        res.status(500).send('Internal Server Error');
      }
    });
  })
app.listen(port, () => {
  
})