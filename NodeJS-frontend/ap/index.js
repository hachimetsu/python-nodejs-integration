const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.json({ sum });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});