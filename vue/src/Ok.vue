<template>
  <div>
    <!----------------------------------------order------------------>
    <div class="head ding">
      <div class="wrapper clearfix">
        <div class="clearfix" id="top">
          <h1 class="fl">
            <a href="/"><img src="img/logo.png" /></a>
          </h1>
          <div class="fr clearfix" id="top1">
            <p class="fl">
              <router-link to="/login" id="login">登录</router-link>
              <a href="#" id="reg">注册</a>
            </p>
            <form action="#" method="get" class="fl">
              <input type="text" placeholder="搜索" />
              <input type="button" />
            </form>
            <div class="btn fl clearfix">
              <a href="/mygxin"><img src="img/grzx.png" /></a>
              <a href="#" class="er1"><img src="img/ewm.png" /></a>
              <a href="/cart"><img src="img/gwc.png" /></a>
              <p>
                <a href="#"><img src="img/smewm.png" /></a>
              </p>
            </div>
          </div>
        </div>
        <ul class="clearfix" id="bott">
          <li><a href="/">首页</a></li>
          <li>
            <a href="#">所有商品</a>
            <div class="sList">
              <div class="wrapper clearfix">
                <a href="/paint">
                  <dl>
                    <dt><img src="img/nav1.jpg" /></dt>
                    <dd>浓情欧式</dd>
                  </dl>
                </a>
                <a href="/paint">
                  <dl>
                    <dt><img src="img/nav2.jpg" /></dt>
                    <dd>浪漫美式</dd>
                  </dl>
                </a>
                <a href="/paint">
                  <dl>
                    <dt><img src="img/nav3.jpg" /></dt>
                    <dd>雅致中式</dd>
                  </dl>
                </a>
                <a href="/paint">
                  <dl>
                    <dt><img src="img/nav6.jpg" /></dt>
                    <dd>简约现代</dd>
                  </dl>
                </a>
                <a href="/paint">
                  <dl>
                    <dt><img src="img/nav7.jpg" /></dt>
                    <dd>创意装饰</dd>
                  </dl>
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="/flowerDer">装饰摆件</a>
            <div class="sList2">
              <div class="clearfix">
                <a href="/proList">干花花艺</a>
                <a href="/vase_proList">花瓶花器</a>
              </div>
            </div>
          </li>
          <li>
            <a href="/decoration">布艺软饰</a>
            <div class="sList2">
              <div class="clearfix">
                <a href="zb/proList">桌布罩件</a>
                <a href="/bzproList">抱枕靠垫</a>
              </div>
            </div>
          </li>
          <li><a href="/paint">墙式壁挂</a></li>
          <li><a href="/">蜡艺香薰</a></li>
          <li><a href="/idea">创意家居</a></li>
        </ul>
      </div>
    </div>
    <div class="order mt cart">
      <div class="site">
        <p class="wrapper clearfix">
          <span class="fl">支付成功</span>
          <img class="top" src="img/temp/cartTop03.png" />
        </p>
      </div>
      <p class="ok">
        支付成功！剩余<span>5</span>秒<a href="/myorderq">返回订单页</a>
      </p>
    </div>
    <div class="like">
      <h4>猜你喜欢</h4>
      <div class="bottom">
        <div class="hd">
          <span class="prev"><img src="img/temp/prev.png" /></span>
          <span class="next"><img src="img/temp/next.png" /></span>
        </div>
        <div class="imgCon wrapper bd">
          <div class="likeList clearfix">
            <div>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like01.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like02.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like03.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like04.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail" class="last">
                <dl>
                  <dt><img src="img/temp/like05.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
            </div>
            <div>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like01.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like02.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like03.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail">
                <dl>
                  <dt><img src="img/temp/like04.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
              <a href="/proDetail" class="last">
                <dl>
                  <dt><img src="img/temp/like05.jpg" /></dt>
                  <dd>【最家】复古文艺风玻璃花瓶</dd>
                  <dd>￥193.20</dd>
                </dl>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import "./css/public.css";
import "./css/proList.css";
import "./js/public";
import "./js/pro";
import "./js/jquery.SuperSlide.2.1.1.js";
import Footer from "./components/footer.vue";

export default {
  components: {
    Footer,
  },
  mounted() {
    jQuery(".bottom").slide({
      titCell: ".hd ul",
      mainCell: ".bd .likeList",
      autoPage: true,
      autoPlay: false,
      effect: "leftLoop",
      autoPlay: true,
      vis: 1,
    });
  },
};
</script>
