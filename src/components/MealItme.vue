<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 ease-in duration-100">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-48 object-cover"
    />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        excepturi laboriosam quae hic minima corrupti modi magni
      </p>
      <div class="flex justify-between font-semibold items-center">
        <YoutubeButton :href="meal.strYoutube"> Youtube</YoutubeButton>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-3 py-2 rounded border-2 border-blue-600 hover:bg-blue-600 ease-in duration-200 hover:text-white"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
