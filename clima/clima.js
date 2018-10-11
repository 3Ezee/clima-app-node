const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=7d3bef7c2f7c76974f22e06a32a3ffc3`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}