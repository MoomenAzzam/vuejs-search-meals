<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold">Ingredients</h1>

    <input
      type="text"
      v-model="keyword"
      class="rounded border-4 border-gray-200 focus:border-orange-500 w-full mt-5 mb-5 ease-in duration-200"
      placeholder="Search for Ingredients"
      @change="searchMeals"
    />

    <div class="grid sm:grid-cols-1 md:grid-cols-2">
      <router-link
        :to="{
          name: 'byIngredients',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
      >
        <div
          class="block m-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-orange-100 ease-in duration-200"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ ingredient.strIngredient }}
          </h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import MealItme from "../components/MealItme.vue";
import axiosClient from "../axiosClient";

const route = useRoute();

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then((data) => {
    ingredients.value = data.data.meals;
  });
});
</script>
