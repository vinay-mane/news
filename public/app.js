const box = document.querySelectorAll(".box-3-1");
const head = document.querySelectorAll(".box-data-head");
const newsBody = document.querySelectorAll(".place-data");
let c=0;
  

  const place = (jsondata)=>{
    jsondata.data.forEach(element => {
    console.log(element)
    box[c].style.backgroundImage=`url(${element.image})`
    head[c].textContent=element.head
    newsBody[c].textContent=element.data
    c++
  });
  }


fetch('/news').then(function(response) {
  return response.json();
}).then(function(data) {
    place(data)
  }).catch(function() {
    console.log("Booo");
  });