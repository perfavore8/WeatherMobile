<template>
  <suspense>
    <router-view />
  </suspense>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}
</style>
