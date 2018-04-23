<template>
  <div class="container">
      <div class="card">
 
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../assets/globe.png" >
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Flanders</p>
        <p class="subtitle is-6">For Magda from Tony</p>
      </div>
    </div>

    <div class="content">
    <label for="field1">Find all neighbouring country of <b >{{chosen}}</b></label>
      <b-field id="field1">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. Poland ;-)"
                icon="magnify"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
      
        <b-message   v-for="answer in answers" :key="answer.id" :type="answer.valid ? 'is-success' : 'is-danger'">{{answer.name}}</b-message>
    
    </div>

     <div class="card-image">
    <figure class="image ">
     <Map/>
    </figure>
  </div>
  </div>
</div>
  </div>

</template>



<script>
import countries from "./countries.js";
import codes from "./countrycodes.json";
import Map from "../components/Map";
import axios from "axios";

var country_names = [];
var neighbours = new Set();
for (var c in countries) {
  country_names.push(c);
  for (var i in countries[c]) {
    neighbours.add(countries[c][i][0]);
  }
}
neighbours = Array.from(neighbours);

export default {
  components: {
    Map
  },
  data: function() {
    return {
      data: neighbours,
      chosen: "",
      name: "",
      selected: null,
      attemps: 0,
      answers: []
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },

    getcountries() {
      var arr = [];

      for (var x in countries) {
        arr.push(x);
      }
      return x;
    },
    getcountries2() {
      axios.get();
      var arr = [];

      for (var x in countries) {
        arr.push(x);
      }
      return x;
    }
  },
  watch: {
    selected: function(val) {
      if (!val) return; // avoid null trigger
      console.log(this.getNeighbours(this.chosen));
      this.answers.unshift({
        id: this.attemps,
        name: val,
        valid: this.getNeighbours(this.chosen).indexOf(val) > -1
      });
      this.attemps++;
      this.name = "";
    }
  },
  methods: {
    pickCountry() {
      this.chosen =
        country_names[Math.floor(Math.random() * country_names.length)];
    },
    getNeighbours(c) {
      let n = [];
      for (var i in countries[c]) {
        n.push(countries[c][i][0]);
      }
      return n;
    }
  },
  mounted() {
    this.pickCountry();
  }
};
</script>


