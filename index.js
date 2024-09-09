const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000


//MiddleWares
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('BazaarBD server is runnig')
})

app.listen(port, () => {
    console.log(`BazzarBD server is runnig on port ${port}`);
})