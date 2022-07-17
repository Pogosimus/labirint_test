const btnRight = document.querySelector('.header-btns_arrow-right');
const btnLeft = document.querySelector('.header-btns_arrow-left');
const methodBoxes = document.querySelectorAll('.method-box');
const methodBox1 = document.getElementById('method-box-1');
const methodBox2 = document.getElementById('method-box-2');
const dateBox1 = document.getElementById('date-option-box-1');
const dateBox2 = document.getElementById('date-option-box-2');
const dateOptionBoxes = document.querySelectorAll('.date-option-box');
const sumPriceLabel = document.querySelector('.sum-price_label');
const sumPriceWrapper = document.querySelector('.sum-price-wrapper');
let moreInfoBtn = document.querySelector('.sum-price-wrapper_more-info');
let body = document.querySelector('body');
let orderSummaryPopup = document.querySelector('.order-summary-popup');
let moreInfo;
let hideMoreInfo;

btnRight.addEventListener('click', () => {
  methodBox1.classList.remove('focused');
  methodBox2.classList.add('focused');
  btnRight.disabled = true;
  btnLeft.disabled = false;
});

btnLeft.addEventListener('click', () => {
  methodBox2.classList.remove('focused');
  methodBox1.classList.add('focused');
  btnLeft.disabled = true;
  btnRight.disabled = false;
});

methodBox1.addEventListener('click', () => {
  if (!methodBox1.classList.contains('focused')) {
    methodBox1.classList.add('focused');
    methodBox2.classList.remove('focused');
    btnLeft.disabled = true;
    btnRight.disabled = false;
  }
});

methodBox2.addEventListener('click', () => {
  if (!methodBox2.classList.contains('focused')) {
    methodBox2.classList.add('focused');
    methodBox1.classList.remove('focused');
    btnRight.disabled = true;
    btnLeft.disabled = false;
  }
});

dateBox1.addEventListener('click', () => {
  if (!dateBox1.classList.contains('focused')) {
    dateBox1.classList.add('focused');
    dateBox2.classList.remove('focused');
  }
});

dateBox2.addEventListener('click', () => {
  if (!dateBox2.classList.contains('focused')) {
    dateBox2.classList.add('focused');
    dateBox1.classList.remove('focused');
  }
});

function changeFooter() {
  if (window.innerWidth < 500) {
    sumPriceLabel.innerHTML = 'К оплате: &nbsp;';
  }
}

function createMoreBtn() {
  moreInfoBtn = document.querySelector('.sum-price-wrapper_more-info');
  if (!sumPriceWrapper.contains(moreInfoBtn)) {
    moreInfo = document.createElement('div');
    moreInfo.innerHTML = `<a href="#">Подробнее</a>`;
    moreInfo.classList.add('sum-price-wrapper_more-info');
    sumPriceWrapper.append(moreInfo);
  }
  moreInfoBtn = document.querySelector('.sum-price-wrapper_more-info');
}

window.addEventListener('resize', () => {
  changeFooter(), createMoreBtn();
  if (moreInfo !== undefined) {
    moreInfo.onclick = (e) => {
      e.preventDefault();
      orderSummaryPopup = document.querySelector('.order-summary-popup');
      if (!body.contains(orderSummaryPopup)) {
        orderSummaryPopup = document.createElement('div');
        orderSummaryPopup.classList.add('order-summary-popup');
        orderSummaryPopup.innerHTML = `
        <span class="order-summary-popup_heading"><h2>В заказе 5 товаров &nbsp;</h2>(2 кг)</span>
        <div class="popup-totals">
            <div class="popup-totals-names">
              <p class="popup-totals-names_price">Цена товаров</p>
              <p class="popup-totals-names_discounts">Все скидки</p>
            </div>
            <div class="popup-totals-prices">
              <p class="popup-totals-prices_price">29 456 &#8381;</p>
              <p class="popup-totals-prices_discounts">-7 732 &#8381;</p>
            </div>
        </div>
        <div class="popup-summary">
            <p class="popup-summary_text">К оплате:</p>
            <p class="popup-summary_price">21 072 &#8381;</p>
        </div>
        <div class="popup-footer">
            <button class="popup-footer_btn">Закрыть подробности</button>
        </div>
        `;
        body.append(orderSummaryPopup);
        hideMoreInfo = document.querySelector('.popup-footer_btn');
        hideMoreInfo.onclick = (e) => {
          e.preventDefault();
          orderSummaryPopup.classList.remove('order-summary-popup');
        };
      }
    };
  }
});
