const { CityService } = require('../services/index');

const cityService = new CityService();

//POST -> /cities
const bulkCreate = async (req, res) => {
    try {
        const citiesToAdd = req.body;
        const cities = await cityService.createCities(citiesToAdd);
        return res.status(201).json({
            data: cities,
            success: true,
            message: 'Successfully created all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to create a city',
            err: error
        })
    }
}

//POST -> /city
const create = async (req, res) => {
    try {
        const { name } = req.body; // Ensure that 'name' is properly extracted from the request body
        const city = await cityService.createCity({ name }); // Pass 'name' attribute to createCity method
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to create a city',
            err: error
        })
    }
}

//DELETE -> /city
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to delete the city',
            err: error
        })
    }
}

//PATCH -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to update the city',
            err: error
        })
    }
} 

//GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to get the city',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCity(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to get the city',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    bulkCreate
}