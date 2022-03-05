<script setup>
import { ref } from "vue";
import _ from "lodash";
import { ArrowRightBold, CirclePlus, Remove } from "@element-plus/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Scrollbar, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import avatar from "./assets/img/avatar.jpg";

window.onresize = () => (width.value = window.innerWidth);
const width = ref(window.innerWidth);
const modules = [Scrollbar, Pagination, Navigation, EffectFade];

// 移动端菜单显隐
const showNav = ref(false);
const toggleNav = () => (showNav.value = !showNav.value);

const preview = url => (window.location.href = url);

// 页面数据加载
const listdata = ref([]);
const isLoad = ref(false);
fetch("/wyh-showcase/data.json")
  .then(res => res.json())
  .then(data => {
    listdata.value = data.data;
    isLoad.value = true;
  });
</script>

<template>
  <el-backtop />
  <el-container>
    <el-header :height="width < 768 ? '60px' : '80px'">
      <div class="content-wrap header">
        <div class="logo">
          <el-avatar :src="avatar"></el-avatar>
          玉米酱的作品集
        </div>
        <template v-if="width > 992">
          <div>
            <span
              v-for="(item, index) in listdata"
              :key="index"
              v-scroll-to="'#model' + (index + 1)"
              class="nav-item"
            >
              {{ item.model }}
            </span>
          </div>
        </template>
        <!-- 移动端适配 -->
        <template v-else>
          <div :class="['nav-mobile', showNav ? 'nav-active' : '']" @click="toggleNav">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <transition name="el-zoom-in-top" :duration="3000">
            <div v-show="showNav" class="nav-mobile-wrap">
              <span
                v-for="(item, index) in listdata"
                :key="index"
                @click="toggleNav"
                v-scroll-to="'#model' + (index + 1)"
                class="nav-mobile-item"
              >
                {{ item.model }}
              </span>
            </div>
          </transition>
        </template>
      </div>
    </el-header>
    <!-- <h1>{{ width }}&nbsp; xs:0-767 sm 768-992 md 992-1200 lg 1200-1536 xl 1536+</h1> -->
    <el-main v-loading="!isLoad">
      <!-- 顶部产品目录 -->
      <div class="content-wrap">
        <!-- 内容列表 -->
        <template v-for="model in listdata">
          <!-- 比赛获奖 -->
          <template v-if="model.index === 2">
            <div class="title-wrap" id="model2">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model2">
              <!-- swiper -->
              <swiper
                :modules="modules"
                slides-per-view="auto"
                :freeMode="true"
                centeredSlides
                navigation
                loop
              >
                <swiper-slide
                  class="model2-item"
                  v-for="item in model.data"
                  @click="preview(item.cover)"
                >
                  <div class="des">{{ item.description }}</div>
                  <img :src="item.cover" />
                </swiper-slide>
              </swiper>
            </div>
          </template>

          <!-- PDF -->
          <template v-if="model.index === 3">
            <div class="title-wrap" id="model3">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model3">
              <div class="model3-item" v-for="item in model.data" @click="preview(item.pdf)">
                <div class="img-wrap">
                  <img :src="item.cover" />
                </div>
                <div class="pdf-content">
                  <p>{{ item.title }} <span class="tag">PDF</span></p>
                  <span class="field">{{ item.field }}</span>
                  <span class="desc">{{ item.description }}</span>
                </div>
              </div>
            </div>
          </template>

          <!-- 校园文创设计 -->
          <template v-if="model.index === 1">
            <div class="title-wrap" id="model1">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model1">
              <swiper :modules="modules" slides-per-view="auto" :freeMode="true" navigation>
                <swiper-slide
                  class="model-item"
                  v-for="item in model.data"
                  @click="preview(item.cover)"
                >
                  <img :src="item.cover" />
                  <div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.description }}</span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </template>
        </template>
      </div>
    </el-main>

    <el-footer>
      Copyright © Shawn 2021 | Powered By
      <el-link :underline="false" href="https://pages.github.com/"> GitHub Pages </el-link>
    </el-footer>
  </el-container>
</template>

<style></style>
