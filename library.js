const $ = (givMe) => {
  const self = document.querySelectorAll(givMe);
  self.T = (text) => {
    self.forEach((all) => {
      all.innerText = text;
    });
  };
  self.o = (event, fun) => {
    self.forEach((all) => {
      all.addEventListener(event, fun);
    });
  };
  self.e = (callBack) => {
    self.forEach((element, i) => {
      const fun = callBack.bind(element);
      fun(i, element);
    });
  };
  self.s = (object) => {
    const css = Object.entries(object);
    self.forEach((all) => {
      css.forEach(([prorerty, value]) => {
        all.style[prorerty] = value;
      });
    });
  };
  return self;
};

// class add in html
function addClass(array, className = "active") {
  array.forEach((element) => {
    element[0].classList.forEach((e) => {
      console.log(e);
      if (e != className) {
        element[0].classList.add(className);
      }
    });
  });
}
// claass remove in html
function removeClass(array, className = "active") {
  array.forEach((element) => {
    element[0].classList.forEach((e) => {
      if (e == className) {
        element[0].classList.remove(className);
      }
    });
  });
}
