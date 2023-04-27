<template>
  <div class="v-basket">
    <router-link :to="{ name: 'catalog' }">
      <!-- router-link для создания системы навигации в приложении, мы кликаем по нему и переходим куда нам нужно -->

      <div class="v-catalog_link_to_card">
        <i class="medium material-icons">shopping_cart</i>
        <!-- специальный тег i, чтобы подтянуть класс из коробки, название класса не случайно(medium это средний размер),
      он уже запитан в нашем materialize, внутри тега i прописано подключение, что нас интересует корзина  -->
        {{ BASKET.length }}
      </div>
      <!-- мы создали див где у нас будет отображаться сколько товаров в корзине,
    в mapGetters мы добавили наш BASKET и считываем его длину -->
      <button class="btn">Back to Catalog</button>
    </router-link>
    <p v-if="!BASKET.length">You haven't got any products:(</p>
    <!-- v-if закинули условие, что если у нас нет длины, то наш p будет отображаться -->
    <vBasketItem
      v-for="(item, index) in BASKET"
      :key="item.article"
      :basket_item_data="item"
      @deleteFromCard="deleteFromCard(index)"
    />
    <!-- BASKET прописан в mapGetters -->
    <!-- чтобы нам взаимодейстовать с удалением из корзины, мы должны обязательно отловить его индекс -->
  </div>
</template>

<script>
import vBasketItem from "./v-basket-item.vue";
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    // вычисляемые свойства
    ...mapGetters(["BASKET"]), // mapGetters просто сопоставляет геттеры хранилища с локальными вычисляемыми свойствами
  },
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
  margin-top: 45px;
}

p {
  text-align: center;
  font-size: 26px;
}

.btn {
  display: flex;
  align-items: center;
  
}
</style>