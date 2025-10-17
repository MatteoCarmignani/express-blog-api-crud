const express = require('express');
const app = express();
const port = 3000;


const bachecaRouter = require("./routers/posts");


app.use(express.static('public'));


app.get('/', (req, res) => {
  console.log("hai richiesto la rotta di index");

  res.send('Server del mio blog');
});

// impostiamo la rotta di ricerca
app.get("/ricerca", (req, res) => {
    const termine = req.query.termine;
    const page = req.query.page;

    res.send(`Hai ricercato il termine ${termine}, alla pagina numero ${page}`)
})


app.use("/posts", bachecaRouter);


app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
}); 
