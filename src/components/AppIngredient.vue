<template>

  <div class="ingredient-item" :title="ingredient.name" >
    <img :src="ingredient.url" :alt="ingredient.name" class="" />
    <p class="ingredient-title">{{ ingredient.name }}</p>

  </div>
</template>

<script>
export default {
  props : {
      ingredient :{
          type: Object,
          required : true
      }
  },  
  setup() {

     
    return {};
  },
};
</script>

<style scoped>
.ingredient-item {
  width: 6rem;
  height: 6rem;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: grab;
  transition: all 0.1s ease-in;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.ingredient-item:hover{
    transform: scale(1.1) translateY(5px);
    background-color: bisque;
}

.ingredient-title{
    margin-top: 10px;
    text-align: center;
}
</style>