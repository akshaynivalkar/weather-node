const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/41dbd9fbafa956dd62c29060642a220b/' + lat + ',' + long + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to darksky')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + Math.floor(body.currently.precipProbability * 100) + '% chance of rain.<br><br> The high today is ' + body.daily.data[0].temperatureMax + ' degrees with a low of ' + body.daily.data[0].temperatureMin + ' degrees');
        }
    })
}

module.exports = forecast