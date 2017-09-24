const express = require('express');

const api = require('./router/api');
const { port, host } = require('./configure');

const app = express();

app.listen(process.env.PORT || port, () => console.log(host));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index');
});

