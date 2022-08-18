<template>
  <div id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" style="position: absolute">
            <div class="modal-close" @click="$emit('close')">
              <slot name="footer"></slot>
            </div>
            <div class="modal-header1">
              <slot name="header"> Hướng dẫn chọn kích cỡ </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <p
                  data-v-16589fd7=""
                  style="
                    color: rgb(99, 177, 188);
                    font-weight: 500;
                    font-size: 14px;
                  "
                >
                  * Bảng kích thước này chỉ dành cho mục đích tham khảo.
                </p>
                <p data-v-16589fd7="">
                  <img
                    data-v-16589fd7=""
                    src="../../../public/assets/Man-measurement.png"
                    alt=""
                    style="width: 100%"
                  />
                </p>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 63, 72, 0.34);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 825px;
  overflow-y: scroll;
  height: 800px;
  margin: 0px auto;
  top: 15%;
  left: 10%;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header1 {
  background-color: #f6f6f6;
  border-radius: 2px 2px 0px 0px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 18px 16px;
  margin-bottom: -2px;
}

.modal-body {
  background-color: #fff;
  padding: 13px 17px;
  margin: 20px 0;
}

.modal-close {
  position: absolute;
  background-color: #f6f6f6;
  -webkit-box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4Ljc1IDUuMjVMNS4yNSAxOC43NSIgc3Ryb2tlPSIjQzhDN0NDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC43NSAxOC43NUw1LjI1IDUuMjUiIHN0cm9rZT0iI0M4QzdDQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
  z-index: 20;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
