<template>
 <transition name="fade">
  <router-view />
  </transition>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");


:root {
  --primary-color: #006994;
  --background-color: #333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope";
}

body {
  color: white;
  min-height: 100vh;
  background-color: var(--background-color);
  overflow-x: hidden; /* Hide horizontal scrollbar */

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>