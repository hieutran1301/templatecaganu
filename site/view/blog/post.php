<!-- Home -->

	<!-- <div class="home">
		<div class="home_background parallax-window" data-parallax="scroll" data-image-src="<?php echo $data['result']->avatar;?>" data-speed="0.8"></div>
		<div class="home_content">
			<div class="post_category trans_200"><a href="category.html" class="trans_200">Danh mục</a></div>
			<div class="post_title"><?php echo $data['result']->title;?></div>
		</div>
	</div> -->
	
	<!-- Page Content -->

	<div class="page_content">
		<div class="container">
			<div class="row row-lg-eq-height">
				<div class="col-lg-9">
					<div class="post_content">
						<div class="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
							<!-- <div class="author_image"><div><img src="/public/blog/images/author.jpg" alt=""></div></div> -->
							<!-- </div> -->
							<!-- <div class="post_share ml-sm-auto">
								<span>share</span>
								<ul class="post_share_list">
									<li class="post_share_item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li class="post_share_item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li class="post_share_item"><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
								</ul>
							</div> -->
						</div>
						<!-- Post Body -->
						<div class="post_body" style="padding-right: 69px">
							<?php $str 	=	substr(date(DATE_RSS, strtotime($data['result']->date_show)),0,17); ?>	
							<a style="font-family: Arial, Helvetica, sans-serif" href="/blog">Blog</a>
							<span>/</span>
							<a style="font-family: Arial, Helvetica, sans-serif"><?php echo $data['category']->name;?></a>
							<span>/</span>
							<a style="font-family: Arial, Helvetica, sans-serif"><?php echo $data['result']->category_name;?></a>
							<span>/</span>
							<span style="font-family: Arial, Helvetica, sans-serif"><?php echo $data['result']->blog_name?></span>
							<div class="post_title" style="color: black;"><h2><b><?php echo $data['result']->blog_name;?></b></h2></div>
							<a style="margin-bottom: 2px">Caganu</a>
							<span style="margin-bottom: 2px"><?php echo $str; ?></span>
							<div class="post_title" style="color: black;"><h3><?php echo $data['result']->title;?></h3></div>
 							<?php echo $data['result']->contentd;?>
 							<hr/>
							<div class="post_tags" style="margin-top:5px">
								<span class="post_title" style="color:black;"><h4><b>Từ khoá</b></h4></span>
								<ul>
									<?php 
										$array = explode(',',$data['result']->keyword);
										foreach ($array as $key) {
									?>
									<li class="post_tag"><a href="#"><?php echo $key?></a></li>
									<?php }?>
								</ul>
							</div>
						</div>
						<!-- Bottom Panel -->
						<!-- <div class="post_panel bottom_panel d-flex flex-row align-items-center justify-content-start">
							<div class="author_image"><div><img src="/public/blog/images/author.jpg" alt=""></div></div>
							<div class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></div>
							<div class="post_share ml-sm-auto">
								<span>share</span>
								<ul class="post_share_list">
									<li class="post_share_item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li class="post_share_item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li class="post_share_item"><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div> -->
						<!-- Similar Posts -->
						<div class="similar_posts">
							<div class="title" style="color:#605e53;" style="font-family: Arial, Helvetica, sans-serif"><b><h3>Bài viết liên quan</h3></b></div>
							<div class="grid clearfix">
								<?php foreach ($data['new'] as $new => $top_new) { ?>
									<?php if($new < 3){?>
										<div class="card card_small_with_image grid-item">
											<img class="card-img-top" style="width: 105px;height: 80px" src="<?php echo $top_new->avatar?>" alt="">
											<div class="card-body">
												<div class="card-title card-title-small"><a href="#"><?php echo $top_new->blog_name?></a></div>
												<?php $str_new 	=	substr(date(DATE_RSS, strtotime($top_new->date_show)),0,23); ?>
												<small class="post_meta"><a href="#">Caganu</a><span><?php echo $str_new?></span></small>
											</div>
										</div>
									<?php }?>
								<?php }?>
							</div>
							<!-- Post Comment -->
							<!-- <div class="post_comment">
								<div class="post_comment_title">Post Comment</div>
								<div class="row">
									<div class="col-xl-8">
										<div class="post_comment_form_container">
											<form action="#">
												<input type="text" class="comment_input comment_input_name" placeholder="Your Name" required="required">
												<input type="email" class="comment_input comment_input_email" placeholder="Your Email" required="required">
												<textarea class="comment_text" placeholder="Your Comment" required="required"></textarea>
												<button type="submit" class="comment_button">Post Comment</button>
											</form>
										</div>
									</div>
								</div>
							</div> -->
							<!-- Comments -->
							<!-- <div class="comments">
								<div class="comments_title">Comments <span>(12)</span></div>
								<div class="row">
									<div class="col-xl-8">
										<div class="comments_container">
											<ul class="comment_list">
												<li class="comment">
													<div class="comment_body">
														<div class="comment_panel d-flex flex-row align-items-center justify-content-start">
															<div class="comment_author_image"><div><img src="/public/blog/images/comment_author_1.jpg" alt=""></div></div>
															<small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
															<button type="button" class="reply_button ml-auto">Reply</button>
														</div>
														<div class="comment_content">
															<p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened.</p>
														</div>
													</div>

													
													<ul class="comment_list">
														<li class="comment">
															<div class="comment_body">
																<div class="comment_panel d-flex flex-row align-items-center justify-content-start">
																	<div class="comment_author_image"><div><img src="/public/blog/images/comment_author_2.jpg" alt=""></div></div>
																	<small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
																	<button type="button" class="reply_button ml-auto">Reply</button>
																</div>
																<div class="comment_content">
																	<p>Nulla facilisi. Aenean porttitor quis tortor id tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus molestie varius tincidunt. Vestibulum congue sed libero ac sodales.</p>
																</div>
															</div>

															
															<ul class="comment_list">
																
															</ul>
														</li>
													</ul>
												</li>
												<li class="comment">
													<div class="comment_body">
														<div class="comment_panel d-flex flex-row align-items-center justify-content-start">
															<div class="comment_author_image"><div><img src="/public/blog/images/comment_author_1.jpg" alt=""></div></div>
															<small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
															<button type="button" class="reply_button ml-auto">Reply</button>
														</div>
														<div class="comment_content">
															<p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened.</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>	
							</div> -->
						</div>
					</div>
					<div class="load_more">
						<!-- <div id="load_more" class="load_more_button text-center trans_200">Load More</div> -->
					</div>
				</div>
				<!-- Sidebar -->
				<div class="col-lg-3">
					<div class="sidebar">
						<div class="sidebar_background"></div>
						<div class="sidebar_section">
							<div class="sidebar_section_content">
								<div class="sidebar_title" style="margin-bottom: 5px;">Bài viết được xem nhiều</div>
								<?php foreach($data['top_blog'] as $key_top => $top){
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