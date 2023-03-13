const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// add these lines of code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  // your login logic here
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
