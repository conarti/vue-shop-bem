<template>
  <div
    class="loading"
    :style="{ height }"
  >
    <div class="loading__animated-background"></div>
  </div>
</template>

<script>
import params from '../utils/params';

export default {
  name: 'AppLoading',
  props: {
    height: {
      type: String,
      required: false,
      default: params.loading.defaultHeight,
    },
  },
};
</script>
