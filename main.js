const btnOpnen = document.querySelectorAll(".btnOpen");
const btnAnse = document.querySelectorAll(".anse");

const isOpen = []; // Array para armazenar o estado de cada elemento .anse

btnAnse.forEach(() => isOpen.push(false)); // Inicializar o array com false para todos os elementos

btnOpnen.forEach(function(element) {
  element.addEventListener("click", function() {
    const index = Array.from(btnOpnen).indexOf(element);
    if (index !== -1) {
      if (isOpen[index]) {
        // Se o elemento já está aberto, fechar
        btnAnse[index].style.opacity = "0";
        btnAnse[index].style.height = "0";
        isOpen[index] = false;
      } else {
        // Se o elemento está fechado, abrir e fechar os outros
        btnAnse.forEach(function(item, i) {
          if (i === index) {
            item.style.opacity = "1";
            item.style.height = "54px";
            isOpen[i] = true;
          } else {
            item.style.opacity = "0";
            item.style.height = "0";
            isOpen[i] = false;
          }
        });
      }
    }
  });
});


btnOpnen.forEach(function(element) {
  element.addEventListener("mouseover", function() {
    var box = document.querySelector(".box");
    box.style.marginLeft = "-130px";
  });
});

btnOpnen.forEach(function(element) {
  element.addEventListener("mouseout", function() {
    var box = document.querySelector(".box");
    box.style.marginLeft = "-100px";
  });
});