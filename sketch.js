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
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2); // 攝影機影像置中
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新攝影機影像大小
}
