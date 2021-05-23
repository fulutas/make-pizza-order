import { createStore } from 'vuex'

export default createStore({
  state: {
    drinks : [
      {
        name : 'ayran',
        url : require('@/assets/drinks/ayran.png'),
        price : 3
      },
      {
        name : 'coke',
        url : require('@/assets/drinks/coke.png'),
        price : 4
      },
      {
        name : 'ice-tea',
        url : require('@/assets/drinks/ice-tea.png'),
        price : 3.50
      },
      {
        name : 'sprite',
        url : require('@/assets/drinks/sprite.png'),
        price : 2
      },
      {
        name : 'water',
        url : require('@/assets/drinks/water.png'),
        price : 1
      },
    ],
    ingredients: [
      {
        name: 'cheese',
        url: require('@/assets/ingredients/cheese.png'),
        price: 2
      },
      {
        name: 'chili',
        url: require('@/assets/ingredients/chili.png'),
        price: 1
      },
      {
        name: 'mushroom',
        url: require('@/assets/ingredients/mushroom.png'),
        price: 2
      },
      {
        name: 'olive',
        url: require('@/assets/ingredients/olive.png'),
        price: 1
      },
      {
        name: 'onion',
        url: require('@/assets/ingredients/onion.png'),
        price: 1
      },
      {
        name: 'pea',
        url: require('@/assets/ingredients/pea.png'),
        price: 2
      },
      {
        name: 'pickle',
        url: require('@/assets/ingredients/pickle.png'),
        price: 3
      },
    ],

    /* in : pizza'nın üstüne koyulduğunda verilen left ve top değerleri 
       out : pizza'nın üstünden çıkardıldığında verilen değerler (ekrandan çıkartılması)
    */
    pizzaItems: [
      {
        name: 'cheese',
        in: '20%;30%;',
        out: '-50%;30%',
        url: require('@/assets/units/cheese.png')
      },
      {
        name: 'cheese',
        in: '50%;40%;',
        out: '150%;30%',
        url: require('@/assets/units/cheese.png')
      },
      {
        name: 'chili',
        in: '20%;50%;',
        out: '-50%;30%',
        url: require('@/assets/units/chili.png')
      },
      {
        name: 'chili',
        in: '60%;60%;',
        out: '150%;30%',
        url: require('@/assets/units/chili.png')
      },
      {
        name: 'mushroom',
        in: '40%;20%;',
        out: '-40%;20%',
        url: require('@/assets/units/mushroom.png')
      },
      {
        name: 'mushroom',
        in: '60%;60%;',
        out: '150%;60%',
        url: require('@/assets/units/mushroom.png')
      },
      {
        name: 'olive',
        in: '30%;70%;',
        out: '-300%;70%',
        url: require('@/assets/units/olive.png')
      },
      {
        name: 'olive',
        in: '60%;20%;',
        out: '600%;20%',
        url: require('@/assets/units/olive.png')
      },
      {
        name: 'onion',
        in: '30%;10%;',
        out: '-300%;70%',
        url: require('@/assets/units/onion.png')
      },
      {
        name: 'onion',
        in: '50%;10%;',
        out: '600%;20%',
        url: require('@/assets/units/onion.png')
      },
      {
        name: 'pea',
        in: '30%;40%;',
        out: '-300%;40%',
        url: require('@/assets/units/pea.png')
      },
      {
        name: 'pea',
        in: '50%;60%;',
        out: '600%;60%',
        url: require('@/assets/units/pea.png')
      },
      {
        name: 'pickle',
        in: '70%;40%;',
        out: '-300%;40%',
        url: require('@/assets/units/pickle.png')
      },
      {
        name: 'pickle',
        in: '50%;70%;',
        out: '600%;70%',
        url: require('@/assets/units/pickle.png')
      },
    ],
    currentBasket: {
      price: 20, // varsayılan M size fiyatı 
      size: {
        size: 'm',
        price: 3
      },
      selecteds: []
    },
    basket: []
  },

  getters : {
    totalPrice: state => {
        return state.basket.reduce((total, current) => total += current.price, 0)
    }
  },  

  mutations: {

    // malzemelerden sadece bir tane eklenebilir.. 
    addToSelecteds(state, payload) {
      if (!state.currentBasket.selecteds.includes(payload.name)) {
        state.currentBasket.selecteds.push(payload.name)
        state.currentBasket.price += payload.price
      } else {
        alert("Malzeme'den sadece bir tane eklenebilir.")
      }
    },

    setSize(state, payload) {
      state.currentBasket.price -= state.currentBasket.size.price
      state.currentBasket.size = payload;
      state.currentBasket.price += state.currentBasket.size.price
    },

    addToBasket(state) {
      state.basket.push({type : 'pizza', ...state.currentBasket})

      // sepete malzeme eklendikten sonra varsayılana döndürür.
      state.currentBasket = {
        price: 20, // varsayılan M size fiyatı 
        size: {
          size: 'm',
          price: 3
        },
        selecteds: []
      }
    },

    addDrinkToBasket(state, drink){
      state.basket.push({type : 'drink', ...drink})
    },

    totalPrice(state){

    }
  },
  actions: {
  },
  modules: {
  }
})
