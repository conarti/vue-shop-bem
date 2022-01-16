<template>
  <input
    class="input"
    :type="type"
    :value="modelValue"
    :min="min"
    :max="max"
    @input="updateValue($event)"
  >
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: {
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
  emits: {
    'update:modelValue': (value) => typeof value === 'string' || typeof value === 'number',
  },
  methods: {
    updateValue(event) {
      const { value } = event.target;
      this.$emit('update:modelValue', value);
      this.$forceUpdate();
    },
  },
};
</script>
