// config/properties.js
module.exports = {
    PORT: process.env.PORT,
    DB: process.env.MONGODB,
    CORS: [process.env.CLIENT_CORS]
}