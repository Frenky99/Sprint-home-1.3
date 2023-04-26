<template>
  <div class="v-main-wrapper">
    <vCatalog/>
    <vBasket/>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'; // мы импортировали наш дочерний файл в родительский
import vBasket from './v-basket.vue'; // мы импортировали наш дочерний файл в родительский

export default {
  name: "v-main-wrapper", // обязательное поле, вводим название нашего компонента
  components: {vCatalog, vBasket}, // далее необязательные поля, здесь мы указываем наши дочерние компоненты, которые импортировали - это объект
  props: {}, // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - это объект
  data() {
    return {
      title: "hello sprint",
    };
  },
  computed: {}, // вычисляемые свойства
  methods: {}, // отслеживание действий пользователя, модальные окна и т.д
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() { // как только появится какой-то компонент, то у нас он отработает
    console.log("hihihihi");
  },
};
</script>

<style>
.v-main-wrapper {
   display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 900px;
    flex-wrap: wrap;
}
</style>