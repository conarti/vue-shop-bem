<template>
  <input
    class="input"
    :type="type"
    :value="value"
    :min="min"
    :max="max"
    @input="changeValue($event)"
  >
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    min: {
      type: Number,
      required: false,
      default: null,
    },
    max: {
      type: Number,
      required: false,
      default: null,
    },
  },
  emits: ['value-changed'],
  methods: {
    changeValue(event) {
      this.$emit('value-changed', event.target.value);
    },
  },
};
</script>
