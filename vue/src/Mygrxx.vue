<template>
  <div>
    <Header />

    <div class="address mt">
      <div class="wrapper clearfix">
        <a href="index.html" class="fl">首页</a>
        <span>/</span>
        <a href="mygxin.html" class="on">个人信息</a>
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
              <li><a href="cart.html">我的购物车</a></li>
              <li><a href="myorderq.html">我的订单</a></li>
              <li><a href="myprod.html">评价晒单</a></li>
            </ul>
            <h4>个人中心</h4>
            <ul>
              <li><a href="mygxin.html">我的中心</a></li>
              <li><a href="address.html">地址管理</a></li>
            </ul>
            <h4>账户管理</h4>
            <ul>
              <li class="on"><a href="mygrxx.html">个人信息</a></li>
              <li><a href="remima.html">修改密码</a></li>
            </ul>
          </div>
        </div>
        <div class="you fl">
          <h2>个人信息</h2>
          <div class="gxin">
            <div class="tx">
              <a href="#"
                ><img src="img/tx.png" />
                <p id="avatar">修改头像</p></a
              >
            </div>
            <div class="xx">
              <h3 class="clearfix">
                <strong class="fl">基础资料</strong
                ><a href="#" class="fr" id="edit1">编辑</a>
              </h3>
              <div>姓名：六六六</div>
              <div>生日：1995-06-06</div>
              <div>性别：女</div>
              <h3>高级设置</h3>
              <!--<div><span class="fl">银行卡</span><a href="#" class="fr">管理</a></div>-->
              <div>
                <span class="fl">账号地区：中国</span
                ><a href="#" class="fr" id="edit2">修改</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--遮罩-->
    <div class="mask"></div>
    <!--编辑弹框-->
    <div class="bj">
      <div class="clearfix">
        <a href="#" class="fr gb"><img src="img/icon4.png" /></a>
      </div>
      <h3>编辑基础资料</h3>
      <form action="#" method="get">
        <p><label>姓名：</label><input type="text" value="六六六" /></p>
        <p><label>生日：</label><input type="text" /></p>
        <p>
          <label>性别：</label>
          <span><input type="radio" />男</span>
          <span><input type="radio" />女</span>
        </p>
        <div class="bc">
          <input type="button" value="保存" />
          <input type="button" value="取消" />
        </div>
      </form>
    </div>
    <!--高级设置修改-->
    <div class="xg">
      <div class="clearfix">
        <a href="#" class="fr gb"><img src="img/icon4.png" /></a>
      </div>
      <h3>切换账号地区</h3>
      <form action="#" method="get">
        <p><label>姓名：</label><input type="text" value="六六六" /></p>
        <div class="bc">
          <input type="button" value="保存" />
          <input type="button" value="取消" />
        </div>
      </form>
    </div>
    <!--修改头像-->
    <div class="avatar">
      <div class="clearfix">
        <a href="#" class="fr gb"><img src="img/icon4.png" /></a>
      </div>
      <h3>修改头像</h3>
      <form action="#" method="get">
        <h4>请上传图片</h4>
        <input type="button" value="上传头像" />
        <p>jpg或png，大小不超过2M</p>
        <input type="submit" value="提交" />
      </form>
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
