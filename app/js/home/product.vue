<template>
  <Panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <div class="arrow">更多尖货 ></div>
      <Slider :items="items" :options="options" cname="product-slider" />
    </section>
  </Panel>
</template>

<script>
import Panel from "core/panel";
import Slider from "core/slider";

export default {
  components: {
    Panel,
    Slider
  },

  data() {
    return {
      items: [
        {
          src: "//img3.mukewang.com/5a81337f000118a306000338-240-135.jpg"
        },
        {
          src: "//img4.mukewang.com/5a56fdb400017d0306000338-240-135.jpg"
        },
        {
          src: "//img2.mukewang.com/59ae0e2a0001307706000338-240-135.jpg"
        },
        {
          src: "//img.mukewang.com/5a93556000017ae906000338-240-135.jpg"
        }
      ],
      options: {
        slidesPerView: 1.4,
        spaceBetween: 20,
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 180px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";

.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    & > div {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
}
</style>