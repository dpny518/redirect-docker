const express = require('express');
const app = express();

app.get('/oauth/callback', (req, res) => {
    const authorizationCode = req.query.code;
    if (!authorizationCode) {
        res.status(400).send('Authorization code not found');
        return;
    }

    res.send(`Authorization code received: ${authorizationCode}`);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
