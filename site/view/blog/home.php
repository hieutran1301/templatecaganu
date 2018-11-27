<!-- Home -->

	<div class="home">
		
		<!-- Home Slider -->

		<div class="home_slider_container">
			<div class="owl-carousel owl-theme home_slider">
				<?php foreach($data['top_rank'] as $top =>$value){
					if($top < 3){?>
				<div class="owl-item">
					<div class="home_slider_background" style="background-image:url(<?php echo $value->avatar?>)"></div>
					<div class="home_slider_content_container" style="background-color: rgba(0,0,0,0.4);">
						<div class="container">
							<div class="row">
								<div class="col">
									<div class="home_slider_content">
										<div class="home_slider_item_category trans_200"><a href="<?php echo $value->link;?>" class="trans_200"><?php echo $value->category_name;?></a></div>
										<div class="home_slider_item_title">
											<a href="<?php echo $value->link_post;?>"><?php echo $value->blog_name;?></a>
										</div>
										<div class="home_slider_item_link">
											<a href="<?php echo $value->link_post;?>" class="trans_200">Đọc tiếp
												<svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
													 width="19px" height="13px" viewBox="0 0 19 13" enable-background="new 0 0 19 13" xml:space="preserve">
													<polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php } }?>
			</div>

			<div class="custom_nav_container home_slider_nav_container">
				<div class="custom_prev custom_prev_home_slider">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
						<polyline fill="#FFFFFF" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "/>
					</svg>
				</div>
		        <ul id="custom_dots" class="custom_dots custom_dots_home_slider">
					<li class="custom_dot custom_dot_home_slider active"><span></span></li>
					<li class="custom_dot custom_dot_home_slider"><span></span></li>
					<li class="custom_dot custom_dot_home_slider"><span></span></li>
				</ul>
				<div class="custom_next custom_next_home_slider">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
						<polyline fill="#FFFFFF" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "/>
					</svg>
				</div>
			</div>

		</div>
	</div>
	
	<!-- Page Content -->

	<div class="page_content">
		<div class="container">
			<div class="row row-lg-eq-height">

				<!-- Main Content -->
				<div class="col-lg-9">
					<div class="main_content">
						<div class="blog_section">
							<?php foreach($data['cate_parent'] as $parent){?>
							<div class="section_panel d-flex flex-row align-items-center justify-content-start">
								<div class="section_title"><a style="color: black" href="<?php echo $parent->link?>"><?php echo $parent->name?></a></div>
								<div class="section_tags ml-auto">
									<ul>
										<?php foreach($data['cate_child'] as $child){
											if($child->parent == $parent->id){?>
											<li><a href="<?php echo $child->link?>"><?php echo $child->name?></a></li>
										<?php } }?>
									</ul>
								</div>
							</div>
							<div class="section_content">
								<div class="grid clearfix">
									<?php foreach($parent->blog as $blog)?>
									<div class="card card_default card_small_with_image grid-item">
										<img class="card-img-top" src="<?php echo $blog->avatar?>" alt="">
										<div class="card-body">
											<div class="card-title card-title-small"><a href="<?php echo $blog->link?>"><?php echo $blog->blog_name?></a></div>
											<small class="post_meta"><span><?php echo substr(date(DATE_RSS, strtotime($blog->date_show)),0,17)?></span></small>
										</div>
									</div>
								</div>
							</div>
							<?php }?>
						</div>
					</div>
					<div class="load_more">
					</div>
				</div>
				<div class="col-lg-3">
					<div class="sidebar">
						<div class="sidebar_background"></div>
						<div class="sidebar_section">
							<div class="sidebar_section_content">
								<div class="sidebar_title" style="margin-bottom: 5px;">Bài viết mới</div>
								<?php foreach($data['new'] as $key_new => $new){
									if($key_new<5){ ?>
								<div class="sidebar_slider_container">
									<div class="owl-carousel owl-theme sidebar_slider_top">
										<div class="owl-item">
											<div class="side_post">
												<a href="<?php echo $new->link?>">
													<div class="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
														<div class="side_post_image"><div><img style="width: 70px;height: 70px" src="<?php echo $new->avatar;?>" alt=""></div></div>
														<div class="side_post_content">
															<div class="side_post_title"  style="font-family: Arial, Helvetica, sans-serif"><?php echo $new->blog_name?></div>
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