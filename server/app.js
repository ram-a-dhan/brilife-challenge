const express = require('express');
const cors = require('cors');
const routers = require('./routers');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);
app.use(errorHandler);

app.listen(PORT, console.log(`server live on http://localhost:${PORT}`));