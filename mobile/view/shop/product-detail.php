<div class="nav-head-fixed">
    <ul class="">
        <li class="back">
            <a onclick="backToPage()">
				<svg viewBox="0 0 22 17" width="30" height="30"  style="fill:#ff5c1e;"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-10.000000, -34.000000)"><g transform="translate(0.000000, 20.000000)"><g transform="translate(7.000000, 8.000000)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path></g></g></g></g></svg>
			</a>
        </li>
        <li class="form-search">
            <div class="icon">
                <svg viewBox="0 0 13 14" class="search-fixed-search-icon"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-56.000000, -36.000000)"><g transform="translate(0.000000, 1.000000)"><g transform="translate(0.000000, 20.000000)"><g transform="translate(48.000000, 8.000000)"><path d="M16.9914351,15.5118537 C17.0093193,15.5267114 17.0267223,15.5425664 17.043578,15.5594221 L20.6209034,19.1367476 C20.9022562,19.4181004 20.9067126,19.869807 20.6265242,20.1499954 C20.3482756,20.428244 19.9010266,20.432125 19.6132763,20.1443747 L16.0359508,16.5670492 C16.0180049,16.5491033 16.0011854,16.5304642 15.9854945,16.5112208 C15.1523331,17.1323409 14.1191023,17.5 13,17.5 C10.2385763,17.5 8,15.2614237 8,12.5 C8,9.73857625 10.2385763,7.5 13,7.5 C15.7614237,7.5 18,9.73857625 18,12.5 C18,13.6309342 17.6245255,14.6741717 16.9914351,15.5118537 Z M13,16.5 C15.209139,16.5 17,14.709139 17,12.5 C17,10.290861 15.209139,8.5 13,8.5 C10.790861,8.5 9,10.290861 9,12.5 C9,14.709139 10.790861,16.5 13,16.5 Z"></path></g></g></g></g></g></svg>
            </div>
			<form action="/tim-kiem" method="GET">
				<div class="input">
					<input type="search" name="q" placeholder="Tìm sản phẩm" class="text-search" />
				</div>
			</form>	
        </li>
        <li class="filter">
            <svg class="navbar-search__filter" width="30" height="30" viewBox="0 0 15 15" style="stroke: #ff5722;fill:#ff5c1e;">
                <g>
                    <polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                    <polyline id="icon-filter-selected-tick" fill="none" points="9.2 11.3 10.3 12.1 11.8 10.4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"></polyline>
                    <circle cx="10.5" cy="11.2" r="2.5" stroke="none"></circle>
                    <polyline id="icon-filter-selected-tick" fill="none" points="9.2 11.3 10.3 12.1 11.8 10.4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"></polyline>
                </g>
            </svg>
            <span>Lọc</span>
        </li>
    </ul>
