const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
	res.send('may final demo');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
