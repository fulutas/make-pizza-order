<template>
  <div class="basket-container">
    <button class="go-pizza-page" @click="$router.go(-1)">Go to pizza page</button>
    <h1>💳 Basket</h1>
    <table>
      <tr>
        <th>Product</th>
        <th>Ingredients</th>
        <th>Size</th>
        <th>Price</th>
      </tr>
      <tr v-for="item in $store.state.basket" :key="item">
        <td v-if="item.type == 'pizza'">🍕{{item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase() }}</td>
        <td v-if="item.type == 'drink'">🍹{{item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase() }}</td>
        <td v-if="item.type == 'drink'">{{ item.name }}</td>
        <td v-if="item.type == 'pizza'">{{ item.selecteds.join(",") }}</td>
        <td v-if="item.type == 'pizza'">{{ item.size.size.toUpperCase() }}</td>
        <td v-if="item.type == 'drink'">no size</td>
        <td>{{item.price}} ₺</td>
        <!-- <td :colspan="item.type == 'pizza' ? '1' : '2'">{{ item.price }} ₺</td> -->
      </tr>
       <td v-if="$store.state.basket.length == 0" class="no-items-basket"></td>
        <td v-if="$store.state.basket.length == 0" class="no-items-basket">You have no items in your cart.</td>
       <td v-if="$store.state.basket.length == 0" class="no-items-basket"></td>

    </table>
    <div class="drinks">
        <div class="drink-item" :title="drink.name" v-for="drink in $store.state.drinks" :key="drink" @click="$store.commit('addDrinkToBasket', drink)">
            <img :src="drink.url" alt="">
            <p>{{drink.name.charAt(0).toUpperCase() + drink.name.slice(1).toLowerCase()}}</p>
            <p>{{drink.price}} ₺</p>
        </div>
    </div>
    <p>Total Price : {{ $store.getters.totalPrice }} ₺ </p>
    <button @click="order" class="order-btn">Order Now</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    function order(){
         if(store.state.basket.length){
            router.push("/order-completed")
         } else {
             alert("Sepetinizde ürün yok!")
         }
         
    }  

    return {
        order
    }

  },
};
</script>

<style scoped>
table {
  padding: 1rem;
  width: 80%;
  border: 1px solid coral;
  border-radius: 1em;
}

td,
th {
  font-size: 1.3rem;
  text-align: center;
}

.drinks {
    height: 5em;
    width: 80%;
    gap: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 5em;
    margin-top: 2em;
    margin-bottom: 3em;
}

.drink-item img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.drink-item{
    cursor: pointer;
    width: 5rem;
    height: 5rem;
}

.drink-item p,label {
    text-align: center;
}

.basket-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.order-btn {
  cursor: pointer;
  width: 20%;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  color: white;
  background: coral;
}

.order-btn:hover {
  opacity: 0.9;
}


.no-items-basket{
    padding-top: 1em;
    color: darkgoldenrod;
}

.go-pizza-page{
  cursor: pointer;
  width: 20%;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  color: white;
  background: rgba(255, 255, 255, 0.067);
}

.go-pizza-page:hover{
    opacity: 0.9;
}
</style>