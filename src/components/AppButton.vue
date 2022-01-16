<template>
  <button
    class="button"
    :class="[
      colorClass,
      {
        'button--fill': isFill,
        'button--icon': hasIcon,
      }
    ]"
  >
    {{ text }}
    <template v-if="hasIcon">
      <component :is="iconComponent" />
    </template>
  </button>
</template>

<script>
import { capitalize } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import params from '../utils/params';

export default {
  name: 'AppButton',
  components: {
    CloseIcon,
  },
  props: {
    text: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: true,
      validator(value) {
        const { colors } = params.button;
        return colors.includes(value);
      },
    },
    isFill: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: null,
      validator(value) {
        const { icons } = params.button;
        return icons.includes(value);
      },
    },
  },
  computed: {
    colorClass() {
      return `button--${this.color}`;
    },
    hasIcon() {
      return this.icon !== null;
    },
    iconComponent() {
      return `${capitalize(this.icon)}Icon`;
    },
  },
};
</script>
