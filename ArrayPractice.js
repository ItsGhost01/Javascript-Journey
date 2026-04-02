// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company from the array
companies.shift();
console.log("After removing the first company: " + companies);

// b. Remove Uber & Add Ola in its place
console.log(companies);

companies.splice(1, 1, "Ola");
console.log("After removing Uber and adding Ola: " + companies);

// c. Add Amazon at the end
companies.push("Amazon");
console.log("After adding Amazon: " + companies);
