import { createStore } from "vuex";
import axios from "axios"; // мы импортировали axios, чтобы увидеть его в actions

export default createStore({
  state: {
    products: [], // мы закинули в наше хранилище наш каталог
    basket: [], // пустой массив нашей корзины
  },
  getters: {
    // чтобы была реактивность мы закидываем сюда наш state с products, как только state будет видоизменяться, то getters автоматически будет подтягивать его данные
    PRODUCTS(state) {
      // запись с большими буквами, так нужно
      return state.products; // указали, чтобы он возращал данные из state
    },
    BASKET(state) {
      // аналогично как с products
      return state.basket; // указали, чтобы он возращал данные из state
    },
  },
  mutations: { // синхронные
    // теперь мы должны заполнить наш пустой массив(products: []) какими-то новыми данными
    SET_PRODUCTS_TO_STATE: (state, products) => {
      // указываем наш созданный then из GET_PRODUCTS_FROM_API, он принимает первым наш state, а вторым products
      state.products = products; // мы говорим, положи нам в этот массив данные от products
    },
    SET_BASKET: (state, product) => {
      // создали по аналогии выше
      state.basket.push(product); // теперь мы запушили наш product (Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива)
    },
    REMOVE_FROM_BASKET: (state, index) => {
      // создали по аналогии выше
      state.basket.splice(index, 1); // мы вырезали (slice) наш индекс из корзины по клику
    },
  },
  actions: { // асинхронные
    // здесь мы пишем, чтобы получить наши данные
    GET_PRODUCTS_FROM_API({ commit }) {
      // указали название и некий объект для передачи
      return axios("http://localhost:3000/products", {
        // для чего мы  axios вернули? - идут два аргумента url и объект, где мы перечислим методы, не забыть в терминале написать json-server --watch db.json (так мы получаем наш локальный адрес, без него ничего не будет работать)
        method: "GET", // указали как мы его получили - заново прочесть про GET
      })
        .then((products) => {
          // раз это у нас промисы, то у нас идёт цепочка then, далее с помощью стрелочной функции мы это все мутируем
          commit("SET_PRODUCTS_TO_STATE", products.data); // первым аргументом называем нашу мутацию, вторым наш продукт
          return products;
        })
        .catch((error) => {
          // это мы прописываем для отлавливания разных ошибок
          console.log(error); // чтобы мы видели ошибки
          return error; // нужно все это вернуть, чтобы работало
        });
    },
    ADD_TO_BASKET({ commit }, product) {
      // создали наш actions, commit создает мутацию, вторым аругментом принимает нашу карточку
      commit("SET_BASKET", product); // теперь нам осталось объявить нашу мутацию
    },
    DELETE_FROM_BASKET({ commit }, index) {
      commit("REMOVE_FROM_BASKET", index);
    },
  },
  modules: {},
});
