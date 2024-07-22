let image = document.querySelector('#image');
let title = document.querySelector('#title');
let company = document.querySelector('#company');
let narx = document.querySelector('#narx');
let description = document.querySelector('#description');

document.addEventListener('DOMContentLoaded', function(){
    let url = window.location.href;
    // console.log(url);
    let res = url.split('id=');
    let id = res[1];
    // console.log(res);
    if(id){
      fetch(`https://strapi-store-server..com/api/products/${id}`)
          .then(res=>{
            if(res.status==200){
                return res.json()

            }
          })
          .then(data=>{
            // console.log(data);
            if(data.data.id){
                image.getAttribute('src', data.data.attributes.image);
                title.innerHTML=data.data.attributes.title;
                company.innerHTML=data.data.attributes.company;
                narx.innerHTML=data.data.attributes.prise;
                description.innerHTML=data.data.attributes.description;
                

            }
          })
          .catch(err=>{
            console.log(err);
          })
    }else{
        window.location.assign('http://127.0.0.1:5500/index.html')
    }

})