<?php 
    $address='';
    $name='';
    $phone='';
    $mail='';
    if(isset($_COOKIE["address"])){
        $address=$_COOKIE['address'];
    }
    if(isset($_COOKIE["name"])){
        $name=$_COOKIE["name"];
    }
    if(isset($_COOKIE["phone"])){
        $phone=$_COOKIE["phone"];
    }
    if(isset($_COOKIE["mail"])){
        $mail=$_COOKIE["mail"];
    }
?>
<section id='HeaderDetail'>
    <div class="header_details">
        <div class="container">
            <div class="pull-left" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a class="lever_1" style="z-index:998" href="/" itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
                        <span itemprop="name">Trang chủ</span>
                    </a> >
                    <meta itemprop="position" content="1">
                </span>
                <span class="current" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" class="lever_2" style="z-index:997" href="/xac-nhan">
                        <span itemprop="name">Xác nhận đơn hàng</span>
                    </a>
                    <meta itemprop="position" content="2">
                </span>
            </div>
        </div>
    </div>
</section>
<section id='CheckoutDetail'>
    <div class="container">
        <div class="row">
            <div class="col-md-7 cart">
                <h2>Giỏ hàng</h2>
                <div class="col-md-12">
                    <!--item cart array-->
                    <div class="row">
                        <div class="cart-item">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="delivery">
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="delivery">
                                                <div class="col-md-6 deli-name">
                                                    Phí giao hàng:
                                                </div>
                                                <div class="col-md-6 deli-price">
                                                    0
                                                </div>
                                            </div>
                                            <div class="delivery">
                                                <div class="col-md-6 deli-name">
                                                    Tiền hàng:
                                                </div>
                                                <div class="col-md-6 deli-price">
                                                    <span>0đ</span>
                                                </div>
                                            </div>
                                            <div class="delivery">
                                                <div class="col-md-6 deli-name">
                                                    Giảm giá
                                                </div>
                                                <div class="col-md-6 deli-price">
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <hr>
                                        <div class="row">
                                            <div class="border-top">
                                                <div class="col-md-7 deli-name">
                                                    <p>Tổng tiền:<br><span>(bao gồm phí giao hàng)</span></p>
                                                </div>
                                                <div class="col-md-5 deli-price">
                                                    <span class="total-price" >1,000,000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="continue-buy">
                        <a href='/'><span id='ContinueBuy'>< Tiếp tục mua hàng</span></a>
                    </div>
                </div>
            </div>
            <div class="col-md-5 info-payment">
                <style>
                    .small-text-13 .col-md-4{
                        font-size:13px;
                    }
                </style>
                <div class="row">
                    <div class="col-md-12">
                        <h3>Thông tin khách hàng</h3>
                        <div class="row small-text-13">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select id='sel-city' class='sel2 city' data-child='sel-county'> 
                                        <option value="0" selected>Chọn tỉnh/thành phố</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select id='sel-county' class='sel2 city' data-child='sel-commune'>
                                        <option value="0">Chọn Quận/Huyện</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select id='sel-commune' class='sel2 city'>
                                        <option value="0">Chọn phường/xã</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input id='txt-address' type='text' data-err='err-txt-address' data-err-text='Địa chỉ không được bỏ trống' placeholder='Số nhà và tên đường (bắt buộc)' value='<?php echo $address;?>'/>
                                    <span class='small-err' id='err-txt-address'></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-contact">
                            <h3>Thông tin liên hệ</h3>
                            <div class="form-group">
                                <div class="radio-inline radio-red">
                                    <input type="radio" class="with-gap radio-col-pink" name="gender" id="rdbMale" value="1" checked="">
                                    <label class="text-lable" for="rdbMale">Anh</label>
                                </div>
                                <div class="radio-inline radio-red">
                                    <input type="radio" class="with-gap radio-col-pink" name="gender" id="rdbFemale" value="2">
                                    <label class="text-lable" for="rdbFemale">Chị</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <input id='txt-fullname' type='text' data-err='err-txt-fullname' data-err-text='Họ tên không được bỏ trống' placeholder="Họ và tên (Bắt buộc)" value='<?php echo $name; ?>'/>    
                                <span class='small-err' id='err-txt-fullname'></span>
                            </div>  
                            <div class="form-group">
                                <input id='txt-phone' type='text' data-err='err-txt-phone' data-err-text='Số điện thoại không được bỏ trống hoặc không đúng định dạng' placeholder="Nhập số điện thoại (Bắt buộc)" value='<?php echo $phone;?>'/>    
                                <span class='small-err' id='err-txt-phone'></span>
                            </div>
                            <div class="form-group">
                                <input id='txt-mail' type='text' placeholder="Nhập email" value='<?php echo $mail;?>'/>    
                            </div>
                            <div class="form-group">
                                <textarea id='txt-noted' placeholder="Nhập yêu cầu thêm của bạn (Nếu có)" class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3>Hình thức thanh toán</h3>
                        <div class="form-group">
                            <div class="radio radio-red">
                                <input type="radio" class="with-gap radio-col-pink" name="payment-method" id="payment-later" value="1" checked="">
                                <label class="text-lable" for="payment-later">Thanh toán khi nhận hàng</label>
                            </div>
                            <!--div class="radio radio-red">
                                <input type="radio" class="with-gap radio-col-pink" name="payment-method" id="payment-atm" value="2">
                                <label class="text-lable" for="payment-atm">Thẻ ATM nội địa</label>
                            </div>
                            <div class="radio radio-red">
                                <input type="radio" class="with-gap radio-col-pink" name="payment-method" id="payment-visa" value="3">
                                <label class="text-lable" for="payment-visa">VISA, Master Card</label>
                            </div-->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 btn-submit">
                        <button class="btn btn-checkout btn-info waves-effect waves-light m-t-10" >Hoàn tất</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Modal -->
