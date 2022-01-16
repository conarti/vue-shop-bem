<template>
  <app-card
    title-component="h4"
    :title="product.name"
  >
    <p class="mb-3">
      {{ $t('productsList.product.countMessage') }}:
      <span class="text-white">{{ $t('productsList.product.count', { rest: restProducts }) }}</span>
      <br>
      {{ $t('productsList.product.price') }}
      <span class="text-white">{{ product.price }}</span>
    </p>
    <AppButton
      color="pink"
      is-fill
      :text="$t('productsList.product.buyBtn')"
      :disabled="isAddedToCart"
      @click="addToCart"
    />
  </app-card>
</template>

<script>
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';

export default {
  name: 'ProductsListGroupProduct',
  components: {
    AppButton,
    AppCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productId() {
      return this.product.id;
    },
    isAddedToCart() {
      return this.$store.getters['cart/hasProduct'](this.productId);
    },
    productCartCount() {
      return this.$store.getters['cart/getProductCount'](this.productId);
    },
    restProducts() {
      return this.product.count - this.productCartCount;
    },
  },
  methods: {
    addToCart() {
      if (this.isAddedToCart) {
        return;
      }
      this.$store.commit('cart/addProduct', this.productId);
    },
  },
};
</script>
