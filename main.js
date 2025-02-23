let crsr = document.querySelector("#cursor");
let imgCount = 1;
let imgElem =document.querySelector("#image img")
let notInImage=true
let imageContainer =document.querySelector("#image")
let imageData = [
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F13634f752ecd22ad5fe5fc8e27cebbaf4f78f761-900x1200.jpg&w=384&q=75",
    imageName: "IMG_0817",
    longitudes: "27,88516° N",
    latitudes: "15,53349° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F78a13e7cc5dbc9d2202ba5a1a80b0b686d987f2b-900x1200.jpg&w=384&q=75",
    imageName: "IMG_0534",
    longitudes: "28,10768° N",
    latitudes: "15,56390° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2Fd2abfe7285d4c5da5e830567bc41ec32246cf2ab-900x1200.jpg&w=384&q=75",
    imageName: "IMG_0851",
    longitudes: "27,92979° N",
    latitudes: "15,59803° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F48167ca3adef2970f9cd7fd3aec1a70fac28bfb0-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1606",
    longitudes: "27,96902° N",
    latitudes: "15,61128° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2Ff5d4bf3019626c0d0f20a31a1bc5b43fff6acd9e-900x1200.jpg&w=384&q=75",
    imageName: "IMG_0967",
    longitudes: "27,96900° N",
    latitudes: "15,61134° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F57b8f78aed70a6dd40c2d0594390252761c05492-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1263",
    longitudes: "27,78871° N",
    latitudes: "15,72005° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F89188c4a46a8f4b4985991b9055e5c131d374db4-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1338",
    longitudes: "28,06359° N",
    latitudes: "15,46228° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2Ff3091074550c7e944ac540798f2a7aa1106513a6-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1663",
    longitudes: "28,24290° N",
    latitudes: "15,13884° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F0539eac45b8165328dc70216c56c884f43b7e9fa-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1663",
    longitudes: "28,95290° N",
    latitudes: "17,06384° W",
  },
  {
    imageUrl:
      "https://tranquillum-naturae.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fod7huhs6%2Fproduction%2F711026fe7255aacbbae0ed7edff498fbd57565a7-900x1200.jpg&w=384&q=75",
    imageName: "IMG_1033",
    longitudes: "28,21827° N",
    latitudes: "17,52501° W",
  },
];

let playButton =document.querySelector("#play p")
let counter =0;

document.addEventListener("mousemove", (dets) => {
    crsr.style.top=dets.y+5 +"px"
    crsr.style.left=dets.x+5 +"px"
})
document.body.addEventListener("click", () => {
  if(notInImage){
    if (imgCount < 10) {
        imgCount++
    } else {
        imgCount=1
    }
    crsr.textContent = `${imgCount}/10`
    updateImageData()
  }
})

imgElem.addEventListener("mouseenter",()=>{
  notInImage =false
  imgElem.style.cursor ="zoom-in"
  crsr.style.opacity=0
  
})

imgElem.addEventListener("mouseleave",()=>{
  notInImage =true
  imgElem.style.cursor ="none"
  crsr.style.opacity=1
})

imgElem.addEventListener("click",()=>{
  let flag=imgElem.classList.contains("big-image")
  
  if(flag){
    console.log("image got big")
    document.querySelector("#nav").style.opacity=1
    document.querySelector("#hero").style.opacity=1
    document.querySelector("#sub-para").style.opacity=1
    imgElem.classList.remove("big-image")
    imageContainer.style.scale ="1"
    imageContainer.style.top="66%"
    imageContainer.style.left="42%"
  }else{
    console.log("image got small")
    document.querySelector("#nav").style.opacity=0
    document.querySelector("#hero").style.opacity=0
    document.querySelector("#sub-para").style.opacity=0
    imgElem.classList.add("big-image")
    imageContainer.style.scale ="2.2"
    imageContainer.style.top="30%"
    imageContainer.style.left="43%"
  }
})

let about =document.querySelector("#about")
about.addEventListener("click",()=>{
  
  if(counter%2==0){
    document.querySelector("#nav #logo").style.opacity=0
    document.querySelector("#nav #play").style.opacity=0
    document.querySelector("#hero").style.opacity=0
    document.querySelector("#img-data").style.opacity=0
    document.querySelector("#sub-para em").style.opacity=0
  }
  else{
    document.querySelector("#nav #logo").style.opacity=1
    document.querySelector("#nav #play").style.opacity=1
    document.querySelector("#hero").style.opacity=1
    document.querySelector("#img-data").style.opacity=1
    document.querySelector("#sub-para em").style.opacity=1
  }
  counter++
})







const music = document.querySelector("audio");
music.volume=0.2
playButton.addEventListener("click",()=>{
  console.log("hello");
  if (music.paused) {
    music.play();
    playButton.textContent="Mute"
} else {
    music.pause();
    playButton.textContent="Play"
}
})


function updateImageData() {
    let indexer =imgCount-1
    let imgNameElem = document.querySelector("#num>p")
    let imgLatsElem = document.querySelector("#location #lat p")
    let imgLongElem = document.querySelector("#location #long p")
    let imgElem = document.querySelector("#image img")
    imgNameElem.textContent =imageData[indexer].imageName
    imgLatsElem.textContent =imageData[indexer].latitudes
    imgLongElem.textContent =imageData[indexer].longitudes
    imgElem.src =imageData[indexer].imageUrl
}