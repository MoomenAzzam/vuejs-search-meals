<template>
  <div class="flex flex-col p-8 h-full">
    <h1 class="md:pl-8 sm:pl-0 pb-4 font-bold text-orange-500 text-5xl">
      Random Meals
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8 sm:p-0 pt-4"> 
      <MealItme v-for="meal of meals" :key="meal.idMeal" :meal="meal">
      </MealItme>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import MealItme from "../components/MealItme.vue";

const meals = ref([]);
const obj = ref({});
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get("random.php").then((data) => {
      console.log(data.data.meals[0]);

      meals.value.push(data.data.meals[0]);
    });
  }
  console.log(meals);
});
</script>
