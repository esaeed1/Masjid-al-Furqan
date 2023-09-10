var PrayerTiming = require('./PrayerTiming.js');

var ParseTime = function (timeString, timeFlag) {
    var date = new Date();
    if (timeFlag === 0) {
        date.setHours(Number(timeString.slice(0, 2)));
    } else {
        if (Number(timeString.slice(0, 2)) < 12) {
            date.setHours(Number(timeString.slice(0, 2)) + 12);
        } else {
            date.setHours(Number(timeString.slice(0, 2)));
        };
    };
    date.setMinutes(Number(timeString.slice(3, 5)));
    date.setSeconds(0);
    return date;
};

var getPrayerTiming = function (today) {
    var TodayPrayers = PrayerTiming[today.getMonth()][today.getDate() - 1];
    // the following should be replaced with a request to server to get data
    return {
        Prayers: [{
                Prayer: 'Fajr',
                Athan: ParseTime(TodayPrayers.FajrAthan, 0),
                Iqama: ParseTime(TodayPrayers.FajrIqama, 0),
                current: false
        },
            {
                Prayer: 'Sunrise',
                Athan: ParseTime(TodayPrayers.Sunrise, 0),
                Iqama: '-',
                current: false
        },
            {
                Prayer: 'Zuhr',
                Athan: ParseTime(TodayPrayers.ZuhrAthan, 1),
                Iqama: ParseTime(TodayPrayers.ZuhrIqama, 1),
                current: false
        },
            {
                Prayer: 'Asr',
                Athan: ParseTime(TodayPrayers.AsrAthan, 1),
                Iqama: ParseTime(TodayPrayers.AsrIqama, 1),
                current: false
        },
            {
                Prayer: 'Maghrib',
                Athan: ParseTime(TodayPrayers.MaghribAthan, 1),
                Iqama: ParseTime(TodayPrayers.MaghribIqama, 1),
                current: false
        },
            {
                Prayer: 'Isha',
                Athan: ParseTime(TodayPrayers.IshaAthan, 1),
                Iqama: ParseTime(TodayPrayers.IshaIqama, 1),
                current: false
        }],
        Notes: TodayPrayers.Notes
    };
};

module.exports = getPrayerTiming;