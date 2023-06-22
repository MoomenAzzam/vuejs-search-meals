<template>
  <div>
    <div class="flex flex-wrap gap-2 justify-center mt-4 text-xl">
      <router-link
        :to="{ name: 'byLetter', params: { letter: letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        <div class="hover:text-orange-400 hover:scale-125 ease-in duration-50">
          {{ letter }}
        </div>
      </router-link>
    </div>
    <div v-if="meals['meals']">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItme
          v-for="meal of meals['meals']"
          :key="meal.idMeal"
          :meal="meal"
        >
        </MealItme>
      </div>
    </div>
    <NoMeals v-else>You must press another letter</NoMeals>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, watch } from "vue";
import store from "../store";
import MealItme from "../components/MealItme.vue";
import NoMeals from "../components/NoMeals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLOMNPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetters);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
