<template>
  <div class="wh-widget-send-button-desktop">
    <div
      class="wh-widget-send-button-wrapper wh-widget-left"
      style="cursor: pointer"
    >
      <div :class="{ show: !zalo, '': zalo }">
        <!-- <div v-html="zaloLink" ></div> -->
      </div>
      <!-- <script src="https://sp.zalo.me/plugins/sdk.js"></script> -->
      <!-- <div
        class="wh-widget-hello-popup-wrapper wh-popup-right wh-hidepopup-slide popup-slide-in"
      >
        <div class="wh-widget-hello-popup">
          <div class="wh-widget-hello-popup-close">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      </div> -->
      <div
        :class="{
          'wh-animation-in': isActive,
          'wh-animation-out wh-hide': !isActive,
        }"
        id="wh-call-to-action"
        style="top: 29px"
      >
        <a href="javascript:void(0)" title>
          <div class="wh-call-to-action-content">Liên hệ hỗ trợ 24/7</div>
        </a>
      </div>
      <div
        class="wh-widget-send-button-wrapper-list"
        :class="{
          'wh-widget-show-get-button wh-widget-activator-as-close wh-widget-activate':
            !isActive,
        }"
      >
        <!--Button Facebook-->
        <a
          class="wh-widget-button"
          href="https://www.facebook.com/duocthao.thiennhien.taybac/"
          rel="noopener nofollow"
          target="_blank"
          title
          :class="{ 'button-slide-out': isActive, 'button-slide': !isActive }"
        >
          <div class="wh-widget-button-icon wh-messenger-bg-facebook">
            <div>
              <svg
                class="wh-messenger-svg-facebook wh-svg-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d=" M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="mes-us">Facebook Messenger</div>
          <div class="clear"></div>
        </a>
        <!--/Button Facebook-->
        <!--Button Zalo-->
        <a
          class="wh-widget-button"
          rel="noopener nofollow"
          title
          :class="{ 'button-slide-out': isActive, 'button-slide': !isActive }"
        >
          <div
            class="wh-widget-button-icon wh-messenger-bg-zalo"
            @click="zalo = !zalo"
          >
            <div>
              <svg
                class="wh-messenger-svg-zalo wh-svg-icon"
                viewBox="0 0 97.4 87.2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M78.4,42c-1.4,0-2.4,0.6-3.2,1.7c-0.7,1-1,2.2-1,3.7c0,1.5,0.3,2.7,1,3.7c0.8,1.2,1.8,1.7,3.2,1.7 c1.4,0,2.5-0.6,3.2-1.7c0.7-1,1-2.2,1-3.7c0-1.4-0.3-2.6-1-3.6C80.8,42.6,79.7,42,78.4,42z"
                  fill-rule="evenodd"
                />
                <path
                  d="M48.8,0C21.9,0,0,19.5,0,43.6c0,11.9,5.4,22.7,14,30.6c2.2,2-5.4,10.5-9,11.3c10.4,2.9,20.7-3.4,23.2-2.4 c6.2,2.6,13.2,4,20.5,4c26.9,0,48.7-19.5,48.7-43.6C97.5,19.5,75.7,0,48.8,0z M27.8,58.2H14.6c-3.1,0-4.6-1.1-4.6-3.3 c0-1,0.6-2.4,1.8-4l11.8-15.6h-8.5c-3.1,0-4.7-1-4.7-3c0-2,1.6-3,4.7-3h11.2c3.8,0,5.7,1.1,5.7,3.2c0,1-0.6,2.3-1.9,4L18.5,52.2 h9.3c3.1,0,4.7,1,4.7,3C32.5,57.2,30.9,58.2,27.8,58.2z M54.9,53.8c0,3.1-1.1,4.7-3.2,4.7c-1.4,0-2.4-0.7-3.1-2.2 c-1.3,1.6-3.1,2.4-5.4,2.4c-2.9,0-5.3-1.2-7.2-3.5c-1.7-2.2-2.5-4.8-2.5-7.8c0-3,0.9-5.6,2.7-7.8c1.9-2.3,4.3-3.5,7.3-3.5 c2.2,0,3.9,0.8,5.1,2.3c0.7-1.4,1.8-2,3.1-2c2.1,0,3.2,1.5,3.2,4.6V53.8z M64.7,53.8c0,3.1-1.1,4.7-3.2,4.7c-2.1,0-3.2-1.6-3.2-4.7 V31.9c0-3.1,1.1-4.7,3.2-4.7c2.1,0,3.2,1.6,3.2,4.7V53.8z M78.4,58.9c-3.2,0-5.9-1.1-7.9-3.3c-2-2.2-3-4.9-3-8.1s1-6,3-8.1 c2-2.2,4.7-3.3,7.9-3.3c3.3,0,5.9,1.1,7.9,3.3c1.9,2.1,2.9,4.9,2.9,8.1s-1,6-2.9,8.1C84.2,57.8,81.6,58.9,78.4,58.9z"
                  fill-rule="evenodd"
                />
                <path
                  d="M44.4,42.2c-1.3,0-2.4,0.5-3.1,1.6c-0.7,1-1,2.1-1,3.5c0,1.4,0.3,2.6,1,3.6c0.8,1.1,1.8,1.7,3.2,1.7 c1.3,0,2.4-0.6,3.1-1.7c0.6-1,1-2.2,1-3.6c0-1.4-0.3-2.5-1-3.5C46.7,42.8,45.7,42.2,44.4,42.2z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="mes-us">Zalo Chat</div>
          <div class="clear"></div>
        </a>
        <!--/Button Zalo-->
        <!--Button Call-->
        <a
          class="wh-widget-button"
          :href="'tel:0981291282'"
          rel="nofollow"
          title
          :class="{ 'button-slide-out': isActive, 'button-slide': !isActive }"
        >
          <div class="wh-widget-button-icon wh-messenger-bg-zalo">
            <div>
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style="
                  height: 100%;
                  width: 100%;
                  background: rgba(221, 221, 221, 0);
                "
                width="79px"
                height="79px"
              >
                <g
                  class="ldl-scale"
                  style="
                    transform-origin: 50% 50%;
                    transform: rotate(0deg) scale(0.8, 0.8);
                  "
                >
                  <g class="ldl-ani">
                    <g class="ldl-layer">
                      <g
                        class="ldl-ani"
                        style="
                          transform: scale(0.91);
                          transform-origin: 50px 50px;
                          animation: 1.11111s linear -0.666667s infinite normal forwards
                            running breath-2afad1ac-14df-4752-aab9-beb38c2bfd53;
                        "
                      >
                        <path
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke="#000"
                          fill="none"
                          d="M78.475 48.748v-8.545c0-11.871-9.623-21.494-21.494-21.494H43.019c-11.871 0-21.494 9.623-21.494 21.494v8.545"
                          style="stroke: rgb(255, 255, 255)"
                        />
                      </g>
                    </g>
                    <g class="ldl-layer">
                      <g
                        class="ldl-ani"
                        style="
                          transform: scale(0.91);
                          transform-origin: 50px 50px;
                          animation: 1.11111s linear -0.777778s infinite normal forwards
                            running breath-2afad1ac-14df-4752-aab9-beb38c2bfd53;
                        "
                      >
                        <path
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke="#000"
                          fill="none"
                          d="M43.019 81.291c-11.871 0-21.494-9.623-21.494-21.494v-8.545"
                          style="stroke: rgb(255, 255, 255)"
                        />
                      </g>
                    </g>
                    <g class="ldl-layer">
                      <g
                        class="ldl-ani"
                        style="
                          transform: scale(0.91);
                          transform-origin: 50px 50px;
                          animation: 1.11111s linear -0.888889s infinite normal forwards
                            running breath-2afad1ac-14df-4752-aab9-beb38c2bfd53;
                        "
                      >
                        <path
                          d="M50 81.291h-6.981"
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="9"
                          stroke="#000"
                          fill="none"
                          style="stroke: rgb(255, 255, 255)"
                        />
                      </g>
                    </g>
                    <g class="ldl-layer">
                      <g
                        class="ldl-ani"
                        style="
                          transform: scale(0.91);
                          transform-origin: 50px 50px;
                          animation: 1.11111s linear -1s infinite normal forwards
                            running breath-2afad1ac-14df-4752-aab9-beb38c2bfd53;
                        "
                      >
                        <path
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke="#000"
                          fill="none"
                          d="M21.525 65.121h0C15.16 65.121 10 59.961 10 53.595v-5.132c0-6.365 5.16-11.526 11.526-11.526h0v28.184z"
                          style="stroke: rgb(255, 255, 255)"
                        />
                      </g>
                    </g>
                    <g class="ldl-layer">
                      <g
                        class="ldl-ani"
                        style="
                          transform: scale(0.91);
                          transform-origin: 50px 50px;
                          animation: 1.11111s linear -1.11111s infinite normal forwards
                            running breath-2afad1ac-14df-4752-aab9-beb38c2bfd53;
                        "
                      >
                        <path
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke="#000"
                          fill="none"
                          d="M78.474 65.121h0C84.84 65.121 90 59.961 90 53.595v-5.132c0-6.365-5.16-11.526-11.526-11.526h0v28.184z"
                          style="stroke: rgb(255, 255, 255)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="mes-us">Gọi số 098 129 1282</div>
          <div class="clear"></div>
        </a>
        <!--/Button Call-->
        <!--Button Viber-->
        <!-- <a class='wh-widget-button ' href='#' rel='nofollow' title='' :class="{'button-slide-out': isActive,'button-slide':!isActive}">
                <div class='wh-widget-button-icon wh-messenger-bg-viber'>
                    <div>
                        <svg class='wh-messenger-icon wh-messenger-bg-viber' viewBox='0 0 32 32'
                            xmlns='https://www.w3.org/2000/svg' xmlns:xlink='https://www.w3.org/1999/xlink'>
                            <path
                                d=' M21.176 27c-.208-.062-.618-.13-.987-.303-6.476-3.02-11.18-7.972-13.853-15.082-.897-2.383.04-4.396 2.298-5.22.405-.147.802-.157 1.2.002.964.383 3.404 4.022 3.458 5.11.042.835-.48 1.287-1 1.67-.983.722-.988 1.638-.568 2.66.948 2.308 2.567 3.895 4.663 4.925.76.374 1.488.337 2.007-.515.925-1.518 2.06-1.445 3.3-.502.62.473 1.253.936 1.844 1.45.8.702 1.816 1.285 1.336 2.754-.5 1.527-2.226 3.066-3.7 3.05zm-4.76-20.986c4.546.166 8.46 4.677 8.406 9.543-.005.478.153 1.185-.504 1.172-.628-.015-.464-.733-.52-1.21-.603-5.167-2.786-7.606-7.52-8.394-.392-.066-.99.026-.96-.535.044-.833.754-.523 1.097-.576zm6.072 8.672c-.045.356.147.968-.385 1.056-.72.118-.58-.595-.65-1.053-.48-3.144-1.5-4.297-4.423-5.005-.43-.105-1.1-.032-.99-.75.108-.685.71-.452 1.164-.393 2.92.38 5.307 3.126 5.284 6.144zm-2.222-.573c.013.398-.026.818-.46.874-.314.04-.52-.245-.553-.597-.12-1.296-.75-2.062-1.95-2.27-.36-.063-.712-.19-.544-.715.11-.352.408-.387.712-.396 1.297-.036 2.815 1.647 2.794 3.103z'
                                fill-rule='evenodd'></path>
                        </svg>
                    </div>
                </div>
                <div class='mes-us'>Call Viber</div>
                <div class='clear'></div>
        </a>-->
        <!--/Button Viber-->
        <!--Button SMS-->
        <!-- <a class='wh-widget-button' href='sms:#' rel='nofollow' title='' :class="{'button-slide-out': isActive,'button-slide':!isActive}">
                <div class='wh-widget-button-icon wh-messenger-bg-sms'>
                    <div>
                        <svg class='wh-messenger-icon wh-messenger-bg-sms' viewBox='0 0 32 32'
                            xmlns='https://www.w3.org/2000/svg' xmlns:xlink='https://www.w3.org/1999/xlink'>
                            <path
                                d='M21 23h4.01c1.1 0 1.99-.893 1.99-1.994V8.994C27 7.894 26.11 7 25.01 7H6.99C5.89 7 5 7.893 5 8.994v12.012C5 22.106 5.89 23 6.99 23h9.566l3.114 3.504c.73.82 1.33.602 1.33-.5V23zM10.515 12.165c.36.11.682.26.962.446l-.413.88a3.882 3.882 0 0 0-.915-.416 2.9 2.9 0 0 0-.82-.136c-.3 0-.536.054-.707.16a.512.512 0 0 0-.256.46c0 .173.055.32.167.437.11.12.252.214.42.285.17.072.408.152.714.24.4.12.725.236.977.35.252.117.467.29.644.518.177.228.266.526.266.892 0 .344-.095.647-.285.907-.19.26-.453.46-.79.6-.338.14-.724.212-1.16.212-.45 0-.888-.086-1.31-.255a3.673 3.673 0 0 1-1.11-.684l.434-.863c.3.276.628.49.985.64.356.15.695.224 1.017.224.35 0 .622-.063.816-.19a.598.598 0 0 0 .292-.528.618.618 0 0 0-.174-.45 1.212 1.212 0 0 0-.43-.28 9.65 9.65 0 0 0-.713-.237 7.414 7.414 0 0 1-.977-.347 1.75 1.75 0 0 1-.637-.498c-.177-.22-.266-.51-.266-.877 0-.334.09-.625.27-.874.18-.25.434-.443.76-.578.324-.135.7-.202 1.127-.202.38 0 .75.055 1.11.165zm7.732 5.8l-.01-4.424-1.87 3.806h-.653l-1.867-3.805v4.426h-.942V12.04h1.186l1.955 3.938 1.945-3.937h1.178v5.926h-.92zm5.728-5.8c.36.11.68.26.962.446l-.413.88a3.882 3.882 0 0 0-.915-.416 2.9 2.9 0 0 0-.82-.136c-.3 0-.537.054-.707.16a.512.512 0 0 0-.257.46c0 .173.056.32.168.437.11.12.252.214.42.285.17.072.408.152.714.24.4.12.725.236.977.35.252.117.467.29.644.518.177.228.266.526.266.892 0 .344-.095.647-.285.907-.19.26-.453.46-.79.6-.338.14-.724.212-1.16.212-.45 0-.888-.086-1.31-.255a3.673 3.673 0 0 1-1.11-.684l.434-.863c.3.276.628.49.985.64.356.15.695.224 1.017.224.35 0 .622-.063.816-.19a.598.598 0 0 0 .29-.528.618.618 0 0 0-.172-.45 1.212 1.212 0 0 0-.43-.28 9.65 9.65 0 0 0-.713-.237 7.414 7.414 0 0 1-.977-.347 1.75 1.75 0 0 1-.637-.498c-.177-.22-.266-.51-.266-.877 0-.334.09-.625.27-.874.18-.25.434-.443.76-.578.324-.135.7-.202 1.126-.202.38 0 .75.055 1.112.165z'
                                fill-rule='evenodd'></path>
                        </svg>
                    </div>
                </div>
                <div class='mes-us'>Send SMS</div>
                <div class='clear'></div>
        </a>-->
        <!--/Button SMS-->

        <!--Button Telegram-->
        <!-- <a class='wh-widget-button ' href='#' rel='nofollow' title='' :class="{'button-slide-out': isActive,'button-slide':!isActive}">
                <div class='wh-widget-button-icon wh-messenger-bg-telegram'>
                    <div>
                        <svg class="wh-messenger-icon wh-messenger-bg-telegram" xmlns="https://www.w3.org/2000/svg"
                            xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                            <path
                                d=" M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z"
                                opacity=".6" fill-rule="evenodd"></path>
                            <path d=" M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z"
                                opacity=".3" fill-rule="evenodd"></path>
                            <path
                                d=" M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div class='mes-us'>Send SMS</div>
                <div class='clear'></div>
        </a>-->
        <!--/Button Telegram-->

        <a
          class="wh-widget-button wh-widget-button-activator"
          href="javascript:void(0);"
        >
          <div
            class="wh-widget-button-icon wh-messenger-bg-activator"
            style="background-color: #f46d1d"
            @click="isActive = !isActive"
          >
            <div>
              <svg
                class="wh-messenger-svg-close wh-svg-close"
                viewBox="-9 -10 41 44"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d=" M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill-rule="evenodd"
                />
              </svg>
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div class="clear"></div>
        </a>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: true,
      zalo: false,
    };
  },
  computed: {
    ...mapGetters(["zaloLink", "facebook"]),
  },
  methods: {
    openZalo() {
      this.zalo = true;
    },
  },
};
</script>

