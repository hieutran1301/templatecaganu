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
                    <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" class="lever_2" style="z-index:997" href="/bao-chi-tai-tro">
                        <span itemprop="name">Báo chí tài trợ</span>
                    </a> &gt;
                    <meta itemprop="position" content="2">
                </span>
                <span class="current" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" class="lever_3" style="z-index:997" href="#">
                        <span itemprop="name"><?php echo $data['result']['news']->title; ?></span>
                    </a>
                    <meta itemprop="position" content="2">
                </span>
            </div>
        </div>
    </div>
</section>
<section id="News">
    <div class="container">
        <div class="news-title">
            <h3><?php echo $data['result']['news']->title; ?></h3>
        </div>
        <div class="date-upload">
            <span>Ngày đăng: <?php echo $data['result']['news']->date_add; ?></span>
        </div>
        <div class="news-description">
            <span><?php echo $data['result']['news']->description; ?></span>
        </div>
        <div class="news-content">
            <span><?php echo $data['result']['news']->content; ?></span>
        </div>
    </div>
</section>