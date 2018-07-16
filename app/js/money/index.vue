<template>
  <div>
    <Header />
    <Slider />
    <Split />
    <Part1 />
    <Split />
    <Part2 />
    <Split />
    <Part3 />
    <Split />
    <Part4 />
    <Split />
    <Part5 />
    <Split />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Header from "public/header";
import Footer from "public/footer";
import Split from "public/split";
import Navbar from "public/navbar";
import Slider from "money/slider";
import Part1 from "money/part1";
import Part2 from "money/part2";
import Part3 from "money/part3";
import Part4 from "money/part4";
import Part5 from "money/part5";

export default {
  components: {
    Header,
    Footer,
    Split,
    Slider,
    Navbar,
    Part1,
    Part2,
    Part3,
    Part4,
    Part5
  }
};
</script>

<style lang="scss">

</style>