<template>
  <div class="head">
    <div class="wrapper clearfix">
      <div class="clearfix" id="top">
        <h1 class="fl">
          <a href="/"><img src="img/logo.png" /></a>
        </h1>
        <div class="fr clearfix" id="top1">
          <p class="fl">
            <router-link to="/login" id="login">登录</router-link>
            <a href="/reg" id="reg">注册</a>
          </p>
          <form action="#" method="get" class="fl">
            <input type="text" placeholder="热门搜索：干花花瓶" />
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
</template>

<script>
export default {};
</script>
