<?php 
//var_dump($data);
?>
<div class="signup signup-step-one">
	<div class="phone">
		<div class="form-group">
			<label>Số điện thoại</label>
			<input type="text" name="phone_raw" class="txt-phone form-control" placeholder="Số điện thoại" value="">
			<p class="error_message" txt-phone></p>
		</div>
	</div>
	<div id="button_next" class="sign-up-button-strong r14 disable" onclick="registerStepOne()" data-flag="false">Tiếp tục</div>
	<a href="/buyer/login/email/signup/">
		<div class="sign-up-button-white">Đăng ký bằng Email</div>
	</a>
</div>
<div class="signup signup-step-two">
	<div class="signup">
		<form method="post">
			<input type="hidden" name="csrfmiddlewaretoken" value="">
			<div class="phone">
				<div class="form-group">
					<div class="phonenumber" dir="ltr"></div>
				</div>
				<div class="vcode form-group">
					<span><input type="text" name="vcode" class=" form-control" placeholder="Nhập mã xác thực vừa gửi đến SĐT"></span>
					<span class="resend" id="button_resend">
						<span>Gửi lại</span> 
						<span class="holder">(<span class="count">20</span>)</span>
					</span>
				</div>
				<!--div class="needs_placeholder captcha input-underline">
					<img src="/api/v0/captcha/">
				</div>
				<div class="form-group">
					<input  name="captcha" placeholder="Vui lòng nhập vào số hiển thị bên trên" class="form-control">
				</div>
				<input type="hidden" name="phone_canon" value=""-->
			</div>
			<div class="sign-up-button-strong r14"  id="button_continue">Tiếp tục</div>
		</form>
	</div>
</div>
<div class="verify">
	<div class="signup">
		<form method="post">
			<input type="hidden" name="csrfmiddlewaretoken" value="">
				<div class="phone">
					<div class="form-group">
						<div class="phonenumber"></div>
					</div>
					<div class="form-group">
						<label>Họ và Tên</label>
						<input type="text" name="username" class="txt-fullname form-control" placeholder="Nhập họ và tên" data-fullname=""  maxlength="100" >
						<p class="error_message" txt-fullname></p>
					</div>
					<div class="form-group">
						<label>Mật khẩu</label>
						<input type="password" name="password" class="txt-password form-control" data-password="" placeholder="Nhập mật khẩu">
						<p class="error_message" txt-password></p>
					</div>
					<div class="form-group">
						<label>Xác nhận mật khẩu</label>
						<input type="password" name="password2" class="txt-password-confirm form-control" data-repassword="" placeholder="Nhập lại mật khẩu">
						<p class="error_message" txt-repassword></p>
					</div>
				</div>
				<div class="sign-up-button-strong r14" id="button_signup">Đăng ký</div>
				<div class="terms-service">
					<div class="r12">Bằng việc đăng ký, bạn đồng ý với việc sử dụng Shopee</div>
					<div class="underline m12">Điều khoản dịch vụ</div>
				</div>
		</form>
	</div>
</div>
