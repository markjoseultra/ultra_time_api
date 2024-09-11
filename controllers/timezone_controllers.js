const moment = require("moment");
require("moment-timezone");

const timeZones = moment.tz.names();

function responseFormat(timezoneTime, res) {
  return res.json({
    currentTime: timezoneTime.format("hh:mm:s a"),
    meridian: timezoneTime.format("a"),
    year: timezoneTime.format("y"),
    month: timezoneTime.format("MMMM"),
    day: timezoneTime.format("D"),
    week: timezoneTime.format("w"),
    dayOfWeek: timezoneTime.format("dddd"),
    utc: timezoneTime.format("Z"),
    timezone: timezoneTime.format("zz"),
    iso8601: timezoneTime.format("yyyy-MM-DD"),
    isoFormat: timezoneTime.format(),
    millisecondsSinceEpoch: new Date(timezoneTime.format()).getTime(),
  });
}

exports.getDateTime = (req, res) => {
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
      supportedTimezones: timeZones,
    });
  }
};

exports.timezones = (req, res) => {
  try {
    return res.status(200).json({
      supportedTimezones: timeZones,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Timezone not supported`,
      sampleUrl: "https://ultra-time-api.onrender.com/api/time?tz=Asia/Manila",
      supportedTimezones: timeZones,
    });
  }
};
