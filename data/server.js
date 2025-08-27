const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

//connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KissanPissa25',
    database: 'heritage3d'
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

//API route to get metadata
app.get('/objects', (req, res) => {
    db.query("SELECT * FROM objects", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});