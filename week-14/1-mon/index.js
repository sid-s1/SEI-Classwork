const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true })); //because express is very basic and submitted form won't show any info if we dont include this 

app.get('/', (req, res) => {
    res.send('Hello, world! changed');
});

app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get('/query', (req, res) => {
    res.send(req.query);
});

app.get('/form', (req, res) => {
    res.send(`
        <form method='POST' action='/form'>
            <input type='text' name='movie'>
            <input type='submit'>
        </form>
    `);
});

app.post('/form', (req, res) => {
    res.send(req.body);
});

//templating engine. one called 'ejs'. there would be other ones too
app.set('view engine', 'ejs');
app.get('/template', (req, res) => {
    res.render('index', { message: 'Hey' });
});

app.listen(port, () => {
    console.log(`Sample app listening on ${port}`);
});