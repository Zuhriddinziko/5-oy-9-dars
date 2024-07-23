function elementYasash (data){
  return `  <div class="wrapper" id="wrapper">
  <div class="image">
      <img id="image" src="${data.data.attributes.image}" width="200" height="200" alt="">
  </div>
  <div class="info">
      <h2 id="title">
          ${data.data.attributes.title}
      </h2>
      <h3 id="company">${data.data.attributes.company}</h3>
      <h4 id="narx">$${data.data.attributes.price}</h4>
      <p id="description">${data.data.attributes.description}</p>
      <div class="rang">
      <samp class="green"></samp>
      <samp class="red"></samp>
      <samp class="black"></samp>
      <select name="soni" id="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
     </select>
     <button class="button">add to bag</button>
     </div>
  </div>
</div>`;
}
function storidanOlibKel (){
  let card = [];

}
let image = document.querySelector('#image');
let title = document.querySelector('#title');
let company = document.querySelector('#company');
let narx = document.querySelector('#narx');
let description = document.querySelector('#description');
let wrapper = document.querySelector('#wrapper');
let buttons = document.querySelectorAll('.button');
let select = document.querySelectorAll('.button');

// console.log(select);
document.addEventListener('DOMContentLoaded', function(){
    let url = window.location.href;
    
    let res = url.split('id=');
    let id = res[1];
    console.log(id);
    
    if(id){
      fetch(`
      https://strapi-store-server.onrender.com/api/products/${id}`)
          .then(res=>{
            if(res.status==200){
    // console.log(res);

                return res.json()

            }
          })
          .then(data=>{
           let card = elementYasash(data);
           wrapper.innerHTML+=card
            // console.log(data);
            // if(id){
                // image.getAttribute('',data.data.attributes.image),
                // title.innerHTML=data.data.attributes.title,
                // company.innerHTML=data.data.attributes.company,
                // narx.innerHTML=data.data.attributes.price,
                // description.innerHTML=data.data.attributes.description
                

            // }
            // let buttons = document.querySelectorAll('.button')
            buttons&& buttons.addEventListener('click', function(el){
              
            })
          })
          .catch(err=>{
            console.log(err);
          })
    }else{
        // window.location.assign('http://127.0.0.1:5500/index.html')
    }

})