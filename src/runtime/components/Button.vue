<template>
  <button :class="[
      'font-medium hover:opacity-95 transition-all rounded-full',
      compileColor,
      additionalClass
  ]">
    <span v-if="!label"><slot/></span>
    <span v-else v-text="label"></span>
  </button>
</template>
<script setup lang="ts">
import type {IButtonColorOption, IButtonHierarchy} from "../utils/general";

const prop = defineProps<{
  label?: string,
  color?: IButtonColorOption,
  hierarchy?: IButtonHierarchy,
  additionalClass?: string,
  iconState?: 'left' | 'right',
  disabled?: true | false | 'true' | 'false'
}>()

const compileColor = useButtonColor(prop.color || 'primary', prop.hierarchy || 'filled')
</script>
<script lang="ts">
export default {
  name: 'FluxButton'
}
</script>
