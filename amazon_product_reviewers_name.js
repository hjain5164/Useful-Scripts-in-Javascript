// Open any product reviews page.
// Example : https://www.amazon.in/Amazon-Echo-Smart-speaker-Powered/product-reviews/B0725W7Q38/ref=cm_cr_dp_d_show_all_top?ie=UTF8&reviewerType=all_reviews
//Run the code in the browser's console

var t = document.getElementsByClassName("a-profile-name");


//Print the names of the customers who reviewed the product
for(var i=0; i<t.length; i++)
  console.log(t[i].textContent);