<template>
  <p class="price">{{ price }}₺</p>
  <button @click="$store.commit('addToBasket')">Add to Basket</button>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const price = computed(() => {
      return store.state.currentBasket.price;
    });

    // basket'deki tutari izler.
    watch(price, (newValue, oldValue) => {
      const price = document.querySelector(".price");
      price.classList.add("priceChanged");

      setTimeout(() => {
        price.classList.remove("priceChanged");
      }, 250);
    });

    return {
      price,
    };
  },
};
</script>

<style scoped>
.price {
  margin: 2rem 0;
  font-size: 1.4rem;
  text-align: center;
}

button {
  align-self: center;
  padding: 0.5rem;
  background: coral;
  border: 0;
  border-radius: 0.5rem;
  color: black;
  cursor: pointer;
  margin: 5px 0px 20px 0px;
}

button:hover {
  opacity: 0.9;
}

.priceChanged {
  animation: priceScale 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

@keyframes priceScale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>