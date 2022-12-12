export class Timer {
  constructor(div) {
    this.div = div;
    this.div.textContent = "00:00:000";
  }
  start() {
    if (this.tid) {
      this.stop();
    }
    this.tid = null;
    this.startTime = new Date().getTime();
    this.show();
    this.tid = setInterval(() => {
      this.show();
    }, 10);
  }
  show() {
    const d = new Date(Date.now() - this.startTime);
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    const ms = d.getMilliseconds().toString().padStart(3, '0');
    this.div.textContent = `${m}:${s}:${ms}`;
  }
  stop() {
    clearInterval(this.tid);
    this.tid = null;
  }
}
