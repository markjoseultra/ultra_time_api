const moment = require("moment");
require("moment-timezone");

exports.timezone = (req, res) => {
  var timezone = req.params.timezone;

  var currentTime = new Date();

  switch (timezone) {
    case "manila":
      var momentTime = moment(currentTime.toISOString());

      var manilaTime = momentTime.tz("Asia/Manila");

      return res.json({
        iso_string: manilaTime.format(),
        millisecondsSinceEpoch: new Date(manilaTime.format()).getTime(),
      });

    default:
      return res.status(400).json({
        error: `Timezone not supported`,
      });
  }
};
