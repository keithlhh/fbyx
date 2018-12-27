<template>
  <div class="app_skill">
    <!-- first part -->
    <img src="../../../../public/heroes_lhh/border_line.png" alt>
    <div class="first_part">
      <div class="div_item">
        <div v-for="(item,i) of 4" :key="i">
          <div class="div_item_icon"></div>
          <div class="div_item_dtl">
            <p>伤害能力</p>
            <div>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="div_item item2">
        <div class="icon_role"></div>
        <h3>战斗型</h3>
      </div>
      <div class="div_item">
        <div class="item3">
          <h3>终极技能</h3>
          <div class="div_img">
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="div_item">
        <div class="item3 item4">
          <h3>终极技能</h3>
          <div class="div_img">
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
          </div>
        </div>
        <div class="item3 item4">
          <h3>终极技能</h3>
          <div class="div_img">
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
            <div class="div_img_img">
              <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="sec_h2">初始技能</h2>
    <img src="../../../../public/heroes_lhh/border_line.png" alt>
    <div class="sec_part">
      <div class="hero_video_box" v-for="(item,i) of 3" :key="i">
        <div class="skill_video_div">
          <img class="skill_video_img" src="../../../../public/heroes_lhh/shadow-waltz.jpg" alt>
        </div>
        <div class="skill_border">
          <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
        </div>
        <div class="skill_border_dtl">
          <p>暗影华尔兹</p>
          <span>在0.5秒后，对一条直线上的敌人造成150点伤害。 如果命中英雄，则暗影华尔兹的冷却时间缩短至2秒，返还0点法力值，并允许奥菲娅朝移动方向突进一小段距离。</span>
        </div>
      </div>
    </div>
    <!-- 终极技能部分 -->
    <h2 class="sec_h2">终极技能</h2>
    <img src="../../../../public/heroes_lhh/border_line.png" alt>
    <div class="sec_part last_skill">
      <div class="hero_video_box" v-for="(item,i) of 3" :key="i">
        <div class="skill_video_div">
          <img class="skill_video_img" src="../../../../public/heroes_lhh/shadow-waltz.jpg" alt>
        </div>
        <div class="skill_border">
          <img src="../../../../public/heroes_lhh/Fcarrion-swarm.png" alt>
        </div>
        <div class="skill_border_dtl skill_three">
          <p>暗影华尔兹</p>
          <span>在0.5秒后，对一条直线上的敌人造成150点伤害。 如果命中英雄，则暗影华尔兹的冷却时间缩短至2秒，返还0点法力值，并允许奥菲娅朝移动方向突进一小段距离。</span>
        </div>
      </div>
    </div>
    <!-- 探索更多英雄部分 -->
    <div class="search_heroes">
      <h2 class="sec_h2">探索更多英雄技能</h2>
      <img src="../../../../public/heroes_lhh/border_line.png" alt>
      <div class="sec_part">
        <div v-for="(item,i) of 4" :key="i">
          <div class="hero_video_box">
            <img src="../../../../public/heroes_lhh/bust.jpg" alt="">
          </div>
          <h3 class="ser_her_title">凯斯</h3>
          <div class="ser_her_dtl_icon"></div><span class="ser_her_dtl">臭名昭著的罪犯</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.app_skill {
  background: #0d0011;
  padding: 0 140px 0 140px;
  width: 100%;
  height: 2300px;
  box-sizing: border-box;
}
.app_skill > img {
  text-align: center;
  margin: 0 77px;
}
.app_skill .search_heroes > img {
  margin: 0 77px;
}
/* first part */
.first_part {
  display: flex;
  justify-content: space-between;
}
.first_part .div_item {
  width: 280px;
  height: 330px;
  background: #160d28;
  box-sizing: border-box;
  padding: 25px;
}
.div_item_icon {
  width: 70px;
  height: 70px;
  background: url(http://heroes.nos.netease.com/1/images/heroes_dtl/stat-icons.png);
  float: left;
  margin-right: 3px;
}
.div_item_dtl {
  float: left;
  width: 150px;
  height: 70px;
}
.div_item_dtl p {
  margin-bottom: 0;
  font-size: 15px;
  color: #fff;
  margin-top: 10px;
}
.div_item {
  padding-bottom: 4px;
}
.div_item .icon_role {
  width: 200px;
  height: 200px;
  background: url("../../../../public/heroes_lhh/role-icons.png");
  margin: auto;
}
.div_item h3 {
  text-align: left;
  margin-top: 0;
  margin-bottom: 10px;
  color: #fff;
  font-weight: lighter;
}
.div_item .div_img_img {
  width: 116px;
  height: 135px;
  background: url("../../../../public/heroes_lhh/Fability-icon-frame.png");
  background-size: 116px 135px;
}
.div_item .div_img_img img {
  width: 100%;
  height: 100%;
}
.div_item .div_img {
  width: 240px;
  height: 135px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
/* item4 */
.item4 .div_img_img {
  width: 77.4px;
  height: 99.63px;
  background-size: 77.4px 99.6px;
}
.item4 .div_img_img img {
  width: 100%;
  height: 100%;
}
/* item h3的样式 */
.item2 h3 {
  text-align: center;
  font-weight: lighter;
}
.item4 .div_img {
  height: 99.63px;
}
/* second part */
.sec_h2 {
  color: #fff;
  margin-top: 70px;
  font-weight: lighter;
}
.sec_part {
  display: flex;
  justify-content: space-between;
}
/* 相对定位 */
.sec_part .hero_video_box {
  width: 368px;
  height: 425px;
  box-sizing: border-box;
  background: #130b21;
  position: relative;
}
/* 初始技能 */
.skill_video_div {
  width: 100%;
  height: 204px;
  box-sizing: border-box;
  border: 3px solid #190f40;
  background-color: #14324e;
  padding: 3px;
  background-image: linear-gradient(#14324e, #43286b),
    linear-gradient(#14324e, #43286b);
}
.skill_video_img {
  width: 100%;
  height: 100%;
}
.skill_border {
  width: 100px;
  height: 116px;
  box-sizing: border-box;
  position: absolute;
  top: 146px;
  background-image: url("../../../../public/heroes_lhh/Fability-icon-frame.png");
  background-size: 100%;
  left: 130px;
}
.skill_border img {
  width: 100%;
  height: 100%;
}
.skill_border_dtl {
  padding: 40px 17px;
}
.skill_border_dtl p {
  font-size: 24px;
  line-height: 50px;
  margin: 0;
  color: #58baff;
  margin-bottom: 20px;
}
.skill_border_dtl span {
  font-size: 14px;
  color: #8eb1bc;
}
/* 终极技能 */
.last_skill > div:last-child {
  visibility: hidden;
}
/* 探索更多英雄 */
.search_heroes .hero_video_box {
  width: 206px;
  height: 300px;
  background: linear-gradient(#14324e, #43286b) repeat rgba(0, 0, 0, 0);
  padding: 5px;
  box-sizing: border-box;
}
.search_heroes .hero_video_box img{
  width: 100%; height: 100%;
}
.search_heroes .sec_part{
  margin-top: 42px;
}
.search_heroes .ser_her_title{
  color: #fff; margin-left: 10px; margin-bottom: 10px;
}
.search_heroes .ser_her_dtl{
  color: #8eb1bc;
  font-size: 14px;
  height: 28px; line-height: 28px; display: inline-block; margin-left: 3px;
}
.search_heroes .ser_her_dtl_icon{
  width: 30px; height: 30px; background:url('../../../../public/heroes_lhh/icon.png') no-repeat; display: inline-block; vertical-align: middle;
}
</style>