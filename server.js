const express = require("express");
const aboutRouter = require("./routes/about");
const articlesRouter = require("./routes/articles");
const donateRouter = require("./routes/donate")

const app = express();

app.set('view engine', 'ejs');

app.use('/about', aboutRouter);
app.use('/articles', articlesRouter);
app.use('/donate', donateRouter);

const articles = [{
    title: "Otters are adorable",
    createdon: new Date(),
    description: "All otters are fuzzy and adorable"
},
{
    title: "Otters hold hands so they don't float away from each other",
    createdon: new Date(),
    description: "Otters holding haaaaaands"
}]
app.get("/", (req, res) => {
    res.render('index', { articles: articles })
});

app.listen(5000)