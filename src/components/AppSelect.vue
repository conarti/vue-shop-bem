<template>
  <select
    class="select"
    @change="updateValue"
  >
    <option
      v-for="(option, idx) in options"
      :key="idx"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import has from '@/utils/has';

export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        return value.reduce((acc, option) => {
          const isCorrectOption = has(option, 'value') && has(option, 'text');
          return acc !== false && isCorrectOption;
        }, true);
      },
    },
  },
  emits: ['update-value'],
  methods: {
    updateValue(event) {
      this.$emit('update-value', event.target.value);
    },
  },
};
</script>
