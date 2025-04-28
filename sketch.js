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
}

function draw() {
  background(245, 245, 220); // 確保背景保持米白色
  
  // 翻轉影像
  push();
  translate(width / 2, height / 2);
  scale(-1, 1); // 水平翻轉影像
  image(capture, -capture.width / 2, -capture.height / 2);
  pop();

  // 更新 overlayGraphics
  overlayGraphics.clear(); // 清除之前的內容
  for (let x = 0; x < capture.width; x += 20) {
    for (let y = 0; y < capture.height; y += 20) {
      let col = capture.get(x, y); // 獲取 capture 對應位置的顏色
      overlayGraphics.fill(col);
      overlayGraphics.noStroke();
      overlayGraphics.ellipse(x, y, 15, 15); // 繪製圓形
    }
  }

  // 顯示 overlayGraphics 在攝影機影像上方
  image(overlayGraphics, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新攝影機影像大小

  // 更新 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
}
