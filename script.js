const allProductsContainer = document.querySelectorAll(
  ".products-container .product"
);
const arrayProductsContainer = [...allProductsContainer];

const allProductsPreview = document.querySelector(".products-preview");
const previewBoxes = allProductsPreview.querySelectorAll(".preview");

arrayProductsContainer.forEach((product) => {
  product.addEventListener("click", showProductsInfo);

  function showProductsInfo() {
    allProductsPreview.style.display = "flex";
    let name = product.getAttribute("data-name");

    previewBoxes.forEach((product) => {
      let target = product.getAttribute("data-target");
      if (name === target) {
        product.classList.add("active");
      }
    });
  }
});

previewBoxes.forEach((preview) => {
  let iconClose = preview.querySelector("#icon-close");
  iconClose.addEventListener("click", closeProductsInfo);

  function closeProductsInfo() {
    preview.classList.remove("active");
    allProductsPreview.style.display = "none";
  }
});