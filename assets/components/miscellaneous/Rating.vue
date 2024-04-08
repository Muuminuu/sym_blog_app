<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Rating from 'primevue/rating';

const value = ref(4);
</script>



