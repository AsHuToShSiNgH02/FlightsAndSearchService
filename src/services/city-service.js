const { CityRepository } = require('../respository/index');

class CityService{

    constructor(){
        this.cityrepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityrepository.CreateCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityrepository.DeleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityrepository.UpdateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityrepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getAllCity() {
        try {
            const cities = await this.cityrepository.getAllCity();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
}

module.exports = CityService;