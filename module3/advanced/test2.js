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

const defaultAlarm = new AlarmClock("default alarm:");
defaultAlarm.start();

const customAlarm = new AlarmClock("custom alarm:", "08:30");
customAlarm.start();
