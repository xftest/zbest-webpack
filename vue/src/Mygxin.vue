<template>
  <div>
    <Header />

    <div class="address mt" id="add">
      <div class="wrapper clearfix">
        <a href="/" class="fl">首页</a>
        <span>/</span>
        <a href="/mygxin" class="on">个人中心</a>
      </div>
    </div>

    <div class="Bott">
      <div class="wrapper clearfix">
        <div class="zuo fl">
          <h3>
            <a href="#"><img src="img/tx.png" /></a>
            <p class="clearfix">
              <span class="fl">[羊羊羊]</span><span class="fr">[退出登录]</span>
            </p>
          </h3>
          <div>
            <h4>我的交易</h4>
            <ul>
              <li><a href="/cart">我的购物车</a></li>
              <li><a href="/myorderq">我的订单</a></li>
              <li><a href="/myprod">评价晒单</a></li>
            </ul>
            <h4>个人中心</h4>
            <ul>
              <li class="on"><a href="/mygxin">我的中心</a></li>
              <li><a href="/address">地址管理</a></li>
            </ul>
            <h4>账户管理</h4>
            <ul>
              <li><a href="/mygrxx">个人信息</a></li>
              <li><a href="/remima">修改密码</a></li>
            </ul>
          </div>
        </div>
        <div class="you fl">
          <div class="tx clearfix">
            <div class="fl clearfix">
              <a href="#" class="fl"><img src="img/tx.png" /></a>
              <p class="fl">
                <span>六六六</span><a href="/mygrxx">修改个人信息></a>
              </p>
            </div>
            <div class="fr">绑定邮箱：12****4@**.com</div>
          </div>
          <div class="bott">
            <div class="clearfix">
              <a href="#" class="fl"><img src="img/gxin1.jpg" /></a>
              <p class="fl">
                <span>待支付的订单：<strong>0</strong></span>
                <a href="/myorderq">查看待支付订单></a>
              </p>
            </div>
            <div class="clearfix">
              <a href="#" class="fl"><img src="img/gxin2.jpg" /></a>
              <p class="fl">
                <span>待收货的订单：<strong>0</strong></span>
                <a href="/myorderq">查看待收货订单></a>
              </p>
            </div>
            <div class="clearfix">
              <a href="#" class="fl"><img src="img/gxin3.jpg" /></a>
              <p class="fl">
                <span>待评价的订单：<strong>0</strong></span>
                <a href="/myprod">查看待评价订单></a>
              </p>
            </div>
            <div class="clearfix">
              <a href="#" class="fl"><img src="img/gxin4.jpg" /></a>
              <p class="fl">
                <span>喜欢的商品：<strong>0</strong></span>
                <a href="#">查看喜欢的商品></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Gotop />
    <Footer />
  </div>
</template>

<script>
import "./css/public.css";
import "./css/mygxin.css";
import "./js/public";
import "./js/user";

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
