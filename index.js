const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.get('/nfts/:param', async (req, res) => {
    const data = await fetch('https://backend.webplus.one/klaytn/nfts?nft='+req.params.param).then(res => res.json());
    res.json(data);
});