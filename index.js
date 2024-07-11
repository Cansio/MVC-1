 const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(bodyparser.json());

app.use('/users', userRoutes);

app.get('/',(req,res)=>{
    res.send('API is running...');
});

app.listen(5000, () => {
    console.log('server running on port 5000...');
});
