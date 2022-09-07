let fullContainer = document.querySelector(".fullContainer");
let click_here = document.getElementById("click_here");
let side_Menu = document.querySelector(".side_menu");
let buyIcon = document.querySelector(".buy-icon");
let sideMenuItem = document.querySelector(".side_menu_item");
let buyIcon_count = document.getElementById("buyIcon_count");
let searchInput = document.querySelector("#search");
let searchIcon = document.querySelector("#searchIcon");
let totalPriceCounter = 0;

function fetchData() {
  return new Promise((res) => {
    setTimeout(() => {
      res(JSON.parse(data));
    }, 200);
  });
}

click_here.addEventListener("click", () => {
  fetchData().then((res) => {
    click_here.style.display = "none";
    res.map((item) => {
      let contentBox = document.createElement("div");
      contentBox.classList.toggle("contentBox");
      let likeIcon = document.createElement("p");
      likeIcon.innerHTML = "&hearts;";
      likeIcon.classList.toggle("disLikeIcon");
      let flag1 = false;
      likeIcon.addEventListener("click", (e) => {
        if (e.target && !flag1) {
          likeIcon.id = "likeIcon"
          flag1 = true
        } else {
          likeIcon.id = "";
          flag1 = false
        }
      });
      contentBox.append(likeIcon);
      fullContainer.append(contentBox);
      //==================================
      let img = document.createElement("img");
      img.classList.toggle("img");
      img.src = item.imageSrc;
      contentBox.append(img);
      //==================================
      let item_name = document.createElement("p");
      item_name.classList.toggle("item_name");
      contentBox.append(item_name);
      item_name.innerHTML = item.itemName;
      //==================================
      let item_price = document.createElement("div");
      item_price.classList.toggle("item_price");
      contentBox.append(item_price);
      item_price.innerHTML = item.itemPrice;
      //==================================
      let priceIcon = document.createElement("img");
      priceIcon.classList.toggle("priceIcon");
      priceIcon.src = "sasImages/icons8-buy-26.png";
      priceIcon.id = item.id;
      priceIcon.addEventListener("click", () => {
        totalPriceCounter += +item.itemPrice.slice(0, item.itemPrice.indexOf(" "));
        +buyIcon_count.innerText++;
        let itemBox = document.createElement('div')
        itemBox.classList.add('itemBox');
        let itemImg = document.createElement('img');
        itemImg.classList.add('itemImg');
        itemImg.src = item.imageSrc
        let itemName = document.createElement('div')
        itemName.classList.add('itemName');
        itemName.innerText = item.itemName
        let itemPrice = document.createElement('span')
        itemPrice.classList.add('itemPrice')
        itemPrice.innerText = item.itemPrice;
        let itemRemove = document.createElement("img")
        itemRemove.classList.add('itemRemove')
        itemRemove.src = 'sasImages/minus-solid.svg'
        itemRemove.addEventListener('click', (e) => {
          +buyIcon_count.innerText--;
          totalPriceCounter -= +item.itemPrice.slice(0, item.itemPrice.indexOf(" "));
          document.querySelector('.totalPrice').innerText = `ձեր ընդհանուր առեվտրի գումարը կազմեց ${totalPriceCounter}դր`;
          e.target.parentElement.parentElement.parentElement.remove()
        })
        itemBox.append(itemImg)
        itemBox.append(itemName)
        itemName.append(itemPrice)
        itemPrice.append(itemRemove)
        sideMenuItem.prepend(itemBox)
        document.querySelector('.totalPrice').innerText = `ձեր ընդհանուր առեվտրի գումարը կազմեց ${totalPriceCounter}դր`;
      });
      item_price.append(priceIcon);
    });
  });
});

searchIcon.addEventListener("click", () => {
  let arr = document.querySelectorAll(".item_name");
  arr.forEach((element) => {
    if (!element.innerText.includes(searchInput.value)) {
      element.parentElement.classList.add("item_none");
    } else element.parentElement.classList.remove("item_none");
  });
});

let flag = false;
buyIcon.addEventListener("click", () => {
  if (flag === false) {
    side_Menu.classList.toggle("hiddenSide");
    flag = true;
  } else {
    side_Menu.classList.toggle("hiddenSide");
    flag = false;
  }
});

let side_close = document.querySelector(".side_close");
side_close.addEventListener("click", () => {
  side_Menu.classList.toggle("hiddenSide");
})

