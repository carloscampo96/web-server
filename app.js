import express from 'express'
import * as url from 'url'
import hbs from 'hbs'
import dotenv from 'dotenv'

dotenv.config();


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

const port = process.env.PORT;

const info = {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
};

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static('public') );



app.get('/', (req, res) => {
    res.render('home', info);
});

app.get('/generic', (req, res) => {
    res.render('generic', info);
});

app.get('/elements', (req, res) => {
    res.render('elements', info);
});


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' )
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})