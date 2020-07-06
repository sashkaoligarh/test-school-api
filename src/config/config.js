const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    port: process.env.PORT || '4002',
    mongoUrl: process.env.MONGO_URL,
    token: `Bearer ${process.env.API_TOKEN}` ,
    
}


