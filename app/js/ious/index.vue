<template>
  <div>
    <Header/>
    <Slider/>
    <Split />
    <Welfare />
    <Split />
    <Service />
    <Footer cname="footer" />
    <Navbar/>
  </div>
</template>

<script>
import Header from "public/header";
import Split from "public/split";
import Navbar from "public/navbar";
import Footer from "public/footer"
import Slider from "./slider";
import Welfare from "./welfare"
import Service from "./service"

export default {
  components: {
    Header,
    Split,
    Slider,
    Navbar,
    Footer,
    Welfare,
    Service
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