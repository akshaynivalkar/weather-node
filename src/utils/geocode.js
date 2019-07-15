const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWtzaGF5cm4iLCJhIjoiY2p4eWZwOWU1MDBnODNjcXBwenV5NTZnMyJ9.Tbd3TxoZvwM-ZV3BU5tPtg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to mapbox')
        } else if (body.features.length === 0) {
            callback('Unable to geocode location')
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })

}

module.exports = geocode