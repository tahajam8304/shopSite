<template>
  <q-layout view="lHh Lpr lFf">
    <section id="header" style="height: 50px;position: fixed;width: 100%;z-index: 22;">
      <a style="color: rebeccapurple">Shop</a>

      <div>
        <ul class="navbar" >
          <li><a @click="goHome" >Home</a></li>
          <li><a @click="goShop" >Shop</a></li>
          <li><a @click="goContact">Contact</a></li>
          <li><a @click="goCart">Cart</a></li>
        </ul>
      </div>
    </section>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script >
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

  export default {
    name: "MainLayout",
    methods: {
      goHome() {
        this.$router.push("/");
      },
      goShop() {
        this.$router.push("/shop");
      },
      goContact() {
        this.$router.push("/contact");
      },
      goCart() {
        this.$router.push("/cart")
      }
    },
  };
</script>

<style lang="scss">
body {
  width: 100%;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #e3e6f6;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.06);
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
  .navbar li {
    list-style: none;
    padding: 0px 20px;
    position: relative;
  }
  .navbar li a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.8s ease;
  }
  .navbar li a:hover,
  .navbar li a.active {
    color: #088178;
  }
  .navbar li a.active::after,
  .navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background-color: #000000;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }
}
</style>
