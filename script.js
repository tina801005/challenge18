const app = Vue.createApp({
	data() {
		return {
			productsdata: [
			    {
			       "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-waffle-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-waffle-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-waffle-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-waffle-desktop.jpg?raw=true"
			       },
			       "name": "Waffle with Berries",
			       "category": "Waffle",
			       "price": 6.50,
			       "quantity":0
			    },
			    {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-creme-brulee-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-creme-brulee-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-creme-brulee-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-creme-brulee-desktop.jpg?raw=true"
			        },
			        "name": "Vanilla Bean Crème Brûlée",
			        "category": "Crème Brûlée",
			        "price": 7.00,
			        "quantity":0
			    },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-macaron-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-macaron-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-macaron-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-macaron-desktop.jpg?raw=true"
			        },
			        "name": "Macaron Mix of Five",
			        "category": "Macaron",
			        "price": 8.00,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-tiramisu-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-tiramisu-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-tiramisu-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-tiramisu-desktop.jpg?raw=true"
			        },
			        "name": "Classic Tiramisu",
			        "category": "Tiramisu",
			        "price": 5.50,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-baklava-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-baklava-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-baklava-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-baklava-desktop.jpg?raw=true"
			        },
			        "name": "Pistachio Baklava",
			        "category": "Baklava",
			        "price": 4.00,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-meringue-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-meringue-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-meringue-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-meringue-desktop.jpg?raw=true"
			        },
			        "name": "Lemon Meringue Pie",
			        "category": "Pie",
			        "price": 5.00,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-cake-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-cake-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-cake-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-cake-desktop.jpg?raw=true"
			        },
			        "name": "Red Velvet Cake",
			        "category": "Cake",
			        "price": 4.50,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-brownie-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-brownie-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-brownie-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-brownie-desktop.jpg?raw=true"
			        },
			        "name": "Salted Caramel Brownie",
			        "category": "Brownie",
			        "price": 4.50,
			        "quantity":0
			     },
			     {
			        "image": {
			            "thumbnail": "https://github.com/tina801005/challenge18/blob/main/images/image-panna-cotta-thumbnail.jpg?raw=true",
			            "mobile": "https://github.com/tina801005/challenge18/blob/main/images/image-panna-cotta-mobile.jpg?raw=true",
			            "tablet": "https://github.com/tina801005/challenge18/blob/main/images/image-panna-cotta-tablet.jpg?raw=true",
			            "desktop": "https://github.com/tina801005/challenge18/blob/main/images/image-panna-cotta-desktop.jpg?raw=true"
			        },
			        "name": "Vanilla Panna Cotta",
			        "category": "Panna Cotta",
			        "price": 6.50,
			        "quantity":0
			     }
			],
			showOrderConfire: false,
			showMask: false

		};
	},

	methods:{
		// 加進購物車 商品數量=1
		addToCard(item) {
			item.quantity =1;
		},

		// 增加購買數量
		addQty(item) {
			item.quantity++;
		},

		// 減少購買數量
		minusQty(item) {
			if (item.quantity > 0) {
				item.quantity--;
			}
		},

		// 移除購物車裡的單項商品，直接讓商品數量歸0
		remove(item) {
			item.quantity = 0;
		},

		// 計算單項總價，雖然也可以在html模板計算，但因為會使用到的地方較多，這樣就能重複使用
		itemTotal(item) {
			return (item.quantity * item.price).toFixed(2);
		},

		showOrder(){
			this.showOrderConfire = true;
			this.showMask = true;
		},

		// 開始新的訂單，直接把商品數量全數歸0
		// 因前面模板已寫v-if="totalQty===0"的模板，所以當全數歸0就會回到購物車空車狀態
		// showOrderConfire是為了讓訂單已送出的畫面關掉~
		startNewOrder() {
			this.productsdata.forEach( item => {
				item.quantity = 0;
			});
			this.showOrderConfire = false;
			this.showMask = false;
		}



	},

	computed: {
		// 購物車自動加總購買的商品總數量並即時更新
		totalQty() {
			return this.productsdata.reduce((sum, item) => sum + item.quantity, 0);
		},

		// 將購買的商品直接加進購物車
		// (此方法為非正式作法，正式作法應該是要用陣列來把購買的商品push進購物車陣列裡)
		cartItems() {
			return this.productsdata.filter(item => item.quantity > 0);
		},

		// 購物車總金額自動加總並即時更新
		cartTotal() {
			return this.productsdata.reduce((total, item) => {
				return total + item.quantity * item.price;
			}, 0);
		}

	}	

});
app.mount('#app');