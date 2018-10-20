let express = require('express');
let routes = require('./routes/comments');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let helmet = require('helmet');

const app = express()

mongoose.connect('mongodb://localhost/comments');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(helmet())
app.use('/api', routes)

app.get('/', function (req, res) {
    res.send('Server is running')
})

const port = 3001;
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});