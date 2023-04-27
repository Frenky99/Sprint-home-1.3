<template>
  <div class="v-basket">
    <h2>I'm Basket!</h2>
    <vBasketItem
      v-for="(item, index) in basket_data"
      :key="item.article"
      :basket_item_data="item"
      @deleteFromCard="deleteFromCard(index)"
    />
    <!-- чтобы нам взаимодейстовать с удалением из корзины, мы должны обязательно отловить его индекс -->
  </div>
</template>

<script>
import vBasketItem from "./v-basket-item.vue";
import { mapActions } from "vuex";

export default {
  name: "v-basket", // обязательное поле, вводим название нашего компонента
  components: { vBasketItem }, // далее необязательные поля, здесь мы указываем наши дочерние компоненты - объект
  props: { 
    // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - объект
    basket_data: {
      // можем назвать как угодно
      type: Array, // указываем на будущее какой у нас тип данных, в случае карточек это массив
      default() {
        // возвращаем в случае чего пустой объект
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {}, // вычисляемые свойства
  methods: {
    // отслеживание действий пользователя, модальные окна и т.д
    ...mapActions(["DELETE_FROM_BASKET"]),
    deleteFromCard(index) {
      // создали метод
      this.DELETE_FROM_BASKET(index);
    },
  },
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {
    // как только появится какой-то компонент, то у нас он отработает
  },
};
</script>

<style>
.v-basket {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: grey;
  font-size: 20px;
  margin-bottom: 150px;
}

p {
  text-align: center;
  font-size: 26px;
}
</style>