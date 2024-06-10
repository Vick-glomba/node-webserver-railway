require("dotenv").config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port= process.env.PORT


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');


//servir contenido estatico
app.use(express.static("public"))
const modificaciones={
    nombre: "Victor Glomba",
    titulo: "Curso de Node"
}
app.get('/',  (req, res) => {
    res.render("home",modificaciones )
  })

app.get('/generic',  (req, res) => {
    res.render("generic", modificaciones)
  })

app.get('/elements',  (req, res) => {
    res.render("elements", modificaciones)
    })

app.get('*', (req, res) => {
    res.sendFile(__dirname+"/public/back/404.html")
    })

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})