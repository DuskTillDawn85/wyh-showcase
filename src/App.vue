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

// 所需资源计算
const budgetList = ref([{ ai: { name: "" }, cam_num: 0, ram: 0, gpu: 0 }]);
const budgetReverse = ref([]);
const ram = ref(0); // 内存
const cpu = ref(0); // CPU
const gpu = ref(0); // 显存

const onAiSelected = (val, data, budget) => {
  const ai = _.find(data, ["name", val]);
  budget.ai = JSON.parse(JSON.stringify(ai));
  budget.cam_num = ai.event;
  budget.ram = budget.cam_num * 2;
  budget.gpu = Math.ceil(budget.cam_num / ai.event) * ai.gpu;
  computeRes();
};
const onCamChanged = budget => {
  budget.cam_num = budget.cam_num.replace(/[^\d]/g, "");
  if (budget.cam_num < 1) budget.cam_num = 1;
  budget.ram = budget.cam_num * 2;
  budget.gpu = Math.ceil(+budget.cam_num / budget.ai.event) * budget.ai.gpu;
  computeRes();
};
const computeRes = () => {
  cpu.value = _.sum(budgetList.value.map(o => +o.cam_num));
  gpu.value = _.sum(budgetList.value.map(o => +o.gpu));
  ram.value = _.sum(budgetList.value.map(o => +o.ram));
};
const addBudget = () => {
  budgetList.value.push({ ai: { name: "" }, cam_num: 0, ram: 0, gpu: 0 });
  setList();
};
const resetBudget = index => {
  budgetList.value[index] = { ai: { name: "" }, cam_num: 0, ram: 0, gpu: 0 };
  setList();
};
const removeBudget = index => {
  if (budgetList.value.length === 1) return;
  budgetList.value.splice(index, 1);
  setList();
};
const setList = () => {
  computeRes();
  budgetReverse.value = [...budgetList.value].reverse();
};
setList();

// 页面数据加载
const product = ref([]);
const cases = ref([]);
const isLoad = ref(false);
fetch("/data.json")
  .then(res => res.json())
  .then(data => {
    product.value = data.product;
    cases.value = data.cases;
    isLoad.value = true;
  });

// 控制对话框
const currentTarget = ref({});
const dialogVisible = ref(false);
const showMore = scene => {
  currentTarget.value = scene;
  dialogVisible.value = true;
};
const s = ref();
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
        <div class="menu-wrap">
          <swiper slides-per-view="auto" :freeMode="true">
            <swiper-slide
              v-for="(model, index) in product"
              v-scroll-to="'#model' + (index + 1)"
              class="menu-wrap-item"
            >
              <img :src="model.cover" />
              <span>{{ model.model }}</span>
            </swiper-slide>
          </swiper>
        </div>

        <!-- 内容列表 -->
        <template v-for="model in product">
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
                  @click="showMore(item.scene)"
                >
                  <img :src="item.cover" />
                  <div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.description }}</span>
                  </div>
                  <div class="show-more">
                    查看更多
                    <el-icon>
                      <arrow-right-bold />
                    </el-icon>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </template>
          <template v-if="model.index === 2">
            <div class="title-wrap" id="model2">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model2">
              <swiper :modules="modules" slides-per-view="auto" :freeMode="true" navigation>
                <swiper-slide class="model-item" v-for="item in model.data">
                  <img :src="item.img[0]" />
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

          <!-- 智能感知一体机 -->
          <template v-if="model.index === 4">
            <div class="title-wrap" id="model4">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model4">
              <div class="result-wrap">
                <div class="title">预计需要计算资源</div>
                <div class="attr">
                  CPU <span class="value">{{ cpu || "-" }} 核</span>
                </div>
                <div class="attr">
                  内存 <span class="value">{{ ram || "-" }} GB</span>
                </div>
                <div class="attr">
                  显存 <span class="value">{{ gpu || "-" }} GB</span>
                </div>
                <el-button type="primary" size="small" @click="addBudget">增加</el-button>
              </div>
              <swiper :modules="modules" slides-per-view="auto" :space-between="25" freeMode>
                <div class="overlay"></div>
                <swiper-slide
                  class="budget-item"
                  v-for="(budget, index) in budgetReverse"
                  :key="index"
                >
                  <el-form label-position="top" size="small" :model="budget">
                    <el-form-item label="选择能力">
                      <el-select
                        size="medium"
                        v-model="budget.ai.name"
                        @change="onAiSelected($event, model.data, budget)"
                        placeholder="请选择能力"
                        filterable
                      >
                        <el-option
                          v-for="item in model.data"
                          :key="item.name"
                          :value="item.name"
                        ></el-option>
                      </el-select>
                      <div v-show="budget.ai.name" class="desc">
                        需要 <strong>{{ budget.ai.gpu }}G</strong> 显存，可支持
                        <strong>{{ budget.ai.event }}</strong> 路并发
                      </div>
                    </el-form-item>
                    <el-form-item label="摄像头数量">
                      <el-input
                        :disabled="!budget.ai.name"
                        v-model="budget.cam_num"
                        step="1"
                        @input="onCamChanged(budget)"
                      >
                        <template #prefix>
                          <el-icon
                            @click="
                              budget.cam_num--;
                              onCamChanged(budget);
                            "
                          >
                            <remove style="font-size: 24px" />
                          </el-icon>
                        </template>
                        <template #suffix>
                          <el-icon
                            @click="
                              budget.cam_num++;
                              onCamChanged(budget);
                            "
                          >
                            <circle-plus style="font-size: 24px" />
                          </el-icon>
                        </template>
                      </el-input>
                    </el-form-item>
                    <div class="index">
                      No.<span>{{ budgetList.indexOf(budget) + 1 }}</span>
                    </div>
                    <el-form-item class="form-btns">
                      <el-button @click="resetBudget(budgetList.indexOf(budget))">重置</el-button>
                      <el-button
                        type="danger"
                        :disabled="budgetList.length === 1"
                        plain
                        @click="removeBudget(budgetList.indexOf(budget))"
                        >移除</el-button
                      >
                    </el-form-item>
                  </el-form>
                </swiper-slide>
              </swiper>
            </div>
          </template>

          <!-- 智能模组 -->
          <template v-if="model.index === 5">
            <div class="title-wrap" id="model5">
              <span class="title">{{ model.model }}</span>
              <span class="title-desc">{{ model.description }}</span>
            </div>
            <div class="model5">
              <swiper :modules="modules" slides-per-view="auto" freeMode navigation>
                <swiper-slide class="model-item" v-for="item in model.data">
                  <img :src="item.img" />
                  <div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.description }}</span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </template>
        </template>

        <!-- 底部案例 -->
        <div class="title-wrap">
          <span class="title">案例</span>
        </div>
        <div class="model6">
          <swiper :modules="modules" slides-per-view="auto" :freeMode="true" navigation>
            <swiper-slide class="model-item" v-for="item in cases">
              <div>
                <span class="field">{{ item.field }}</span>
                <p>{{ item.title }}</p>
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
      >Astore Hangzhou BigDataCloudAI Technology Co., Ltd. Copyright © BigDataCloudAI 2021
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
