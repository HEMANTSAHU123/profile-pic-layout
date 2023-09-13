var arr = [
  {
    dp: "https://e0.pxfuel.com/wallpapers/118/394/desktop-wallpaper-raashi-khanna-telugu-heroine.jpg",
    story:
      "https://e1.pxfuel.com/desktop-wallpaper/10/653/desktop-wallpaper-actress-rashi-khanna-latest-hoot-raashi-khanna.jpg",
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/749/812/desktop-wallpaper-rashi-khanna-raashi-khanna.jpg ",
    story: "https://e0.pxfuel.com/wallpapers/408/80/desktop-wallpaper-rashi-khanna-hot-navel-new-pics-raashi-khanna.jpg"
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/477/566/desktop-wallpaper-raashi-khanna-hoot.jpg ",
    story:
      "https://e0.pxfuel.com/wallpapers/408/80/desktop-wallpaper-rashi-khanna-hot-navel-new-pics-raashi-khanna.jpg",
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/100/57/desktop-wallpaper-raashi-khanna-tamil-heroine.jpg",
    story:
      "https://e1.pxfuel.com/desktop-wallpaper/798/743/desktop-wallpaper-rashi-khanna-posted-by-ryan-mercado-raashi-khanna.jpg",
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/118/394/desktop-wallpaper-raashi-khanna-telugu-heroine.jpg",
    story:
      "https://e1.pxfuel.com/desktop-wallpaper/10/653/desktop-wallpaper-actress-rashi-khanna-latest-hoot-raashi-khanna.jpg",
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/749/812/desktop-wallpaper-rashi-khanna-raashi-khanna.jpg ",
    story: "https://e0.pxfuel.com/wallpapers/408/80/desktop-wallpaper-rashi-khanna-hot-navel-new-pics-raashi-khanna.jpg"
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/477/566/desktop-wallpaper-raashi-khanna-hoot.jpg ",
    story:
      "https://e0.pxfuel.com/wallpapers/408/80/desktop-wallpaper-rashi-khanna-hot-navel-new-pics-raashi-khanna.jpg",
  },
  {
    dp: "https://e0.pxfuel.com/wallpapers/100/57/desktop-wallpaper-raashi-khanna-tamil-heroine.jpg",
    story:
      "https://e1.pxfuel.com/desktop-wallpaper/798/743/desktop-wallpaper-rashi-khanna-posted-by-ryan-mercado-raashi-khanna.jpg",
  },
];

const parent = document.querySelector("#storyiyan")


arr.forEach((arr)=>{
  const dpEle = document.createElement("img")
  const storyImg = document.createElement("img")
  dpEle.src = arr.dp
  storyImg.src = arr.story

  // inserting classes 
  dpEle.classList = "dp"
  storyImg.classList = "story"
  // Appending childs with parent
  parent.appendChild(dpEle)
  parent.appendChild(storyImg)

  
})
