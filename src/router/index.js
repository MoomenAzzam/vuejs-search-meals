import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import Ingredients from "../views/Ingredients.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import mealDetails from "../views/mealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GeustLayout from "../components/GeustLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/home", name: "home", component: Home },
      { path: "/", name: "home", component: Home },
      { path: "/by-name/:name?", name: "byName", component: MealsByName },
      {
        path: "/by-ltter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "Ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredients/:ingredient",
        name: "byIngredients",
        component: MealsByIngredients,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: mealDetails,
      },
    ],
  },
  { path: "/login", name: "geust-layout", component: GeustLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
