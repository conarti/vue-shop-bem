<template>
  <input
    class="input"
    :type="type"
    :value="value"
    :min="min"
    :max="max"
    @input="updateValue($event)"
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
    updateValue(event) {
      const isNumberType = this.type.toLowerCase() === 'number';
      let { value } = event.target;
      if (isNumberType) {
        if (value < this.min) {
          value = this.min;
        }
        if (value > this.max) {
          value = this.max;
        }
        value = parseFloat(value);
      }
      this.$emit('value-changed', value);
    },
  },
};
</script>
