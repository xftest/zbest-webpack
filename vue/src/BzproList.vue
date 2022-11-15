<template>
  <div>
    <Header />
    <div class="banner">
      <a href="#"><img src="img/temp/bzbig.jpg" /></a>
    </div>
    <div class="address">
      <div class="wrapper clearfix">
        <a href="index.html">首页</a>
        <span>/</span>
        <a href="decoration.html">布艺软饰</a>
        <span>/</span>
        <a href="bzproList.html" class="on">抱枕</a>
      </div>
    </div>
    <div class="current">
      <div class="wrapper clearfix">
        <h3 class="fl">桌布</h3>
        <div class="fr choice">
          <p class="default">排序方式</p>
          <ul class="select">
            <li>新品上市</li>
            <li>销量从高到低</li>
            <li>销量从低到高</li>
            <li>价格从高到低</li>
            <li>价格从低到高</li>
          </ul>
        </div>
      </div>
    </div>

    <ul class="proList wrapper clearfix">
      <li v-for="item in list" :key="item.id">
        <a href="proDetail.html">
          <dl>
            <dt><img :src="item.imgUrl" /></dt>
            <dd>{{ item.title }}</dd>
            <dd>￥{{ item.price }}</dd>
          </dl>
        </a>
      </li>
    </ul>

    <!----------------mask------------------->
    <div class="mask"></div>
    <!-------------------mask内容------------------->
    <div class="proDets">
      <img class="off" src="img/temp/off.jpg" />
      <div class="tit clearfix">
        <h4 class="fl">【最家】非洲菊仿真花干花</h4>
        <span class="fr">￥17.90</span>
      </div>
      <div class="proCon clearfix">
        <div class="proImg fl">
          <img class="list" src="img/temp/proDet.jpg" />
          <div class="smallImg clearfix">
            <img
              src="img/temp/proDet01.jpg"
              data-src="img/temp/proDet01_big.jpg"
            />
            <img
              src="img/temp/proDet02.jpg"
              data-src="img/temp/proDet02_big.jpg"
            />
            <img
              src="img/temp/proDet03.jpg"
              data-src="img/temp/proDet03_big.jpg"
            />
            <img
              src="img/temp/proDet04.jpg"
              data-src="img/temp/proDet04_big.jpg"
            />
          </div>
        </div>
        <div class="fr">
          <div class="proIntro">
            <p>颜色分类</p>
            <div class="smallImg clearfix categ">
              <p class="fl">
                <img
                  src="img/temp/prosmall01.jpg"
                  alt="白瓷花瓶+20支快乐花"
                  data-src="img/temp/proBig01.jpg"
                />
              </p>
              <p class="fl">
                <img
                  src="img/temp/prosmall02.jpg"
                  alt="白瓷花瓶+20支兔尾巴草"
                  data-src="img/temp/proBig02.jpg"
                />
              </p>
              <p class="fl">
                <img
                  src="img/temp/prosmall03.jpg"
                  alt="20支快乐花"
                  data-src="img/temp/proBig03.jpg"
                />
              </p>
              <p class="fl">
                <img
                  src="img/temp/prosmall04.jpg"
                  alt="20支兔尾巴草"
                  data-src="img/temp/proBig04.jpg"
                />
              </p>
            </div>
            <p>数量&nbsp;&nbsp;库存<span>2096</span>件</p>
            <div class="num clearfix">
              <img class="fl sub" src="img/temp/sub.jpg" />
              <span class="fl" contentEditable="true">1</span>
              <img class="fl add" src="img/temp/add.jpg" />
              <p class="please fl">请选择商品属性!</p>
            </div>
          </div>
          <div class="btns clearfix">
            <a href="#2"><p class="buy fl">立即购买</p></a>
            <a href="#2"><p class="cart fr">加入购物车</p></a>
          </div>
        </div>
      </div>
      <a class="more" href="proDetail.html">查看更多细节</a>
    </div>

    <Gotop />
    <div class="msk"></div>

    <Footer />
  </div>
</template>

<script>
import "./css/public.css";
import "./css/proList.css";

import "./js/public";
import "./js/nav";
import "./js/pro";
import "./js/cart";

import Header from "./components/header.vue";
import Gotop from "./components/gotop.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Gotop,
    Footer,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          imgUrl: "img/temp/bz08.jpg",
          title: "【最家】清新乡村田园抱枕",
          price: "19.90",
        },
        {
          id: 2,
          imgUrl: "img/temp/bz07.jpg",
          title: "【最家】法式乡村复古抱枕",
          price: "17.90",
        },
        {
          id: 3,
          imgUrl: "img/temp/bz06.jpg",
          title: "【最家】时尚图案抱枕",
          price: "17.90",
        },
        {
          id: 4,
          imgUrl: "img/temp/bz05.jpg",
          title: "【最家】北欧时尚现代动物抱枕",
          price: "59.90",
        },
        {
          id: 5,
          imgUrl: "img/temp/bz04.jpg",
          title: "【最家】简约格子抱枕",
          price: "20.90",
        },
        {
          id: 6,
          imgUrl: "img/temp/bz03.jpg",
          title: "【最家】纯色棉麻抱枕",
          price: "47.90",
        },
        {
          id: 7,
          imgUrl: "img/temp/bz02.jpg",
          title: "【最家】时尚现代叮当猫抱枕",
          price: "37.90",
        },
        {
          id: 8,
          imgUrl: "img/temp/bz01.jpg",
          title: "【最家】欧式现代棉麻抱枕",
          price: "39.90",
        },
        {
          id: 9,
          imgUrl: "img/temp/bz08.jpg",
          title: "【最家】清新乡村田园抱枕",
          price: "19.90",
        },
        {
          id: 10,
          imgUrl: "img/temp/bz07.jpg",
          title: "【最家】法式乡村复古抱枕",
          price: "17.90",
        },
        {
          id: 11,
          imgUrl: "img/temp/bz06.jpg",
          title: "【最家】时尚图案抱枕",
          price: "17.90",
        },
        {
          id: 12,
          imgUrl: "img/temp/bz05.jpg",
          title: "【最家】北欧时尚现代动物抱枕",
          price: "59.90",
        },
        {
          id: 13,
          imgUrl: "img/temp/bz04.jpg",
          title: "【最家】简约格子抱枕",
          price: "20.90",
        },
        {
          id: 14,
          imgUrl: "img/temp/bz03.jpg",
          title: "【最家】纯色棉麻抱枕",
          price: "47.90",
        },
        {
          id: 15,
          imgUrl: "img/temp/bz02.jpg",
          title: "【最家】时尚现代叮当猫抱枕",
          price: "37.90",
        },
        {
          id: 16,
          imgUrl: "img/temp/bz01.jpg",
          title: "【最家】欧式现代棉麻抱枕",
          price: "39.90",
        },
      ],
    };
  },
};
</script>
