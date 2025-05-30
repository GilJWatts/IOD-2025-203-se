class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  start() {
    this.display();
    this.timer = setInterval(() => {
      this.display();
      const now = new Date();
      const [hours, mins] = [now.getHours(), now.getMinutes()];
      const currentTime = `${hours < 10 ? "0" + hours : hours}:${
        mins < 10 ? "0" + mins : mins
      }`;

      if (currentTime === this.wakeupTime) {
        console.log("Wake Up!");
        this.stop();
      }
    }, 1000);
  }
}

const alarmClock = new AlarmClock("alarm clock:", "07:05");
alarmClock.start();
