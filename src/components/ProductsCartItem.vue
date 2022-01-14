<template>
  <tr class="table__row">
    <td class="table__cell">
      Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.
    </td>
    <td class="table__cell">
      <input
        class="input input--maxw-50 input--text-center"
        type="number"
        value="3"
      >
    </td>
    <td class="table__cell">
      157.55 руб.
    </td>
    <td class="table__cell">
      <button class="button button--pink button--icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductsCartItem',
};
</script>
