function setup() {
    frameRate(100)
    let clientWidth = document.body.clientWidth
    let clientHeight = document.body.clientHeight
    createCanvas(clientWidth, clientHeight)
    this.PIXEL = floor(min(clientWidth, clientHeight)/10)

    this.timeX = floor((clientWidth / 2))
    this.timeY =  floor((clientHeight / 2))
    textAlign(CENTER, CENTER);

}

this.foo = 4;

function draw() {
  background(0);
  fill(255);
  textSize(this.PIXEL)
  let date = new Date()
  
  let time = `${date.getHours()} : ${date.getMinutes()}  ${date.getSeconds()} ${("000" + date.getMilliseconds()).slice (-3)}`
  text(time, this.timeX ,this.timeY);
  }