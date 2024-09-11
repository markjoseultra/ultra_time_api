const moment = require("moment");
require("moment-timezone");

const timeZones = moment.tz.names();

function responseFormat(timezoneTime, res) {
  return res.json({
    isoFormat: timezoneTime.format(),
    millisecondsSinceEpoch: new Date(timezoneTime.format()).getTime(),
  });
}

exports.timezone = (req, res) => {
  try {
    var timezone = req.query.tz;

    var currentTime = new Date();

    var momentTime = moment(currentTime.toISOString());

    var timezoneTime = momentTime.tz(timezone);

    return responseFormat(timezoneTime, res);
  } catch (error) {
    return res.status(400).json({
      error: `Timezone not supported`,
      sampleUrl: "https://ultra-time-api.onrender.com/api/time?tz=Asia/Manila",
      supportedTimesones: timeZones,
    });
  }
};
