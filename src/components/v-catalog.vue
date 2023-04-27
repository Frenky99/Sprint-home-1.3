<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'basket', params: { basket_data: BASKET } }">
      <!-- router-link для создания системы навигации в приложении, мы кликаем по нему и переходим куда нам нужно -->
      <div class="v-catalog_link_to_card">
        <i class="medium material-icons">shopping_cart</i>
        <!-- специальный тег i, чтобы подтянуть класс из коробки, название класса не случайно(medium это средний размер),
      он уже запитан в нашем materialize, внутри тега i прописано подключение, что нас интересует корзина  -->
        {{ BASKET.length }}
      </div>
      <!-- мы создали див где у нас будет отображаться сколько товаров в корзине,
    в mapGetters мы добавили наш BASKET и считываем его длину -->
    </router-link>

    <div class="v-catalog_list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @basketInfo="addToBasket"
      />
    </div>

    <!--@cardInfo="showArticleFormChild" было ранее так записано, но т.к. мы сейчас переделываем под корзину, то меняем название-->
    <!--v-for это наш цикл, который будет пробегаться по каждому объекту из нашего массива products -->
    <!--key это наш уникальный ключ обращения, он не должен ни в коем случае быть одинаковым,
    мы прописали нашу переменную product из массива products к нашему внутреннему item - article -->
    <!--:product_data(v-bind), мы произвели связку между нашими product из v-catalog-item в наш основной v-catalog, чтобы у нас подтягивалась информация о каждой карточке -->
    <!--@cardInfo мы связали наш метод в карточке по клику с методом в самом каталоге -->
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex"; // mapActions так мы получаем данные из нашего хранилища от store, mapGetters получаем данные нашего products

export default {
  name: "v-catalog", // обязательное поле, вводим название нашего компонента
  components: { vCatalogItem }, // далее необязательные поля, здесь мы указываем наши дочерние компоненты - объект
  props: {}, // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - объект
  data() {
    return {}; // ранее мы прописали здесь наш массив с продуктами, сейчас удалили, так как в store мы закинули все через vuex
  },
  computed: {
    // вычисляемые свойства
    ...mapGetters(["PRODUCTS", "BASKET"]), // здесь лежит наш геттер из store
  },
  methods: {
    // отслеживание действий пользователя, модальные окна и т.д
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_BASKET"]), // сюда мы закидываем, то что первым записали в store в actions
    addToBasket(data) {
      this.ADD_TO_BASKET(data);
    },
    // showArticleFormChild(data) { // произвольное название, в скобках что нам нужно передать в данном случае это данные
    // console.log(data); // выводим, чтобы их увидеть
    //},
  },
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {
    // как только появится какой-то компонент, то у нас он отработает // поработаем через this с нашим api
    this.GET_PRODUCTS_FROM_API().then((response) => {
      // поработаем через this с нашим api, then дополнительная проверка на получение данных
      if (response.data) {
        // задаем условие - если response придёт, то выведем в консоль
        console.log("Всё чики-рики");
      }
    });
  },
};
</script>

<style>
.v-catalog,
.v-catalog_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 45px;
}

.v-catalog_link_to_card {
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 15px;
}
</style>