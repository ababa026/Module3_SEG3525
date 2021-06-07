	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		organic: true,
		lactoseFree: true,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 1.99
	},
	{
		name: "bread",
		organic: false,
		lactoseFree: true,
		nutFree: false,
				FamilyPack: false,
		EasyFood:false,
		price: 2.35
	},
	{
		name: "salmon",
		organic: false,
		lactoseFree: true,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 10.00
	},
		{
		name: "nut mix",
		organic: false,
		lactoseFree: true,
		nutFree: false,
				FamilyPack: false,
		EasyFood:false,
		price: 3.00
	},
			{
		name: "milk",
		organic: false,
		lactoseFree: false,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 4.00
	},
			{
		name: "potato",
		organic: true,
		lactoseFree: true,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 2.99
	},
	{
		name: "cereal",
		organic: false,
		lactoseFree: true,
		nutFree: false,
		price: 5.00
	},
		{
		name: "cucumber",
		organic: true,
		lactoseFree: true,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 3.00
	},
		{
		name: "chicken",
		organic: true,
		lactoseFree: true,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 10
	},
		{
		name: "yogurt",
		organic: false,
		lactoseFree: false,
		nutFree: true,
				FamilyPack: false,
		EasyFood:false,
		price: 5.00
	},

			{
		name: "chicken family pack",
		organic: true,
		lactoseFree: true,
		nutFree: true,
		FamilyPack: true,
		EasyFood:false,
		price: 30
	},

	{
		name: "salmon family pack",
		organic: true,
		lactoseFree: true,
		nutFree: true,
		FamilyPack: true,
		EasyFood:false,
		price: 30.00
	},

	{
		name: "cereal family pack",
		organic: false,
		lactoseFree: true,
		nutFree: false,
		FamilyPack: true,
		EasyFood:false,
		price: 15.00
	},

		{
		name: "chicken soup",
		organic: false,
		lactoseFree: true,
		nutFree: true,
		EasyFood:true,
				FamilyPack: false,
		price: 5.00
	},

			{
		name: "vegetable soup",
		organic: false,
		lactoseFree: true,
		nutFree: true,
		EasyFood:true,
		FamilyPack: false,
		price: 5.00
	},

				{
		name: "grape juice",
		organic: false,
		lactoseFree: true,
		nutFree: true,
		FamilyPack: false,
		EasyFood:true,
		price: 5.00
	},

					{
		name: "orange juice",
		organic: false,
		lactoseFree: true,
		FamilyPack: false,
		nutFree: true,
		EasyFood:true,
		price: 5.00
	},


					{
		name: "instant oats",
		organic: false,
		lactoseFree: true,
		nutFree: false,
		FamilyPack: false,
		EasyFood:true,
		price: 5.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
				else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}

						else if ((restriction == "FamilyPack") && (prods[i].FamilyPack == true)){
			product_names.push(prods[i].name);
		}

						else if ((restriction == "EasyFood") && (prods[i].EasyFood == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListProductsPrice(prods, restriction) {
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_prices.push(prods[i].price);
		}
				else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_prices.push(prods[i].price);
		}
								else if ((restriction == "FamilyPack") && (prods[i].FamilyPack == true)){
			product_prices.push(prods[i].price);
		}

						else if ((restriction == "EasyFood") && (prods[i].EasyFood == true)){
			product_prices.push(prods[i].price);
		}
	}
	
	return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
