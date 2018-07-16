<template>
    <div>
      <Header/>
      <Slider/>
      <Split />
      <Daily />
      <Split />
      <In />
      <Split />
      <More />
      <Footer cname="footer" />
      <Navbar/>
  </div>
</template>

<script>
import Header from "public/header";
import Split from "public/split";
import Navbar from "public/navbar";
import Footer from "public/footer";
import Slider from "./slider";
import Daily from "./daily";
import In from "./in";
import More from "./more";

export default {
  components: {
    Header,
    Split,
    Slider,
    Navbar,
    Footer,
    Daily,
    In,
    More
  }
};
</script>

<style lang="scss">
.footer {
  margin-top: 0 !important;
  ul {
    li:first-child,
    li:last-child {
      display: none;
    }
  }
}
</style>