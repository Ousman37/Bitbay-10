console.log('hello');

$(document).ready(function () {
  $('#search').on('keyup', function () {
    var value = $(this).val();
    console.log(value);
    $.ajax({
      url: 'https://api.noroff.dev/api/v1/auction/listings',
      type: 'post',
      data: {
        val: value,
      },
      success: function (data) {
        $('#data').html(data);
      },
    });
  });
});

// console.log('Hello world ');

// const productsContainer = document.getElementById('products');
// const searchInput = document.getElementById('search');

// const ListingsURL = 'https://api.noroff.dev/api/v1/auction/listings';

// // Fetch data and create product cards
// function createProductCards(products) {
//   productsContainer.innerHTML = '';
//   products.forEach(product => {
//     const productCard = document.createElement('div');
//     productCard.className = 'col-md-4';
//     productCard.innerHTML = `
//       <div class="card mb-4 box-shadow">
//         <img class="card-img-product" src="${product.media[0]}" alt="${product.title}">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.description}</p>
//           <div class="d-flex justify-content-between align-items-center">
//             <a href="/src/public/bid_listing.html?id=${product.id}" class="btn btn-sm btn-outline-secondary">Add Bid Now</a>
//             <small class="text-muted fs-1">${product._count.bids}</small>
//           </div>
//         </div>
//       </div>
//     `;
//     productsContainer.appendChild(productCard);
//   });
// }

// // Search products based on input value
// function searchProducts(event) {
//   const searchTerm = event.target.value.toLowerCase();
//   let url = ListingsURL;
//   fetch(url, {
//     method: 'GET',
//   })
//     .then(response => response.json())
//     .then(res => {
//       const filteredProducts = res.filter(product => {
//         return (
//           product.title.toLowerCase().includes(searchTerm) ||
//           product.description.toLowerCase().includes(searchTerm)
//         );
//       });
//       createProductCards(filteredProducts);
//     })
//     .catch(err => {
//       console.log('Error -- ', err.message);
//     });
// }

// // Add event listeners
// searchInput.addEventListener('input', searchProducts);
