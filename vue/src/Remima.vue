<template>
  <div>
    <Header />

    <div class="address mt">
      <div class="wrapper clearfix">
        <a href="/" class="fl">首页</a>
        <span>/</span>
        <a href="/mygxin" class="on">个人信息</a>
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
              <li><a href="/mygxin">我的中心</a></li>
              <li><a href="/address">地址管理</a></li>
            </ul>
            <h4>账户管理</h4>
            <ul>
              <li><a href="/mygrxx">个人信息</a></li>
              <li class="on"><a href="/remima">修改密码</a></li>
            </ul>
          </div>
        </div>
        <div class="you fl">
          <h2>修改密码</h2>
          <form action="#" method="get" class="remima">
            <p>
              <span>选择验证身份方式：</span><input type="checkbox" />密码验证
              <input type="checkbox" />邮箱验证
            </p>
            <p><span>原密码：</span><input type="text" /></p>
            <p class="op">输入原密码</p>
            <p><span>新密码：</span><input type="text" /></p>
            <p class="op">
              6-16
              个字符，需使用字母、数字或符号组合，不能使用纯数字、纯字母、纯符号
            </p>
            <p><span>重复新密码：</span><input type="text" /></p>
            <p class="op">请再次输入密码</p>
            <p>
              <span>验证码：</span><input type="text" /><img
                src="img/temp/code.jpg"
                alt=""
              />
            </p>
            <p class="op">按右图输入验证码，不区分大小写</p>
            <input type="submit" value="提交" />
          </form>
        </div>
      </div>
    </div>

    <Gotop />

    <Footer />
  </div>
</template>

<script>
import "./css/public.css";
import "./css/mygrxx.css";

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
