function meetings(input) {

    let meetingsList = {};
    for (const line of input) {
        let currLine = line.split(' ');
        let weekday = currLine[0];
        let name = currLine[1];
        if (meetingsList.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingsList[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }

    }
    for (let [key, value] of Object.entries(meetingsList)) {
        console.log(`${key} -> ${value}`);
    }

}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])