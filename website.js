function togglePhotoList() {
    var photoContainer = document.getElementById("photos");
    if (photoContainer.style.display === "none") {
      photoContainer.style.display = "block";
    } else {
      photoContainer.style.display = "none";
    }
  }

const navContainer = document.querySelector('.nav-container');
navContainer.scrollLeft = navContainer.scrollWidth;

