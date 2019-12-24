// .. Imports
const express = require("express");

// ... Init
const app = express();
const port = process.env.PORT || 8000;

// ... Log
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})