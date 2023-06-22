<template>
  <div class="p-8">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"
      v-if="meals['meals']"
    >
      <MealItme v-for="meal of meals['meals']" :key="meal.idMeal" :meal="meal">
      </MealItme>
    </div>
    <NoMeals v-else >We don't have meals in this ingredients</NoMeals>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import store from "../store";
import MealItme from "../components/MealItme.vue";
import NoMeals from "../components/NoMeals.vue";

const meals = computed(() => store.state.mealsByIngredient);
const router = useRoute();
console.log(meals);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", router.params.ingredient);
});
</script>