<style scoped>
.show {
  display: none;
}
[class^="wh-icon-"],
[class*=" wh-icon-"] {
  font-family: "whatshelp" !important;
  /* speak: none; */
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wh-icon-facebook-messenger:before {
  content: "\e900";
}

.wh-icon-whatshelp:before {
  content: "\e901";
}

.wh-icon-whatsapp:before {
  content: "\e902";
}

.wh-icon-telegram:before {
  content: "\e903";
}

.wh-clear {
  clear: both;
}

.wh-hide {
  display: none !important;
}

*[id^="template-"] {
  display: none !important;
}

.popup-slide {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-animation-duration: 0.64s;
  animation-duration: 0.64s;
  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-animation-delay: 0.16s;
  animation-delay: 0.16s;
}

.popup-slide-in {
  -webkit-animation-name: wh-popup-slide-in;
  animation-name: wh-popup-slide-in;
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
}

.popup-slide-out {
  -webkit-animation-name: wh-popup-slide-out;
  animation-name: wh-popup-slide-out;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@-webkit-keyframes wh-popup-slide-in {
  0% {
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
    display: block;
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    display: block;
  }
}

@keyframes wh-popup-slide-in {
  0% {
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes wh-popup-slide-out {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
  }
}

@keyframes wh-popup-slide-out {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
  }
}

.wh-widget-hello-popup-wrapper {
  margin: 21px 20px 0 20px;
  padding: 0;
  border: 0;
  width: 343px;
  text-align: center;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  display: block;
  position: relative;
  line-height: 23px;
  font-size: 14px;
}

.wh-widget-hello-popup-wrapper.wh-popup-left {
  margin-left: 10px;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup {
  box-shadow: 7px 7px 15px 8px rgba(0, 0, 0, 0.17);
  border: 1px solid #e2e2e2;
  position: relative;
  min-height: 149px;
  border-radius: 10px;
  background-color: white;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-widget-hello-popup-close {
  float: right;
  padding: 7px 9px 3px 5px;
  line-height: 10px;
  cursor: pointer;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-widget-hello-popup-close
  svg {
  fill: #a3a3a3;
  width: 15px;
  height: 15px;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup .wh-messengers {
  margin-bottom: 0;
  line-height: 10px;
  text-align: left;
  padding-bottom: 26px;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup .wh-messengers ul {
  display: inline-block;
  margin: 0 0 0 85px;
  padding: 0;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup .wh-messengers ul li {
  margin-bottom: 0;
  margin-right: 15px;
  line-height: 10px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  width: 28px;
  height: 28px;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-facebook {
  background-color: #0084ff;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-whatsapp {
  background-color: #4dc247;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-snapchat {
  background-color: #ffea00;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-viber {
  background-color: #7b519d;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-line {
  background-color: #00c300;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-telegram {
  background-color: #08c;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-vkontakte {
  background-color: #6383a8;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-email {
  background-color: #848484;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-sms {
  background-color: #1ecea8;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li.wh-messenger-bg-call {
  background-color: #ec5923;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup .wh-messengers ul li a {
  line-height: 10px;
  width: 28px;
  height: 28px;
  display: inline-block;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup
  .wh-messengers
  ul
  li
  a
  svg {
  margin: 1px 0 0 1px;
  width: 90%;
  height: 90%;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup-content {
  min-height: 58px;
  display: block;
  border-radius: 4px 4px 0 0;
  color: black;
  padding: 27px 23px 20px 18px;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-logo {
  height: 50px;
  width: 50px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  float: left;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-logo
  img {
  height: 50px;
  width: 50px;
  border-radius: 8px;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-text {
  min-height: 56px;
  width: 234px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  float: right;
  position: relative;
  cursor: pointer;
  word-wrap: break-word;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-text
  a {
  text-decoration: none;
  color: black;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-text
  a
  > div {
  text-align: left;
  padding: 14px 16px;
  line-height: 20px;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-text::before {
  content: "";
  position: absolute;
  top: 20px;
  left: -10px;
  border: 5px solid transparent;
  border-right: 5px solid #e2e2e2;
}

.wh-widget-hello-popup-wrapper
  .wh-widget-hello-popup-content
  .wh-widget-hello-popup-content-text::after {
  content: "";
  position: absolute;
  top: 20px;
  left: -9px;
  border: 5px solid transparent;
  border-right: 5px solid #fff;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup-powered {
  margin-top: 11px;
  text-align: right;
  padding: 0 29px 4px 0;
  font-size: 11px;
  color: #afafaf;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup-powered a {
  color: #afafaf;
  text-decoration: none;
}

.wh-widget-hello-popup-wrapper .wh-widget-hello-popup-powered a span {
  text-decoration: underline;
}

.wh-widget-hello-popup-wrapper.wh-popup {
  box-shadow: 7px 7px 15px 8px rgba(0, 0, 0, 0.17);
  border: 1px solid #e2e2e2;
  position: relative;
  min-height: 149px;
  border-radius: 10px;
  background-color: white;
  width: 302px;
}

.wh-widget-hello-popup-wrapper.wh-popup.wh-popup-left {
  margin-left: 10px;
}

.wh-widget-hello-popup-wrapper.wh-popup.wh-popup-right {
  margin-right: 20px;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-title-bar {
  height: 50px;
  border-radius: 6px 6px 0 0;
  margin: -1px;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-facebook {
  background-color: #0084ff;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-whatsapp {
  background-color: #4dc247;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-snapchat {
  background-color: #ffea00;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-viber {
  background-color: #7b519d;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-line {
  background-color: #00c300;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-telegram {
  background-color: #08c;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-vkontakte {
  background-color: #6383a8;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-email {
  background-color: #848484;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-sms {
  background-color: #1ecea8;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar.wh-messenger-bg-call {
  background-color: #ec5923;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar
  .title-bar-icon-close {
  float: right;
  cursor: pointer;
  margin: 14px 12px 0 0;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar
  .title-bar-icon-messenger {
  float: left;
  margin: 11px 0 0 11px;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-title-bar
  .title-bar-icon-messenger
  svg {
  fill: white;
  width: 28px;
  height: 28px;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-title-bar .title-bar-text {
  padding-top: 15px;
  text-align: left;
  color: #ffffff;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-content.wh-popup-content-call
  > div {
  min-height: 100px;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-content.wh-popup-content-call
  + .wh-clear
  + .wh-widget-hello-popup-powered.wh-hide {
  display: block !important;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-content.wh-popup-content-call
  + .wh-clear
  + .wh-widget-hello-popup-powered.wh-hide
  > a {
  display: none !important;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content > div {
  padding: 25px 12px 0 30px;
  min-height: 168px;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-wa-text {
  text-align: left;
  word-wrap: break-word;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-wa-number,
.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-call-number {
  margin-top: 38px;
  text-align: left;
  font-size: 26px;
  word-wrap: break-word;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-facebook {
  padding: 0;
  height: 299px;
  overflow: hidden;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-content
  .content-snapchat-qrcode {
  height: 207px;
}

.wh-widget-hello-popup-wrapper.wh-popup
  .wh-popup-content
  .content-snapchat-name {
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0 15px 0;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-line {
  padding: 0;
  height: 380px;
  overflow: hidden;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-popup-content .content-line iframe {
  margin-top: -115px;
  width: 302px;
  height: 490px;
  border: none;
  overflow: hidden;
}

.wh-widget-hello-popup-wrapper.wh-popup .wh-widget-hello-popup-powered {
  text-align: center;
  padding-bottom: 7px;
  padding-left: 24px;
}

@-webkit-keyframes button-slide {
  0% {
    opacity: 0;
    display: none;
    margin-top: 0;
    margin-bottom: 0;
    -ms-transform: translateY(15px);
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -o-transform: translateY(15px);
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    display: block;
    margin-top: 0;
    margin-bottom: 14px;
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

@-moz-keyframes button-slide {
  0% {
    opacity: 0;
    display: none;
    margin-top: 0;
    margin-bottom: 0;
    -ms-transform: translateY(15px);
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -o-transform: translateY(15px);
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    display: block;
    margin-top: 0;
    margin-bottom: 14px;
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

@-o-keyframes button-slide {
  0% {
    opacity: 0;
    display: none;
    margin-top: 0;
    margin-bottom: 0;
    -ms-transform: translateY(15px);
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -o-transform: translateY(15px);
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    display: block;
    margin-top: 0;
    margin-bottom: 14px;
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes button-slide {
  0% {
    opacity: 0;
    display: none;
    margin-top: 0;
    margin-bottom: 0;
    -ms-transform: translateY(15px);
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -o-transform: translateY(15px);
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    display: block;
    margin-top: 0;
    margin-bottom: 14px;
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

.button-slide {
  -webkit-animation-name: button-slide;
  -moz-animation-name: button-slide;
  -o-animation-name: button-slide;
  animation-name: button-slide;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.button-slide-out {
  -webkit-animation-name: button-slide;
  -moz-animation-name: button-slide;
  -o-animation-name: button-slide;
  animation-name: button-slide;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: reverse;
  -moz-animation-direction: reverse;
  -o-animation-direction: reverse;
  animation-direction: reverse;
}

@-webkit-keyframes button-mes-us {
  0% {
    opacity: 0;
    display: none;
    margin-left: 55px;
    margin-right: 55px;
  }

  to {
    opacity: 1;
    display: block;
    margin-left: 70px;
    margin-right: 70px;
  }
}

@-moz-keyframes button-mes-us {
  0% {
    opacity: 0;
    display: none;
    margin-left: 55px;
    margin-right: 55px;
  }

  to {
    opacity: 1;
    display: block;
    margin-left: 70px;
    margin-right: 70px;
  }
}

@-o-keyframes button-mes-us {
  0% {
    opacity: 0;
    display: none;
    margin-left: 55px;
    margin-right: 55px;
  }

  to {
    opacity: 1;
    display: block;
    margin-left: 70px;
    margin-right: 70px;
  }
}

@keyframes button-mes-us {
  0% {
    opacity: 0;
    display: none;
    margin-left: 55px;
    margin-right: 55px;
  }

  to {
    opacity: 1;
    display: block;
    margin-left: 70px;
    margin-right: 70px;
  }
}

div.wh-widget-send-button-wrapper {
  margin: 0;
  padding: 0;
  border: 0;
  position: fixed;
  z-index: 16000160;
  bottom: 0;
  text-align: center;
  overflow: hidden;
}

div.wh-widget-send-button-wrapper.wh-widget-left {
  left: 0;
}

div.wh-widget-send-button-wrapper.wh-widget-left
  div.wh-widget-send-button-wrapper-list {
  left: 0;
  float: left;
}

div.wh-widget-send-button-wrapper.wh-widget-left
  div.wh-widget-send-button-wrapper-list
  a.wh-widget-send-button-get-button {
  float: left;
  left: 1px;
}

div.wh-widget-send-button-wrapper.wh-widget-left
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon {
  float: left;
}

div.wh-widget-send-button-wrapper.wh-widget-right {
  right: 0;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  div.wh-widget-send-button-wrapper-list {
  right: 10px;
  float: right;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  div.wh-widget-send-button-wrapper-list
  a.wh-widget-send-button-get-button {
  float: right;
  right: 1px;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button {
  min-width: 55px;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.mes-us {
  text-align: right;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon {
  float: right;
}

div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list {
  margin: 10px;
  margin-bottom: 20px;
  padding: 0;
  border: 0;
  position: relative;
  bottom: 3px;
  text-align: center;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activate
  > a.wh-widget-button {
  display: block;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activate
  > a.wh-widget-button.wh-widget-button-activator
  div.mes-us {
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activator-as-close
  > a.wh-widget-button.wh-widget-button-activator
  div.mes-us {
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activator-as-close
  > a.wh-widget-button.wh-widget-button-activator
  div.wh-widget-button-icon
  > div {
  -ms-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activator-as-close
  > a.wh-widget-button.wh-widget-button-activator
  div.wh-widget-button-icon
  .wh-svg-close {
  display: inline;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-activator-as-close
  > a.wh-widget-button.wh-widget-button-activator
  div.wh-widget-button-icon
  .wh-svg-icon {
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list.wh-widget-show-get-button
  a.wh-widget-send-button-get-button {
  display: block;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  a.wh-widget-send-button-get-button {
  display: none;
  position: fixed;
  white-space: nowrap;
  text-decoration: none;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 11px;
  color: #afafaf;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  a.wh-widget-send-button-get-button:hover {
  text-decoration: underline;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button {
  display: none;
  text-decoration: none;
  font-weight: normal;
  margin-top: 14px;
  position: relative;
  outline: none;
}

.wh-widget-send-button-desktop
  div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button:hover
  div.mes-us {
  display: block;
  -webkit-animation-name: button-mes-us;
  -moz-animation-name: button-mes-us;
  -o-animation-name: button-mes-us;
  animation-name: button-mes-us;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.wh-widget-send-button-desktop
  div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button:hover
  div.wh-widget-button-icon {
  box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.7);
}

.wh-widget-send-button-desktop
  div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button.wh-widget-button-activator
  div.mes-us {
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button.wh-widget-button-activator {
  display: block;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button.wh-widget-button-activator
  div.wh-widget-button-icon
  > div {
  height: 100%;
  width: 100%;
  -moz-transition: transform 0.4s ease;
  -o-transition: transform 0.4s ease;
  -webkit-transition: transform 0.4s ease;
  transition: transform 0.4s ease;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.mes-us {
  position: relative;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 13px;
  border: 1px solid #e2e2e2;
  margin-right: 55px;
  margin-left: 55px;
  padding: 4px 9px 6px 9px;
  border-radius: 4px;
  color: #333;
  background: white;
  top: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon {
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  font-size: 28px;
  text-align: center;
  line-height: 50px;
  color: white;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon
  .wh-svg-close {
  display: none;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon
  .wh-svg-icon {
  display: inline;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-facebook {
  background-color: #0084ff;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-whatsapp {
  background-color: #4dc247;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-snapchat {
  background-color: #ffea00;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-viber {
  background-color: #7b519d;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-line {
  background-color: #00c300;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-telegram {
  background-color: #08c;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-zalo {
  background-color: #018fe5;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon
  .wh-messenger-svg-zalo {
  width: 30px;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-vkontakte {
  background-color: #6383a8;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-email {
  background-color: #848484;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-sms {
  background-color: #1ecea8;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon.wh-messenger-bg-call {
  background-color: #ec5923;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon
  svg {
  fill: white;
  width: 41px;
  height: 50px;
  padding-bottom: 8px;
}

div.wh-widget-send-button-wrapper
  div.wh-widget-send-button-wrapper-list
  > a.wh-widget-button
  div.wh-widget-button-icon
  i {
  display: inline;
  line-height: 48px;
}

@-webkit-keyframes callToActionRight {
  0% {
    opacity: 0;
    right: -20px;
  }

  to {
    opacity: 1;
    right: 0;
  }
}

@-moz-keyframes callToActionRight {
  0% {
    opacity: 0;
    right: -20px;
  }

  to {
    opacity: 1;
    right: 0;
  }
}

@-o-keyframes callToActionRight {
  0% {
    opacity: 0;
    right: -20px;
  }

  to {
    opacity: 1;
    right: 0;
  }
}

@keyframes callToActionRight {
  0% {
    opacity: 0;
    right: -20px;
  }

  to {
    opacity: 1;
    right: 0;
  }
}

@-webkit-keyframes callToActionLeft {
  0% {
    opacity: 0;
    left: -20px;
  }

  to {
    opacity: 1;
    left: 0;
  }
}

@-moz-keyframes callToActionLeft {
  0% {
    opacity: 0;
    left: -20px;
  }

  to {
    opacity: 1;
    left: 0;
  }
}

@-o-keyframes callToActionLeft {
  0% {
    opacity: 0;
    left: -20px;
  }

  to {
    opacity: 1;
    left: 0;
  }
}

@keyframes callToActionLeft {
  0% {
    opacity: 0;
    left: -20px;
  }

  to {
    opacity: 1;
    left: 0;
  }
}

#wh-call-to-action {
  position: relative;
  top: 29px;
  box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}

#wh-call-to-action a {
  text-decoration: none;
  color: black;
}

#wh-call-to-action a .wh-call-to-action-content {
  padding: 5px 10px 5px 10px;
  line-height: 18px;
  max-height: 34px;
  max-width: 135px;
  overflow: hidden;
  word-wrap: break-word;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  box-sizing: content-box;
}

.wh-widget-right #wh-call-to-action {
  float: left;
  margin-right: 10px;
}

.wh-widget-right #wh-call-to-action.wh-animation-in {
  -webkit-animation-name: callToActionRight;
  -moz-animation-name: callToActionRight;
  -o-animation-name: callToActionRight;
  animation-name: callToActionRight;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.wh-widget-right #wh-call-to-action.wh-animation-out {
  -webkit-animation-name: callToActionRight;
  -moz-animation-name: callToActionRight;
  -o-animation-name: callToActionRight;
  animation-name: callToActionRight;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: reverse;
  -moz-animation-direction: reverse;
  -o-animation-direction: reverse;
  animation-direction: reverse;
}

.wh-widget-right #wh-call-to-action:before {
  z-index: 2;
}

.wh-widget-right #wh-call-to-action:before,
.wh-widget-right #wh-call-to-action:after {
  content: "";
  position: absolute;
  background: white;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  right: -5px;
  top: 50%;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  z-index: 1;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.wh-widget-left #wh-call-to-action {
  float: right;
  margin-left: 10px;
}

.wh-widget-left #wh-call-to-action.wh-animation-in {
  -webkit-animation-name: callToActionLeft;
  -moz-animation-name: callToActionLeft;
  -o-animation-name: callToActionLeft;
  animation-name: callToActionLeft;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.wh-widget-left #wh-call-to-action.wh-animation-out {
  -webkit-animation-name: callToActionLeft;
  -moz-animation-name: callToActionLeft;
  -o-animation-name: callToActionLeft;
  animation-name: callToActionLeft;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: reverse;
  -moz-animation-direction: reverse;
  -o-animation-direction: reverse;
  animation-direction: reverse;
}

.wh-widget-left #wh-call-to-action:before {
  z-index: 2;
}

.wh-widget-left #wh-call-to-action:before,
.wh-widget-left #wh-call-to-action:after {
  content: "";
  position: absolute;
  background: white;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  left: -5px;
  top: 50%;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  z-index: 1;
  -ms-transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

body {
  margin: 0;
}

svg {
  fill: white;
}

div.wh-widget-send-button-wrapper a.wh-widget-send-button-get-button {
  position: relative;
  bottom: 5px;
  float: right;
  margin-right: 8px;
  text-decoration: none;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 11px;
  color: #afafaf;
}

div.wh-widget-send-button-wrapper a.wh-widget-send-button-get-button:hover {
  text-decoration: underline;
}

div.wh-widget-send-button-wrapper.wh-widget-right
  a.wh-widget-send-button-get-button {
  margin-right: 17px;
}

div.clear {
  clear: both;
}

* {
  -webkit-tap-highlight-color: transparent !important;
}
</style>
