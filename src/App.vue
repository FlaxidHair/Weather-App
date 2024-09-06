<template>
  <div class="wrapper">
    <h1 class="wrapper__title">Погодное приложение</h1>
    <p class="wrapper__subtitle">Узнать погоду в {{ city=="" ? "вашем городе" : cityName }}</p>
    <input type="text" v-model="store.city" class="wrapper__input" placeholder="Введите ваш город">
    <p>{{ store.data }}</p>
    <button v-if="store.city != ''" class="wrapper__button" @click="store.getWeather()">Получить погоду</button>
    <button disabled v-else class="wrapper__button">Получить погоду</button>
    <div v-if="store.data != null" class="wrapper__items">
      <p class="wrapper__temp">
        {{ showTemp }}
      </p>
      <p>{{  }}</p>
      <p class="wrapper__fellslike">
        {{ showFellsLike }}
      </p>
      <p class="wrapper__humidity">
        {{  showHumidity }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from './store/store.js'
const store = useStore()
onMounted(()=>{
  store.getWeater()
})
// export default {
//   data() {
//     return {
//       city:"",
//       error:"",
//       info:null,
//     }
//   },
//   computed:{
//     cityName() {
//       return "'" + this.city+ "'"
//     },
//     showTemp () {
//       return "Температура: " + this.info.data.current.temp_c + " C";
//     },
//     showFellsLike () {
//       return "Ощущается как: " + this.info.data.current.feelslike_c + " C";
//     },
//     showHumidity () {
//       return "Влажность: " + this.info.data.current.humidity + " %";
//     }
//   },
//   methods: {
//     getWeather () {
//       if(this.city.trim().length < 2) {
//         this.error = "Нужно название более 1 символа"
//         return false;
//       }
//       this.error = ""

//       axios.get(`http://api.weatherapi.com/v1/current.json?key=6fae45c050604bb9b5e172504241807%20&q=${this.city}&aqi=no`).then((data)=>{
//         this.info = data;

//       })

//     }
//   }
// }
</script>




<style scoped>
.wrapper__error {
  color:#d03939;
  margin-top:10px;
}
.wrapper {
  width:80vw;
  height:80vh;
  border-radius:50px;
  padding:20px;
  background: #1f0f24;
  text-align: center;
  color:#fff;
  display:flex;
  flex-flow:column;
  align-items: center;
  row-gap:25px;
}
.wrapper__title {
   margin-top:50px;
}
.wrapper__subtitle {
  margin-top:20px;
}
.wrapper__input {
  background:transparent;
  margin-top:30px;
  border:0;
  border-bottom:2px solid #110813;
  color:#fcfcfc;
  font-size: 14px; 
  padding:5px 8px;
  outline:none;
  text-align: center;
}
.wrapper__input:focus {
  border-bottom-color:#6e2d7d;
} 
.wrapper__button {
  background: #e3bc4b;
  color:#fff;
  border-radius:10px;
  border:2px solid #b99935;
  padding:10px 15px;
  margin-left:20px;
  cursor:pointer;
  transition:transform 500ms ease;
}
.wrapper__button:hover {
  transform: scale(1.1) translateY(-5px);
}
.wrapper__button:disabled{
  background:#746027;
  cursor:not-allowed;
}
.wrapper__items {
  display:flex;
  flex-flow:column;
  row-gap:10px;
}
</style>
