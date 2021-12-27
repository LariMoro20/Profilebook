const express = require('express');
var bodyParser = require('body-parser')
//const cookieparser = require('cookie-parser');
//const session = require('express-session');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// For Express version less than 4.16.0
// ------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const SiteRouter = require('./routers/SiteRoute');
app.use(SiteRouter);

app.use((req, res) => {
    res.status(404);
    res.json({ 'ERROR': { 'error_code': '404', 'message': 'Página inexistente' } })
    res.end();
});
app.listen(5000, () => { console.log('Ouvindo na 5000') })