let campusBtns = document.querySelectorAll(".campus table td div");
let campusPhotoView = document.querySelector(".photos-for-campus img");
let campusPhotoSection = document.querySelector(".photos-for-campus");
let campusPhotoCloseBtn = document.querySelector(".photos-for-campus span");

campusBtns.forEach((elem) => {
  elem.addEventListener("click", () => {
    campusPhotoSection.style.height = "100%";
    campusPhotoSection.style.width = "100%";
    campusPhotoSection.style.top = "0%";
    campusPhotoSection.style.left = "0%";
    campusPhotoCloseBtn.style.display = "block";
    campusPhotoView.src = `assests/photo${elem.dataset.photo}.jpeg`;
  });
});

campusPhotoCloseBtn.addEventListener("click", () => {
  campusPhotoSection.style.height = "0%";
  campusPhotoSection.style.width = "0%";
  campusPhotoSection.style.top = "50%";
  campusPhotoSection.style.left = "50%";
  campusPhotoCloseBtn.style.display = "none";
});
