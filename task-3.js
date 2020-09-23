const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.getElementById("gallery");

images.forEach((elem, index) => {
  const itemGallery = `<li><img width ='480' height='280' src="${elem.url}" alt='${elem.alt}'></li`;
  listGallery.insertAdjacentHTML("beforeend", itemGallery);
  console.log(listGallery);

  const galleryItem = listGallery.children[index];
  galleryItem.classList.add("itemGallery");
  console.log(galleryItem);
});
