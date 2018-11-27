<style>
    body{
        background-color: #f9f9f9 !important;
    }
    .btn-no-order{
        background: #f57224;
        color: #fff;
        border-color: #f57224;    margin-bottom: 34px;
        text-transform: uppercase;    margin: 0;
        height: 48px;
        padding: 0 36px;
        font-size: 14px;
        line-height: 46px;
        border-width: 1px;    position: relative;
        display: inline-block;
        font-style: normal;
        cursor: pointer;
        transition: all .3s ease-out;
        box-shadow: none;
        border-radius: 2px;
        border-style: solid;
        text-align: center;
    }
</style>

<section>
    <div class="container">
        <?php 
        if(empty($data['order']['data'])){
        ?>
        <div id="order error">
            <div class="thanks-for-order">
                <center><img src='/public/images/icon-order-cancel.png' style='width:250px'/></center>
                <h2 class='text-center'><?php echo $data['order']['messages'];?></h2>
                <center><a class='btn-no-order' href='/'>Quay lại trang chủ</a></center>
            </div>
        </div>
        <?php
        }else{
        ?>
        <div id="OrderSuccess">
            <div class="thanks-for-order">
                <div class="check_mark">
                    <div class="sa-icon sa-success animate">
                        <span class="sa-line sa-tip animateSuccessTip"></span>
                        <span class="sa-line sa-long animateSuccessLong"></span>
                        <div class="sa-placeholder"></div>
                        <div class="sa-fix"></div>
                    </div>
                </div>
                <h2><?php echo $data['order']['messages'];?></h2>
                <?php //var_dump($data['order']);?>
                <div class="main-order">
                    <h4>Mã đơn hàng của bạn: <?php echo $data['order']['data']['id'];?></h4>
                    <!--span>Bạn có thể quản lý và kiểm tra đơn hàng của bạn tại <a href='#'>Tài khoản của tôi</a> > <a href='#'>Đơn hàng của tôi</a></span-->
                </div>
            </div>
            <div class="order-price">
                <span>Vui lòng chuẩn bị số tiền tương ứng vào ngày giao hàng</span>
                <h2><?php echo number_format($data['order']['data']['total_temp'],0,",",".");?> đ</h2>
            </div>
            <div class="order-deli">
                <div class="deli-detail remove-border-bottom">   
                    <span><i class="fas fa-envelope"></i> Chúng tôi đã gửi email xác nhận đơn đặt hàng đến <?php echo $data['order']['data']['mail'];?></span>
                </div>
                <div class="deli-detail">
                    <span><i class="fas fa-truck"></i> Trước khi được gửi đi chúng tôi sẽ xác nhận lại với quý khách</span>
                </div>
            </div>
            <div class="order-detail">
                <h3 class="text-left">Chi tiết đơn hàng</h3>
                <div class="row">
                    <div class="col-md-7 text-left">
                        <span>Tạm tính (<?php echo $data['order']['data']['total_product'];?> sản phẩm):</span>
                    </div>
                    <div class="col-md-5 text-right">
                        <span><?php echo number_format($data['order']['data']['total_temp'],0,",",".");?></span>
                    </div>
                    <div class="col-md-7 text-left">
                        <span>Phí giao hàng:</span>
                    </div>
                    <div class="col-md-5 text-right">
                        <span><?php echo number_format($data['order']['data']['fee'],0,",",".");?></span>
                    </div>
                    <div class="col-md-12">
                        <div class="line">
                        </div>
                    </div>
                    <div class="total">
                        <div class="col-md-7 text-left">
                            <span class="name-total">Tổng cộng:</span>
                        </div>
                        <div class="col-md-5 text-right">
                            <span class="price-total"><?php echo number_format($data['order']['data']['total'],0,",",".");?></span>
                        </div>
                        <div class="col-md-12 text-right">
                            <span class="total-vat">Đã bao gồm VAT (nếu có)</span>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/" class="btn btn-info btn-cont">Tiếp tục mua hàng</a>
        </div>
        <?php } ?>
    </div>
</section>