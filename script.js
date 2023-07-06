

// Function to handle adding a product to the cart
function addToCart(event) {
    var button = event.target;
    var productDiv = button.parentNode;
    var productName = productDiv.querySelector('h2').textContent;
  
    // Store the added product in local storage
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }
    cartItems.push(productName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Replace the button with the product added message
    var productAddedMsg = document.createElement('p');
    productAddedMsg.textContent = 'Product added!';
    productAddedMsg.classList.add('added-message');
    productDiv.replaceChild(productAddedMsg, button);
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', addToCart);
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      cartItems = JSON.parse(cartItems);

      var cartItemsSection = document.querySelector('.cart-items');

      // Create and append list items for each cart item
      cartItems.forEach(function(item) {
        var listItem = document.createElement('div');
        listItem.classList.add('cart-item');

        // Create and append image element
        var itemImage = document.createElement('img');
        itemImage.src = getImageSource(item);// Update the path to your product images
        itemImage.alt = item;
        listItem.appendChild(itemImage);

        var itemName = document.createElement('p');
        itemName.textContent = item;
        listItem.appendChild(itemName);

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
          removeCartItem(item);
          listItem.remove();
        });
        listItem.appendChild(removeButton);

        cartItemsSection.appendChild(listItem);
      });
    }
  });

  function removeCartItem(item) {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      var itemIndex = cartItems.indexOf(item);
      if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }
    }
  }


  function getImageSource(item) {
    // Define the mapping between the cart item and its image source
    var imageMapping = {
      'product1': 'assets/product1.jpg',
      'product2': 'assets/product2.jpg',
      'product3': 'assets/product3.jpg',
      'product4': 'assets/product4.jpg',
      'product5': 'assets/product5.jpg',
      'product6': 'assets/product6.jpg',
      'product7': 'assets/product7.jpg',
      'product8': 'assets/product8.jpg',
      'product9': 'assets/product9.jpg',
      
     
    };
  
    // Return the image source based on the item
    return imageMapping[item] || 'assets/default.png'; // Specify a default image source if the item doesn't have a specific mapping
  }