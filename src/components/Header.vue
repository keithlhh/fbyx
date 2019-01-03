<template>
 <div class="app-header" >
   <div class="navbar-container">
        <ul>
            <li><a href="" @mouseenter="enter()" @mouseleave="leave()" :style="obj1"></a></li>
            <li><a href="">游戏</a></li>
            <li><a href="">商城</a></li>
            <li><a href="">新闻</a></li>
            <li><a href="">电子竞技</a></li>
            <li><a href="">暴雪嘉年华</a></li>
            <li><a href="">你的通行证</a></li>
            <li><a href="">支持</a></li>
        </ul>
   </div>
   <div class="nav-container1" :class="{'active':isShowA==0}">
            <div class="Header-inner">
                <div class="Header-innermost">
                    <div class="Header-logo">
                        <a href="" class="Header-logoLink">
                            <img class="Logo Header-logoImage Header-logoImage--small" src="http://127.0.0.1:3000/blizzard/heroes-icon.png" alt="">
                        </a>
                    </div>
                    <div class="Header-navContainer">
                        <div class="Header-nav">
                            <nav role="navigation" class="Nav Nav--flat">
                                <ul class="Nav-list">
                                    <li class="Nav-item ">
                                        <a href="" class="Nav-link-desk active ">首页</a>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="" class="Nav-link-desk ">新闻</a>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="javascript:void(0);" class="Nav-link-desk js-toggle-dropdown  " @click="btn2">游戏
                                            <svg xmlns="http://www.w3.org/2000/svg" class="Icon Icon--downArrow" viewBox="0 0 20 20">
                                                <path fill="#ccccff" d="M10,15.5L2.6,8.1V4.5L10,12l7.4-7.5v3.6L10,15.5z"></path>
                                            </svg>
                                        </a>
                                        <div class="Nav-dropdown" :style="s4">
                                            <div class="Nav-dropdownBox">
                                                <div class="Nav-dropdownBoxInner">
                                                    <ul class="Nav-dropdownList">
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">游戏特色</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">游戏概览</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">升级系统 2.0</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">风暴乱斗</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">战场地图</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">排名模式</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">好友招募</a>
                                                        </li>
                                                        <li class="Nav-dropdownItem">
                                                            <a href="" class="Nav-dropdownLink">官方漫画</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="" class="Nav-link-desk ">英雄</a>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="" class="Nav-link-desk ">排行榜</a>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="" class="Nav-link-desk">视频图片</a>
                                    </li>
                                    <li class="Nav-item">
                                        <a href="" class="Nav-link-desk" target="_blank">论坛</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <a class="Header-ctaBtn" href="">
                                游戏下载
                    </a>
                </div>
            </div>
    </div>
    <div class="nav-container2" :class="{'active':isShowB==0}" >
        <div class="Header-inner">
            <div class="Header-innermost">
                <div class="Header-logo">
                    <a href="" class="Header-logoLink">
                        <img class="Logo Header-logoImage Header-logoImage--middle" src="http://127.0.0.1:3000/blizzard/heroes-logo-mid@2x.png" alt="">
                    </a>
                </div>
                <div class="Header-navContainer">
                    <div class="Header-nav">
                        <nav role="navigation" class="Nav Nav--flat">
                            <ul class="Nav-list">
                                <li class="Nav-item ">
                                    <a href="" class="Nav-link-desk active ">首页</a>
                                </li>
                                <li class="Nav-item">
                                    <a href="" class="Nav-link-desk ">新闻</a>
                                </li>
                                <li class="Nav-item">
                                    <a href="javascript:void(0);" class="Nav-link-desk js-toggle-dropdown" @click="btn1">游戏
                                        <svg xmlns="http://www.w3.org/2000/svg" class="Icon Icon--downArrow" viewBox="0 0 20 20">
                                            <path fill="#ccccff" d="M10,15.5L2.6,8.1V4.5L10,12l7.4-7.5v3.6L10,15.5z"></path>
                                        </svg>
                                    </a>
                                    <div class="Nav-dropdown" :style="s3">
                                        <div class="Nav-dropdownBox">
                                            <div class="Nav-dropdownBoxInner">
                                                <ul class="Nav-dropdownList">
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">游戏特色</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">游戏概览</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">升级系统 2.0</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">风暴乱斗</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">战场地图</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">排名模式</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">好友招募</a>
                                                    </li>
                                                    <li class="Nav-dropdownItem">
                                                        <a href="" class="Nav-dropdownLink">官方漫画</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="Nav-item">
                                    <a href="" class="Nav-link-desk ">英雄</a>
                                </li>
                                <li class="Nav-item">
                                    <a href="" class="Nav-link-desk ">排行榜</a>
                                </li>
                                <li class="Nav-item">
                                    <a href="" class="Nav-link-desk">视频图片</a>
                                </li>
                                <li class="Nav-item">
                                    <a href="" class="Nav-link-desk" target="_blank">论坛</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <a class="Header-ctaBtn" href="">
                            游戏下载
                </a>
            </div>
        </div>
   </div>
 <!-- siteMap -->
   <div class="siteMap" id="siteMap">
    <div class="siteMap_title"></div>
    <div class="menuList clearFix">
        <div class="menuList-box">
            <h3>新闻中心</h3>
            <ul class="menuList-link-ul">
                <li><a href="javascript:;" target="_blank">最新文章</a></li>
                <li><a href="javascript:;" target="_blank">蓝帖博文</a></li>
                <li><a href="javascript:;" target="_blank">赛事活动</a></li>
                <li><a href="javascript:;" target="_blank">进阶指南</a></li>
                <li><a href="javascript:;" target="_blank">社区推荐</a></li>
                <li><a href="javascript:;" target="_blank">补丁说明</a></li>
            </ul>
        </div>
        <div class="menuList-box">
            <h3>游戏特色</h3>
            <ul class="menuList-link-ul">
                <li><a href="javascript:;" target="_blank">游戏概览</a></li>
                <li><a href="javascript:;" target="_blank">新手指南</a></li>
                <li><a href="javascript:;" target="_blank">排名模式</a></li>
                <li><a href="javascript:;" target="_blank">好友招募</a></li>
                <li><a href="javascript:;" target="_blank">风暴乱斗</a></li>
                <li><a href="javascript:;" target="_blank">排行榜</a></li>
                <li><a href="javascript:;" target="_blank">英雄</a></li>
                <li><a href="javascript:;" target="_blank">战场</a></li>
            </ul>
        </div>
        <div class="menuList-box">
            <h3>视频图片</h3>
            <ul class="menuList-link-ul">
                <li><a href="javascript:;" target="_blank">游戏视频</a></li>
                <li><a href="javascript:;" target="_blank">游戏截图</a></li>
                <li><a href="javascript:;" target="_blank">玩家作品</a></li>
                <li><a href="javascript:;" target="_blank">游戏壁纸</a></li>
                <li><a href="javascript:;" target="_blank">官方漫画</a></li>
            </ul>
        </div>
        <div class="menuList-box last">
            <h3>互动社区</h3>
            <ul class="menuList-link-ul">
                <li><a href="javascript:;" target="_blank">官方论坛</a></li>
                <li><a href="javascript:;" target="_blank">举报中心</a></li>
            </ul>
        </div>
    </div>
   </div>
   <!-- slidder -->
   <div class="g_sidebar" id="g_sidebar">
    <div class="sidebar_menu" id="sidebar_menu">
        <a href="javascript:;"></a>
    </div>
    <ul class="sidebar_box">
        <!-- <li class="sidebar_li_7">
            <a href="/minisite/appsite/" target="_blank">
                <img src="http://heroes.nos.netease.com/1/images/minisite/appsite/heroesAPP.png">
                <span>随身风暴英雄</span>
            </a>
        </li> -->
        <li class="sidebar_li_7">
            <a target="_blank" href="javascript:;">
                <div class="sidebar_7_ani_wrap">
                    <div class="sidebar_7_ani">
                        <span class="text" :style="span1" >官方<br>APP</span>
                        <span class="sb_icon" :style="span2" ></span>
                    </div>
                </div>
                <span class="sb_font fadeInHidden"><i></i>官方APP</span>
            </a>
            <div class="sidebar_2code fadeInHidden">
                <a href="javascript:;" target="_blank">
                    <img src="http://127.0.0.1:3000/blizzard/heroesAPP.png">
                    <span>随身风暴英雄</span>
                </a>
            </div>
        </li>
        <li class="sidebar_li_1">
            <a id="sidebar_zhoumian" href="javascript:;" target="_blank">
                <span class="sb_icon"></span>
                <span class="sb_font fadeInHidden"><i></i>周免英雄</span>
            </a>
        </li>
        <li class="sidebar_li_2">
            <!-- <a href="http://heroes.blizzard.cn/article/official/1075" target="_blank"> -->
            <a id="sidebar_tehui" href="javascript:;" target="_blank">
                <span class="sb_icon"></span>
                <span class="sb_font fadeInHidden"><i></i>英雄特惠</span>
            </a>
        </li>
        <li class="sidebar_li_3">
            <a href="javascript:;">
                <span class="sb_icon"></span>
                <span class="sb_font fadeInHidden"><i></i>手机官网</span>
            </a>
            <div class="sidebar_2code fadeInHidden">
                <img src="http://127.0.0.1:3000/blizzard/code_webapp.jpg">
            </div>
        </li>
        <li class="sidebar_li_4">
            <a href="javascript:;" class="sidebar_li_4_a">
                <span class="sb_icon"></span>
                <!-- <span class="sb_font fadeInHidden"><i></i>社区分享</span> -->
            </a>
            <div class="sidebar_shareBox fadeInHidden">
                <ul class="sidebar_share clearFix bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1" data-bd-bind="1545047251439">
                    <li><a class="bds_tsina" href="javascript:void(0)" data-cmd="tsina">新浪微博</a></li>
                    <li><a class="bds_weixin" href="javascript:void(0)" data-cmd="weixin">微信</a></li>
                    <li><a class="bds_tieba" href="javascript:void(0)" data-cmd="tieba">百度</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar_li_5">
            <a href="javascript:;">
                <span class="sb_icon"></span>
                <span class="sb_font fadeInHidden"><i></i>搜索新闻</span>
            </a>
            <div class="w-sidebar_search fadeInHidden">
                <input type="text" placeholder="输入关键字" maxlength="50" value="">
                <a href="javascript:;" style="display:none;" hidefocus="true"></a>
            </div>
        </li>
        <li class="sidebar_li_6">
            <a href="javascript:;" id="sidebar_close">
                <span class="sb_icon"></span>
                <span class="sb_font fadeInHidden"><i></i>隐藏导航</span>
            </a>
        </li>
    </ul>
   </div>
   <a hidefocus="true" href="#wrap" id="gotop" :style="icon" ></a>

 </div>
   
