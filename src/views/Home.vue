<template>
  <div class="home">
    <transition name="fade">
      <BirthdayCard v-if="isShow && isValidPerson"/>
      <WrongPerson v-else-if="isShow && !isValidPerson"/>
    </transition>
  </div>
</template>

<script>
import BirthdayCard from '@/components/BirthdayCard';
import WrongPerson from '@/components/WrongPerson';

export default {
  name: 'Home',
  components: {
    BirthdayCard,
    WrongPerson,
  },
  data() {
    return {
      isShow: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (this.isValidPerson) {
          document.title = to.meta.title || 'Barakallahu fii umrik ~~~';
        } else {
          document.title = 'Oops, sorry not for you 🙏';
        }
      },
    },
  },
  computed: {
    isValidPerson() {
      return this.$route.query.name === this.$store.getters.paramName;
    },
  },
  mounted() {
    this.isShow = true;
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

body {
  font-family: "Indie Flower", cursive !important;
  background: #04967D; /*CAPE HONEY*/
  margin: 0px;
  padding: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
