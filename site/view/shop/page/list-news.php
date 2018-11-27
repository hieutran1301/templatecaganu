<?php #var_dump($data['result']['news'][0]); ?>

<section id='HeaderDetail'>
    <div class="header_details">
        <div class="container">
            <div class="pull-left" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a class="lever_1" style="z-index:998" href="/" itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
                        <span itemprop="name">Trang chủ</span>
                    </a> &gt;
                    <meta itemprop="position" content="1">
                </span>
                <span class="current" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" class="lever_2" style="z-index:997" href="<?php echo $data['result']['info']->url_string; ?>">
                        <span itemprop="name"><?php echo $data['seo']['title'];?></span>
                    </a>
                    <meta itemprop="position" content="2">
                </span>
            </div>
        </div>
    </div>
</section>
<section>
	<div class="container" style='width: 100%;background: #f9f9f9;'>
		<div class="row">
			<h1 class="project-name">Tập đoàn bán lẻ Caganu - Caganu Group</h1>
			<div id="timeline">
	<?php
		foreach ($data['result']['news'] as $news) { ?>
				<div class="timeline-item">
					<div class="timeline-icon">
						<a href="/<?php echo $news->url_string; ?>">
							<img src="<?php echo $news->avatar; ?>" alt="<?php echo $row_news['cx_title'];?>">
						</a>	
					</div>
					<div class="timeline-content right">
						<h2 style="font-size: 20px;"><a href="/<?php echo $news->url_string; ?>"><?php echo $news->title; ?></a></h2>
						<p>
							<strong><?php echo $news->date_add; ?></strong><?php echo $news->description; ?>
						</p>
						<a href="/<?php echo $news->url_string; ?>" class="btn-xem-ngay">Xem ngay</a>
					</div>
				</div>
	<?php
		}
	?>			
				<span class='bao-chi-end-caganu'>Caganu Group</span>
			</div>		
		</div>
	</div>	
</section>