<template>
  <button :class="[
      'inline-flex gap-1.5 items-center px-4 py-2.5 text-sm font-medium rounded-full',
      (outlined ? 'border border-flux-outlineVariant' : ''),
      (outlined ?
        (!active ? 'hover:border-flux-outline' : 'border-flux-primary text-flux-primary') :
        (!active ? 'hover:bg-flux-primaryContainer bg-flux-surfaceContainer' : 'bg-flux-primary text-flux-onPrimary')
       )
  ]">
    <span v-if="icon" class="material-symbols-outlined filled sm" v-text="icon"></span>
    <span v-text="label"></span>
    <span v-if="expandIcon" class="material-symbols-outlined filled sm" v-text="icon"></span>
  </button>
</template>
<script setup lang="ts">
const prop = defineProps<{
  outlined?: false | true | 'true' | 'false',
  active?: false | true | 'true' | 'false',
  label: string,
  icon?: string, // see https://fonts.google.com/icons
  expandIcon?: string, // see https://fonts.google.com/icons
}>()
</script>
