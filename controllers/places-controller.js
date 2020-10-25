const uuid = require('uuid')
const HttpError = require('../models/HttpError')

const DEFAULT_PLACES = [{
    id: '56136adb-60c8-4a37-add0-9b39e3ebf6cf',
    title: 'Hyderabad',
    description: 'A city in India',
    creator: 'u1'
},
{
    id: '9d11f6ac-edd8-41ff-9e79-02f1b7634e2d',
    title: 'Hyderabad',
    description: 'A city in India',
    creator: 'u1'
}]


const getAllPlaces = (req, res, next) => {
    res.status(200).json(DEFAULT_PLACES)
}

const getPlaceById = (req, res, next) => {
    const pid = req.params.pid
    const place = DEFAULT_PLACES.find(p => {
        return p.id === pid
    })
    if(!place) 
       return next(new HttpError('Place Not Found', 404))
    
    res.status(200).json(place)
}

exports.getAllPlaces = getAllPlaces
exports.getPlaceById = getPlaceById