function header() {
    return `<div class="nav-top">
    <img
      class="fix-nav-relative"
      src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"
      alt="Advertisement"
    />
    <a href="https://play.google.com/store/apps/details?id=com.beautybebo"
      ><img
        class="fix-nav-absolute"
        src="https://www.beautybebo.com/pub/media/bb-app.png"
        alt="google play store"
    /></a>
  </div>
  <div class="nav-middle-part">
    <div class="one">
      <div class="nav-middle-one">
        <a href="">
          <img
            src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
            alt="BeautyBebo_logo"
          />
        </a>
      </div>
      <div class="divided-nav-second">
        <div class="nav-middle-two">
          <select name="categories" id="categories">
            <option value="All categories">All Categories</option>
            <option value="makeup">--Makeup</option>
            <option value="mom">--Mom and Baby Care</option>
          </select>
          <input type="text" placeholder="Enter Your Search" />
        </div>
        <button class="search-nav">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>

    <div class="two">
      <div class="nav-middle-three">
        <i class="fa fa-heart"></i> <i class="fa fa-user"></i>
        <p class="hidden dis">My Account</p>
      </div>
    </div>
  </div>
  <nav>
    <div class="navigation-bar" onclick="toggleMobileMenu(this)">
      <div class="icon-create">
        <div class="icon-bar1"></div>
        <div class="icon-bar2"></div>
        <div class="icon-bar3"></div>
      </div>
      <ul>
        <li>MAKEUP<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>SKIN<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>HAIR<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>PERSONAL CARE<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>MOM & BABY CARE<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>FRAGNANCE<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>AYURVEDA<span class="material-icons-outlined expand"> expand_more </span></li>
        <li>BRANDS<span class="material-icons-outlined expand"> expand_more </span></li>
      </ul>
      <div class="add-to-cart">
        <div>
          <i class="fas fa-shopping-bag"></i>
          <div>MY CART -</div>
        </div>
      </div>
    </div>
  </nav>`
}

export default header;