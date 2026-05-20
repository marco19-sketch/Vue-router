
<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'

const movieList = ref()
// const isLoading = ref(true)

onMounted(async () => {
  const res = await fetch('http://localhost:3000/movies')
  const data = await res.json()
  movieList.value = data
})
</script>

<template>
  <h1 class="text-4xl text-center mt-16">Movies</h1>
  <div class="max-w-sm mx-auto"><span class="text-2xl font-bold text-indigo-700">Movies</span></div>
  <div class="grid grid-cols-3 gap-4">
    <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
  </div>
</template>
