<template>
  <span>{{ messageText }}</span>
</template>

<script>
export default {
  name: 'AppEmpty',
  props: {
    message: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    messageText() {
      return this.message ?? this.$t('empty.defaultMessage');
    },
  },
};
</script>
