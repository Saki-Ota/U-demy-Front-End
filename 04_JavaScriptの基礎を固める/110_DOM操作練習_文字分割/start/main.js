document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim();
  const strArry = el.innerHTML.trim().split("");
  console.log(strArry);
  let concatStr = "";

  // for(let c of str) {
  //     c = c.replace(' ', '&nbsp;')
  //     concatStr += `<span class="char">${c}</span>`;
  // }
  // el.innerHTML = concatStr;

  el.innerHTML = strArry.reduce((acc, curr) => {
    curr = curr.replace(" ", "&nbsp;");
    return `${acc} <span class="char">${curr}</span>`;
  }, "");
})


