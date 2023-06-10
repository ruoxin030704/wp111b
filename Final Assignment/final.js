var imageTexts = [
    {
      image: "yibo.jpg",
      text: "這是圖片1的文字描述"
    },
    {
      image: "night.jpg",
      text: "這是圖片2的文字描述"
    },
    {
      image: "mac.jpg",
      text: "這是圖片3的文字描述"
    }
  ];

  var currentIndex = 0;

  function changeContentAndImage() {
    var content = document.getElementById("content");
    content.innerHTML = imageTexts[currentIndex].text;

    var image = document.getElementById("image");
    image.src = imageTexts[currentIndex].image;
    image.alt = "圖片" + (currentIndex + 1);

    currentIndex = (currentIndex + 1) % imageTexts.length;
  }