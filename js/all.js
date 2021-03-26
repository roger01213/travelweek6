
let data=[];
function dataAnalyze(){
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function (response) {
    console.log(response.data.data);
   data=response.data.data;
  //  console.log(data);
   init();
  });
}



// 選取 querySelector
const ticketCardArea = document.querySelector('.ticketCard-area');
const ticketName = document.querySelector('#ticketName');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');
const regionSearch = document.querySelector('.regionSearch');
const ticketRegion = document.querySelector('#ticketRegion');
const btn = document.querySelector('.btn');
const searchResultText = document.querySelector('#searchResult-text');

btn.addEventListener('click', adddata)



function init() {
  let str = "";
  let count = 0;
  data.forEach(function (item, index) {
    str += `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
        ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
  </li>`
    count = count + 1;
  })
  ticketCardArea.innerHTML = str;
  // console.log(count);
  searchResultText.innerHTML = `本次搜尋共 ${count} 筆資料`;
}



function cleardata() {
  ticketName.value = "";
  ticketRegion.value = "";
  ticketDescription.value = "";
  ticketNum.value = "";
  ticketPrice.value = "";
  ticketRate.value = "";
}


function adddata() {
  let obj = {}
  obj.name = ticketName.value;
  obj.imgUrl = data[0].imgUrl;
  obj.area = ticketRegion.value;
  obj.description = ticketDescription.value;
  obj.group = ticketNum.value;
  obj.price = ticketPrice.value;
  obj.rate = ticketRate.value;
  // console.log(obj);
  data.push(obj);
  init();
  cleardata();
  regionSearch.value="";
}




regionSearch.addEventListener('change', function (e) {
  let str = " ";
  let count = 0;
  data.forEach(function (item, index) {

    if (e.target.value == "") {
      str += `<li class="ticketCard">
      <div class="ticketCard-img">
        <a href="#">
          <img src="${item.imgUrl}" alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">
          ${item.description}
          </p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price">$${item.price}</span>
          </p>
        </div>
      </div>
    </li>`
      count += 1;
    }
    else if (e.target.value == item.area) {

      str += `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
        ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
  </li>`
      count += 1;
    }
  })
  ticketCardArea.innerHTML = str;
  searchResultText.innerHTML = `本次搜尋共 ${count} 筆資料`;
}
);

dataAnalyze();


