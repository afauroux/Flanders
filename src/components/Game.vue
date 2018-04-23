<template>
  <div class="container" fluid>
    <Map />
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import axios from "axios"
import Map from "./Map.vue"
import C from "./countries.js"

export default {
  components:{
    Map
  },
  data () {
    return {
      items:[]
    }
  },
  created() {
    this.getCountryList()
    for(let i=0;i<100;i++){
      C.sayHi()
      C.sayNo()
    }
   
  },

  methods:{
    getCountryList(){
      axios.get('http://api.geonames.org/countryInfoJSON?username=afauroux')
      .then((data)=>{
          data = data.data["geonames"]
          let countries = [];
          for(let k in data) {
            countries.push(data[k])
          }
          this.items = countries
      })
      .catch((err)=>{
        console.log('Error Fetching from api.geoname',err)
      })
    }

  }
}
</script>