</template>
<script>
 export default{
    data(){
        return{
            timer:0,
            isShowA:"1",
            isShowB:"0",
            i:0,
            icon:{
               display:"none",
            },
            obj1:{
                backgroundPosition:"-18px -75px"
            },
            s3:{
                display:"none",
            },
            s4:{
                display:"none",
            },
            span1:{
                top:"0px"
            },
            span2:{
                top:"-56px"
            }

        }
       
    },
   mounted:function(){
       window.addEventListener("scroll",this.handleScroll)
   },
   methods:{
        enter(){
          this.obj1.backgroundPosition="-18px -119px"
        },
        leave(){
           this.obj1.backgroundPosition="-18px -75px"
        },
        handleScroll(e){
            //滚动条高度
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
            if(scrollTop>200){
                this.isShowA="0";
                this.isShowB="1";
            }else if(scrollTop<200){
                this.isShowA="1";
                this.isShowB="0";
            };
            var scroll=scrollTop-this.i;
            this.i=scrollTop;
            if(scroll<0){
                this.icon.display="inline-block"
            }else{
                this.icon.display="none"
            }

           
           
        
       },
       btn1(){
           if(this.s3.display=="none"){
               this.s3.display="block";

           }else if(this.s3.display=="block"){
              this.s3.display="none";
           }
       }, 
       btn2(){
           if(this.s4.display=="none"){
               this.s4.display="block";
           }else if(this.s4.display=="block"){
            this.s4.display="none";
           }
       }, 
      
   },
   created () {
      
   }

 }

