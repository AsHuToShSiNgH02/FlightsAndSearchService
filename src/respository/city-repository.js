const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository{
    async CreateCities(citiesToAdd){
        try {
            const cities = await City.bulkCreate(citiesToAdd);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    async CreateCity({ name }){
        try {
            const city = await City.create({
                name
            }); 
            return city
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    };

    async DeleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    };

    async UpdateCity(cityId, data){
        try {
            //The below approach also works but will not return updated object
            //if we are using Pgsql then returning: true can be used , else not
            // const city = await City.update(data, {
            //     where:{
            //         id: cityId
            //     }
            // });
            //for getting updated data in my sql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    };

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    };

    async getAllCity(filter) {
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
}

module.exports = CityRepository;