<template>
  <div class="checkout-container checkout-cart-container">
    <div class="checkout-container--left">
      <div class="checkout-cart-promotion-notification">
        <div class="notification-item">
          <div class="icon-freeship"></div>
          Mua thêm
          <b>498.000 ₫</b> để được freeship.
        </div>
        <div>
          <div class="notification-item">
            <div>
              <div class="icon-giftcart"></div>
              Mua thêm
              <b>499.000 ₫</b>
              để nhận NaN phần quà với giá 0 đồng.
              <a href="#" style="text-transform: uppercase"><b>Xem quà</b></a>
            </div>
          </div>
          <!---->
        </div>
      </div>
      <!---->
      <div class="checkout-review">
        <div class="checkout-step-title"><h2>(1) sản phẩm</h2></div>
        <table class="checkout-cart-items">
          <thead>
            <tr>
              <th class="col item"><span>Sản phẩm</span></th>
              <th class="col price"><span>Giá tiền</span></th>
              <th class="col qty"><span>Số lượng</span></th>
              <th class="col subtotal"><span>Tổng tiền</span></th>
              <th class="col actions"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="cart-item">
              <td data-th="Sản phẩm" class="col item">
                <div class="cart-item-info">
                  <div class="cart-item-photo">
                    <a
                      href="/ao-body-nam-8it20w001.html"
                      class="cart-image-container"
                      ><img
                        src="http://118.68.218.45:8080/img/210/300/resize/8/i/8it20w001-sa031-m.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="cart-item-details">
                    <strong class="cart-item-name"
                      ><a href="/ao-body-nam-8it20w001.html" class="">
                        Áo body nam
                      </a></strong
                    >
                    <div class="cart-item-options">
                      <div class="cart-item-option">
                        <span><span class="swatch-option text">M</span></span>
                      </div>
                      <div class="cart-item-option">
                        <span
                          ><span
                            class="swatch-option color"
                            style="
                              background-image: url('https://m2dev.canifa.com/media/attribute/swatch/images/sa031.png');
                            "
                          ></span
                        ></span>
                      </div>
                    </div>
                    <!---->
                    <!---->
                    <!---->
                  </div>
                </div>
              </td>
              <td data-th="Giá tiền" class="col price">
                <span class="price">1.000 ₫</span>
                <!---->
              </td>
              <td data-th="Số lượng" class="col qty">
                <div class="cart-item-qty">
                  <a class="btn-number btn-number-minus"><span>▼</span></a>
                  <input
                    type="text"
                    readonly="readonly"
                    class="input-cart-item-qty"
                  />
                  <a class="btn-number btn-number-plus"><span>▲</span></a>
                </div>
              </td>
              <td data-th="Tổng tiền" class="col subtotal">
                <span class="price">1.000 ₫</span>
              </td>
              <td class="col actions">
                <a href="#" title="Xóa" class="action-delete"
                  ><span>Xóa</span></a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="checkout-container--right">
      <div class="checkout-summary checkout-summary-cart">
        <div class="checkout-summary-title">Đơn hàng</div>
        <div class="checkout-totals">
          <table>
            <tbody>
              <tr>
                <th>Giá gốc</th>
                <td>1.000 ₫</td>
              </tr>
              <tr style="display: none">
                <th>Giảm giá</th>
                <td style="color: rgb(218, 41, 28)">0 ₫</td>
              </tr>
              <tr class="grand-totals">
                <th>Tổng tiền thanh toán</th>
                <td>1.000 ₫</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="checkout-proceed-checkout">
          <button class="btn-place-order">Đặt hàng</button>
          <div class="checkout-point-info">
            Áp dụng mã giảm giá, C-point tại bước tiếp theo
          </div>
        </div>
        <div class="payment-note">
          Chúng tôi chấp nhận thanh toán:
          <img src="../../../public/assets/payment-note.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
