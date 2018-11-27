<div class="order-block">
    <div class="container">
        <div class="process-order mt-30 mb-30">
            <div class="d-flex align-items-center justify-content-between">
                <div class="step active"><span class="step-number">1</span> Đăng nhập</div>
                <div class="step active"><span class="step-number">2</span>Chọn địa chỉ giao hàng</div>
                <div class="step"><span class="step-number">3</span>Thanh toán</div>
                <div class="line"></div>
            </div>
        </div>
        <div class="order-auth">
            <h3 class="step-title pt-15">1. Khách hàng mới/ Đăng nhập</h3>
            <div class="row">
                <div class="col-8">
                    <div class="auth">
                        <div class="d-flex">
                            <ul class="tabs">
                                <li class="tab-link current" data-tab="sign-up">
                                    <p>Đăng kí</p>
                                    <small>(Dành cho khách hàng mới)</small>
                                </li>
                                <li class="tab-link" data-tab="sign-in">
                                    <p>Đăng nhập</p>
                                    <small>(Đã là thành viên của Caganu)</small>
                                </li>
                            </ul>
                            <div class="content">
                                <div id="sign-up" class="tab-content current">
                                    <div class="form-signup pt-15">
                                        <div class="form-group">
                                            <label for="Phone">Số điện thoại</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="Phone" placeholder="Nhập số điện thoại ...">
                                                <div class="input-group-append">
                                                    <button class="btn input-group-text" id="SendIDAuth">Gửi mã xác thực</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="IDAuth">Nhập mã xác thực</label>
                                            <input type="number" class="form-control" id="IDAuth" placeholder="Nhập mã được gửi tới số điện thoại trên">
                                        </div>
                                        <div class="form-group">
                                            <label for="Email">Email</label>
                                            <input type="email" class="form-control" id="Email" placeholder="Nhập email của bạn">
                                        </div>
                                        <div class="form-group">
                                            <label for="Password">Mật khẩu</label>
                                            <input type="password" class="form-control" id="Password" placeholder="Nhập mật khẩu">
                                        </div>
                                        <div class="form-group">
                                            <label for="Fullname">Họ tên</label>
                                            <input type="text" class="form-control" id="Fullname" placeholder="Nhập họ tên">
                                        </div>
                                        <button class="btn btn-sign">Đăng ký</button>
                                    </div>
                                </div>
                                <div id="sign-in" class="tab-content">
                                    <div class="form-signin pt-15">
                                        <div class="form-group">
                                            <label for="EmailIn">Email hoặc số điện thoại</label>
                                            <input type="email" class="form-control" id="EmailIn" placeholder="Nhập email của bạn">
                                        </div>
                                        <div class="form-group">
                                            <label for="PasswordIn">Mật khẩu</label>
                                            <input type="password" class="form-control" id="PasswordIn" placeholder="Nhập mật khẩu">
                                        </div>
                                        <button class="btn btn-sign">Đăng nhập</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="order-info">
                        <div class="box-order border-b d-flex align-items-center justify-content-between">
                            <span>Đơn hàng <span class="product-number">(2 sản phẩm)</span></span>
                            <button class="btn btn-sm btn-custom">Sửa</button>
                        </div>
                        <div class="box-order border-b d-flex align-items-center justify-content-between">
                            <span class="product-name"><span class="product-number">1</span> x <a href="#">Đào Miếng Ngâm Đường Pavlides Hộp 820g</a></span>
                            <span class="price">55.000đ</span>
                        </div>
                        <div class="box-order border-b d-flex align-items-center justify-content-between">
                            <span class="product-name"><span class="product-number">2</span> x <a href="#">Đào Miếng Ngâm Đường Pavlides Hộp 820g</a></span>
                            <span class="price">55.000đ</span>
                        </div>
                        <div class="box-order border-b d-flex align-items-center justify-content-between">
                            <span>Tạm tính:</span>
                            <span class="price">55.000đ</span>
                        </div>
                        <div class="box-order total d-flex justify-content-between">
                            <span>Tổng tiền:</span>
                            <div>
                                <p class="price">55.000đ</p>
                                <small>(Đã bao gồm VAT)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-address">
            <h3 class="step-title pt-15">2. Chọn địa chỉ giao hàng</h3>
            <p class="title">Chọn địa chỉ giao hàng có sẵn bên dưới:</p>
            <div class="address-list row">
                <div class="col-md-6 col-lg-6">
                    <div class="panel address-item default">
                        <div class="panel-body">
                            <div class="title d-flex align-items-center justify-content-between">
                                <div class="name">Nguyen Van A</div>
                                <div class="default">Mặc định</div>
                            </div>
                            <div class="address" title="170, Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Hồ Chí Minh, +84">Địa chỉ: 170, Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Hồ Chí Minh, +84</div>
                            <p class="address">Việt Nam</p>
                            <p class="phone">Điện thoại: 0123456789</p>
                            <p class="action">
                                <button class="btn btn-sm btn-ship default">Giao đến địa chỉ này</button>
                                <button class="btn btn-sm btn-edit" data-toggle="modal" data-target="#exampleModal">Sửa</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="panel address-item">
                        <div class="panel-body">
                            <div class="title d-flex align-items-center justify-content-between">
                                <div class="name">Nguyen Van B</div>
                            </div>
                            <div class="address" title="170, Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Hồ Chí Minh, +84">Địa chỉ: 170, Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Hồ Chí Minh, +84</div>
                            <p class="address">Việt Nam</p>
                            <p class="phone">Điện thoại: 0123456789</p>
                            <p class="action">
                                <button class="btn btn-sm btn-ship">Giao đến địa chỉ này</button>
                                <button class="btn btn-sm btn-edit" data-target="#exampleModal">Sửa</button>
                                <button class="btn btn-sm btn-remove" data-target="#exampleModal">Xóa</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="other">
                Bạn muốn giao hàng đến địa chỉ khác?
                <a href="javascript:void(0)" id="addNewAddress" data-target="#exampleModal">
                    Thêm địa chỉ giao hàng mới
                </a>
            </p>

        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cập nhật địa chỉ giao hàng</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <input type="text" class="form-control" id="fullName" aria-describedby="fullName" placeholder="Nhập họ tên" required>
                <small id="fullName" class="form-text text-danger">Vui lòng nhập họ tên.</small>
            </div>
            <div class="form-group">
                <input type="number" class="form-control" id="Phone" aria-describedby="Phone" placeholder="Nhập số điện thoại">
                <small id="Phone" class="form-text text-danger">Vui lòng nhập số điện thoại.</small>
            </div>
            <div class="form-group">
                <select class="custom-select" id="city" aria-describedby="mesCity">
                    <option selected>Chọn tỉnh/ thành phố</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <small id="mesCity" class="form-text text-danger">Vui lòng chọn tỉnh/ thành phố.</small>
            </div>
            <div class="form-group">
                <select class="custom-select" id="city" aria-describedby="mesDis">
                    <option selected>Chọn quận/ huyện</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <small id="mesDis" class="form-text text-danger">Vui lòng chọn quận/ huyện.</small>
            </div>
            <div class="form-group">
                <select class="custom-select" id="city" aria-describedby="mesWard">
                    <option selected>Chọn phường/ xã</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <small id="mesWard" class="form-text text-danger">Vui lòng chọn phường/ xã.</small>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="street" rows="1" placeholder="Nhập địa chỉ (Ví dụ: 170 Hoàng Hoa Thám)"></textarea>
                <small id="mesWard" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark" data-dismiss="modal">Hủy bỏ</button>
            <button type="button" class="btn btn-sm btn-custom">Cập nhật</button>
        </div>
    </div>
  </div>
</div>