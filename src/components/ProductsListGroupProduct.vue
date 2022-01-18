<template>
  <app-card
    title-component="h4"
    :title="name"
  >
    <p class="mb-3">
      {{ $t('productsList.product.countMessage') }}:
      <span class="text-white">
        {{ $t('productsList.product.count', { count: stockProductsLeft }) }}
      </span>
      <br>
      {{ $t('productsList.product.price') }}
      <span class="text-white">
        {{ price }}
      </span>
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
import { mapGetters } from 'vuex';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';

export default {
  name: 'ProductsListGroupProduct',
  components: {
    AppButton,
    AppCard,
  },
  props: {
    count: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('cart', {
      hasProductInCart: 'hasProduct',
      getProductCount: 'getProductCount',
    }),
    isAddedToCart() {
      return this.hasProductInCart(this.id);
    },
    productCartCount() {
      return this.getProductCount(this.id);
    },
    stockProductsLeft() {
      return this.count - this.productCartCount;
    },
  },
  methods: {
    addToCart() {
      if (this.isAddedToCart) {
        return;
      }
      this.$store.commit('cart/addProduct', this.id);
    },
  },
};
</script>
