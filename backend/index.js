const express = require('express');
const cors= require('cors')
const app = express();
const connectDB=require('./db');
const routes= require('./router');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/feedback',routes);
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));