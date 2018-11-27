//FORMAT NUMBER
function J_Formatatnumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
       val = val.toString().replace(/(\d+)(\d{3})/, '$1'+'.'+'$2');
   }
   return val;
}
//END FORMAT NUMBER
//SHOPPING CARD
var shoppingCart = (function () {
    // Private methods and properties
    var cart = [];
    function Item(sku_id,category_id,name, price, count,images,price_old,sku,marketplace_id,marketplace_name) {
      this.sku_id         = sku_id;
      this.category_id    = category_id;
      this.name           = name;
      this.price          = price;
      this.count          = count;
      this.images         = images;
      this.price_old      = price_old;
      this.sku            = sku;
      this.marketplace_id = marketplace_id;
      this.marketplace_name = marketplace_name;
    }
    function saveCart() {
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }
    function loadCart() {
      cart = JSON.parse(localStorage.getItem("shoppingCart"));
      if (cart === null) {
        cart = []
      }
    }
    loadCart();
    // Public methods and properties
    var obj = {};
    obj.addItemToCart = function (sku_id,category_id,name, price, count,images,price_old,sku,marketplace_id,marketplace_name) {
      for (var i in cart) {
        if (cart[i].sku_id === sku_id) {
          cart[i].count += count;
          saveCart();
          return;
        }
      }
      var item = new Item(sku_id,category_id,name, price, count,images,price_old,sku,marketplace_id,marketplace_name);
      cart.push(item);
      saveCart();
    };
    obj.setCountForItem = function (sku_id, count) {
      for (var i in cart) {
        if (cart[i].sku_id === sku_id) {
          cart[i].count = count;
          break;
        }
      }
      saveCart();
    };
    obj.removeItemFromCart = function (sku_id) { // Removes one item
      for (var i in cart) {
        if (cart[i].sku_id === sku_id) { // "3" === 3 false
          cart[i].count--; // cart[i].count --
          if (cart[i].count === 0) {
            cart.splice(i, 1);
          }
          break;
        }
      }
      saveCart();
    };
    obj.removeItemFromCartAll = function (sku_id) { // removes all item name
      console.log(cart);
      for (var i in cart) {
        if (cart[i].sku_id === sku_id) {
          cart.splice(i, 1);
          break;
        }
      }
      saveCart();
    };
    obj.clearCart = function () {
      cart = [];
      saveCart();
    }
    obj.countCart = function () { // -> return total count
      var totalCount = 0;
      for (var i in cart) {
        totalCount += cart[i].count;
      }
      return totalCount;
    };
    obj.totalCart = function () { // -> return total cost
      var totalCost = 0;
      for (var i in cart) {
        totalCost += cart[i].price * cart[i].count;
      }
      return totalCost.toFixed(0);
    };
    obj.listCart = function () { // -> array of Items
      var cartCopy = [];
      //console.log("Listing cart");
      //console.log(cart);
      for (var i in cart) {
        //console.log(i);
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(0);
        cartCopy.push(itemCopy);
      }
      // console.log(cart);
      return cartCopy;
    };
  // ----------------------------
    return obj;
  })();
  //END SHOPPING CARD

  function displayCart() {
    var cartArray = shoppingCart.listCart();
    //console.log(cartArray);
  }
