require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

const getFact = async () => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/facts',{
            headers:{
                'X-Api-Key': process.env.API_KEY
            }
        })
        return response.data[0].fact;
    } catch (error) {
        console.log(error)
    }
}

app.get('/', async (req,res) => {
    const fact = await getFact();
    res.render('index',{fact})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});