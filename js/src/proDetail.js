import "./css/public.css";
import "./css/proList.css";

import "jquery";
import "./js/jquery.SuperSlide.2.1.1";
import "./js/public";
import "./js/nav";
import "./js/pro";
import "./js/cart";

jQuery(".bottom").slide({
  titCell: ".hd ul",
  mainCell: ".bd .likeList",
  autoPage: true,
  autoPlay: false,
  effect: "leftLoop",
  autoPlay: true,
  vis: 1,
});
