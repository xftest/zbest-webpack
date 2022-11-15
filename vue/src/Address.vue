<template>
  <div>
    <Header />

    <div class="address mt">
      <div class="wrapper clearfix">
        <a href="index.html" class="fl">首页</a>
        <span>/</span>
        <a href="mygxin.html">个人中心</a>
        <span>/</span>
        <a href="address.html" class="on">地址管理</a>
      </div>
    </div>

    <!------------------------------Bott------------------------------>
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
              <li><a href="cart.html">我的购物车</a></li>
              <li><a href="myorderq.html">我的订单</a></li>
              <li><a href="myprod.html">评价晒单</a></li>
            </ul>
            <h4>个人中心</h4>
            <ul>
              <li><a href="mygxin.html">我的中心</a></li>
              <li class="on"><a href="address.html">地址管理</a></li>
            </ul>
            <h4>账户管理</h4>
            <ul>
              <li><a href="mygrxx.html">个人信息</a></li>
              <li><a href="remima.html">修改密码</a></li>
            </ul>
          </div>
        </div>
        <div class="you fl">
          <h2>收货地址</h2>
          <div class="add">
            <div>
              <a href="#2" id="addxad"><img src="img/jia.png" /></a>
              <span>添加新地址</span>
            </div>
            <div id="dizhi">
              <p>六六六</p>
              <p>1573****666</p>
              <p>河北省 唐山市 路北区</p>
              <p>唐山市大学生公寓村（063000）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--编辑弹框-->
    <!--遮罩-->
    <div class="mask"></div>
    <div class="adddz">
      <form action="#" method="get">
        <input type="text" placeholder="姓名" class="on" />
        <input type="text" placeholder="手机号" />
        <div class="city">
          <select name="">
            <option value="省份/自治区">省份/自治区</option>
          </select>
          <select>
            <option value="城市/地区">城市/地区</option>
          </select>
          <select>
            <option value="区/县">区/县</option>
          </select>
          <select>
            <option value="配送区域">配送区域</option>
          </select>
        </div>
        <textarea name="" rows="" cols="" placeholder="详细地址"></textarea>
        <input type="text" placeholder="邮政编码" />
        <div class="bc">
          <input type="button" value="保存" />
          <input type="button" value="取消" />
        </div>
      </form>
    </div>
    <div class="readd">
      <form action="#" method="get">
        <input type="text" class="on" value="六六六" />
        <input type="text" value="157****0022" />
        <div class="city">
          <select name="">
            <option value="省份/自治区">河北省</option>
          </select>
          <select>
            <option value="城市/地区">唐山市</option>
          </select>
          <select>
            <option value="区/县">路北区</option>
          </select>
          <select>
            <option value="配送区域">火炬路</option>
          </select>
        </div>
        <textarea name="" rows="" cols="" placeholder="详细地址">
高新产业园</textarea
        >
        <input type="text" placeholder="邮政编码" value="063000" />
        <div class="bc">
          <input type="button" value="保存" />
          <input type="button" value="取消" />
        </div>
      </form>
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
