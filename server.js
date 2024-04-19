const express = require('express');
const app = express();

let lastAuthorizationCode = null; // Variable to store the last received authorization code

app.get('/oauth/callback', (req, res) => {
    const authorizationCode = req.query.code;
    if (!authorizationCode) {
        res.status(400).send('Authorization code not found');
        return;
    }

    // Store the received authorization code
    lastAuthorizationCode = authorizationCode;
    res.send(`Authorization code received: ${authorizationCode}`);
});

// Endpoint to retrieve the last stored authorization code
app.get('/getcode', (req, res) => {
    if (!lastAuthorizationCode) {
        res.status(404).send('No authorization code available');
        return;
    }
    res.send(`Last Authorization Code: ${lastAuthorizationCode}`);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
