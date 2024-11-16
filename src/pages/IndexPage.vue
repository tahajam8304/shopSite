<template>
  <q-page class="flex">
    <section
      id="product"
      class="column justify-between items-center q-px-md full-width pa-md"
    >
    <div class="hero">
      <img src="../assets/pic.jpg" alt="">
    </div>
      <h2 style="margin-top: 90px">product</h2>
      <div class="container">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>


      </div>
    </section>
    <footer class="contact">
      <div >
        <h6>shop's logo</h6>
        <h6 style="margin: 0%;">Contact</h6>
        <p>adress:</p>
        <p>Phone:</p>

      </div>
    </footer>
  </q-page>
</template>

<script>
import ProductCard from './ProductCard.vue';
defineOptions({
  name: "IndexPage",
});
</script>

<style lang="scss">
body{
  background-color: #c3dad8c9;
}
.hero{
  width: 100%;
  align-items: center;
    img{
      width: 100%;
      height: 600px;
    }
}
.container{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1em;
  padding: 20px;
}

.contact{
  background-color: white;
  width: 100%;
  padding-left:50px ;
  height: 500px;
}

</style>
