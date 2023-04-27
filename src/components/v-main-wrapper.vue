<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vBasket v-if="BASKET.length" :basket_data="BASKET" />
    <!-- мы задали условие v-if, когда в нашей корзине что-то есть, то он будет отображать кол-во,
    мы сообщили нашему главному родителю, что у него теперь есть basket_data "свяжи basket_data дочернего элемента с BASKET" -->
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue"; // мы импортировали наш дочерний файл в родительский
import vBasket from "./v-basket.vue"; // мы импортировали наш дочерний файл в родительский
import { mapGetters } from "vuex"; // mapActions так мы получаем данные из нашего хранилища от store, mapGetters получаем данные нашего products

export default {
  name: "v-main-wrapper", // обязательное поле, вводим название нашего компонента
  components: { vCatalog, vBasket }, // далее необязательные поля, здесь мы указываем наши дочерние компоненты, которые импортировали - это объект
  props: {}, // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - это объект
  data() {
    return {
      title: "hello sprint",
    };
  },
  computed: {
    // вычисляемые свойства
    ...mapGetters(["BASKET"]), // здесь лежит наш геттер из store "мы отловили наш getters"
  },
  methods: {}, // отслеживание действий пользователя, модальные окна и т.д
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {
    // как только появится какой-то компонент, то у нас он отработает
    console.log("hihihihi");
  },
};
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  flex-wrap: wrap;
}
</style>