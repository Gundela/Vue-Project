<template>
  <article>
    <Slider :items="items" :cname="$style.slider" />

    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link to="/">
          <img :src="item.img" alt="">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import Slider from "core/slider";

export default {
  components: {
    Slider
  },
  data() {
    return {
     items: [{
        // href:"home",
        src:"//img12.360buyimg.com/jrpmobile/jfs/t24349/236/686074603/51028/9d5a2201/5b3cb43fN85df2b52.jpg?width=750&height=320",
      },{
        // href:"home",
        src:"//img12.360buyimg.com/jrpmobile/jfs/t22591/270/671021497/38047/b038a502/5b3cb46fN662700d7.jpg?width=750&height=320",
      },{
        // href:"home",
        src:"//img12.360buyimg.com/jrpmobile/jfs/t20758/100/1927641061/42355/56c96026/5b3cb490N65d71875.jpg?width=750&height=320",
      }],
      enters: [
        {
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
          title: "优惠券"
        },
        {
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
          title: "领红包"
        },
        {
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
          title: "抢钢镚"
        },
        {
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
          title: "领京豆"
        },
        {
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
          title: "白条提额"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";

.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>