</div>
<div class="with-loading-wrapper with-loading-wrapper--transparent-background">
	<div class="product-page theme--ofs">
		<div class="shopee-navbar">
			<div class="shopee-navbar__main-content">
				<div class="navbar-generic__title typo-l14"><?php echo $data["product"]->info->product_name; ?></div>
			</div>
		</div>
		<div role="main">
			<div class="product-carousel">
				<div class="stardust-carousel">
					<?php //var_dump($data["product"]->images); ?>
					<!--div style="height: 100%; width: 100%;">
						<img class="product-carousel__item" src="<?php echo $data["product"]->images[0]->images; ?>">
					</div-->
					<div class="owl-carousel owl-theme product-image-thumnail">
						<?php foreach($data["product"]->images as $index => $valueProImage){ ?>
						<div class="item"><img class="product-carousel__item_image" src="<?php echo $valueProImage->images; ?>"></div>
						<?php } ?>
					</div>
				</div>
			</div>		
			<div class="page-section product-page__overview">
				<div class="_2MUbMS">
					<div class="pL2Q_H">
						<div>
							<div class="_2QUNWB typo-r16 two-line-text">                                 
								<?php echo $data["product"]->info->product_name; ?>
							</div>
						</div>
						<div class="_3amVj3">
							<div class="VtSPoH"><?php echo number_format($data["product"]->sku[0]->price_old,0,"","."); ?> ₫</div>
							<div class="_29zQbG">
								<div class="_9qsFmt typo-m18"><?php echo number_format($data["product"]->sku[0]->price_sale,0,"","."); ?> ₫</div>
							</div>
							<div class="_29zQbG"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="page-section">
				<div class="o4US5T">
					<div class="product-actions">
						<button class="stardust-button stardust-button--block product-actions__like-button typo-r14 hairline-border">
							<svg class="stardust-icon stardust-icon-like" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
								<path d="m7.5 3.9l1.4-1.5c1.3-1.3 3.4-1.3 4.6 0l0 0c1.3 1.3 1.3 3.5 0 4.8l-6 6.2-6-6.2c-1.3-1.2-1.3-3.4 0-4.7l0 0c1.3-1.3 3.4-1.3 4.6 0z" fill="none" stroke-linejoin="round" stroke-miterlimit="10"></path>
							</svg>
							<div class="product-actions__like-button-text">Thích</div>
							<div class="product-actions__like-button-number">1552</div>
						</button>
						<a href="/shop/35469313/item/704744530/rating/" class="product-actions__rating-link">
							<button class="stardust-button stardust-button--block product-actions__rating-button typo-r14">
								<svg class="stardust-icon stardust-icon-rating" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
									<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
								</svg>
								<div class="product-actions__rating-button-text">Đánh giá</div>
								<div class="product-actions__rating-button-number">435</div>
							</button>
						</a>
					</div>
					<div class="product-social-links">
						<a class="product-social-link product-social-link--facebook typo-r10" target="_blank" href="https://www.facebook.com/dialog/feed?app_id=421039428061656&amp;link=https%3A%2F%2Fshopee.vn%2F%2F%C4%90i%E1%BB%87n-tho%E1%BA%A1i-Samsung-Galaxy-J3-Pro-H%C3%A3ng-ph%C3%A2n-ph%E1%BB%91i-ch%C3%ADnh-th%E1%BB%A9c-i.35469313.704744530&amp;redirect_uri=https%3A%2F%2Fshopee.vn%2F%25C4%2590i%25E1%25BB%2587n-tho%25E1%25BA%25A1i-Samsung-Galaxy-J3-Pro-H%25C3%25A3ng-ph%25C3%25A2n-ph%25E1%25BB%2591i-ch%25C3%25ADnh-th%25E1%25BB%25A9c-i.35469313.704744530%23close">
							<div class="product-social-link__main">
								<div class="product-social-link__logo product-social-link__logo--facebook"></div>
								<div class="product-social-link__text">Chia sẻ</div>
							</div>
						</a>
						<a class="product-social-link product-social-link--twitter typo-r10" target="_blank" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fshopee.vn%2F%2F%C4%90i%E1%BB%87n-tho%E1%BA%A1i-Samsung-Galaxy-J3-Pro-H%C3%A3ng-ph%C3%A2n-ph%E1%BB%91i-ch%C3%ADnh-th%E1%BB%A9c-i.35469313.704744530&amp;text=Shopee">
							<div class="product-social-link__main">
								<div class="product-social-link__logo product-social-link__logo--twitter"></div>
								<div class="product-social-link__text">Tweet</div>
							</div>
						</a>
						<a class="product-social-link product-social-link--pinterest typo-r10" target="_blank" href="https://www.pinterest.com/pin/create/button/?url=https://shopee.vn//Điện-thoại-Samsung-Galaxy-J3-Pro-Hãng-phân-phối-chính-thức-i.35469313.704744530&amp;media=https://cf.shopee.vn/file/71e744494ab3eee3874572cab566c043&amp;description=Shopee">
							<div class="product-social-link__main">
								<div class="product-social-link__logo product-social-link__logo--pinterest"></div>
								<div class="product-social-link__text"></div>
							</div>
						</a>
					</div>
				</div>
            </div>
            <div class="page-section">
                <div class="product-page-shop-brief__container">
                    <a class="product-page-shop-brief hairline-border-up-bottom" href="/smartvn">
                        <div class="product-page-shop-brief__top">
                            <div class="avatar">
                                <div class="stardust-avatar stardust-avatar--rounded stardust-avatar--medium product-page-shop-brief__portrait"><img src="https://cf.shopee.vn/file/0e3354d757cfc9f0e2b771bcd83bed49_tn" class="avatar__img"></div>
								<div class="avatar__preferred-badge avatar__preferred-badge--official">
									<svg class="stardust-icon stardust-icon-tick-bold" enable-background="new 0 0 12 12" viewBox="0 0 12 12">
										<path stroke="none" d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
									</svg>
								</div>
							</div>
							<div class="product-page-shop-brief__top-middle">
								<div class="product-page-shop-brief__username typo-m14">smartvn</div>
								<div class="product-page-shop-brief__active-status typo-r12">
									<div class="shop-active-time typo-r12">
										<div class="shop-active-time__normal">Online 27 phút trước</div>
									</div>
								</div>
							</div>
							<button class="stardust-button product-page-shop-brief__visit-shop-btn">Xem Shop</button>
                        </div>
                        <div class="product-page-shop-brief__stats">
                            <div class="product-page-shop-stat">
                                <div class="product-page-shop-stat__top">
                                    <div class="product-page-shop-stat__icon">
										<svg class="stardust-icon stardust-icon-search-shop" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
											<path stroke="none" d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3 0 0c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4l1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7l0 0h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8l0 0h-1l0 0c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>
										</svg>
                                    </div>
                                    <div class="product-page-shop-stat__value typo-m14">2021</div>
                                </div>
                                <div class="product-page-shop-stat__label typo-r12">Sản phẩm</div>
                            </div>
                            <div class="product-page-shop-stat">
                                <div class="product-page-shop-stat__top">
                                    <div class="product-page-shop-stat__icon">
										<svg class="stardust-icon stardust-icon-rating" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
											<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
										</svg>
                                    </div>
									<div class="product-page-shop-stat__value typo-m14">4.8</div>
                                </div>
                                <div class="product-page-shop-stat__label typo-r12">Đánh giá</div>
                            </div>
                            <div class="product-page-shop-stat">
                                <div class="product-page-shop-stat__top">
									<div class="product-page-shop-stat__icon">
										<svg class="stardust-icon stardust-icon-response-rate" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
											<path d="m14 10.8h-7l-4 3v-3h-2v-9.6h13z" fill="none" stroke-linejoin="round" stroke-miterlimit="10"></path>
											<circle stroke="none" cx="4" cy="5.8" r="1"></circle>
											<circle stroke="none" cx="7.5" cy="5.8" r="1"></circle>
											<circle stroke="none" cx="11" cy="5.8" r="1"></circle>
										</svg>
                                    </div>
                                    <div class="product-page-shop-stat__value typo-m14">91%</div>
                                </div>
                                <div class="product-page-shop-stat__label typo-r12">Phản hồi Chat</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div style="margin-top: 8px;">
                <div class="product-description">
                    <div class="product-description__header typo-m14">
                        <div class="product-description__header-label">Chi tiết sản phẩm</div>
                        <div class="product-description__header-create-time typo-r12">
                            <svg class="stardust-icon stardust-icon-response-time product-description__header-time-icon" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
                                <path d="m7.2 3.5v4.3h3.3" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
                                <circle cx="7.5" cy="7.5" fill="none" r="6.5" stroke-miterlimit="10"></circle>
                            </svg>
                            <span>10 tháng</span>
                        </div>
                    </div>
					<span>                                 
						<?php echo $data["product"]->info->product_name; ?>
					</span>
                    <div class="product-description__text typo-l14">
						<div class="product-description-text">	
                          <?php echo $data["product"]->info->content; ?>
                    </div>                  
				</div>
            </div>

            <div style="margin-top: 8px;">
                <div class="tab-control">
                    <div class="tab-nav">
						<button tabindex="0" class="tab-active" data-target="eval-cmt" data-tab="1" type="button">Đánh Giá Sản Phẩm
							<!--
							<div class="product-ratings-header__stats typo-l12">
								<div class="rating-stars">
									<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
										<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
									</svg>
									<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
										<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
									</svg>
									<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
										<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
									</svg>
									<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
										<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
									</svg>
									<div class="rating-stars__star">
										<div class="rating-stars__star-lit" style="width: 89.1954%;">
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star-solid" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
										<svg class="stardust-icon stardust-icon-rating rating-stars__star-hollow" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
											<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
										</svg>
									</div>
								</div>
								<div class="product-ratings-header__stats-avg typo-l12">4.9/5</div>
								<div class="product-ratings-header__stats-count typo-l12">(435)</div>
							</div>	-->			
						</button>					
						<button tabindex="0" data-tab="2" data-target="eval-cmt" type="button">Bình luận</button>
					</div>
					<div class="tab-list eval-cmt">
						<div class="tab-item" data-tab="1">
							<div class="product-rating-item hairline-border-bottom">
								<div class="avatar">
									<div class="stardust-avatar stardust-avatar--rounded stardust-avatar--medium product-rating-item__author-portrait"><img src="https://cf.shopee.vn/file/8a6e8b188a9a0e94af7e26f74be8cdde_tn" class="avatar__img"></div>
								</div>
								<div class="product-rating-item__right">
									<div class="product-rating-item__author-username typo-r12">linh30699</div>
									<div class="product-rating-item__rating-stars typo-l12">
										<div class="rating-stars">
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
									</div>
									<div class="product-rating-item__comment"> Đóng gói sản phẩm rất đẹp và chắc chắn. Hàng chính hãng, bảo hành 12t.  Shop phục vụ rất tốt. </div>
									<div class="product-rating-item__images">
										<div class="product-rating-item__image-wrapper"><img class="product-rating-item__image" src="https://cf.shopee.vn/file/2155dbcabf848b219f21dfe474cc8150_tn"></div>
										<div class="product-rating-item__image-wrapper"><img class="product-rating-item__image" src="https://cf.shopee.vn/file/d3e0b7896dfa5f9944b5723b54b51a27_tn"></div>
										<div class="product-rating-item__image-wrapper"><img class="product-rating-item__image" src="https://cf.shopee.vn/file/e838131268d2d97de5436219f829887b_tn"></div>
										<div class="product-rating-item__image-wrapper"><img class="product-rating-item__image" src="https://cf.shopee.vn/file/619415a450c910baac8c52edf9f4a498_tn"></div>
										<div class="product-rating-item__image-wrapper"><img class="product-rating-item__image" src="https://cf.shopee.vn/file/9a7875983c0ded18bff99430594c7390_tn"></div>
									</div>
									<div class="product-rating-item__footer typo-l12">2018-09-17 11:22  | Phân loại hàng: ĐEN</div>
								</div>
							</div>
							<div class="product-rating-item hairline-border-bottom">
								<div class="avatar">
									<div class="stardust-avatar stardust-avatar--rounded stardust-avatar--medium product-rating-item__author-portrait">
										<div class="avatar__placeholder">
											<svg class="stardust-icon stardust-icon-headshot" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
												<path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
									</div>
								</div>
								<div class="product-rating-item__right">
									<div class="product-rating-item__author-username typo-r12">phuongjdud</div>
									<div class="product-rating-item__rating-stars typo-l12">
										<div class="rating-stars">
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
									</div>
									<div class="product-rating-item__comment">Pin lâu hết</div>
									<div class="product-rating-item__footer typo-l12">2018-09-16 13:05  | Phân loại hàng: XANH</div>
								</div>
							</div>
							<div class="product-rating-item hairline-border-bottom">
								<div class="avatar">
									<div class="stardust-avatar stardust-avatar--rounded stardust-avatar--medium product-rating-item__author-portrait">
										<div class="avatar__placeholder">
											<svg class="stardust-icon stardust-icon-headshot" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
												<path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
									</div>
								</div>
								<div class="product-rating-item__right">
									<div class="product-rating-item__author-username typo-r12">thanhphuong2018</div>
									<div class="product-rating-item__rating-stars typo-l12">
										<div class="rating-stars">
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
											<svg class="stardust-icon stardust-icon-rating-solid rating-stars__star" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
												<path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
											</svg>
										</div>
									</div>
									<div class="product-rating-item__comment"> Chất lượng sản phẩm tuyệt vời Đóng gói sản phẩm rất đẹp và chắc chắn</div>
									<div class="product-rating-item__footer typo-l12">2018-09-16 11:45  | Phân loại hàng: XANH</div>
								</div>
							</div>
						</div>
						<div class="tab-item" data-tab="2" style="display: none;">						
							<div style="background-color: #fff; padding-bottom: 20px;">
								<div>
									<div class="reviews-box-wrapp">        
										<div class="review-box">
											<div class="layout-media review-author">
												<div class="layout-media-icon"><span class="avatar-letter">MD</span></div>
													<div class="layout-media-content">
														<div>
															<h4 class="review-name">Minh Đặng</h4>
															<span class="review-date"><span>(</span><span>11 ngày trước</span><span>)</span></span>
														</div>
														<div class="rating">
															<i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i>
															<div class="rating-score" style="width: 100%;"><i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i><i class="star material-icons">star</i></div>
														</div>
													</div>
											</div>
											<div class="review-content">
												<span class="buying-time green-highlight"><span>Đã mua sản phẩm này từ </span><span>19 ngày trước</span></span><strong class="review-title">Chuẩn VN/A</strong>
												<div class="review-body">
													<p><span>Giao hàng đúng hẹn mặc dù hôm đấy có đoàn quốc tang cấm đường, hàng đóng gói cẩn thận.</span></p>
												</div>
												<a href="#">Cảm ơn</a>
											</div>
										</div>
									</div>
								</div>
								<div class="view-more-bar">
									<button type="button" class="btn btn-default view-more-btn link-w-arrow" style="padding-right: 0">Xem tất cả
										<svg class="stardust-icon stardust-icon-arrow-right product-ratings-header__arrow" enable-background="new 0 0 11 11" viewBox="0 0 11 11"><path stroke="none" d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
									</button>
								</div>
								<div class="reviews-box-wrapp">
									<div class="form-group">
										<label>Nhận xét của bạn</label>
										<input type="text" class="form-control" name="title" placeholder="Nhập nhận xét của bạn" />
										<button type="button" class="btn-send-cmt">Gửi</button>
									</div>
								</div>
							</div>
						</div>	
					</div>
                </div>
            </div>			
			<div style="margin-top: 8px;">
				<div class="carousel-with-header">
					<div class="header-section">
						<div class="header-section__header typo-l12">
							<div class="header-section__header-title">
								<div class="carousel-with-header__header typo-m14">Sản phẩm tương tự</div>
							</div>
							<a class="header-section__header-link" href="/similar_products/35469313/704744530/84">
								Xem tất cả
								<svg class="stardust-icon stardust-icon-arrow-right" enable-background="new 0 0 11 11" viewBox="0 0 11 11">
									<path stroke="none" d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
								</svg>
							</a>
						</div>
						<div class="header-section__content">
							<div class="stardust-horizontal-scroll-view hide-scrollbar carousel-with-header__items">  
								<?php foreach($data["related"] as $value) { ?>
								<div class="carousel-with-header__item-card">
									<a class="item-card hairline-border" href="/<?php echo $value->product_url; ?>">
										<div>
											<div class="item-card__cover-image-wrapper">
												<div class="animated-lazy-image item-card__cover-image">
													<img class="item-card__cover-image animated-lazy-image__image--ready" src="<?php echo $value->images; ?>">
													<div class="animated-lazy-image__placeholder-wrapper">
														<svg viewBox="0 0 54 61" x="0" y="0" class="animated-lazy-image__placeholder">
															<path d="M 99.2 59.9 H 86.7 c 0 -5.3 -2.7 -16.3 -11.7 -16.4 c -9.6 -.1 -11.8 11.9 -11.8 16.4 H 50.8 c -3.4 0 -2.7 3.4 -2.7 3.4 l 2.4 33 c 0 0 -.1 7.3 6.3 7.5 c .4 0 35.7 0 36.5 0 c 6.2 -.4 6.3 -7.5 6.3 -7.5 l 2.4 -33 C 102 63.2 102.5 59.8 99.2 59.9 z M 75.1 47.2 c 7.1 .2 7.9 11.7 7.7 12.6 H 67.1 C 67 58.9 67.5 47.4 75.1 47.2 z M 84.2 91.8 c -1 1.7 -2.7 3 -5 3.7 C 78 95.9 76.8 96 75.6 96 c -3.2 0 -6.5 -1.1 -9.3 -3.3 c -.8 -.6 -1 -1.5 -.5 -2.3 c .2 -.4 .7 -.7 1.2 -.8 c .4 -.1 .9 0 1.2 .3 c 3.2 2.4 8.3 4 11.9 1.6 c 1.4 -.9 2.1 -2.7 1.6 -4.3 c -.5 -1.6 -2.2 -2.7 -3.5 -3.4 c -1 -.6 -2.1 -1 -3.3 -1.4 c -.9 -.3 -1.9 -.7 -2.9 -1.2 c -2.4 -1.2 -4 -2.6 -4.8 -4.2 c -1.2 -2.3 -.6 -5.4 1.4 -7.5 c 3.6 -3.8 10 -3.2 14 -.4 c .9 .6 .9 1.7 .4 2.5 c -.5 .8 -1.4 .9 -2.2 .4 c -2 -1.4 -4.4 -2 -6.4 -1.7 c -2 .3 -4.7 2 -4.4 4.6 c .2 1.5 2 2.6 3.3 3.3 c .8 .4 1.5 .7 2.3 .9 c 4.3 1.3 7.2 3.3 8.6 5.7 C 85.4 86.9 85.4 89.7 84.2 91.8 z" transform="translate(-48 -43)" stroke="none"></path>
														</svg>
													</div>
												</div>
											</div>
											<div class="item-card__info">
												<div class="item-card__name typo-l14 item-card__name--two-lines"><?php echo $value->product_name; ?></div>
												<div class="item-card__price-shipping">
													<div class="item-card__price-before-discount typo-l12"><?php echo number_format($value->price_old,0,"","."); ?> ₫</div>
													<div class="item-card__spacer-price"></div>
													<div class="item-card__actual-price typo-m12 item-card__actual-price--has-free-shipping"><?php echo number_format($value->price_sale,0,"","."); ?> ₫</div>
													<div class="item-card__spacer"></div>													
												</div>
											</div>
										</div>
									</a>
								</div>
								<?php } ?>
								<div class="carousel-with-header__item-card">
									<a class="item-card hairline-border" href="#">
										<div>
											<div class="item-card__cover-image-wrapper"></div>
											<div class="item-card__info">
												<div class="item-card__name typo-l14 item-card__name--two-lines"></div>
												<div class="item-card__price-shipping">
													<div class="item-card__actual-price typo-m12"></div>
													<div class="item-card__spacer"></div>
												</div>
												<div class="item-card__popularity">
													<div class="item-card__likes typo-r12">
														<svg class="stardust-icon stardust-icon-like-2 item-card__likes-icon" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
															<path d="m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z" fill="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path>
														</svg>
														<div class="item-card__likes-text">0</div>
													</div>
													<div class="_3W1_tA typo-r10 item-card__ratings">
														<div class="_1Zv2U_">Chưa có đánh giá</div>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a class="see-more-link-screen hairline-border typo-r14" href="/similar_products/35469313/704744530/84">
										<svg class="stardust-icon stardust-icon-arrow-right-bold-circle" enable-background="new 0 0 40 40" viewBox="0 0 40 40">
											<circle cx="20" cy="20" fill="none" r="18.5" stroke-miterlimit="10"></circle>
											<path d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z" transform="translate(15 9)"></path>
										</svg>
										Xem tất cả
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>			
			<div class="_4r684n">
				<div class="stardust-drawer">
					<div class="stardust-drawer__background"></div>
					<div class="stardust-drawer__container stardust-drawer__container--bottom">
						<div class="_1UGzBl">
							<div class="TexmqQ hairline-border-bottom">
								<div class="iJLHli">
									<div class="_3vWZSq">
										<svg viewBox="0 0 16 16" stroke="#FF5722" class="_5luTw1">
											<path stroke-linecap="round" d="M1.1,1.1L15.2,15.2"></path>
											<path stroke-linecap="round" d="M15,1L0.9,15.1"></path>
										</svg>
									</div>
									<div class="_3FG42B">
										<div class="_2v6J1o typo-r16">₫4.490.000</div>
										<div class="L-pKXA typo-r16">₫2.859.000</div>
									</div>
									<div class="_2KZB1W typo-r14">Kho: 1142</div>
								</div>
							</div>
							<div class="_1sClPH hairline-border-bottom">
								<div style="margin-bottom: 10px;">Chọn loại hàng</div>
								<div class="_1hvzF0">
									<div class="_2V7l2q">ĐEN</div>
									<div class="_2V7l2q">XANH</div>
									<div class="_2V7l2q">GOLD</div>
								</div>
							</div>
							<div class="mRUTuM">
								<div class="_1EwII1">Số lượng</div>
								<div>
									<div class="_3d9UXt">
										<div class="_1qr7Q5 _2qqVHC hairline-border">
											<svg class="stardust-icon stardust-icon-minus-sign" enable-background="new 0 0 10 10" viewBox="0 0 10 10">
												<path stroke="none" d="m4.5 4.5h-1-3.5v1h3.5 1 5.5v-1z"></path>
											</svg>
										</div>
										<input class="_3FOo2v hairline-border-up-bottom" type="number" value="1">
										<div class="_1MBXWa hairline-border">
											<svg class="stardust-icon stardust-icon-plus-sign" enable-background="new 0 0 10 10" viewBox="0 0 10 10">
												<path stroke="none" d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"></path>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="_3bM7Ig"><button class="stardust-button stardust-button--primary stardust-button--block _2jYEyr">Thêm vào Giỏ hàng</button></div>
						</div>
					</div>
				</div>
			</div>
			<div class="shipping-option-drawer">
				<div class="stardust-drawer">
					<div class="stardust-drawer__background"></div>
					<div class="stardust-drawer__container stardust-drawer__container--bottom">
						<div class="shipping-option-drawer__content">
							<div class="shipping-option-drawer__title typo-m16">Phí Vận Chuyển</div>
							<div class="shipping-option-drawer__ship-to hairline-border-up-bottom">
								<div class="shipping-option-drawer__ship-to-label typo-l14">Vận chuyển đến:</div>
								<div class="shipping-option-drawer__ship-to-text typo-l14">
									Huyện Ba Vì, Hà Nội
									<svg class="stardust-icon stardust-icon-arrow-right" enable-background="new 0 0 11 11" viewBox="0 0 11 11">
										<path stroke="none" d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
									</svg>
								</div>
							</div>
							<div class="shipping-option-drawer__list">
								<div class="product-drawer-shipping-option-item">
									<div class="product-drawer-shipping-option-item__channel-cost-container">
										<div class="product-drawer-shipping-option-item__channel-name">Shopee 4H</div>
										<div class="product-drawer-shipping-option-item__channel-cost">
											<div class="product-drawer-shipping-option-item__original-channel-cost">₫30.000</div>
											<div class="product-drawer-shipping-option-item__current-channel-cost">Miễn phí vận chuyển</div>
										</div>
									</div>
									<div class="product-drawer-shipping-option-item__delivery-time typo-l14">Giao hàng từ 2-4 giờ</div>
									<div class="product-drawer-shipping-option-item__promotion-text typo-l14">Miễn phí vận chuyển cho đơn hàng từ <span style="font-size: 14px; color: #ff5722;">₫150.000</span> (giảm tối đa <span style="font-size: 14px; color: #ff5722;">₫40.000</span>)</div>
								</div>
								<div class="product-drawer-shipping-option-item">
									<div class="product-drawer-shipping-option-item__channel-cost-container">
										<div class="product-drawer-shipping-option-item__channel-name">Giao Hàng Tiết Kiệm</div>
										<div class="product-drawer-shipping-option-item__channel-cost">
											<div class="product-drawer-shipping-option-item__original-channel-cost">₫15.750</div>
											<div class="product-drawer-shipping-option-item__current-channel-cost">Miễn phí vận chuyển</div>
										</div>
									</div>
									<div class="product-drawer-shipping-option-item__delivery-time typo-l14">Giao hàng từ 1-3 ngày</div>
									<div class="product-drawer-shipping-option-item__promotion-text typo-l14">Miễn phí vận chuyển cho đơn hàng từ <span style="font-size: 14px; color: #ff5722;">₫150.000</span> (giảm tối đa <span style="font-size: 14px; color: #ff5722;">₫40.000</span>)</div>
								</div>
								<div class="product-drawer-shipping-option-item">
									<div class="product-drawer-shipping-option-item__channel-cost-container">
										<div class="product-drawer-shipping-option-item__channel-name">Giao Hàng Nhanh</div>
										<div class="product-drawer-shipping-option-item__channel-cost">
											<div class="product-drawer-shipping-option-item__original-channel-cost">₫15.100</div>
											<div class="product-drawer-shipping-option-item__current-channel-cost">Miễn phí vận chuyển</div>
										</div>
									</div>
									<div class="product-drawer-shipping-option-item__delivery-time typo-l14">Giao hàng từ 1-3 ngày</div>
									<div class="product-drawer-shipping-option-item__promotion-text typo-l14">Miễn phí vận chuyển cho đơn hàng từ <span style="font-size: 14px; color: #ff5722;">₫150.000</span> (giảm tối đa <span style="font-size: 14px; color: #ff5722;">₫40.000</span>)</div>
								</div>
							</div>
							<div class="shipping-option-drawer__confirm hairline-border-up"><button class="stardust-button stardust-button--primary stardust-button--block">XÁC NHẬN</button></div>
						</div>
					</div>
				</div>
			</div>
			<div class="product-page__address-picker-wrapper">
				<div class="address-picker">
					<div class="stardust-drawer">
						<div class="stardust-drawer__background"></div>
						<div class="stardust-drawer__container stardust-drawer__container--bottom">
							<div class="address-picker__content">
								<div class="address-picker__search-bar">
									<div class="stardust-input"><input class="stardust-input__element" type="text" placeholder="Tìm kiếm" value=""></div>
									<div class="address-picker__close-button">
										<svg class="stardust-icon stardust-icon-cross" enable-background="new 0 0 11 11" viewBox="0 0 11 11">
											<path stroke="none" d="m10.7 9.2l-3.8-3.8 3.8-3.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3.8 3.7-3.8-3.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.8 3.7-3.8 3.8c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3l3.8-3.8 3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></path>
										</svg>
									</div>
								</div>
								<div class="address-picker-list-all">
									<ul class="address-picker-list-all__current-level-list">
										<li class="address-picker-list-all__current-level-list-item">An Giang</li>
										<li class="address-picker-list-all__current-level-list-item">Bà Rịa - Vũng Tàu</li>
										<li class="address-picker-list-all__current-level-list-item">Bắc Kạn</li>
										<li class="address-picker-list-all__current-level-list-item">Bắc Giang</li>
										<li class="address-picker-list-all__current-level-list-item">Bạc Liêu</li>
										<li class="address-picker-list-all__current-level-list-item">Bắc Ninh</li>
										<li class="address-picker-list-all__current-level-list-item">Bến Tre</li>
										<li class="address-picker-list-all__current-level-list-item">Bình Dương</li>
										<li class="address-picker-list-all__current-level-list-item">Bình Định</li>
										<li class="address-picker-list-all__current-level-list-item">Bình Phước</li>
										<li class="address-picker-list-all__current-level-list-item">Bình Thuận</li>
										<li class="address-picker-list-all__current-level-list-item">Cà Mau</li>
										<li class="address-picker-list-all__current-level-list-item">Cần Thơ</li>
										<li class="address-picker-list-all__current-level-list-item">Cao Bằng</li>
										<li class="address-picker-list-all__current-level-list-item">Đà Nẵng</li>
										<li class="address-picker-list-all__current-level-list-item">Đắk Lắk</li>
										<li class="address-picker-list-all__current-level-list-item">Đắk Nông</li>
										<li class="address-picker-list-all__current-level-list-item">Điện Biên</li>
										<li class="address-picker-list-all__current-level-list-item">Đồng Nai</li>
										<li class="address-picker-list-all__current-level-list-item">Đồng Tháp</li>
										<li class="address-picker-list-all__current-level-list-item">Gia Lai</li>
										<li class="address-picker-list-all__current-level-list-item">Hà Giang</li>
										<li class="address-picker-list-all__current-level-list-item">Hà Nam</li>
										<li class="address-picker-list-all__current-level-list-item">Hà Nội</li>
										<li class="address-picker-list-all__current-level-list-item">Hà Tĩnh</li>
										<li class="address-picker-list-all__current-level-list-item">Hải Dương</li>
										<li class="address-picker-list-all__current-level-list-item">Hải Phòng</li>
										<li class="address-picker-list-all__current-level-list-item">Hậu Giang</li>
										<li class="address-picker-list-all__current-level-list-item">TP. Hồ Chí Minh</li>
										<li class="address-picker-list-all__current-level-list-item">Hòa Bình</li>
										<li class="address-picker-list-all__current-level-list-item">Hưng Yên</li>
										<li class="address-picker-list-all__current-level-list-item">Khánh Hòa</li>
										<li class="address-picker-list-all__current-level-list-item">Kiên Giang</li>
										<li class="address-picker-list-all__current-level-list-item">Kon Tum</li>
										<li class="address-picker-list-all__current-level-list-item">Lai Châu</li>
										<li class="address-picker-list-all__current-level-list-item">Lâm Đồng</li>
										<li class="address-picker-list-all__current-level-list-item">Lạng Sơn</li>
										<li class="address-picker-list-all__current-level-list-item">Lào Cai</li>
										<li class="address-picker-list-all__current-level-list-item">Long An</li>
										<li class="address-picker-list-all__current-level-list-item">Nam Định</li>
										<li class="address-picker-list-all__current-level-list-item">Nghệ An</li>
										<li class="address-picker-list-all__current-level-list-item">Ninh Bình</li>
										<li class="address-picker-list-all__current-level-list-item">Ninh Thuận</li>
										<li class="address-picker-list-all__current-level-list-item">Phú Thọ</li>
										<li class="address-picker-list-all__current-level-list-item">Phú Yên</li>
										<li class="address-picker-list-all__current-level-list-item">Quảng Bình</li>
										<li class="address-picker-list-all__current-level-list-item">Quảng Nam</li>
										<li class="address-picker-list-all__current-level-list-item">Quảng Ngãi</li>
										<li class="address-picker-list-all__current-level-list-item">Quảng Ninh</li>
										<li class="address-picker-list-all__current-level-list-item">Quảng Trị</li>
										<li class="address-picker-list-all__current-level-list-item">Sóc Trăng</li>
										<li class="address-picker-list-all__current-level-list-item">Sơn La</li>
										<li class="address-picker-list-all__current-level-list-item">Tây Ninh</li>
										<li class="address-picker-list-all__current-level-list-item">Thái Bình</li>
										<li class="address-picker-list-all__current-level-list-item">Thái Nguyên</li>
										<li class="address-picker-list-all__current-level-list-item">Thanh Hóa</li>
										<li class="address-picker-list-all__current-level-list-item">Thừa Thiên Huế</li>
										<li class="address-picker-list-all__current-level-list-item">Tiền Giang</li>
										<li class="address-picker-list-all__current-level-list-item">Trà Vinh</li>
										<li class="address-picker-list-all__current-level-list-item">Tuyên Quang</li>
										<li class="address-picker-list-all__current-level-list-item">Vĩnh Long</li>
										<li class="address-picker-list-all__current-level-list-item">Vĩnh Phúc</li>
										<li class="address-picker-list-all__current-level-list-item">Yên Bái</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="product-bottom-panel-wrapper">
				<div class="product-bottom-panel">
					<div class="product-bottom-panel__chat-now">
						<svg class="stardust-icon stardust-icon-web-chat product-bottom-panel__chat-now-icon" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
							<g stroke="none">
								<path d="m11.2 4.1c-1.1-1.3-3-2.2-5-2.2-3.4 0-6.2 2.3-6.2 5.2 0 1.7.9 3.2 2.4 4.2l-.7 1.4s-.2.4.1.6c.3.3 1.1-.1 1.1-.1l2.4-.9c.3.1.6.1.9.1.7 0 1.5-.1 2.1-.3.5.2 1 .2 1.6.2h.6l2.1 1.5c.6.4.8.1.8-.4v-2.2c.9-.8 1.5-1.8 1.5-3 0-2-1.6-3.6-3.7-4.1zm-5.6 7.3h-.5-.2l-1.8.7.5-1.1-.7-.5c-1.3-.8-2-2-2-3.4 0-2.3 2.3-4.2 5.2-4.2 2.8 0 5.2 1.9 5.2 4.2s-2.4 4.3-5.2 4.3c-.2 0-.4 0-.5 0zm6.8-.8v1.2c0 .6-.1.4-.4.2l-1-.8c-.4.1-.8.1-1.2.1 1.5-1 2.5-2.5 2.5-4.2 0-.6-.1-1.1-.3-1.7 1.2.6 1.9 1.6 1.9 2.7 0 1-.5 1.9-1.5 2.5z"></path>
								<circle cx="3.1" cy="7.1" r=".8"></circle>
								<circle cx="9.1" cy="7.1" r=".8"></circle>
								<circle cx="6.1" cy="7.1" r=".8"></circle>
							</g>
						</svg>
						<div class="product-bottom-panel__chat-now-text">Chat ngay</div>
					</div>
					<div class="product-bottom-panel__separator">
						<div class="product-bottom-panel__separator-real"></div>
					</div>
					<div class="product-cart-and-buy-buttons">
						<div class="product-bottom-panel__add-to-cart">
							<svg class="stardust-icon stardust-icon-add-to-cart product-bottom-panel__add-to-cart-icon" enable-background="new 0 0 15 15" viewBox="0 0 15 15">
								<path d="m .5.5h2.2l2.5 10.5h7.2l2.1-7.5h-10.8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path>
								<circle cx="6" cy="13.5" r="1"></circle>
								<circle cx="11.5" cy="13.5" r="1"></circle>
								<path d="m7.5 7h3" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
								<path d="m9 8.5v-3" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
							</svg>
							<div class="product-bottom-panel__add-to-cart-text">Thêm vào Giỏ hàng</div>
						</div>
						<div class="product-bottom-panel__buy-now">Mua ngay</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="iframe-modal-provider__iframe-container iframe-modal-provider__iframe-container--hide">
	<div class="stardust-spinner--hidden stardust-spinner">
		<div class="stardust-spinner__background">
			<div class="stardust-spinner__main">
				<svg width="34" height="12" viewBox="-1 0 33 12">
					<circle class="stardust-spinner__spinner" cx="4" cy="6" r="4" fill="#ff5722"></circle>
					<circle class="stardust-spinner__spinner" cx="16" cy="6" r="4" fill="#ff5722"></circle>
					<circle class="stardust-spinner__spinner" cx="28" cy="6" r="4" fill="#ff5722"></circle>
				</svg>
			</div>
		</div>
	</div>
</div>

<style>
      @keyframes movement {
        from {
          transform: translateY(2px);
        }

        50% {
          transform: translateY(-2px)
        }

        to {
          transform: translateY(2px)
        }
      }

      svg circle {
        animation: 0.4s movement linear infinite;
      }

      svg circle:nth-child(2) {
        animation-delay: 0.1s;
      }

      svg circle:nth-child(3) {
        animation-delay: 2s;
      }
	</style>
	