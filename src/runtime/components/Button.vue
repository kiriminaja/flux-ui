<template>
  <button
    :class="[
      'font-medium inline-flex gap-2 transition-all rounded-full',
      compileColor, additionalClass,
      (disabled ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-95')
    ]"
    :disabled="disabled"
  >
    <span
      v-if="icon && (!iconState || iconState == 'left')"
      class="material-symbols-outlined filled"
      v-text="icon"
    />
    <span v-if="!label"><slot /></span>
    <span
      v-else
      v-text="label"
    />
    <span
      v-if="iconState && iconState == 'right' && icon"
      class="material-symbols-outlined filled"
      v-text="icon"
    />
  </button>
</template>
<script setup lang="ts">
import  {type IButtonColorOption, type IButtonHierarchy} from '../flux-config/button';
import {useButtonColor} from "../composables/useFlux";

const prop = defineProps<{
  label?: string,
  color?: IButtonColorOption,
  hierarchy?: IButtonHierarchy,
  additionalClass?: string,
  icon?: string, // See https://fonts.google.com/icons for more details
  iconState?: 'left' | 'right',
  disabled?: true | false | 'true' | 'false'
}>()

const compileColor = computed(() => useButtonColor(prop.color || 'primary', prop.hierarchy || 'filled'))
</script>
<script lang="ts">
export default {
  name: 'FluxButton'
}
</script>
