<?php
class Mail_Helper{
	private $acc_username = "cskh@caganu.com";
	private $acc_password = "ch@msoctrondoi";
	private $mail_sent;
	private $mail_name;
	private $title;
	private $content;
	//thư viện gửi mail
	
	public function set($mail_sent='',$mail_name='',$title='',$content=''){
		$this->mail_sent	=	$mail_sent;
		$this->mail_name	=	$mail_name;
		$this->title 		=	$title;
		$this->content 		=	$content;
	}
	public function Send_mail(){
		require PATH_SYSTEM.'/library/mail/class.phpmailer.php';
		require PATH_SYSTEM.'/library/mail/class.smtp.php';

		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->Host = 'smtp.mailer.inet.vn';
		$mail->SMTPAuth = true;
		$mail->Username = $this->acc_username;
		$mail->Password = $this->acc_password;
		$mail->SMTPSecure = 'tls';

		$mail->From = 'customer@caganu.com';
		$mail->FromName = 'Caganu Vietnam';
		$mail->addAddress($this->mail_sent, $this->mail_name);

		$mail->addReplyTo('cskh@caganu.com', 'Caganu Vietnam');

		$mail->WordWrap = 50;
		$mail->isHTML(true);

		$mail->Subject = $this->title;
		$mail->Body    = $this->content;

		if(!$mail->send()) {
			//echo 'Mailer Error: ' . $mail->ErrorInfo;
			return($mail->ErrorInfo);
			exit;
		}else{
			return(true);
		}
	}
	public function Content_mail_order($data){
		$data_product='';
		foreach($data['product'] as $product){
			$data_product.='
				<tr>
					<td align="left" valign="top" style="padding:3px 9px">
						<span class="m_5105115433089272946m_-8003889967867177384name">
							'.$product->product_name.'
						</span><br/>                                                             
					</td>
                    <td align="left" valign="top" style="padding:3px 9px">
                    	<span>'.number_format($product->price,0,",",".").' ₫</span>
                    </td>
                    <td align="left" valign="top" style="padding:3px 9px">
                    	'.$product->quantity.'
                    </td>
                    <td align="left" valign="top" style="padding:3px 9px">
                    	<span>0 ₫</span>
                    </td>
                    <td align="right" valign="top" style="padding:3px 9px">
                    	<span>'.number_format($product->total,0,",",".").' ₫</span>
                    </td>
                </tr>
			';
		}
		$content='
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#dcf0f8" style="margin:0;padding:0;background-color:#f2f2f2;width:100%!important;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px">
    			<tbody>
        			<tr>
            			<td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                			<table border="0" cellpadding="0" cellspacing="0" width="600" style="margin-top:15px">
                    			<tbody>
                        			<tr>
                            			<td align="center" valign="bottom" id="m_5105115433089272946m_-8003889967867177384headerImage">
                                			<table width="100%" cellpadding="0" cellspacing="0" style="border-bottom:3px solid #00b7f1;padding-bottom:10px;background-color:#fff">
                                    			<tbody>
                                        			<tr>
                                            			<td valign="top" bgcolor="#FFFFFF" width="100%" style="padding:10px">
                                                			<a style="border:medium none;text-decoration:none;color:#007ed3;margin:0px 120px 0px 20px" href="" target="_blank">
                                                    			<img style="width:160px" src="http://betatemplate.caganu.com/public/site/assets/img/logo/logo-caganu-non.png" class="CToWUd">
                                                			</a>
                                                			<!--a style="border:medium none;text-decoration:none;color:#007ed3" href="" target="_blank">
                                                    			<img alt="Tải ứng dụng iOS" src="https://ci6.googleusercontent.com/proxy/6FA7FOlIwZgMFLXQcXbuAQPK0rAZUKghUG2kAoryjIJE_asjTDevvv4vcZlrI8oao3y463u1ykulhF_tO3PAs-qUXrqPLzhPvgM=s0-d-e1-ft#http://tikicdn.com/media/custom/app_store_ios_2x.png" style="height:40px;margin-top:17px" height="40" class="CToWUd">
                                                    			<img alt="Tải ứng dụng Android" src="https://ci6.googleusercontent.com/proxy/OGG-IygZ96lSjI-9zhcwa7Uf1hJ4kckgEDvzHwc4eRprkrKT_-ra3br_Yaq2AVGLk6KXsU9wZBIJo6Ywd5UPZM7h5mYEf7c=s0-d-e1-ft#http://tikicdn.com/media/custom/play_store_2x.png" style="height:40px;margin:17px 20px 0px 20px" height="40" class="CToWUd">
                                                			</a-->	
                                                
                                            			</td>
                                        			</tr>
                                    			</tbody>
                                			</table>
                            			</td>
                        			</tr>
                        			<tr style="background:#fff">
                            			<td align="left" width="600" height="auto" style="padding:15px">
                                			<table>
                                    			<tbody>
                                        			<tr>
                                            			<td>
                                                			<!--a href="" target="_blank">
                                                    			<img src="" alt="Hot sale" class="CToWUd">
                                                			</a-->	
                                            			</td>
                                        			</tr>
                                        			<tr>
                                            			<td>
                                                			<h1 style="font-size:17px;font-weight:bold;color:#444;padding:0 0 5px 0;margin:0">
                                                    			Cảm ơn quý khách '.$data['order_name'].' đã đặt hàng tại Caganu.com,
                                                    		</h1>
                                                            <p style="margin:4px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                    			Caganu.com rất vui thông báo đơn hàng #CGN-'.$data['order_id'].' của quý khách đã được tiếp nhận và đang trong quá trình xử lý. Caganu sẽ thông báo đến quý khách ngay khi hàng chuẩn bị được giao.
                                                			</p>
                                                			<h3 style="font-size:13px;font-weight:bold;color:#02acea;text-transform:uppercase;margin:20px 0 0 0;border-bottom:1px solid #ddd">
                                                    			Thông tin đơn hàng #'.$data['order_id'].'
                                                    			<span style="font-size:12px;color:#777;text-transform:none;font-weight:normal">
                                                    				('.$data['order_date'].')
                                                    			</span>
                                                			</h3>
                                            			</td>
                                        			</tr>
                                        			<tr>	
                                            			<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px">
                                                			<table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    			<thead>
                                                        			<tr>
                                                            			<th align="left" width="50%" style="padding:6px 9px 0px 9px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;font-weight:bold">
                                                                			Thông tin thanh toán
                                                            			</th>
                                                            			<th align="left" width="50%" style="padding:6px 9px 0px 9px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;font-weight:bold">
                                                                 			Địa chỉ giao hàng                                                             
                                                                 		</th>
                                                        			</tr>
                                                    			</thead>
                                                    			<tbody>
                                                        			<tr>
                                                            			<td valign="top" style="padding:3px 9px 9px 9px;border-top:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                                			<span style="text-transform:capitalize">'.$data['order_name'].'</span>
                                                                			<br> <a href="mailto:'.$data['order_mail'].'" target="_blank">'.$data['order_mail'].'</a>
                                                                			<br> '.$data['order_phone'].'
                                                            			</td>
                                                            			<td valign="top" style="padding:3px 9px 9px 9px;border-top:0;border-left:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                                			<span style="text-transform:capitalize">'.$data['order_name'].'</span><br/>
                                                                			<a href="mailto:'.$data['order_mail'].'" target="_blank">
                                                                				'.$data['order_mail'].'
                                                                			</a><br/>
                                                                			<a href="" target="_blank">'.$data['order_address'].'</a>
                                                                			<br>  SĐT: '.$data['order_phone'].'
                                                            			</td>
                                                        			</tr>
                                                        			<tr>
                                                            			<td valign="top" style="padding:7px 9px 0px 9px;border-top:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444" colspan="2">
                                                                			<p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                                    			<strong>Phương thức thanh toán: </strong>
                                                                    				'.$data['order_payment'].'<br/>                     
                                                                    			<strong>Thời gian giao hàng dự kiến:</strong>
                                                                    				<br/>
                                                                    			<strong>Phí vận chuyển: </strong>
                                                                    				'.number_format($data['order_fee'],0,",",".").' ₫<br/>
                                                                     		</p>
                                                            			</td>
                                                        			</tr>
                                                    			</tbody>
                                                			</table>
                                            			</td>
                                        			</tr>
                                        			<tr>
                                            			<td>
                                                			<p style="margin:4px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                    			<i>
                                                    				Lưu ý: Đối với đơn hàng đã được thanh toán trước, nhân viên giao nhậncó thể yêu cầu người nhận hàng cung cấp CMND / giấy phép lái xe để chụp ảnh hoặc ghi lại thông tin.
                                                    			</i>
                                                			</p>
                                            			</td>
                                        			</tr>
                                        			<tr>
                                            			<td>
                                                			<h2 style="text-align:left;margin:10px 0;border-bottom:1px solid #ddd;padding-bottom:5px;font-size:13px;color:#02acea">
                                                    			CHI TIẾT ĐƠN HÀNG
                                                    		</h2>
                                                			<table cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f5f5f5">
                                                    			<thead>
                                                        			<tr>
                                                            			<th align="left" bgcolor="#02acea" style="padding:6px 9px;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:14px">
                                                            				Sản phẩm
                                                            			</th>
                                                            			<th align="left" bgcolor="#02acea" style="padding:6px 9px;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:14px">
                                                            				Đơn giá
                                                            			</th>
                                                            			<th align="left" bgcolor="#02acea" style="padding:6px 9px;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:14px">
                                                            				Số lượng
                                                            			</th>
                                                            			<th align="left" bgcolor="#02acea" style="padding:6px 9px;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:14px">
                                                            				Giảm giá
                                                            			</th>
                                                            			<th align="right" bgcolor="#02acea" style="padding:6px 9px;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:14px">
                                                            				Tổng tạm
                                                            			</th>
                                                        			</tr>
                                                    			</thead>
                                                    			<tbody bgcolor="#eee" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px">
                                                            		'.$data_product.'
                                                        		</tbody>
                                                    			<tfoot style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px">
                                                    				<tr>
                                                            			<td colspan="4" align="right" style="padding:5px 9px">Tổng tạm tính</td>
                                                            			<td align="right" style="padding:5px 9px">
                                                                			<span>'.number_format($data['total_temp'],0,",",".").' ₫</span>
                                                            			</td>
                                                        			</tr>
                                                        			<tr>
                                                            			<td colspan="4" align="right" style="padding:5px 9px">Phí vận chuyển</td>
                                                            			<td align="right" style="padding:5px 9px">
                                                                			<span>'.number_format($data['fee'],0,",",".").' ₫</span>
                                                            			</td>
                                                        			</tr>
                                                        			<tr bgcolor="#eee">
                                                            			<td colspan="4" align="right" style="padding:7px 9px">
                                                                			<strong>
                                                                    			<big>Tổng giá trị đơn hàng</big>
                                                                			</strong>
                                                            			</td>
                                                            			<td align="right" style="padding:7px 9px">
                                                                			<strong><big><span>'.number_format($data['total'],0,",",".").' ₫</span></big></strong>
                                                            			</td>
                                                        			</tr>
                                                    			</tfoot>
                                                			</table>
                                                			<div style="margin:auto">
                                                    			<a href="" style="display:inline-block;text-decoration:none;background-color:#00b7f1!important;margin-right:30px;text-align:center;border-radius:3px;color:#fff;padding:5px 10px;font-size:12px;font-weight:bold;margin-left:35%;margin-top:5px" target="_blank">
                                                    				Chi tiết đơn hàng tại Caganu.com
                                                    			</a>
                                                			</div>
                                            			</td>
                                        			</tr>
                                        			<tr>
                                            			<td>
                                                			<br/>
                                                			<!--p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                    			Trường hợp quý khách có những băn khoăn về đơn hàng, có thể xem thêm mục
                                                    			<a href="title="Các câu hỏi thường gặp" target="_blank">
                                                       				<strong>các câu hỏi thường gặp</strong>.
                                                       			</a>
                                               				</p-->
                                               				<p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal;border:1px #14ade5 dashed;padding:5px;list-style-type:none">
                                                    			Từ ngày 10/5/2018, Caganu sẽ gởi tin nhắn SMS khi đơn hàng của bạn được xác nhận thành công.
                                                			</p>
                                                			<p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal">
                                                    			Bạn cần được hỗ trợ ngay? Chỉ cần email
                                                    			<a href="mailto:cskh@caganu.com" style="color:#099202;text-decoration:none" target="_blank">
                                                       				<strong>cskh@caganu.com</strong>
                                                   				</a>, hoặc gọi số điện thoại
                                                   				<strong style="color:#099202">1900 6983</strong> (8-21h cả T7,CN). Đội ngũ Caganu Care luôn sẵn sàng hỗ trợ bạn bất kì lúc nào.
                                               				</p>
                                            			</td>
                                        			</tr>
                                       				<tr>
                                            			<td>
                                                			<br/>
                                                			<p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;margin:0;padding:0;line-height:18px;color:#444;font-weight:bold">
                                                    			Một lần nữa caganu.com cảm ơn quý khách.<br/>
                                                			</p>
                                                			<p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#444;line-height:18px;font-weight:normal;text-align:right">
                                                    			<strong>
                                                        			<a style="color:#00a3dd;text-decoration:none;font-size:14px" href="https://caganu.com" target="_blank">
                                                        				Caganu.com
                                                        			</a>
                                                    			</strong>
                                                    			<br/>
                                                			</p>
                                            			</td>
                                        			</tr>
                                    			</tbody>
                                			</table>
                            			</td>
                        			</tr>
                    			</tbody>
                			</table>
            			</td>
        			</tr>
        			<tr>
            			<td align="center">
                			<table width="600">
                    			<tbody>
                    				<tr>
                        				<td>
                            				<p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:18px;color:#4b8da5;padding:10px 0;margin:0px;font-weight:normal" align="left">
                            					Quý khách nhận được email này vì đã mua hàng tại Caganu.com<br/> 
                            					Để chắc chắn luôn nhận được email thông báo, xác nhận mua hàng từ Caganu.com, quý khách vui lòng thêm địa chỉ 
                            					<strong>
                            						<a href="mailto:cskh@caganu.com" target="_blank">cskh@caganu.com</a>
                            					</strong> 
                            					vào số địa chỉ (Address Book, Contacts) của hộp email.<br/>
                            				</p>
                        				</td>
                    				</tr>
                				</tbody>
                			</table>
            			</td>
        			</tr>
    			</tbody>
			</table>
		';
		return($content);
	}
}
?>