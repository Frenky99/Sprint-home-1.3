<template>
<div id="app">
  <vMainWrapper/> <!--  мы прописали наш файл, чтобы он у нас отображался -->
</div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'; // мы импортировали наш дочерний файл в родительский, указав его название в камел-кейс и прописав его путь
export default {
  name: 'app',
  components: {
    vMainWrapper //в папку мы записываем через тире(имя в кебаб-кейс), а в импорте с слитно с большой буквы(камел-кейс)
  }
};
</script>


<style lang="scss"> // lang позволяет использовать вложенность по типу &
@import '~materialize-css/dist/css/materialize.min.css'; // мф подключили данные фреймворка от materialize, ранее в терминале мы прописали: npm install materialize-css@next

#app {
  font-family: 'Comic Sans MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
