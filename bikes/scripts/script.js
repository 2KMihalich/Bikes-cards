"use strict";
const cardBtn = document.querySelectorAll(".card__btn");
const cardContent = document.querySelectorAll(".card__content");
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsBtnArray = [];
for (const node of tabsBtn) {
  tabsBtnArray.push(node);
}

cardBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    el.classList.toggle("card__btn_open");
    cardContent[i].classList.toggle("card__content_open");
    cardContent[i].classList.toggle("card__content_visible");
    tabsBtn[i].classList.toggle("tabs__btn_active");
  });
});

tabsBtn.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    tabsBtn.forEach((elem, j) => {
      elem.classList.remove("tabs__btn_active");
      cardContent[j].classList.remove("card__content_visible");
      cardContent[j].classList.remove("card__content_open");
      cardBtn[j].classList.remove("card__btn_open");
    });

    e.target.classList.add("tabs__btn_active");
    cardContent[tabsBtnArray.indexOf(e.target)].classList.add(
      "card__content_visible"
    );
    cardContent[tabsBtnArray.indexOf(e.target)].classList.add(
      "card__content_open"
    );
    cardBtn[tabsBtnArray.indexOf(e.target)].classList.add("card__btn_open");
  });
});

//создание характеристики
const formBtn = document.querySelectorAll(".form__btn");
const formInput = document.querySelectorAll(".form__input");
const characteristicsList = document.querySelectorAll(".characteristics__list");
const modal = document.querySelectorAll(".characteristics__modal");
const modalBtnAccept = document.querySelectorAll(".modal__btn-accept");
const modalBtnCancel = document.querySelectorAll(".modal__btn-cancel");
const formPrompt = document.querySelectorAll(".form__prompt");

modalBtnAccept.forEach((el, i) => {
  el.addEventListener("click", () => {
    const newElem = document.createElement("li");
    newElem.classList.add("characteristics__item");
    newElem.textContent = formInput[i].value;
    characteristicsList[i].appendChild(newElem);
    modal[i].classList.remove("modal_active");
    formInput[i].value = "";
  });
});

modalBtnCancel.forEach((el, i) => {
  el.addEventListener("click", () => {
    formInput[i].value = "";
    modal[i].classList.remove("modal_active");
  });
});

formInput.forEach((el) => {
  el.addEventListener("input", function (event) {
    if (el.validity.valueMissing) {
      el.setCustomValidity("кококо");
    } else {
      el.setCustomValidity("");
    }
  });
});

formBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (formInput[i].value != "") {
      modal[i].classList.add("modal_active");
    } else {
      formInput[i].setCustomValidity("1");
      formPrompt[i].classList.add("form__prompt_active");
      setTimeout(() => {
        formPrompt[i].classList.remove("form__prompt_active");
      }, 2000);
    }
  });
});

window.addEventListener("resize", () => {
  if (window.screen.width > 600) {
    let count = 0;
    cardContent.forEach((el) => {
      if (el.classList.contains("card__content_visible")) {
        count++;
      }
    });

    if (count == 0) {
      tabsBtn[0].classList.add("tabs__btn_active");
      cardContent[0].classList.add("card__content_open");
      cardBtn[0].classList.add("card__btn_open");
      cardContent[0].classList.add("card__content_visible");
    }
    if (count > 1) {
      for (let i = 1; i < cardContent.length; i++) {
        cardContent[i].classList.remove("card__content_visible");
        cardContent[i].classList.remove("card__content_open");
        cardBtn[i].classList.remove("card__btn_open");
        tabsBtn[i].classList.remove("tabs__btn_active");
      }
      tabsBtn[0].classList.add("tabs__btn_active");
      cardContent[0].classList.add("card__content_open");
      cardBtn[0].classList.add("card__btn_open");
      cardContent[0].classList.add("card__content_visible");
    }
  }
});
