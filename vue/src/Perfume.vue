<template>
  <div>
    <Header />
    <!-----------------banner------------------------------->
    <div class="banner">
      <a href="#"><img src="img/temp/perfume_Banner.jpg" /></a>
    </div>
    <!-----------------address------------------------------->
    <div class="address">
      <div class="wrapper clearfix">
        <a href="index.html">首页</a>
        <span>/</span>
        <a href="perfume.html" class="on">蜡艺香薰</a>
      </div>
    </div>
    <!-----------------paintCon------------------------------->
    <div class="paintCon">
      <section class="wrapper">
        <h3><img src="img/temp/perfumeTit01.jpg" /></h3>
        <img src="img/temp/xxB01.jpg" />
        <div class="paintList">
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx01.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx02.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx103.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx104.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx105.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx106.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
        </div>
      </section>
      <section class="wrapper">
        <h3><img src="img/temp/perfumeTit02.jpg" /></h3>
        <img src="img/temp/xxB02.jpg" />
        <div class="paintList">
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx201.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx202.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx203.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx204.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx205.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
          <a href="proDetail.html">
            <dl>
              <dt><img src="img/temp/xx206.jpg" /></dt>
              <dd>新中式客厅山水装饰画墙壁挂画</dd>
              <dd>￥299.90</dd>
            </dl>
          </a>
        </div>
      </section>
    </div>

    <Gotop />
    <div class="msk"></div>

    <Footer />

    <!---->
  </div>
</template>

<script>
import "./css/public.css";
import "./css/proList.css";
import "./js/public";
import "./js/nav";

import Header from "./components/header.vue";
import Gotop from "./components/gotop.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Gotop,
    Footer,
  },
};
</script>