</script>
<style scoped>
    /* .fade-enter-active, .fade-leave-active { transition: opacity 0.5s; } 
    .fade-enter, .fade-leave-to { opacity: 0; } */
  .navbar-container{
      height: 40px;
      width: 100%;
      background: #11041e;
      position: relative;
      z-index:110;
      margin-bottom: 150px;

  }
  #gotop {
    bottom: 44px;
    cursor: pointer;
    position: fixed;
    right: 0;
    z-index: 99;
     width: 50px;
    height: 50px;
    background: #1e1139 url(http://127.0.0.1:3000/blizzard/sidebar2.png) -250px -400px no-repeat;
}
  #gotop:hover{
      background: #3d7ce4 url(http://127.0.0.1:3000/blizzard/sidebar2.png) -250px -400px no-repeat;
  }
  .siteMap {
    position: fixed;
    right: 0;
    z-index: 200;
    top: 60px;
}
.siteMap_title {
    height: 50px;
    width: 50px;
    position: relative;
    cursor: pointer;
    background: rgba(30,17,57,.9) url(http://127.0.0.1:3000/blizzard/sidebar2.png) no-repeat scroll -250px 0;
}
.menuList {
    visibility: hidden;
    opacity: 0;
    /* -webkit-transform: translateX(-30px); */
    transform: translateX(-30px);
    /* -webkit-transition: all .3s ease 0s; */
    transition: all .3s ease 0s;
    position: absolute;
    right: 50px;
    width: 679px;
    top: 0;
    border: 1px solid #201534;
    background: #100527;
    background: rgba(16,5,39,.9);
}
.siteMap:hover .menuList{
    visibility: visible;
    opacity: 1;
}
.siteMap:hover .siteMap_title {
    background: #3d7ce4 url(http://127.0.0.1:3000/blizzard/sidebar2.png) no-repeat scroll -250px 0;
}
.clearFix {
    display: block;
}
.clearFix:after {
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
    content: ".";
}
.g_sidebar {
    position: fixed;
    right: 0;
    top: 50%;
    margin-top: -200px;
    width: 50px;
    z-index: 200;
}
.sidebar_menu {
    position: absolute;
    z-index: 9;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: #1e1139;
    background: rgba(30,17,57,.9);
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    transition: all .5s ease 0s;
}
.sidebar_menu a {
    width: 100%;
    height: 100%;
    display: block;
    background: url(http://127.0.0.1:3000/blizzard/sidebar2.png) -64px -394px no-repeat;
}
.sidebar_box {
    width: 50px;
    height: 390px;
    list-style: none;
}
.sidebar_box li {
    height: 50px;
    width: 50px;
    background: #1e1139;
    background: rgba(30,17,57,.9);
    vertical-align: top;
    position: relative;
    transition: background .3s ease 0s;
    margin-bottom: 4px;
}
.sidebar_box li:hover .sb_icon{
    background: #3d7ce4 url(http://127.0.0.1:3000/blizzard/sidebar2.png);
}
.sidebar_box li a {
    display: block;
    height: 100%;
    width: 100%;
}
.sidebar_2code {
    padding: 10px;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 95px;
    /* background: #16112f; */
    background: rgba(22,17,47,.9);
}
.sidebar_box li .fadeInHidden {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-transition: opacity .3s ease 0s;
    transition: opacity 1s ease 0s;
}
.sidebar_box li .fadeInHidden:hover{
     visibility:visible;
    opacity: 1;
}
.sidebar_7_ani_wrap {
    height: 50px;
    overflow: hidden;
    width: 50px;
}
.sidebar_7_ani {
    width: 50px;
    height: 150px;
    -webkit-animation: sidebar_icon 8s ease 0s infinite;
    animation: sidebar_icon 8s ease 0s infinite;
}
.sidebar_box li .sidebar_7_ani .sb_icon {
    display: block;
    height: 50px;
    width: 50px;
    background-color: #3d7ce4;
}
.sidebar_box li.sidebar_li_7 .sb_icon {
    background-position: -250px -50px;
}
.sidebar_box li .sb_icon {
    display: block;
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(http://127.0.0.1:3000/blizzard/sidebar2.png);
    background-repeat: no-repeat;
}
.sidebar_box li.sidebar_li_1 .sb_icon {
    background-position: -250px -100px;
}
.sidebar_box li.sidebar_li_2 .sb_icon {
    background-position: -250px -150px;
}
.sidebar_box li.sidebar_li_3 .sb_icon {
    background-position: -250px -200px;
}
.sidebar_box li.sidebar_li_4 .sb_icon {
    background-position: -250px -250px;
}
.sidebar_box li.sidebar_li_5 .sb_icon {
    background-position: -250px -300px;
}
.sidebar_box li.sidebar_li_6 .sb_icon {
    background-position: -250px -350px;
}
.sidebar_7_ani{
    position: relative;
    overflow: hidden;
}
.sidebar_7_ani .text {
    display: block;
    height: 40px;
    width: 50px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    padding: 5px 0;
    background: url(http://127.0.0.1:3000/blizzard/sidebar_star.gif) top center no-repeat;
    position: absolute;
    transition: all 3s linear;
    /* top:-56px; */
}
.sidebar_box li .sidebar_7_ani .sb_icon {
    display: block;
    height: 50px;
    width: 50px;
    background-color: #3d7ce4;
    position: absolute;
    /* top:-56px; */
    transition: all 3s linear;
}
.sidebar_box li.sidebar_li_7 .sb_font {
    color: #fff;
}
.sidebar_box li:hover  .fadeInHidden {
    visibility:visible;
    opacity: 1;
}
.sidebar_2code {
    padding: 10px;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 95px;
    background: #16112f;
    background: rgba(22,17,47,.9);
}
.sidebar_shareBox {
    position: absolute;
    z-index: 99;
    width: 125px;
    right: 50px;
    top: 0;
    background: #221a3e;
}
.bdshare-button-style0-16 {
    zoom: 1;
}
.sidebar_share {
    padding-left: 13px;
}
 ul {
    list-style: none;
}
.sidebar_box .sidebar_share li {
    width: 26px;
    height: 50px;
    float: left;
    margin: 0 11px 0 0;
    background: 0 0;
}
.bdshare-button-style0-16 .bds_tsina {
    background-position: 0 -104px;
}
.sidebar_share li a {
    width: 100%;
    height: 50px;
    line-height: 14px;
    font-size: 12px;
    display: block;
    text-align: center;
    color: #7c7b7d;
    cursor: pointer;
    background-image: url(http://127.0.0.1:3000/blizzard/sidebar2.png);
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: -999px;
    margin: 0;
}
.sidebar_share li a.bds_tsina {
    background-position: -323px 0;
}
.sidebar_share li a:hover {
    color: #fff;
}
.bdshare-button-style0-16 a:hover {
    color: #333;
    opacity: .8;
    filter: alpha(opacity=80);
}
.sidebar_share li a.bds_weixin {
    background-position: -434px 0;
}
.sidebar_share li a.bds_tieba {
    background-position: -471px 0;
}
.bdshare-button-style0-16 .bds_tieba {
    background-position: 0 -728px;
}
.w-sidebar_search input {
    height: 30px;
    width: 160px;
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    background: #1b1430;
    padding: 0 10px;
}
input {
    background: 0 0;
    border: none;
}
input{
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
}
.sidebar_box li.sidebar_li_5 .w-sidebar_search a {
    height: 65px;
    width: 60px;
    display: block;
    background: url(http://127.0.0.1:3000/blizzard/sidebar2.png) -120px -317px no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
.sidebar_box li.sidebar_li_5 .w-sidebar_search {
    position: absolute;
    right: 50px;
    top: 0;
    width: 180px;
    padding: 10px;
    height: 30px;
    background: #221a3e;
}
.sidebar_box li .sb_font {
    font-size: 14px;
    color: #fff;
    width: 115px;
    height: 50px;
    top: 0;
    line-height: 50px;
    text-align: center;
    position: absolute;
    background: #221a3e;
    right: 50px;
}
.sidebar_box li a {
    display: block;
    height: 100%;
    width: 100%;
}
a {
    color: #00f5fd;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
}
.sidebar_2code img {
    height: 92px;
    width: 92px;
    vertical-align: top;
}
.sidebar_2code span {
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    padding-top: 5px;
    display: block;
}
.menuList-box {
    float: left;
    width: 169px;
    border-right: 1px solid #140d35;
}
.menuList-box.last {
    border-right: none;
}
.menuList-box h3 {
    line-height: 49px;
    height: 49px;
    color: #f7f7f7;
    font-size: 14px;
    background: #221a3e;
    border-bottom: 1px solid #221a3e;
    padding-left: 55px;
    font-weight: 700;
}
.menuList-box h3:hover{
    border-bottom: 1px solid #4b8dc8;
}
.menuList-link-ul {
    padding: 10px 0 20px;
}
.menuList-link-ul li {
    font-size: 12px;
    line-height: 28px;
}
.menuList-link-ul li a {
    color: #a392d5;
    display: block;
    padding-left: 55px;
}
.menuList-link-ul li a:hover {
    color: #fff;
}
  .navbar-container ul{
      height: 40px;
  }
  .navbar-container ul>li{
      float:left;
      height: 40px;
      margin-left: 30px;
      overflow: hidden;
     
  }
  .navbar-container ul>li:last-child{
      float:right;
  }
  .navbar-container ul>li:nth-child(7){
    float:right;
      margin-right: 60px;
  }
  .navbar-container ul>li>a{
      text-align: center;
      line-height: 40px;
      display: inline-block;
      height:40px;
      font-size:15px;
      color:rgba(255,255,255,0.7);
      text-decoration: none; 
  }
  .navbar-container ul>li>a:hover{
      color:rgba(255,255,255,1);
  }
  .navbar-container ul>li:nth-child(1)>a{
    height: 40px;
    width: 61.82px;
    background-image: url(http://127.0.0.1:3000/blizzard/icon-sprite.png);
    background-repeat: no-repeat;
    margin-left: 17px;
    transition: all 0.2s linear;
  }

  .navbar-container ul>li:nth-child(2)>a{
      color:white;
     
  }
  .nav-container1 {
    width: 100%;
    padding: 0;
    position:fixed;
    top:0px;
    left:0px;
    height: 44px;
    z-index:100;
    opacity: 0;

    transition: all 0.5s linear;
}
.nav-container2{
    position:absolute;
    top:100px;
    left:65px;
    width:100%;
    height:44px;
    z-index:100;
    opacity: 0;
    transition: all 0.5s linear;
}
.nav-container1.active, .nav-container2.active{
    opacity:1;
}
.nav-container1 .Header-inner {
    background: linear-gradient(to bottom,#46018c,#0200a1);
    box-shadow: 0 0 10px rgba(0,0,204,.4), 0 0 40px rgba(102,0,204,.2);
    height: 44px;
    padding: 2px 0 2px 2px;
    position: relative;
}

.nav-container2 .Header-inner{
    width: 85%;
    margin-left: 90px;
    padding-left: 0;
    background: linear-gradient(to bottom,#46018c,#0200a1);
    box-shadow: 0 0 10px rgba(0,0,204,.4), 0 0 40px rgba(102,0,204,.2);
    height: 44px;
    padding: 2px 0 2px 2px;
    position: relative;
}


 .Header-innermost{
    background: #300064;
    background: linear-gradient(to bottom,#300064,#000064);
    height: 100%;
    }
.nav-container2 .Header-innermost{
    width: 95%;
    }

.nav-container1 .Header-logo {
    width: 60px;
    float: left;
    height: 100%;
    position: relative;
}

.nav-container2 .Header-logo {
    margin-left: -90px;
    width: 180px;
    float: left;
    height: 100%;
    position: relative;
}
.nav-container1 .Header-logoImage--small {
    display: block;
    top: -10px;
    max-width: 100%;
    position: absolute;
    transform: scale(1);
}
.nav-container2 .Header-logoImage--middle{
    width: 180px;
    height: 100px;
    transform: translateY(-29%);
}
 .Header-logoLink {
    display: block;
    max-width: 100%;
    position: relative;
    width: 100%;
    height: 100%;
}
 .Header-navContainer {
    float: left;
    width: calc(100% - 185px);
    height: 100%;
    position: relative;
    vertical-align: top;
}
 .Header-ctaBtn {
    background: linear-gradient(to bottom,#ff7632,#ff5601);
    border:2px solid #fc5705de;
    position: absolute;
    right: 0;
    top: 0px;
    height: 39px;
    width:87px;
    display: block;
    color: #fff;
    padding: 2px;
    z-index: 10;
    text-decoration: none;
    font-size:12px;
    text-align: center;
    line-height: 35px;
}
.Header-nav .Nav--flat {
    background: 0 0;
}
.Header-nav .Nav {
    margin-right: 0;
    margin-left: 0;
}
.Nav--flat .Nav-list {
    padding-left: 4px;
    display: flex;
    height: 40px;
    margin-bottom: 0;
}

.Nav--flat .Nav-item {
    flex: 0 1 auto;
    display: inline-block;
}
.Nav--flat .Nav-item  a:hover{
   border-bottom:2px solid rgba(82,163,204,1);
   color: #fff;
    background-image: linear-gradient(0deg,rgba(82,163,204,.7) 0,rgba(255,255,255,0) 100%);
}
    
.Nav--flat  a.active {
    border-bottom:2px solid rgba(82,163,204,1);
    color: #fff;
    background-image: linear-gradient(0deg,rgba(82,163,204,.7) 0,rgba(255,255,255,0) 100%);
}

.Nav--flat .Nav-link-desk {
    font-size: 16px;
    padding: 8px 19px 11px;
}
.Nav-link-desk {
    position: relative;
    display: block;
    padding: 1em 1.66667em;
    color: #ccf;
    text-decoration: none;
    text-transform: uppercase;
}
.Header-nav .Icon--downArrow {
    position: relative;
    top: -1px;
}
.Icon--downArrow {
    width: 14px;
    height: 14px;
    display: inline-block;
    vertical-align: middle;
}
.Nav-dropdownBoxInner {
    position: absolute;
    background-color: #0b0133;
    box-shadow: inset 0 0 13px 2px rgba(31,0,204,.4);
    padding: 8px 2px;
}
.Nav-dropdownList {
    margin: 0;
    list-style: none;
    padding: 0;
}
.Nav-dropdownLink {
    font-size: 13px;
    color: #ccf;
    display: block;
    font-size: 12px;
    min-width: 172px;
    padding: 7px 8px;
    text-transform: uppercase;
    text-decoration: none;
}
.Nav-link-desk.is-dropdown-active+.Nav-dropdown {
    display: block;
    padding-top: 5px;
    position: absolute;
    top: 100%;
}
.Nav-dropdownBox {
    background-image: linear-gradient(to bottom,#392c9e,#4d257b);
    box-shadow: 0 0 13px 2px rgba(31,0,204,.4);
    padding: 2px;
}

</style>