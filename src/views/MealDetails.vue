<template>
  <div class="">
    <div class="w-full md:w-8/12 mx-auto">
      <h1 class="font-bold text-5xl my-5">{{ meal.strMeal }}</h1>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full object-cover max-h-[500px] center"
      />
      <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
        <div v-if="meal.strCategory">
          <strong> Category: </strong>
          {{ meal.strCategory }}
        </div>
        <div v-if="meal.strArea">
          <strong> Area: </strong>
          {{ meal.strArea }}
        </div>
        <div v-if="meal.strTags">
          <strong> Tags: </strong>
          {{ meal.strTags }}
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)">
              <li v-if="meal[`strIngredient${index + 1}`]" :key="index">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)">
              <li
                v-if="
                  meal[`strMeasure${index + 1}`] !== '' &&
                  meal[`strMeasure${index + 1}`] !== ' '
                "
                :key="index"
              >
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="mt-8 pb-20 flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Go To Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border-2 border-violet-600 hover:bg-violet-600 ease-in duration-200 hover:text-white"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRouter();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(`lookup.php?i=${route.currentRoute.value.params.id}`)
    .then((data) => {
      // debugger;
      if (data.status == 200) {
        meal.value = data.data.meals[0];
      } else {
        meal.value = {};
      }
    });
});
</script>
