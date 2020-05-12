<template>
  <div class="birthday-card">
    <div
      class="card"
      :class="{'active': isOpen}">
      <div class="imgBox">
        <div class="bark"></div>
        <img src="@/assets/img/cover.png" width="300" height="400" />
        <div
          @click="isOpen = true"
          class="card__flip-open">>></div>
      </div>
      <div class="details">
        <div
          @click="isOpen = false"
          class="card__flip-close">x</div>
        <h4 class="heading">بَارَكَ اللهُ فِي عُمْرِك</h4>
        <h4 class="subheading">~{{fullName}}~</h4>
        <p>Dear {{nickName}},</p>
        <p>Semoga sehat selalu</p>
        <p>dimudahkan segala urusannya</p>
        <p>senantiasa dapat keberkahan dan</p>
        <p>rezeki dari Allah ﷺ</p>
        <p>آمين</p>
        <br />
        <p class="text-right">- i -</p>
      </div>
    </div>
    <div @click="isOpen = false" class="card__overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'BirthdayCard',
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    fullName() {
      return this.$store.getters.fullName;
    },
    nickName() {
      return this.$store.getters.nickName;
    },
  },
};
</script>

<style lang="scss" scoped>

h4 {
  font-size: 26px;
  line-height: 1px;
  font-family: "Amatic SC", cursive !important;
}

.heading {
  color: #eec900;
}

.subheading {
  color: #483d8b;
  font-size: 1.5em;
  margin-bottom: 2.5em;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 400px;
  background-image: url("~@/assets/img/bg.png");
  background-repeat: repeat-x;
  background-position-y: 100%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(2000px);
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
    20px 0 60px rgba(0, 0, 0, 0.5);
  transition: 1s;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #79698d;
    transform-origin: bottom;
    transform: skewX(-45deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    width: 5px;
    height: 100%;
    background-image: url("~@/assets/img/bg.png");
    background-repeat: repeat-x;
    background-position-y: 100%;
    transform-origin: left;
    transform: skewY(-45deg);
  }

  &.active {
    transform: translate(-50%, -50%) perspective(2000px) rotate(15deg) scale(1.2);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
      0 10px 100px rgba(0, 0, 0, 0.5);

    .imgBox {
      transform: rotateY(-135deg);
    }

    .bark {
      opacity: 1;
      transition: 0.6s;
      box-shadow: 300px 200px 100px rgba(0, 0, 0, 0.4) inset;
    }
  }

  &.active &__flip-open {
    display: none;
  }

  .imgBox {
    width: 100%;
    height: 100%;
    position: relative;
    transform-origin: left;
    transition: 0.7s;
    background-image: url("~@/assets/img/bg.png");
    background-repeat: repeat-x;
    background-position-y: 100%;

    img {
      min-width: 250px;
      max-height: 400px;
    }
  }

  .bark {
    position: absolute;
    background: #e0e1dc;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.7s;
  }

  &__flip-open {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #726281;
    cursor: pointer;
  }

  &__flip-close {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: 700;
    color: #eec900;
    cursor: pointer;
  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 70px 10px 0 10px;
    width: 100%;
    z-index: -1;

    h4 {
      text-align: center;
    }

    p {
      font-size: 1em;
      line-height: 5px;
      transform: rotate(-10deg);
      text-indent: 40px;
      color: #fafafa;
    }
  }

  .text-right {
    text-align: right;
  }

  &__overlay {
    top: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
}
</style>
