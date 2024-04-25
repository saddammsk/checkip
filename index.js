const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

let cachedCountryCode = null;
const apiUrl = 'https://api.ipbase.com/v1/json/';

app.get('/', async (req, res) => {
  
            try {
                const geoResponse = await axios.get(apiUrl);
                countryCode = geoResponse.data.country_code.toUpperCase(); 
                res.send(countryCode)
            } catch (error) {
                console.error('Error fetching user country:', error);
            }
            cachedCountryCode = countryCode;
           
    
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

