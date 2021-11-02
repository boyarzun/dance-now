var categoriesSection = document.getElementById('categories');

Object
    .entries(categories)
    .filter(category => category[1].img)
    .forEach(category => {
        categoriesSection.innerHTML += `<div class="col-4 col-sm-3 col-lg-2 category">
        <a href="category.html?id=${category[0]}">
            <img src="${category[1].img}" width="100%">
        </a>
        <a href="category.html?id=${category[0]}">
            <p class="category-name">${category[1].name}</p>
        </a>
        </div>`;
    });
