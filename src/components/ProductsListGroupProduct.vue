<template>
  <app-card
    title-component="h4"
    :title="product.name"
  >
    <p class="mb-3">
      {{ $t('productsList.product.count') }}:
      <span class="text-white">{{ productCount }}</span>
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
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';

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
      return this.$store.getters['cart/isHaveProduct'](this.productId);
    },
    productCount() {
      const cartCount = this.$store.getters['cart/getProductCount'](this.productId);
      return this.product.count - cartCount;
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
