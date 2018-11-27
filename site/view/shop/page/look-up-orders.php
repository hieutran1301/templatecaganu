<div class="breadcrumb-wrap">
    <div class="container">
        <ul class="breadcrumb">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="#">Tra cứu đơn hàng</a></li>
        </ul>
    </div>
</div>
<div class="container">
	<section id="lookup" class="mt-4"> 
		<div class="row">
			<div class="col-lg-12">
				<div class="tracking-order-form">
					<h1>Tra cứu theo mã đơn hàng</h1>
					<p>Điền vào các thông tin bên dưới để xem tình trạng vắn tắt của Đơn hàng</p>
					<div class="alert-span"></div>
					<div class="row align-items-center justify-content-center">
						<div class="form-group col-3">
							<label for="phone">Số điện thoại</label>
							<input type="number" class="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Nhập số điện thoại">
							<small id="phoneHelp" class="form-text text-muted">Vui lòng nhập số điện thoại.</small>
						</div>
						<div class="form-group col-3">
							<label for="orderId">Mã đơn hàng</label>
							<input type="number" class="form-control" id="orderId" aria-describedby="orderIdHelp" placeholder="Nhập mã đơn hàng">
							<small id="orderIdHelp" class="form-text text-muted">Vui lòng nhập mã đơn hàng.</small>
						</div>
						<div class="col-12 text-center mt-4">
							<button type="button" class="btn btn-custom">Kiểm tra</button>
						</div>
					</div>
					<!-- <form class="form-inline" action="/sales/order/tracking" method="post">
						<div class="form-group has-feedback ">
							<label>Số điện thoại</label>
							<input name="email" type="email" class="form-control form-email" id="email" value="">
							<span class="help-block"></span>

						</div>
						<div class="form-group ">
							<label>Mã đơn hàng</label>
							<input name="code" type="text" class="form-control form-id" id="order-id" value="">
							<span class="help-block"></span>
						</div>
						<button type="button" class="btn btn-check-orders btn-default">Kiểm Tra</button>
						<br>
						<p class="description"><i>Bật mí: Khi bạn <a href="#" data-toggle="modal" data-target="#login-form" title="Đăng Nhập" class="order-tracking user-name-login">
							Đăng nhập
						</a>, tính năng Kiểm tra đơn hàng sẽ tự động tra cứu thông tin đơn hàng gần nhất</i></p>
					</form> -->
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div id="dynamicTable"></div>			
			</div>
		</div>
	</section>
</div>
<script type="text/javascript">
	// $( document ).ready(function() {
	// 	$('.btn-check-orders').click( function(){
	// 		var txtPhone = $('.form-email').val();
	// 		var txtID_Orders = $('.form-id').val();
	// 		if(txtPhone!=''|| txtID_Orders!='')
	// 		{
	// 			$.ajax({
	// 				type: "POST", 
	// 				dataType: "json",
	// 				url: "/find-order",
	// 				data: {
	// 					txt_phone:txtPhone,
	// 					orders_id:txtID_Orders
	// 				},
	// 				beforeSend: function() {
	// 					$( "#dynamicTable" ).empty();
	// 					$( ".alert-span" ).empty();
	// 				},
	// 				success: function (data) {
	// 					console.log(data);
	// 					if(data['status']==true){
	// 						$("#dynamicTable").append(
	// 							"<table class='table table-hover'>"
	// 							+"<tr>"
	// 							+"<th>"+'Tên khách hàng'+"</th>"
	// 							+"<th>"+'Số điện thoại'+"</th>"
	// 							+"<th>"+'Email'+"</th>"
	// 							+"<th>"+'Trạng thái đơn hàng'+"</th>"
	// 							+"<th>"+'Mã đơn hàng'+"</th>"
	// 							+"<th>"+'Ngày đặt hàng'+"</th>"
	// 							+"<th>"+'Ngày cập nhật'+"</th>"
	// 							+"<th>"+'Loại hàng'+"</th>"
	// 							+"</tr>"
	// 							+"<tr>"
	// 							+"<td>"+data['result']['order_name']+"</td>"

	// 							+"<td>"+data['result']['order_phone']+"</td>"

	// 							+"<td>"+data['result']['order_mail']+"</td>"

	// 							+"<td>"+data['result']['status_name']+"</td>"

	// 							+"<td>"+data['result']['package_sku']+"</td>"

	// 							+"<td>"+data['result']['date_add']+"</td>"

	// 							+"<td>"+data['result']['date_update']+"</td>"

	// 							+"<td>"+(data['result']['device'])+"</td>"
	// 							+"</tr>"
	// 							+"</table>"
	// 							);
	// 					}
	// 					else
	// 					{
	// 						$(".alert-span").text(
	// 							"Không tìm thấy đơn hàng của bạn!"
	// 						);
	// 					}
	// 					}
					
					
	// 			});

	// 		}
	// 		else{
	// 			alert("Nhập 1 trong 2 trường trên");
	// 		}								
	// 	});
	// });
</script>
<!-- <script type="text/javascript">
	$( document ).ready(function() {
		$('.btn-check-orders').click( function(){
			var txtPhone = $('.form-email').val();
			var txtID_Orders = $('.form-id').val();
			if(txtPhone!=''|| txtID_Orders!='')
			{
				$("#dynamicTable").text("");
			}
		}
	}

</script> -->