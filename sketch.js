let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background(245, 245, 220); // 米白色背景 (RGB: 245, 245, 220)
  
  capture = createCapture(VIDEO); // 創建攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始攝影機影像
}

function draw() {
  background(245, 245, 220); // 確保背景保持米白色
  
  // 翻轉影像
  push(); // 儲存當前繪圖設定
  translate(width / 2, height / 2); // 將原點移到畫布中心
  scale(-1, 1); // 水平翻轉影像
  image(capture, -capture.width / 2, -capture.height / 2); // 繪製翻轉後的影像
  pop(); // 恢復繪圖設定
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新攝影機影像大小
}
