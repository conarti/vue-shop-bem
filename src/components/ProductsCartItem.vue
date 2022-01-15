<template>
  <tr class="table__row">
    <td class="table__cell">
      {{ productData.name }}
    </td>
    <td class="table__cell">
      <AppInput
        class="maxw-50px text-center"
        type="number"
        :value="product.count"
        @value-changed="updateProductCountInCart($event)"
      />
    </td>
    <td class="table__cell">
      {{ productData.price }}
    </td>
    <td class="table__cell">
      <AppButton
        color="pink"
        icon="close"
      />
    </td>
  </tr>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';

export default {
  name: 'ProductsCartItem',
  components: {
    AppButton,
    AppInput,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productData() {
      const productId = this.product.id;
      return this.$store.getters['products/getProductById'](productId);
    },
  },
  methods: {
    updateProductCountInCart(count) {
      this.$store.commit('cart/setProductCount', {
        id: this.product.id,
        count,
      });
    },
  },
};
</script>
