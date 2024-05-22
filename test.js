require('dotenv').config();
const axios = require('axios')

console.log();

let config = {
    headers:{
        'X-Api-Key': process.env.API_KEY
    }
}

const getFact = async () => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/facts',{
            headers:{
                'X-Api-Key': process.env.API_KEY
            }
        })
        return response.data[0].fact
    } catch (error) {
        console.log(error)
    }
}
getFact()