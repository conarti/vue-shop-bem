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
import hasKeys from '../utils/hasKeys';
import params from '../utils/params';

export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        return value.every((option) => hasKeys(option, params.select.optionKeys));
      },
    },
  },
  emits: {
    'update-value': (value) => typeof value === 'string',
  },
  methods: {
    updateValue(event) {
      this.$emit('update-value', event.target.value);
    },
  },
};
</script>
