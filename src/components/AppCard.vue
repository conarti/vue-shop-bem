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
import params from '../utils/params';

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
      default: params.card.defaultTitleComponent,
      validator(value) {
        const componentTypes = params.card.titleComponents;
        return componentTypes.includes(value);
      },
    },
  },
};
</script>
