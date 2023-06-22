<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 font-bold text-orange-500 text-3xl"
    >
      Home
    </router-link>
    <div class="flex item-center  ">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 transition-colors h-full hover:bg-orange-500 hover:text-orange-50 font-semibold text-orange-500 sm:text-sm md:text-2xl"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 transition-colors h-full hover:bg-orange-500 hover:text-orange-50 font-semibold text-orange-500 sm:text-sm md:text-2xl border-r-2 border-l-2"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'Ingredients' }"
        class="inline-flex items-center px-2 transition-colors h-full hover:bg-orange-500 hover:text-orange-50 font-semibold text-orange-500 sm:text-sm md:text-2xl"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