<div class="modal fade" id="modal-checkout" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Đang xử lý đơn hàng của bạn</h4>
            </div>
            <div class="modal-body">
                <center>
                    <img src='/public/site/assets/img/icon/loading-2.gif'/>
                    <p><i>Hệ thống tự chuyển trang khi hoàn tất</i></p>
                </center>
            </div>
            <!--div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div-->
        </div>
    </div>
</div>
<script>
    function validatePhone(txtPhone) {
        var filter = /^\+?([0-9]{0})?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        var filter1 = /^\+?([0-9]{1})?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        var subDes = txtPhone.slice(0,1);
        if ((filter.test(txtPhone) || filter1.test(txtPhone)) && subDes == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    $(document).ready(function(){
        $('.sel2').select2({});
        var sel_city = $('#sel-city');
        $.ajax({
            type: 'POST',
            url: '/get-city',
            dataType: 'json'
        }).then(function (data) {
            for(i=0;i<data['result']['data'].length;i++){
                var newOption = new Option(data['result']['data'][i].name, data['result']['data'][i].id, false,false);
                sel_city.append(newOption);         
            }
        });
        $('.sel2').on("change", function(e) {
            var id          =   $(this).val();
            var sel_child   =   $(this).attr('data-child');
            $(this).parent().find('.select2').find('.selection').find('.select2-selection').removeClass('border-red');
            if(id>0 && sel_child!=''){
                $.ajax({
                    type: "POST", 
                    dataType: "json",
                    url: "/get-city",
                    data: {
                        id:id
                    },
                    beforeSend: function() {
                        $('#'+sel_child).empty();
                    },
                    success: function (data) {
                        if(sel_child == 'sel-county'){
                            $('#'+sel_child).append('<option value="0" >Chọn Quận/Huyện</option>');
                        }else{
                            $('#'+sel_child).append('<option value="0" >Chọn Phường/Xã</option>');
                        }
                        for(i=0;i<data['result']['data'].length;i++){
                            var newOption = new Option(data['result']['data'][i].name, data['result']['data'][i].id, false,false);
                            $('#'+sel_child).append(newOption);        
                            /*if(i==0){
                                $sel_child.val(data['result']['data'][i].id).trigger('change.select2');
                            }*/
                        }
                    }
                });
            }
        });
        $(".btn.btn-checkout").click(function(){
            var city_id         =   $('#sel-city').val();
            var county_id       =   $('#sel-county').val();
            var commune_id      =   $('#sel-commune').val();
            var address         =   $('#txt-address').val();
            var gender          =   $('input[name=gender]:checked').val();
            var fullname        =   $('#txt-fullname').val();
            var phone           =   $('#txt-phone').val();
            var mail            =   $('#txt-mail').val();
            var noted           =   $('#txt-noted').val();
            var payment         =   $('input[name=payment-method]:checked').val();
            var cartArray       =   shoppingCart.listCart();
            if( cartArray.length == 0 || city_id == 0 || county_id == 0 || commune_id == 0 || address == 0 ||address == null || fullname == 0 || fullname == null || phone == 0 || phone == null || !validatePhone(phone)){
                if(cartArray.length == 0){
                    alert('Không có sản phẩm trong giỏ hàng!');
                }
                if( city_id == 0 ){
                    $('#select2-sel-city-container').parent().addClass('border-red');
                }
                if(county_id == 0){
                    $('#select2-sel-county-container').parent().addClass('border-red');
                }
                if(commune_id ==0){
                    $('#select2-sel-commune-container').parent().addClass('border-red');
                }
                if(address ==0 || address == null){
                    $('#txt-address').removeClass('border-green').addClass('border-red');
                    var err_id  =   $('#txt-address').attr('data-err');
                    var err_text    =   $('#txt-address').attr('data-err-text');
                    $('#'+err_id).text(err_text).show();
                }
                if(fullname == 0 || fullname == null){  
                    $('#txt-fullname').removeClass('border-green').addClass('border-red');
                    var err_id  =   $('#txt-fullname').attr('data-err');
                    var err_text    =   $('#txt-fullname').attr('data-err-text');
                    $('#'+err_id).text(err_text).show();
                }
                if(phone == 0 || phone == null){
                    $('#txt-phone').removeClass('border-green').addClass('border-red');
                    var err_id  =   $('#txt-phone').attr('data-err');
                    var err_text    =   $('#txt-phone').attr('data-err-text');
                    $('#'+err_id).text(err_text).show();
                }
                $('#scroll-top-top').click();
            }else{
                $.ajax({
                    type: "POST", 
                    dataType: "json",
                    url: "/checkout",
                    data: {
                        order_products:shoppingCart.listCart(),
                        phone:phone,
                        gender:gender,
                        fullname:fullname,
                        mail:mail,
                        address:address,
                        noted:noted,
                        city_id:city_id,
                        county_id:county_id,
                        commune_id:commune_id,
                        payment:payment
                    },
                    beforeSend: function() {
                        /*$("#modal-checkout").modal();
                        $(".btn.btn-checkout").attr('disabled','disabled');*/
                    },
                    success: function (data) {
                        console.log(data);
                        /*if(data['status']==true){
                            shoppingCart.clearCart();
                            window.location.href = "/dat-hang-thanh-cong";
                        }else{
                            $(".btn.btn-checkout").removeAttr('disabled');
                        }*/
                    }
                });
            }
        });
    });
    $('#txt-address').keyup(function(){
        var address = $('#txt-address').val();
        var err_id  =   $(this).attr('data-err');
        var err_text    =   $(this).attr('data-err-text');
        if(address == null || address == 0){
            $('#txt-address').removeClass('border-green').addClass('border-red');
            $('#'+err_id).text(err_text).show();
        }
        else {
            $('#txt-address').removeClass('border-red').addClass('border-green');
            $('#'+err_id).text('').hide();
        }
    });
    $('#txt-fullname').keyup(function(){
        var fullname = $('#txt-fullname').val();
        var err_id  =   $(this).attr('data-err');
        var err_text    =   $(this).attr('data-err-text');
        if(fullname == null || fullname == 0){
            $('#txt-fullname').removeClass('border-green').addClass('border-red');
            $('#'+err_id).text(err_text).show();
        }
        else {
            $('#txt-fullname').removeClass('border-red').addClass('border-green');
            $('#'+err_id).text('').hide();
        }
    });
    $('#txt-phone').keyup(function(){
        var phone = $('#txt-phone').val();
        var err_id  =   $(this).attr('data-err');
        var err_text    =   $(this).attr('data-err-text');
        if(validatePhone(phone)){
            $('#txt-phone').removeClass('border-red').addClass('border-green');
            $('#'+err_id).text('').hide();
        }else{
            $('#txt-phone').removeClass('border-green').addClass('border-red');
            $('#'+err_id).text(err_text).show();
        }
    });
</script>   
