// const City = require('../models/city');
//or
const { City   } = require('../models/index');

class CityRepository{
    async createCity({ name }) {
        try{
            const city = await City.create({ name });
            return city;
        }catch (error){
            throw {error};
        }
    }

    async deleteCity(cityid) {
        try{
            await City.destroy({
                where: {
                    id: cityid
                }
            });
        }catch(error){

        }
    }
}

module.exports = CityRepository;