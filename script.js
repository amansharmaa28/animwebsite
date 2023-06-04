function locomotive() {
 gsap.registerPlugin(ScrollTrigger);
  
 const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true ,
 });
 locoScroll.on("scroll", ScrollTrigger.update);
  
 ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length
 ? locoScroll.scrollTo(value, 0, 0)
 : locoScroll.scroll.instance.scroll.y;
},
  
getBoundingClientRect() {
  return {
 top: 0,
 left: 0,
 width: window.innerWidth,
 height: window.innerHeight,
  };
},
  
pinType: document.querySelector("#main").style.transform
  ? "transform"
  : "fixed",
 });
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 render();
  });
  
  function files(index) {
 var data = `
  ./CYBERFICTION-IMAGES/male0001.png  
  ./CYBERFICTION-IMAGES/male0002.png
  ./CYBERFICTION-IMAGES/male0004.png
  ./CYBERFICTION-IMAGES/male0005.png
  ./CYBERFICTION-IMAGES/male0006.png
  ./CYBERFICTION-IMAGES/male0007.png
  ./CYBERFICTION-IMAGES/male0008.png
  ./CYBERFICTION-IMAGES/male0009.png
  ./CYBERFICTION-IMAGES/male0010.png
  ./CYBERFICTION-IMAGES/male0011.png
  ./CYBERFICTION-IMAGES/male0012.png
  ./CYBERFICTION-IMAGES/male0013.png
  ./CYBERFICTION-IMAGES/male0014.png
  ./CYBERFICTION-IMAGES/male0015.png
  ./CYBERFICTION-IMAGES/male0016.png
  ./CYBERFICTION-IMAGES/male0017.png
  ./CYBERFICTION-IMAGES/male0018.png
  ./CYBERFICTION-IMAGES/male0019.png
  ./CYBERFICTION-IMAGES/male0020.png
  ./CYBERFICTION-IMAGES/male0021.png
  ./CYBERFICTION-IMAGES/male0022.png
  ./CYBERFICTION-IMAGES/male0023.png
  ./CYBERFICTION-IMAGES/male0024.png
  ./CYBERFICTION-IMAGES/male0025.png
  ./CYBERFICTION-IMAGES/male0026.png
  ./CYBERFICTION-IMAGES/male0027.png
  ./CYBERFICTION-IMAGES/male0028.png
  ./CYBERFICTION-IMAGES/male0029.png
  ./CYBERFICTION-IMAGES/male0030.png
  ./CYBERFICTION-IMAGES/male0031.png
  ./CYBERFICTION-IMAGES/male0032.png
  ./CYBERFICTION-IMAGES/male0033.png
  ./CYBERFICTION-IMAGES/male0034.png
  ./CYBERFICTION-IMAGES/male0035.png
  ./CYBERFICTION-IMAGES/male0036.png
  ./CYBERFICTION-IMAGES/male0037.png
  ./CYBERFICTION-IMAGES/male0038.png
  ./CYBERFICTION-IMAGES/male0039.png
  ./CYBERFICTION-IMAGES/male0040.png
  ./CYBERFICTION-IMAGES/male0041.png
  ./CYBERFICTION-IMAGES/male0042.png
  ./CYBERFICTION-IMAGES/male0043.png
  ./CYBERFICTION-IMAGES/male0044.png
  ./CYBERFICTION-IMAGES/male0045.png
  ./CYBERFICTION-IMAGES/male0046.png
  ./CYBERFICTION-IMAGES/male0047.png
  ./CYBERFICTION-IMAGES/male0048.png
  ./CYBERFICTION-IMAGES/male0049.png
  ./CYBERFICTION-IMAGES/male0050.png
  ./CYBERFICTION-IMAGES/male0051.png
  ./CYBERFICTION-IMAGES/male0052.png
  ./CYBERFICTION-IMAGES/male0053.png
  ./CYBERFICTION-IMAGES/male0054.png
  ./CYBERFICTION-IMAGES/male0055.png
  ./CYBERFICTION-IMAGES/male0056.png
  ./CYBERFICTION-IMAGES/male0057.png
  ./CYBERFICTION-IMAGES/male0058.png
  ./CYBERFICTION-IMAGES/male0059.png
  ./CYBERFICTION-IMAGES/male0060.png
  ./CYBERFICTION-IMAGES/male0061.png
  ./CYBERFICTION-IMAGES/male0062.png
  ./CYBERFICTION-IMAGES/male0063.png
  ./CYBERFICTION-IMAGES/male0064.png
  ./CYBERFICTION-IMAGES/male0065.png
  ./CYBERFICTION-IMAGES/male0066.png
  ./CYBERFICTION-IMAGES/male0067.png
  ./CYBERFICTION-IMAGES/male0068.png
  ./CYBERFICTION-IMAGES/male0069.png
  ./CYBERFICTION-IMAGES/male0070.png
  ./CYBERFICTION-IMAGES/male0071.png
  ./CYBERFICTION-IMAGES/male0072.png
  ./CYBERFICTION-IMAGES/male0073.png
  ./CYBERFICTION-IMAGES/male0074.png
  ./CYBERFICTION-IMAGES/male0075.png
  ./CYBERFICTION-IMAGES/male0076.png
  ./CYBERFICTION-IMAGES/male0077.png
  ./CYBERFICTION-IMAGES/male0078.png
  ./CYBERFICTION-IMAGES/male0079.png
  ./CYBERFICTION-IMAGES/male0080.png
  ./CYBERFICTION-IMAGES/male0081.png
  ./CYBERFICTION-IMAGES/male0082.png
  ./CYBERFICTION-IMAGES/male0083.png
  ./CYBERFICTION-IMAGES/male0084.png
  ./CYBERFICTION-IMAGES/male0085.png
  ./CYBERFICTION-IMAGES/male0086.png
  ./CYBERFICTION-IMAGES/male0087.png
  ./CYBERFICTION-IMAGES/male0088.png
  ./CYBERFICTION-IMAGES/male0089.png
  ./CYBERFICTION-IMAGES/male0090.png
  ./CYBERFICTION-IMAGES/male0091.png
  ./CYBERFICTION-IMAGES/male0092.png
  ./CYBERFICTION-IMAGES/male0093.png
  ./CYBERFICTION-IMAGES/male0094.png
  ./CYBERFICTION-IMAGES/male0095.png
  ./CYBERFICTION-IMAGES/male0096.png
  ./CYBERFICTION-IMAGES/male0097.png
  ./CYBERFICTION-IMAGES/male0098.png
  ./CYBERFICTION-IMAGES/male0099.png
  ./CYBERFICTION-IMAGES/male0100.png
  ./CYBERFICTION-IMAGES/male0101.png
  ./CYBERFICTION-IMAGES/male0102.png
  ./CYBERFICTION-IMAGES/male0103.png
  ./CYBERFICTION-IMAGES/male0104.png
  ./CYBERFICTION-IMAGES/male0105.png
  ./CYBERFICTION-IMAGES/male0106.png
  ./CYBERFICTION-IMAGES/male0107.png
  ./CYBERFICTION-IMAGES/male0108.png
  ./CYBERFICTION-IMAGES/male0109.png
  ./CYBERFICTION-IMAGES/male0110.png
  ./CYBERFICTION-IMAGES/male0111.png
  ./CYBERFICTION-IMAGES/male0112.png
  ./CYBERFICTION-IMAGES/male0113.png
  ./CYBERFICTION-IMAGES/male0114.png
  ./CYBERFICTION-IMAGES/male0115.png
  ./CYBERFICTION-IMAGES/male0116.png
  ./CYBERFICTION-IMAGES/male0117.png
  ./CYBERFICTION-IMAGES/male0118.png
  ./CYBERFICTION-IMAGES/male0119.png
  ./CYBERFICTION-IMAGES/male0120.png
  ./CYBERFICTION-IMAGES/male0121.png
  ./CYBERFICTION-IMAGES/male0122.png
  ./CYBERFICTION-IMAGES/male0123.png
  ./CYBERFICTION-IMAGES/male0124.png
  ./CYBERFICTION-IMAGES/male0125.png
  ./CYBERFICTION-IMAGES/male0126.png
  ./CYBERFICTION-IMAGES/male0127.png
  ./CYBERFICTION-IMAGES/male0128.png
  ./CYBERFICTION-IMAGES/male0129.png
  ./CYBERFICTION-IMAGES/male0130.png
  ./CYBERFICTION-IMAGES/male0131.png
  ./CYBERFICTION-IMAGES/male0132.png
  ./CYBERFICTION-IMAGES/male0133.png
  ./CYBERFICTION-IMAGES/male0134.png
  ./CYBERFICTION-IMAGES/male0135.png
  ./CYBERFICTION-IMAGES/male0136.png
  ./CYBERFICTION-IMAGES/male0137.png
  ./CYBERFICTION-IMAGES/male0138.png
  ./CYBERFICTION-IMAGES/male0139.png
  ./CYBERFICTION-IMAGES/male0140.png
  ./CYBERFICTION-IMAGES/male0141.png
  ./CYBERFICTION-IMAGES/male0142.png
  ./CYBERFICTION-IMAGES/male0143.png
  ./CYBERFICTION-IMAGES/male0144.png
  ./CYBERFICTION-IMAGES/male0145.png
  ./CYBERFICTION-IMAGES/male0146.png
  ./CYBERFICTION-IMAGES/male0147.png
  ./CYBERFICTION-IMAGES/male0148.png
  ./CYBERFICTION-IMAGES/male0149.png
  ./CYBERFICTION-IMAGES/male0150.png
  ./CYBERFICTION-IMAGES/male0151.png
  ./CYBERFICTION-IMAGES/male0152.png
  ./CYBERFICTION-IMAGES/male0153.png
  ./CYBERFICTION-IMAGES/male0154.png
  ./CYBERFICTION-IMAGES/male0155.png
  ./CYBERFICTION-IMAGES/male0156.png
  ./CYBERFICTION-IMAGES/male0157.png
  ./CYBERFICTION-IMAGES/male0158.png
  ./CYBERFICTION-IMAGES/male0159.png
  ./CYBERFICTION-IMAGES/male0160.png
  ./CYBERFICTION-IMAGES/male0161.png
  ./CYBERFICTION-IMAGES/male0162.png
  ./CYBERFICTION-IMAGES/male0163.png
  ./CYBERFICTION-IMAGES/male0164.png
  ./CYBERFICTION-IMAGES/male0165.png
  ./CYBERFICTION-IMAGES/male0166.png
  ./CYBERFICTION-IMAGES/male0167.png
  ./CYBERFICTION-IMAGES/male0168.png
  ./CYBERFICTION-IMAGES/male0169.png
  ./CYBERFICTION-IMAGES/male0170.png
  ./CYBERFICTION-IMAGES/male0171.png
  ./CYBERFICTION-IMAGES/male0172.png
  ./CYBERFICTION-IMAGES/male0173.png
  ./CYBERFICTION-IMAGES/male0174.png
  ./CYBERFICTION-IMAGES/male0175.png
  ./CYBERFICTION-IMAGES/male0176.png
  ./CYBERFICTION-IMAGES/male0177.png
  ./CYBERFICTION-IMAGES/male0178.png
  ./CYBERFICTION-IMAGES/male0179.png
  ./CYBERFICTION-IMAGES/male0180.png
  ./CYBERFICTION-IMAGES/male0181.png
  ./CYBERFICTION-IMAGES/male0182.png
  ./CYBERFICTION-IMAGES/male0183.png
  ./CYBERFICTION-IMAGES/male0184.png
  ./CYBERFICTION-IMAGES/male0185.png
  ./CYBERFICTION-IMAGES/male0186.png
  ./CYBERFICTION-IMAGES/male0187.png
  ./CYBERFICTION-IMAGES/male0188.png
  ./CYBERFICTION-IMAGES/male0189.png
  ./CYBERFICTION-IMAGES/male0190.png
  ./CYBERFICTION-IMAGES/male0191.png
  ./CYBERFICTION-IMAGES/male0192.png
  ./CYBERFICTION-IMAGES/male0193.png
  ./CYBERFICTION-IMAGES/male0194.png
  ./CYBERFICTION-IMAGES/male0195.png
  ./CYBERFICTION-IMAGES/male0196.png
  ./CYBERFICTION-IMAGES/male0197.png
  ./CYBERFICTION-IMAGES/male0198.png
  ./CYBERFICTION-IMAGES/male0199.png
  ./CYBERFICTION-IMAGES/male0200.png
  ./CYBERFICTION-IMAGES/male0201.png
  ./CYBERFICTION-IMAGES/male0202.png
  ./CYBERFICTION-IMAGES/male0203.png
  ./CYBERFICTION-IMAGES/male0204.png
  ./CYBERFICTION-IMAGES/male0205.png
  ./CYBERFICTION-IMAGES/male0206.png
  ./CYBERFICTION-IMAGES/male0207.png
  ./CYBERFICTION-IMAGES/male0208.png
  ./CYBERFICTION-IMAGES/male0209.png
  ./CYBERFICTION-IMAGES/male0210.png
  ./CYBERFICTION-IMAGES/male0211.png
  ./CYBERFICTION-IMAGES/male0212.png
  ./CYBERFICTION-IMAGES/male0213.png
  ./CYBERFICTION-IMAGES/male0214.png
  ./CYBERFICTION-IMAGES/male0215.png
  ./CYBERFICTION-IMAGES/male0216.png
  ./CYBERFICTION-IMAGES/male0217.png
  ./CYBERFICTION-IMAGES/male0218.png
  ./CYBERFICTION-IMAGES/male0219.png
  ./CYBERFICTION-IMAGES/male0220.png
  ./CYBERFICTION-IMAGES/male0221.png
  ./CYBERFICTION-IMAGES/male0222.png
  ./CYBERFICTION-IMAGES/male0223.png
  ./CYBERFICTION-IMAGES/male0224.png
  ./CYBERFICTION-IMAGES/male0225.png
  ./CYBERFICTION-IMAGES/male0226.png
  ./CYBERFICTION-IMAGES/male0227.png
  ./CYBERFICTION-IMAGES/male0228.png
  ./CYBERFICTION-IMAGES/male0229.png
  ./CYBERFICTION-IMAGES/male0230.png
  ./CYBERFICTION-IMAGES/male0231.png
  ./CYBERFICTION-IMAGES/male0232.png
  ./CYBERFICTION-IMAGES/male0233.png
  ./CYBERFICTION-IMAGES/male0234.png
  ./CYBERFICTION-IMAGES/male0235.png
  ./CYBERFICTION-IMAGES/male0236.png
  ./CYBERFICTION-IMAGES/male0237.png
  ./CYBERFICTION-IMAGES/male0238.png
  ./CYBERFICTION-IMAGES/male0239.png
  ./CYBERFICTION-IMAGES/male0240.png
  ./CYBERFICTION-IMAGES/male0241.png
  ./CYBERFICTION-IMAGES/male0242.png
  ./CYBERFICTION-IMAGES/male0243.png
  ./CYBERFICTION-IMAGES/male0244.png
  ./CYBERFICTION-IMAGES/male0245.png
  ./CYBERFICTION-IMAGES/male0246.png
  ./CYBERFICTION-IMAGES/male0247.png
  ./CYBERFICTION-IMAGES/male0248.png
  ./CYBERFICTION-IMAGES/male0249.png
  ./CYBERFICTION-IMAGES/male0250.png
  ./CYBERFICTION-IMAGES/male0251.png
  ./CYBERFICTION-IMAGES/male0252.png
  ./CYBERFICTION-IMAGES/male0253.png
  ./CYBERFICTION-IMAGES/male0254.png
  ./CYBERFICTION-IMAGES/male0255.png
  ./CYBERFICTION-IMAGES/male0256.png
  ./CYBERFICTION-IMAGES/male0257.png
  ./CYBERFICTION-IMAGES/male0258.png
  ./CYBERFICTION-IMAGES/male0259.png
  ./CYBERFICTION-IMAGES/male0260.png
  ./CYBERFICTION-IMAGES/male0261.png
  ./CYBERFICTION-IMAGES/male0262.png
  ./CYBERFICTION-IMAGES/male0263.png
  ./CYBERFICTION-IMAGES/male0264.png
  ./CYBERFICTION-IMAGES/male0265.png
  ./CYBERFICTION-IMAGES/male0266.png
  ./CYBERFICTION-IMAGES/male0267.png
  ./CYBERFICTION-IMAGES/male0268.png
  ./CYBERFICTION-IMAGES/male0269.png
  ./CYBERFICTION-IMAGES/male0270.png
  ./CYBERFICTION-IMAGES/male0271.png
  ./CYBERFICTION-IMAGES/male0272.png
  ./CYBERFICTION-IMAGES/male0273.png
  ./CYBERFICTION-IMAGES/male0274.png
  ./CYBERFICTION-IMAGES/male0275.png
  ./CYBERFICTION-IMAGES/male0276.png
  ./CYBERFICTION-IMAGES/male0277.png
  ./CYBERFICTION-IMAGES/male0278.png
  ./CYBERFICTION-IMAGES/male0279.png
  ./CYBERFICTION-IMAGES/male0280.png
  ./CYBERFICTION-IMAGES/male0281.png
  ./CYBERFICTION-IMAGES/male0282.png
  ./CYBERFICTION-IMAGES/male0283.png
  ./CYBERFICTION-IMAGES/male0284.png
  ./CYBERFICTION-IMAGES/male0285.png
  ./CYBERFICTION-IMAGES/male0286.png
  ./CYBERFICTION-IMAGES/male0287.png
  ./CYBERFICTION-IMAGES/male0288.png
  ./CYBERFICTION-IMAGES/male0289.png
  ./CYBERFICTION-IMAGES/male0290.png
  ./CYBERFICTION-IMAGES/male0291.png
  ./CYBERFICTION-IMAGES/male0292.png
  ./CYBERFICTION-IMAGES/male0293.png
  ./CYBERFICTION-IMAGES/male0294.png
  ./CYBERFICTION-IMAGES/male0295.png
  ./CYBERFICTION-IMAGES/male0296.png
  ./CYBERFICTION-IMAGES/male0297.png
  ./CYBERFICTION-IMAGES/male0298.png
  ./CYBERFICTION-IMAGES/male0299.png
  ./CYBERFICTION-IMAGES/male0300.png
`;
 return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
 frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
 const img = new Image();
 img.src = files(i);
 images.push(img);
  }
  
  gsap.to(imageSeq, {
 frame: frameCount - 1,
 snap: "frame",
 ease: `none`,
 scrollTrigger: {
scrub: 0.15,
trigger: `#page>canvas`,
start: `top top`,
end: `600% top`,
scroller: `#main`,
 },
 onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
 scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
 var canvas = ctx.canvas;
 var hRatio = canvas.width / img.width;
 var vRatio = canvas.height / img.height;
 var ratio = Math.max(hRatio, vRatio);
 var centerShift_x = (canvas.width - img.width * ratio) / 2;
 var centerShift_y = (canvas.height - img.height * ratio) / 2;
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.drawImage(
img,
0,
0,
img.width,
img.height,
centerShift_x,
centerShift_y,
img.width * ratio,
img.height * ratio
 );
  }
  ScrollTrigger.create({
 trigger: "#page>canvas",
 pin: true,
 // markers:true,
 scroller: `#main`,
 start: `top top`,
 end: `600% top`,
  });
  
  
  gsap.to("#page1",{
 scrollTrigger:{
trigger:`#page1`,
start:`top top`,
end:`bottom top`,
pin:true,
scroller:`#main`
 }
  })
  gsap.to("#page2",{
 scrollTrigger:{
trigger:`#page2`,
start:`top top`,
end:`bottom top`,
pin:true,
scroller:`#main`
 }
  })
  gsap.to("#page3",{
 scrollTrigger:{
trigger:`#page3`,
start:`top top`,
end:`bottom top`,
pin:true,
scroller:`#main`
 }
  })
