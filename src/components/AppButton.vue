<template>
  <button
    class="button"
    :class="[
      colorClass,
      {
        'button--fill': isFill,
      }
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
import validationRules from '@/utils/validationRules';

export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
      validate(value) {
        const buttonColors = validationRules.button.colors;
        return buttonColors.includes(value);
      },
    },
    isFill: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    colorClass() {
      return `button--${this.color}`;
    },
  },
};
</script>
