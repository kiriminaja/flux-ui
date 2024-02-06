<template>
  <button class="bg-flux-primary text-flux-onPrimary px-4 py-3 rounded-full">
    <span v-if="!label"><slot/></span>
    <span v-else v-text="label"></span>
  </button>
</template>
<script setup lang="ts">
const prop = defineProps<{
  label?: string
}>()
</script>
<script lang="ts">
export default {
  name: 'FluxButton'
}
</script>
