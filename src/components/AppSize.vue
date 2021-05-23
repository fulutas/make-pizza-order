<template>
  <div class="size">
    <button
     v-for="size in sizes"
     :key="size"
     :class="size.size === $store.state.currentBasket.size.size ? 'active' : ''"
     @click="$store.commit('setSize', size)"
     >
     
      {{ size.size.toUpperCase() }}
     
     </button>
  </div>
</template>

<script>
export default {
  setup() {
    const sizes = [
      { size: "s", price: 2 },
      { size: "m", price: 3 },
      { size: "l", price: 5 },
    ];

    return {
      sizes,
    };
  },
};
</script>

<style scoped>
.size {
  margin-top: 5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
  cursor: pointer;
  border: 0;
  border-radius: 0.5rem;
  color: white;
  background: var(--primary-color);
  padding: 1rem;
  transition: all 0.1s ease-in;
}

button:hover{
    transform: scale(1.2) translateY(5px);
}

button.active{
    background: chartreuse;
    color:black;
}


</style>