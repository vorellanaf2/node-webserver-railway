import dotenv from 'dotenv'
import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express()
dotenv.config();
const port = process.env.PORT;
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

// Server contenido estatico
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: ' Victor',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: ' Victor',
        titulo: 'Curso Node'
    });
});
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: ' Victor',
        titulo: 'Curso Node'
    });
});
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');   
})
app.listen(port,'0.0.0.0' ,() => {
  console.log(`Example app listening on port ${port}`)
});