// 1. Show me how to calculate the average price of all items. Please console.log the average.

//Using the original array (called 'items') as a basis, we use the map method to create a new, shortened array (called 'itemPrices') that contains only the 'price' property of each object, and omits the other 24 properties for each object.
var itemPrices = items.map(function(item) {
  return item.price;
});
//Now that we have a new array that lists the price of every object, we use the reduce method to add each price together and return the total (called 'sumOfPrices'. We use that number to divide by the total number of objects and find the average, which is printed to the console.)
var sumOfPrices = itemPrices.reduce(function(total, current) {
  return total + current;
});
console.log('The average price is $' + parseFloat(sumOfPrices/itemPrices.length).toFixed(2));
//the above returns 23.62599, which we round to the price $23.63.
/////////////////////////////////////////////

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

//We use the filter method to sort through each item and return an array containing only the items with a price greater than 14 and less than 18.  We store this list of objects in a new array called 'cheapItems'.
var cheapItems = items.filter(function(item) {
  return item.price > 14 && item.price < 18;
})
console.log("Items that cost between $14.00 USD and $18.00 USD: ");
cheapItems.forEach(function(item){
  console.log(item.title);
});
/////////////////////////////////////////////

// 3. Show me how to find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

//We use the filter method to sort through each item and return an array containing any item with the currency code of GBP. We store this in a new array called 'gbpItems'.
var gbpItems = items.filter(function(item){
  return item.currency_code === "GBP";
})
gbpItems.forEach(function(item){
  console.log(item.title + ' costs £' + item.price);
});

/////////////////////////////////////////////

// 4. Show me how to find which items are made of wood. Please console.log the ones you find.

//We use the filter method to sort through each item and return an array containing any object whose materials property contains 'wood'.
//The way to check whether an item's 'materials' property contains 'wood' is by eliminating any objects from the list that do not have 'wood' at an index value of 0, 1, 2, 3, ... etc. up to infinity. By checking for an index value that is not greater than -1, we filter only items whose index value actually generate a number.
var woodItems = items.filter(function(item){
  return item.materials.indexOf('wood') > -1;
});
var woodTitles = woodItems.map(function(item) {
  return item.title;
})
console.log(woodTitles + "");
/////////////////////////////////////////////

// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
var manyMaterials = items.filter(function(item) {
  return item.materials.length > 7;
});

manyMaterials.forEach(function(item){
  console.log(item.title + ' has ' + item.materials.length + ' materials: ' + item.materials)
})
/////////////////////////////////////////////

// 6. Show me how to calculate how many items were made by their sellers

//Use the filter method to sort through each item and find the ones whose 'who_made' value is equal to the string 'i_did'. Then store those objects in a new array called 'homemade'.
var homemade = items.filter(function(item) {
  return item.who_made === 'i_did';
})
console.log(homemade.length + ' were made by their sellers');
