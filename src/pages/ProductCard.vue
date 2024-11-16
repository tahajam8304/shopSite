<template>
  <div class="card">
  <img src="../assets/pic.jpg" alt="Denim Jeans" style="width:100%;padding: 5px;border-radius: 15px;">
  <h4>Tailored Jeans</h4>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
</template>

<style>
.card {

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  transition: .4s;
}

.card button:hover {
  opacity: 0.7;
}
</style>
