import CITIES from "../shared/city.json";

const cities_dict = {}

CITIES.forEach((city) => {
    cities_dict[city.id] = city
})

const findCityById = (id) => cities_dict[id]

export default findCityById