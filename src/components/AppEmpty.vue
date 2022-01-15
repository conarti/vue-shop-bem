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
      return this.message === null ? this.$t('empty.defaultMessage') : this.message;
    },
  },
};
</script>
