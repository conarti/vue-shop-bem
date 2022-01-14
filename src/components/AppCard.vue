<template>
  <div class="card">
    <div class="card__body">
      <component
        :is="titleComponent"
        v-if="title"
        class="card__title"
      >
        {{ title }}
      </component>
      <slot />
    </div>
  </div>
</template>

<script>
import validationRules from '@/utils/validationRules';

export default {
  name: 'AppCard',
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    titleComponent: {
      type: String,
      required: false,
      default: 'h2',
      validate(value) {
        const componentTypes = validationRules.card.titleComponents;
        componentTypes.includes(value);
      },
    },
  },
};
</script>
