function setup() {

    let clientWidth = window.displayWidth
    let clientHeight = window.displayHeight
    
    frameRate(100)
    createCanvas(clientWidth, clientHeight)
    textAlign(CENTER, CENTER);
    
    this.PIXEL = floor(min(clientWidth, clientHeight)/10)
    this.timeX = floor((clientWidth / 2))
    this.timeY =  floor((clientHeight / 2))
}

function draw() {
  background(0);
  fill(255);
  textSize(this.PIXEL)
  const date = new Date()
  const time = `${date.getHours()} : ${date.getMinutes()}  ${date.getSeconds()} ${("000" + date.getMilliseconds()).slice (-3)}`
  text(time, this.timeX ,this.timeY);
  }