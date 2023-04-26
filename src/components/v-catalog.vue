<template>
  <h2>I'm Catalog!</h2>
  <div class="v-catalog">
    <vCatalogItem
      v-for="product in products"
      :key="product.article"
      :product_data="product"
      @cardInfo = 'showArticleFormChild'
    />
    <!--v-for это наш цикл, который будет пробегаться по каждому объекту из нашего массива products -->
    <!--key это наш уникальный ключ обращения, он не должен ни в коем случае быть одинаковым,
    мы прописали нашу переменную product из массива products к нашему внутреннему item - article -->
    <!--:product_data(v-bind), мы произвели связку между нашими product из v-catalog-item в наш основной v-catalog, чтобы у нас подтягивалась информация о каждой карточке -->
    <!--@cardInfo мы связали наш метод в карточке по клику с методом в самом каталоге -->
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
  name: "v-catalog", // обязательное поле, вводим название нашего компонента
  components: { vCatalogItem }, // далее необязательные поля, здесь мы указываем наши дочерние компоненты - объект
  props: {}, // не персональные данные родителя, хранят массив ключей свойств, которым из вне можно передать значение - объект
  data() {
    return {
      products: [
        // мы передали наши будущие карточки в нужный нам файл, в данном случае в каталог, для дальнейщего отображения
        {
          image: "1.png",
          name: "Analyst",
          price: 2100,
          article: "T1",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hi i'm an Analyst! Nice to meet you!",
        },
        {
          image: "2.png",
          name: "Designer",
          price: 3150,
          article: "T2",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hey my friend! Nice to meet you!",
        },
        {
          image: "3.png",
          name: "Marketer",
          price: 4200,
          article: "T3",
          available: false,
          category: "it products",
          quantity: 0,
          about: "Hello! How have you been?",
        },
        {
          image: "4.png",
          name: "Developer",
          price: 5300,
          article: "T4",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Nice to meet you! What about Vue?",
        },
        {
          image: "5.png",
          name: "Business Accelerator",
          price: 6500,
          article: "T5",
          available: false,
          category: "it products",
          quantity: 0,
          about: "Hey! We'll solve any problems!",
        },
        {
          image: "6.png",
          name: "Engineer",
          price: 8700,
          article: "T6",
          available: true,
          category: "it products",
          quantity: 0,
          about: "Hi! I've many solutions!",
        },
      ],
    };
  },
  computed: {}, // вычисляемые свойства
  methods: { // отслеживание действий пользователя, модальные окна и т.д
    showArticleFormChild(data) { // произвольное название, в скобках что нам нужно передать в данном случае это данные
      console.log(data); // выводим, чтобы их увидеть
    },
  },
  watch: {}, // следит за нашим компонентом и что-то отлавливает
  mounted() {
    // как только появится какой-то компонент, то у нас он отработает
  },
};
</script>

<style>
.v-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>