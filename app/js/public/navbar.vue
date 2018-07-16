<template>
  <Panel title="导航条" :class="$style.panel">
    <ul :class="$style.content">
      <li v-for="item in items" :key="item.text">
        <router-link :to="{name: item.href}">
          <img :src="item.src" alt="">
          <p>{{item.text}}</p>
        </router-link>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from "core/panel";

export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66",
          text: "首页"
        },
        {
          href: "money",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66",
          text: "理财"
        },
        {
          href: "ious",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66",
          text: "白条"
        },
        {
          href: "crowd",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66",
          text: "众筹"
        },
        {
          href: "download",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66",
          text: "我的"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";

.panel {
  @include panel;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  margin: 0;
  > h4 {
    display: none;
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    li {
      text-align: center;
      a {
        text-decoration: none;
      }

      img {
        width: 44px;
        height: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p {
        font-size: 22px;
        color: #656565;
      }
    }
  }
}
</style>