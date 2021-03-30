(function() {
    const openingBtn = document.querySelector(".menu-icon--open");
    const closingBtn = document.querySelector(".menu-icon--close");
    const sidebar = document.querySelector(".sidebar");
    
    openingBtn.addEventListener("click", function() {
        sidebar.classList.add("sidebar--opened");
    });
    
    closingBtn.addEventListener("click", function() {
        sidebar.classList.remove("sidebar--opened");
    });
}());