import "./css/public.css";
import "./css/proList.css";
import "./js/public";
import "./js/pro";
import "./js/jquery.SuperSlide.2.1.1.js";

jQuery(".bottom").slide({
  titCell: ".hd ul",
  mainCell: ".bd .likeList",
  autoPage: true,
  autoPlay: false,
  effect: "leftLoop",
  autoPlay: true,
  vis: 1,
});
