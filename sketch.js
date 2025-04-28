let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background(245, 245, 220); // 米白色背景 (RGB: 245, 245, 220)
  
  capture = createCapture(VIDEO); // 創建攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始攝影機影像

  // 創建與攝影機影像大小相同的圖形緩衝區
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text("Overlay Text", overlayGraphics.width / 2, overlayGraphics.height / 2); // 在中間顯示文字
}

function draw() {
  background(245, 245, 220); // 確保背景保持米白色
  
  // 顯示攝影機影像
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);

  // 顯示 overlayGraphics 在攝影機影像上方
  image(overlayGraphics, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新攝影機影像大小

  // 更新 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text("Overlay Text", overlayGraphics.width / 2, overlayGraphics.height / 2);
}
