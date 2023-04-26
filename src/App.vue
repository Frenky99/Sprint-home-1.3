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
#app {
  font-family: 'Comic Sans MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
