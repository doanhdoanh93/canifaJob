<template>
  <div class="modal-container">
    <div style="display: flex">
      <div class="title">Đăng nhập</div>
      <div class="title">Khách mời</div>
    </div>
    <div>
      <br />
      <p style="float: left"><b>Cảm ơn bạn đã trở lại.</b></p>
      <br />
    </div>
    <div class="input-phone">
      <v-text-field placeholder="Nhập số điện thoại"></v-text-field>
    </div>
    <v-btn block class="btn" elevation="2" @click="tieptuc">Tiếp tục</v-btn>
    <div class="text">
      Bằng việc chọn tiếp tục, bạn đã đồng ý với
      <a href="#"> Điều khoản &amp; Điều kiện</a> cùng
      <a href="#">Chính sách bảo mật và chia sẻ thông tin</a> của CANIFA
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      password: "",
      passwordAgain: "",
    };
  },
  methods: {
    tieptuc() {
      this.$store.dispatch("tieptuc");
    },
  },
};
</script>
<style>
.modal-container {
  padding: 0px 10px 30px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 515px;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  background-color: #fff;
  margin: 20px 0px;
}
.title {
  display: block;
  background-color: #f6f6f6;
  border-radius: 0px 8px 0px 0px;
  text-align: center;
  width: 50%;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  padding: 29px 10px;
  cursor: pointer;
}
.btn {
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #fff !important;
  background-color: #333f48 !important;
  border-radius: 2px;
  padding: 18px 12px;
  text-align: center;
  border: 1px solid #333f48;
  margin-bottom: 35px;
  cursor: pointer;
}
.v-input {
  display: block;
}
.input-phone {
  margin: 20px 0px 20px 0px;
}
</style>
