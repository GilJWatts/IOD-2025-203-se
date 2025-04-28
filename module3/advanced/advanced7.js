// 7. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

setTimeout(() => myClock.stop(), 5000);

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix); // Call the constructor of the parent class
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const preciseClock = new PrecisionClock("precise clock:", 500); // Ticks every 500ms
preciseClock.start();

setTimeout(() => preciseClock.stop(), 5000);

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime
// in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and
// stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.
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

const customAlarm = new AlarmClock("custom alarm:", "20:36");
customAlarm.start();

//is there a way to only have 1 alarm? I couldn't get it to work without having 2 alarms.
