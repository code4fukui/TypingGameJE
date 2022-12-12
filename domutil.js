export const waitClick = (comp) => {
  return new Promise((resolve) => {
    comp.classList.add("cursor");
    comp.onclick = () => {
      comp.onclick = null;
      comp.classList.remove("cursor");
      resolve();
    }
  })
};
export const waitClickOrEnter = (comp) => {
  return new Promise((resolve) => {
    comp.classList.add("cursor");
    document.onkeydown = (e) => {
      if (e.key == "Enter") {
        document.onkeydown = null;
        resolve();
      }
    };
    comp.onclick = () => {
      comp.onclick = null;
      comp.classList.remove("cursor");
      resolve();
    }
  })
};
export const waitKeyDown = () => {
  return new Promise(resolve => {
      document.onkeydown = (e) => {
          document.onkeydown = null;
          resolve(e.key);
      }
  });
};
