<template>
    <div>
        <Header />
        <Slider />
        <Split />
        <Novice />
        <Split />
        <Borrow />
        <Split />
        <Money />
        <Split />
        <Product />
        <Split />
        <Life />
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
import Slider from "home/slider";
import Novice from "home/novice";
import Borrow from "home/borrow";
import Money from "home/money";
import Product from "home/product";
import Life from "home/life";

export default {
  components: {
    Header,
    Footer,
    Split,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Navbar
  }
};
</script>
