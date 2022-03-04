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

window.onresize = () => (width.value = window.innerWidth);
const width = ref(window.innerWidth);
const modules = [Scrollbar, Pagination, Navigation, EffectFade];

// 移动端菜单显隐
const showNav = ref(false);
const toggleNav = () => (showNav.value = !showNav.value);

// 页面数据加载
const product = ref([]);
const cases = ref([]);
const isLoad = ref(false);
fetch("/wyh-showcase/data.json")
  .then(res => res.json())
  .then(data => {
    product.value = data.product;
    cases.value = data.cases;
    console.log("cases.value :>> ", cases.value);
    isLoad.value = true;
  });

// 控制对话框
const currentTarget = ref({});
const dialogVisible = ref(false);
const showMore = scene => {
  currentTarget.value = scene;
  dialogVisible.value = true;
};
const onClose = () => s.value.slideTo(0);
const onSwiper = swiper => (s.value = swiper);
</script>

<template>
  <el-backtop />
  <el-container>
    <el-header :height="width < 768 ? '60px' : '80px'">
      <div class="content-wrap header">
        <div class="logo">Astore</div>
        <template v-if="width > 992">
          <div>
            <span
              v-for="(item, index) in product"
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
                v-for="(item, index) in product"
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
        <template v-for="model in product">
          <template v-if="model.index === 1">
            <div class="title-wrap" id="model1">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model1">
              <swiper :modules="modules" slides-per-view="auto" :freeMode="true" navigation>
                <swiper-slide class="model-item" v-for="item in model.data" @click="showMore(item)">
                  <img :src="item.cover" />
                  <div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.description }}</span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </template>

          <!-- 视觉感知云平台 -->
          <template v-if="model.index === 3">
            <div class="title-wrap" id="model3">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model3">
              <div class="model3-item" v-for="item in model.data">
                <div class="model3-item-title">
                  <img :src="item.img" />
                  <p>{{ item.title }}</p>
                </div>
                <span>{{ item.description }}</span>
              </div>
            </div>
          </template>
        </template>

        <!-- 底部案例 -->
        <div class="title-wrap">
          <span class="title">案例</span>
        </div>
        <div class="pdf-wrap">
          <swiper :modules="modules" slides-per-view="auto" :freeMode="true" navigation>
            <swiper-slide class="model-item" v-for="item in cases">
              <div class="pdf-content">
                <p>{{ item.title }}</p>
                <span class="field">{{ item.field }}</span>
                <span>{{ item.description }}</span>
              </div>
              <div class="img-wrap">
                <img :src="item.cover" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </el-main>

    <el-footer
      >Copyright © Shawn 2021
      <br />
      <el-link :underline="false" href="https://beian.miit.gov.cn/">
        网站备案号 浙ICP备19011862号-1
      </el-link>
    </el-footer>
  </el-container>

  <!-- 对话框 -->
  <el-dialog
    v-model="dialogVisible"
    custom-class="dialog"
    top="15vh"
    @close="onClose"
    append-to-body
    :show-close="false"
    lock-scroll
  >
    <img @click="dialogVisible = false" src="./assets/img/icon_close.png" class="close" />
    <swiper
      :modules="modules"
      effect="fade"
      slides-per-view="auto"
      @swiper="onSwiper"
      :freeMode="true"
      :pagination="{
        dynamicBullets: true,
      }"
      :navigation="width > 768"
    >
      <swiper-slide class="model-item" v-for="item in currentTarget">
        <div class="content">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="desc">{{ item.description }}</div>
          <el-image v-if="item.image" :src="item.image" fit="contain" style="width: 100%">
            <template #placeholder>
              <el-skeleton style="width: 100%; height: 100%" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </template>
          </el-image>
          <video v-else-if="item.video" :src="item.video" autoplay loop></video>
        </div>
      </swiper-slide>
    </swiper>
  </el-dialog>
</template>

<style></style>
