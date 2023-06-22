<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-4 border-gray-200 focus:border-orange-500 w-full mt-5 mb-5 ease-in duration-200"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"
      v-if="meals['meals']"
    >
      <MealItme v-for="meal of meals['meals']" :key="meal.idMeal" :meal="meal">
      </MealItme>
    </div>
    <NoMeals v-else
      >We don't have meals that that name is inclouds {{ keyword || "null"}}</NoMeals
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import store from "../store";
import { computed } from "vue";
import { useRouter } from "vue-router";
import MealItme from "../components/MealItme.vue";
import NoMeals from "../components/NoMeals.vue";

const route = useRouter();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
onMounted(() => {
  keyword.value = route.currentRoute.value.params.name; // i use it to can access phat paramiter 'name'
  if (keyword.value) {
  }
});
</script>
