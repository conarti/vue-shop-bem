<template>
  <div class="main-layout">
    <section class="main-layout__shop">
      <div class="main-layout__products">
        <ProductsList />
      </div>
      <div class="main-layout__cart">
        <CurrencyExchange />
        <ProductsCart />
      </div>
    </section>
  </div>
</template>

<script>
import CurrencyExchange from './components/CurrencyExchange.vue';
import ProductsCart from './components/ProductsCart.vue';
import ProductsList from './components/ProductsList.vue';

export default {
  name: 'App',
  components: {
    CurrencyExchange,
    ProductsCart,
    ProductsList,
  },
};
</script>
