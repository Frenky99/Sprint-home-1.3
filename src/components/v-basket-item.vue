<template>
  <div class="v-basket-item">
    <img
      class="v-basket-item_image"
      :src="require('../assets/images/' + basket_item_data.image)"
      alt="pic"
    />
    <div class="v-basket-item_data">
      <div>{{ basket_item_data.name }}</div>
      <div>{{ basket_item_data.price }}</div>
      <div>{{ basket_item_data.article }}</div>
      <div>{{ basket_item_data.about }}</div>
    </div>
    <div class="v-basket-item_quantity">
      <p>Quantity</p>
      <span>{{ basket_item_data.quantity }}</span>
    </div>
    <button class="v-basket-item_btn_basket_item" @click="deleteFromCard">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "v-basket-item", // обязательное поле, вводим название нашего компонента
  components: {}, // далее необязательные поля, здесь мы указываем наши дочерние компоненты - объект
  props: {
    // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - объект
    basket_item_data: {
      type: Object, // указываем на будущее какой у нас тип данных, так как внутри массива [], у нас идёт объект {}, то и указываем его
      default() {
        // возвращаем в случае чего пустой объект
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {}, // вычисляемые свойства
  methods: {
    // отслеживание действий пользователя, модальные окна и т.д
    deleteFromCard() {
      // дали название намешму функционалу на кнопку delete
      this.$emit("deleteFromCard"); // аналогично заэмитили
    },
  },
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {}, // как только появится какой-то компонент, то у нас он отработает
};
</script>

<style>
.v-basket-item {
  flex-basis: 40%;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 8px 0 grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.v-basket-item_image {
  width: 160px;
  display: block;
}

.v-basket-item_btn_basket_item {
  padding: 3px 20px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.v-basket-item_btn_basket_item:hover {
  background-color: lightgray;
}

.v-basket-item_data > div {
  margin-bottom: 10px;
}

</style>