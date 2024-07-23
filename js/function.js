function crateCard(data){
    return ` <div class="pro wrapper" id="vrapper" data-id="${data.id}">
    <img src="${data.attributes.image}" width="100" height="100" alt="">
    <p>${data.attributes.title}</p>
    <p>$${data.attributes.price}</p>
  </div>`;
}
export{crateCard}