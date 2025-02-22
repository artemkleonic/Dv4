document.addEventListener("DOMContentLoaded", () => {
    // ========== ОТКРЫТИЕ МОДАЛЬНЫХ ОКОН В МАРКЕТПЛЕЙСЕ ==========
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeModalBtn = document.querySelector(".close");
  
    function openProductModal(productType) {
      if (!modal) return;
  
      const productData = {
        wine: {
          title: "Соковиті настоянки",
          img: "./Images/3.jpg",
          desc: `
            <ul>
              <li>вишня</li>
              <li>журавлина</li>
              <li>чорноплідна горобина</li>
              <li>перець з медом</li>
              <li>трав’яна</li>
              <li>зубрівка</li>
            </ul>
            <p><strong>Вартість: 510 грн.</strong></p>
            <p>(Обробка замовлення та пакування - 510 грн. Подарунковий набір - безкоштовно)</p>
          `,
        },
        whiskey: {
          title: "Фруктовий фітокомплекс",
          img: "./Images/2.jpg",
          desc: `
            <ul>
              <li>абрикос</li>
              <li>слива</li>
              <li>чорна смородина</li>
              <li>малина</li>
              <li>диня</li>
              <li>яблуко</li>
            </ul>
            <p><strong>Вартість: 510 грн.</strong></p>
            <p>(Обробка замовлення та пакування - 510 грн. Подарунковий набір - безкоштовно)</p>
          `,
        },
        champagne: {
          title: "Насіння, коріння та злаки",
          img: "./Images/1.jpg",
          desc: `
            <ul>
              <li>димний ячмінь</li>
              <li>витримана кукурудза</li>
              <li>цукрова тростина</li>
              <li>ароматна тростина</li>
              <li>можевельник та спеції</li>
              <li>полинь, аніс, фенхель, м’ята</li>
            </ul>
            <p><strong>Вартість: 600 грн.</strong></p>
            <p>(Обробка замовлення та пакування - 600 грн. Подарунковий набір - безкоштовно)</p>
          `,
        },
      };
  
      const product = productData[productType];
      if (product) {
        modalTitle.innerHTML = product.title;
        modalDesc.innerHTML = product.desc;
        modalImg.src = product.img;
        modal.style.display = "flex";
      }
    }
  
    document.querySelectorAll(".product").forEach((product) => {
      product.addEventListener("click", () => {
        const productType = product.getAttribute("data-product");
        openProductModal(productType);
      });
    });
  
    closeModalBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  
    // ========== ГАЛЕРЕЯ ИЗОБРАЖЕНИЙ ==========
    const galleryModal = document.getElementById("galleryModal");
    const galleryImage = document.getElementById("galleryImage");
    const closeGalleryModal = document.querySelector("#galleryModal .close");
    const prevBtn = document.getElementById("prevImage");
    const nextBtn = document.getElementById("nextImage");
  
    const galleryImages = [
      "./Images/batkavslape.jpg",
      "./Images/Batya.png",
      "./Images/batyazloy.jpg",
      "./Images/batyavkostume.jpg",
    ];
  
    let currentIndex = 0;
  
    function updateGallery() {
      galleryImage.src = galleryImages[currentIndex];
    }
  
    document.querySelector(".intro-image img")?.addEventListener("click", () => {
      currentIndex = 0;
      updateGallery();
      galleryModal.style.display = "flex";
    });
  
    closeGalleryModal?.addEventListener("click", () => {
      galleryModal.style.display = "none";
    });
  
    prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateGallery();
    });
  
    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateGallery();
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
        galleryModal.style.display = "none";
      }
    });
  
    // ========== ИСПРАВЛЕНИЕ ПЕРЕХОДА ПО ССЫЛКАМ ==========
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (event) {
        if (this.classList.contains("no-modal")) {
          return; // Обычный переход по ссылке
        }
  
        openProductModal(this.getAttribute("data-product"));
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (event) {
        // Разрешаем переход по ссылке, если у неё есть класс "no-modal" или "btn"
        if (this.classList.contains("no-modal") || this.classList.contains("btn")) {
          return;
        }
  
        event.preventDefault(); // Блокируем только остальные ссылки
      });
    });
  });
  