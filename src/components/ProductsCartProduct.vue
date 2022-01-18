<template>
  <app-table-row>
    <app-table-row-cell>
      {{ product.name }}
    </app-table-row-cell>
    <app-table-row-cell>
      <AppInput
        v-model="count"
        class="maxw-50px text-center"
        type="number"
        :min="1"
        :max="stockBalance"
        @update:model-value="updateProductCountInCart"
      />
    </app-table-row-cell>
    <app-table-row-cell>
      {{ product.price }}
    </app-table-row-cell>
    <app-table-row-cell>
      <AppButton
        color="pink"
        icon="close"
        @click="removeProductFromCart"
      />
    </app-table-row-cell>
  </app-table-row>
</template>

<script>
import { mapGetters } from 'vuex';
import Cart from '../services/Cart';
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';
import AppTableRow from './AppTableRow.vue';
import AppTableRowCell from './AppTableRowCell.vue';

export default {
  name: 'ProductsCartProduct',
  components: {
    AppButton,
    AppInput,
    AppTableRow,
    AppTableRowCell,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: null,
    };
  },
  computed: {
    ...mapGetters('products', ['getProductById']),
    ...mapGetters('cart', ['getProductCount']),
    product() {
      return this.getProductById(this.id);
    },
    cartCount() {
      return this.getProductCount(this.id);
    },
    stockBalance() {
      return this.product.count;
    },
  },
  created() {
    this.count = this.cartCount;
  },
  methods: {
    updateProductCountInCart() {
      this.count = Cart.getFormattedProductCount(this.count, this.stockBalance);
      this.$store.commit('cart/setProductCount', {
        id: this.id,
        count: this.count,
      });
    },
    removeProductFromCart() {
      this.$store.commit('cart/removeProduct', this.id);
    },
  },
};
</script>
