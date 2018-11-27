<!-- Home -->

	<!-- <div class="home">
		<div class="home_background parallax-window" data-parallax="scroll" data-image-src="/public/blog/images/category.jpg" data-speed="0.8"></div>
	</div> -->
	
	<!-- Page Content -->

	<div class="page_content">
		<div class="container">
			<div class="row row-lg-eq-height">
				<div class="col-lg-9">
						<div class="main_content">
							<div class="category">
								<div class="section_panel d-flex flex-row align-items-center justify-content-start">
									<div class="section_title" style="font-family: Arial, Helvetica, sans-serif"><?php echo $data['title']->name ;?></div>
									<div class="section_tags ml-auto">
										<ul>
											<li class="active"><a href="<?php echo $data['cate_link'];?>"><?php echo $data['cate_name']->name ;?></a></li>
											<?php foreach($data['cate_list'] as $cate_list=>$value){
												if($cate_list<2){?>
													<li class="active"><a href="<?php echo $value->link ;?>"><?php echo $value->name ;?></a></li>
											<?php }}?>
										</ul>
									</div>
									<div class="section_panel_more">
										<ul>
											<li>Thêm
												<ul>
													<?php foreach($data['cate_list'] as $cate_list){?>
														<li><a href="<?php echo $cate_list->link ;?>"><?php echo $cate_list->name ;?></a></li>
													<?php }?>
												</ul>
											</li>
										</ul>
									</div>
								</div>
								<div class="section_content">
									<div class="grid clearfix">
										<?php foreach($data['list'] as $list){?>
											<div class="card card_default card_large_with_image grid-item">
												<img class="card-img-top" src="<?php echo $list->avatar?>" alt="">
												<div class="card-body">
													<div style="font-family: Arial, Helvetica, sans-serif" class="card-title card-title-small"><a href="<?php echo $list->link?>"><?php echo $list->blog_name?></a></div>
													<small class="post_meta"><span><?php echo substr(date(DATE_RSS, strtotime($list->date_show)),0,17)?></span></small>
												</div>
											</div>
										<?php }?>
									</div>	
								</div>
							</div>

						</div>
						<div class="load_more">
							<div class="pagi">
								<nav aria-label="Page navigation">
									<ul class="pagination">
										<?php
										$current = $data['pagination']->current_page;
										$total   = $data['pagination']->total_page;
										if($total == 0) return 0;
										else{
											?>
											<li><a style="position: relative;display: block;padding: .5rem .75rem;margin-left: -1px;line-height: 1.25;color: #0275d8;background-color: #ffffff;border: 1px solid #ddd;" href="<?php echo $data['cate_link']?>?page=1">Trang đầu</a></li>
											<?php
											if( $total <= 10){
												for ($i=1; $i <= $total ; $i++) { 
													if($i == $current){ 
														?>
														<li><a class="select-pagi" href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>	
													<?php }else{	?>
														<li><a href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
													<?php }}
												}else{
													if($current < 8){
														for ($i=1; $i <= 10 ; $i++) { 
															if($i == $current){ ?>
																<li><a class="select-pagi" href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>	
															<?php }else{	?>
																<li><a id="page" data-page="<?php echo $i; ?>" href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
															<?php }}
														}else{
															if($current > $total - 4){
																for ($i=$total - 10; $i <= $total ; $i++) { 
																	if($i == $current){ ?>
																		<li><a class="select-pagi" href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>	
																	<?php }else{	?>
																		<li><a href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
																	<?php }}
																}else{
																	for ($i=$current - 5; $i <= $current + 4 ; $i++) { 
																		if($i == $current){ ?>
																			<li><a class="select-pagi" href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>	
																		<?php }else{	?>
																			<li><a href="<?php echo $data['cate_link']?>?page=<?php echo $i; ?>"><?php echo $i; ?></a></li>
																		<?php }}
																	}
																}
															}
														} 
														?>
										<li><a href="<?php echo $data['cate_link']?>?page=<?php echo $total; ?>">Trang cuối</a></li>
									</ul>
								</nav>
							</div>
						</div>
				</div>
				<div class="col-lg-3">
					<div class="sidebar">
						<div class="sidebar_background"></div>
						<div class="sidebar_section">
							<div class="sidebar_section_content">
								<div class="sidebar_title" style="margin-bottom: 5px;">Bài viết được xem nhiều</div>
								<?php foreach($data['top'] as $key_top => $top){
									if($key_top<5){ ?>
								<div class="sidebar_slider_container">
									<div class="owl-carousel owl-theme sidebar_slider_top">
										<div class="owl-item">
											<div class="side_post">
												<a href="<?php echo $top->link?>">
													<div class="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
														<div class="side_post_image"><div><img style="width: 70px;height: 70px" src="<?php echo $top->avatar;?>" alt=""></div></div>
														<div class="side_post_content">
															<div class="side_post_title"  style="font-family: Arial, Helvetica, sans-serif"><?php echo $top->blog_name?></div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
								<hr/>
								<?php } }?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>