
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let restaurant= {
  name: "MyFaveriteRestauraunt",
  cuisine:"Italian",
  rating:5.0,
  location: "123 Main Street, City, Country"
}
console.log(restaurant.location);
console.log(restaurant.name);

// Add a new key called location and add the restaurant's location



// Change the rating of the restaurant to increase it by one

restaurant.rating += 1
console.log(restaurant)

// Add a new key called test and set the value to null

restaurant.test=null;
console.log(restaurant);

// Delete the test key

delete restaurant.test;
console.log(restaurant);

// Console log the object to see if the test key is gone



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

let rest = [restaurant]

for(let name in restaurant){
  console.log(name, "is", restaurant[name])
}


