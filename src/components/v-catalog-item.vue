<template>
  <div class="v-catalog-item">
    <!--передаём наши объекты в {{}}-->
    <img
      class="v-catalog-item_image"
      :src="require('../assets/images/' + product_data.image)"
      alt="pic"
    />
    <!--делаем привязку к scr на наши картинки,
    мы указали сначала путь к папке где лежат картинки, а потом как обычно указали что именно нам там нужно, за что отвечает require?-->
    <div class="v-catalog-item_name">{{ product_data.name }}</div>
    <div class="v-catalog-item_price">{{ product_data.price }}</div>
    <div class="v-catalog-item_about">{{ product_data.about }}</div>
    <button class="v-catalog-item_btn_card-item" @click="addToBasket">click</button> <!-- мы привязали наш метод с помощью клика -->
  </div>
</template>

<script>
export default {
  name: "v-catalog-item", // обязательное поле, вводим название нашего компонента
  components: {}, // далее необязательные поля, здесь мы указываем наши дочерние компоненты - объект
  props: { // передаются данные из родительского компонента в дочерние данные, хранят массив ключей свойств, которым из вне можно передать значение - объект,
    product_data: { //можем назвать как угодно, но раз у нас в v-catalog уже записано product, то логичнее будет так и записать и передать его данные
      type: Object, // указываем на будущее какой у нас тип данных, так как внутри массива [], у нас идёт объект {}, то и указываем его
      default() { // возвращаем в случае чего пустой объект
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {}, // вычисляемые свойства
  methods: { // отслеживание действий пользователя, модальные окна и т.д 
    addToBasket() {
      this.$emit('basketInfo', this.product_data)
    }


    // sendDataToParent() { // ---- мы записали метод и дали ему название, с помощью которого будет получена информация в наш родитель, в нашу кнопку мы привязывали данный метод, сейчас мы его заменили, так как нам нужен другой функционал
    // this.$emit('cardInfo', this.product_data.article) // ---- $emit мы передаем данные из дочерних данных в родительский компонент, далее первым аругментом он принимает ключ, что примет родитель, там мы
    // ---- можем назвать как угодно, а второе прописываем что мы хотим передать
    // },
  },
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {
    // как только появится какой-то компонент, то у нас он отработает
  },
};
</script>

<style lang='scss'>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  &__img {
    max-width: 100px;
  }
}

.v-catalog-item_image, .v-catalog-item_name, .v-catalog-item_price, .v-catalog-item_about {
    margin-bottom: 10px;
}

.v-catalog-item_btn_card-item {
    padding: 3px 20px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    }

.v-catalog-item_btn_card-item:hover {
    background-color: lightgray;
}

</style>