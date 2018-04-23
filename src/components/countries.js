import axios from 'axios'

/*var apiMethod = 'countryInfoJSON';
var parameters = 'username=afauroux';
var result = '';
var countries = {};
axios.get('http://api.geonames.org/' +
    apiMethod + '?' + parameters)
    .then((data) => {
        console.log(data)
        for (k in data["geonames"]) {
            countries[data["geonames"][k].countryCode] = { id: data["geonames"][k].geonameId };
            countries[data["geonames"][k].countryCode].neighbours = [];
        }

    })

var count = 1;
var allowed = 3;
var accessed = 0;
var countryLen = Object.keys(countries).length;
for (var key in countries) {
    var item = countries[key]
    console.log(key);
    // if(accessed++<allowed){
    axios.get('http://api.geonames.org/neighboursJSON?geonameId=' + item["id"] + '&' + parameters).then((data) => {
        if (data["geonames"]) {
            for (k in data["geonames"]) {
                if (data["geonames"][k].fcl == "A") {
                    countries[k].neighbours.push(data["geonames"][k].countryCode);
                }
            }
        }
        console.log(count);
        count++
    });
}*/

export default {
    sayHi(){
        console.log('hi')
    },
    sayNo() {
        console.log('no')
    }

   
}

