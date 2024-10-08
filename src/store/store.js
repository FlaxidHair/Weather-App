import { defineStore } from "pinia";
import axios from "axios";
export const useStore = defineStore("store", {
  state: () => ({
    city: "London",
    data: null,
  }),
  actions: {
    getWeather() {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=6fae45c050604bb9b5e172504241807%20&q=${this.city}&aqi=no`
        )
        .then((data) => {
          this.data = data;
        });
    },
  },
  getters: {
    showTemp() {
      return this.data.data.current.temp_c + " C";
    },
    showHumidity() {
      return this.data.data.current.humidity + " %";
    },
    showDewPoint() {
      return "Точка росы" + this.data.data.current.dewpoint_c;
    },
    getterData() {
      return this.data;
    },
  },
});
