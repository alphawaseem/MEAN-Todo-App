let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let index = require('./routes/index');
let todos = require('./routes/todos');

let app = express();

//View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/api/v1', todos);
app.listen(3000, _ => {
    console.log('Server started on port 3000');
})