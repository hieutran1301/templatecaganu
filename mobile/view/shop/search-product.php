<?php //var_dump($data); ?>
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
<div class="title-page">
   <span><?php print $data["seo"]["title"]; ?></span>
</div>
<div class="page-wrapper">
    <div class="search-page">  
        <div class="stardust-drawer">
            <div class="stardust-drawer__background"></div>
            <div class="stardust-drawer__container stardust-drawer__container--right"></div>
        </div>
        <div role="main">
            <div class="search-items-container">
                <div>
                    <div class="stardust-tabs-header-anchor"></div>
					<nav class="stardust-tabs-header-wrapper" style="top: 44px;">
						<ul class="stardust-tabs-header stardust-tabs-header--light">
							<li class="stardust-tabs-header__tab stardust-tabs-header__tab--active">
								<div class="search-items-tabs-header search-items-tabs-header--popular">Liên quan
									<div class="search-items-tabs-header__triangles">
										<div class="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--down" style="border-top-color: rgb(255, 87, 34); border-bottom-color: transparent;"></div>
									</div>
									<div>
										<div></div>
									</div>
								</div>
							</li>
							<li class="stardust-tabs-header__tab">
								<div class="search-items-tabs-header">Mới nhất</div>
							</li>
							<li class="stardust-tabs-header__tab">
								<div class="search-items-tabs-header">Bán chạy</div>
							</li>
							<li class="stardust-tabs-header__tab">
								<div class="search-items-tabs-header">Giá
									<div class="search-items-tabs-header__triangles">
										<div class="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--up" style="border-top-color: transparent; border-bottom-color: currentcolor;"></div>
										<div class="search-items-tabs-header__icon-triangle search-items-tabs-header__icon-triangle--down" style="border-top-color: currentcolor; border-bottom-color: transparent;"></div>
									</div>
								</div>
							</li>
						</ul>
					</nav>
					<div class="stardust-tabs-panels">
						<section class="stardust-tabs-panels__panel" style="display: block;">
							<div class="search-items-container__tab-panel">
								<div class="search-items-container__filter-bar-wrapper" style="top: 88px; transform: translateY(0px);">
									<div class="filter-bar hairline-border-bottom">
										<!--div class="filter-bar__item-wrapper">
											<button class="stardust-button filter-bar-item hairline-border typo-r12">
												<div class="filter-bar-item__inner">
													<div class="filter-bar-item__inner-text">Shopee Mall</div>
												</div>
											</button>
										</div-->
										<div class="filter-bar__item-wrapper">
											<button class="stardust-button filter-bar-item hairline-border typo-r12">
												<div class="filter-bar-item__inner">
													<div class="filter-bar-item__inner-text">Yêu thích</div>
												</div>
											</button>
										</div>
										<div class="filter-bar__item-wrapper">
											<div>
												<div class="stardust-popover">
													<div class="stardust-popover__target">
														<button class="stardust-button filter-bar-item hairline-border typo-r12">
															<div class="filter-bar-item__inner">
																<div class="filter-bar-item__inner-text">Từ</div>
																<svg class="stardust-icon stardust-icon-arrow-down filter-bar-item__icon-arrow" enable-background="new 0 0 11 11" viewBox="0 0 11 11">
																	<path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
																</svg>
															</div>
														</button>
													</div>
												</div>
											</div>
										</div>
										<div class="filter-bar__item-wrapper">
											<div>
												<div class="stardust-popover">
													<div class="stardust-popover__target">
														<button class="stardust-button filter-bar-item hairline-border typo-r12">
															<div class="filter-bar-item__inner">
																<div class="filter-bar-item__inner-text">Vận chuyển</div>
																<svg class="stardust-icon stardust-icon-arrow-down filter-bar-item__icon-arrow" enable-background="new 0 0 11 11" viewBox="0 0 11 11">
																	<path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
																</svg>
															</div>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="categories-filter-bar typo-l14">
										<div class="stardust-horizontal-scroll-view hide-scrollbar">
											<div class="categories-filter-bar__category" style="background: rgb(134, 175, 215);">Áo khoác &amp; Áo vest</div>
											<div class="categories-filter-bar__category" style="background: rgb(118, 201, 189);">Set trang phục &amp; Jumpsuit</div>
											<div class="categories-filter-bar__category" style="background: rgb(136, 207, 129);">Áo kiểu</div>
											<div class="categories-filter-bar__category" style="background: rgb(134, 175, 215);">Đồ đôi</div>
											<div class="categories-filter-bar__category" style="background: rgb(118, 201, 189);">Áo Croptop</div>
											<div class="categories-filter-bar__category" style="background: rgb(136, 207, 129);">Đầm</div>
											<div class="categories-filter-bar__category" style="background: rgb(134, 175, 215);">Áo hai dây &amp; Áo ba lỗ</div>
											<div class="categories-filter-bar__category" style="background: rgb(118, 201, 189);">Đồ lót, Đồ ngủ &amp; Đồ mặc nhà</div>
											<div class="categories-filter-bar__category" style="background: rgb(136, 207, 129);">Áo sơ mi</div>
											<div class="categories-filter-bar__category" style="background: rgb(134, 175, 215);">Trang phục thể thao</div>
											<div class="categories-filter-bar__category" style="background: rgb(118, 201, 189);">Trang Phục Đông</div>
										</div>
									</div>
								</div>
								<div class="item-card-list">
									<?php foreach($data["result"]["product"] as $index => $valueProduct){ ?>
										<div class="item-card-list__item-card-wrapper">
											<a class="item-card hairline-border" href="/Áo-Polo-thêu-Ghost-i.42021823.1558604534">
												<div>
													<div class="item-card__cover-image-wrapper">
														<div class="animated-lazy-image item-card__cover-image"><img class="item-card__cover-image animated-lazy-image__image--ready" src="<?php print $valueProduct->images; ?>" style="object-fit: contain;"></div>											
													</div>
													<div class="item-card__info">
														<div class="item-card__name typo-l14 item-card__name--two-lines"><?php print $valueProduct->product_name; ?></div>
														<div class="item-card__price-shipping">
															<div class="item-card__price-before-discount typo-l12"><?php print number_format($valueProduct->price_old,0,"","."); ?> ₫</div>
															<div class="item-card__spacer-price"></div>
															<div class="item-card__actual-price typo-m12"><?php print number_format($valueProduct->price_sale,0,"","."); ?> ₫</div>
															<div class="item-card__spacer"></div>
														</div>
													</div>
												</div>
											</a>
										</div>
									<?php } ?>
								</div>
							</div>
						</section>                           
					</div>
                </div>
            </div>
            <div>
		</div>
    </div>
    </div>
</div>
   