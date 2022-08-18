<template>
  <div class="modal-template">
    <transition>
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" style="position: absolute">
            <div class="modal-close" @click="$emit('close')">
              <slot name="footer"></slot>
            </div>
            <div class="modal-content">
              <slot name="body">
                <div class="block-login">
                  <div class="block-login">
                    <div class="block-title">Chào mừng bạn quay trở lại!</div>
                    <div class="block-content">
                      <label>Vui lòng nhập số điện thoại để tiếp tục</label>
                      <input
                        type="text"
                        placeholder="Vui lòng nhập số điện thoại"
                        class="input-phone"
                      />
                      <div class="actions">
                        <button class="btn">Tiếp tục</button>
                      </div>
                      <div class="text">
                        Bằng việc chọn tiếp tục, bạn đã đồng ý với
                        <a href="#"> Điều khoản &amp; Điều kiện</a> cùng
                        <a href="#">Chính sách bảo mật và chia sẻ thông tin</a>
                        của CANIFA
                      </div>
                      <div class="text-register">
                        Chưa có tài khoản? <a href="#">Đăng ký</a> mới
                      </div>
                    </div>
                  </div>
                </div>
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
.modal-content {
  border: none;
  padding: 48px 40px 48px;
  min-height: 400px;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  max-width: 100%;
  /* overflow-y: scroll; */
  /* height: auto; */
  max-height: 100%;
  margin: 30px auto;
  top: 15%;
  left: 33%;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.block-login {
  border: none;
}
.block-title {
  text-align: center;
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 0 0 8px;
}
.block-login label {
  color: #77757f;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 40px;
  display: block;
}
.block-login .input-phone {
  border: 1px solid #d2d1d4;
  height: 48px;
  color: #333f48;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 11px 16px;
  margin: 0 0 19px;
  display: block;
  width: 100%;
}
.block-login .text {
  text-align: center;
  color: #333f48;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
.block-login .text-register {
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-top: 48px;
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
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
  position: absolute;
  top: -12px;
  right: -12px;
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
