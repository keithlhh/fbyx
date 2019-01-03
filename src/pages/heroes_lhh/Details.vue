<template>
  <div class="hero_details">
    <!-- 轮播 -->
    <div class="main">
      <!-- 英雄展示 -->
      <div class="show_heroes">
        <div class="show_heroes_cont">
          <!-- 相对定位 -->
          <!-- 英雄左侧详情 -->
          <div class="bre_div">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="my_bre_box">
              <el-breadcrumb-item :to="{ path: '/' }">
                <span class="my_bre">风暴英雄</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span class="my_bre">英雄</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span class="last_span">英雄名称</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="show_heroes_dtl">
            <div class="show_heroes_title">
              <div class="title_icon"></div>
              <div>
                <h1>奥菲娅</h1>
                <h3>乌鸦庭继承人</h3>
              </div>
            </div>
            <p class="hero_intr">
              奥菲娅无法接受自己的父亲开始接触黑暗力量，毅然离家出走，以远离乌鸦王的影响。但在目睹了乌鸦王因个人野心摧毁了君冠城后，她意识到自己已不能再继续逃避，她必须站出来反抗。如今的她以保护无辜者为己任——以时空枢纽的英雄之
            </p>
            <div class="heroes_skins">
              <h3 class="skin_title">英雄皮肤</h3>
              <div class="skin_box">
                <ul class="skin_ul">
                  <li class="skin_item" v-for="(item,i) of 6" :key="i">
                    <img src="../../../public/heroes_lhh/item_skin.jpg" alt>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="show_heroes_box">
            <!-- 英雄背景视频 -->
            <video muted autoplay loop>
              <source
                src="https://heroes.nosdn.127.net/1/images/heroes/orphea/Orphea_Base_loop.webm"
              >
            </video>
          </div>
          <!-- 左右箭头 -->
          <div class="arrows">
            <a href="#" class="arrow_left"></a>
            <a href="#" class="arrow_right"></a>
          </div>
        </div>
      </div>
    </div>
    <details-skill></details-skill>
  </div>
</template>
<script>
//引入details-skill组件
import detailsSkill from '@/pages/heroes_lhh/components/details_skill.vue'
export default {
   components:{
     detailsSkill
   },
  data() {
    return {};
  }
};
</script>
<style scoped>
/* 面包屑导航 */
.my_bre {
  color: #f44cf3 !important;
  border-bottom: 1px dotted #f44cf3;
}
.hero_details {
  width: 100%;
  background: #0d0011;
}
.bre_div {
  position: absolute;
  left: 150px;
  top: 50px;
  z-index: 20;
}
.show_heroes_dtl {
  width: 460px;
  height: 370px;
  position: absolute;
  left: 150px;
  top: 100px;
  z-index: 10;
}
.title_icon {
  width: 115px;
  height: 115px;
  background: url("../../../public/heroes_lhh/title_icons.png") no-repeat;
  background-position: -345px 0;
  margin-right: 10px;
}
.show_heroes_title {
  display: flex;
  color: #fff;
}
.show_heroes_title h1 {
  margin: 0 auto;
  font-size: 56px;
  font-weight: normal;
}
.show_heroes_title h3 {
  color: #6cf;
  margin-top: 0;
  font-size: 20px;
  font-weight: lighter;
}
.hero_intr {
  text-indent: 2em;
  color: #8eb1bc !important;
  font-size: 14px;
  line-height: 23px;
}
.show_heroes_cont {
  width: 100%;
  height: 700px;
  background: #ccc;
  position: relative;
}
.show_heroes_box video {
  width: 100%;
  position: absolute;
  height: 700px;
  top: 0;
  left: 0;
  z-index: 5;
  background: #0d0011;
}
/* 英雄皮肤 */
.heroes_skins .skin_title {
  font-size: 16px;
  line-height: 50px;
  color: #6cf;
  font-weight: lighter;
  margin: 0;
}
.heroes_skins .skin_item {
  width: 96px;
  height: 96px;
  list-style: none;
  float: left;
  padding: 22px;
  box-sizing: border-box;
}
.heroes_skins .skin_item img {
  width: 100%;
  height: 100%;
}
.skin_ul {
  width: 600px;
  height: 100px;
  margin: 0;
  padding: 0;
}
.skin_box {
  width: 384px;
  height: 100px;
  overflow: hidden;
  background: url("../../../public/heroes_lhh/skin_hover.png");
}
/* 左右箭头 */
.arrows a {
  position: absolute;
  z-index: 30;
  width: 84px;
  height: 170px;
}
.arrows .arrow_left {
  left: 0;
  top: 300px;
  background: url("../../../public/heroes_lhh/arrows.png") no-repeat;
}
.arrows .arrow_left:hover {
  background-position: 0px -180px;
}
.arrows .arrow_right {
  right: 0;
  top: 300px;
  background: url("../../../public/heroes_lhh/arrows.png") no-repeat;
  background-position: -95px 0;
}
.arrows .arrow_right:hover {
  background-position: 0px -180px;
  background-position: -95px -180px;
}
/* hello world */
</style>