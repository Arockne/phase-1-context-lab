/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord);
}

function createTimeInEvent(timeStamp) {
    timeStamp = timeStamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: Number(timeStamp[1]),
        date: timeStamp[0]
    });
    return this;
}

function createTimeOutEvent(timeStamp) {
    timeStamp = timeStamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: Number(timeStamp[1]),
        date: timeStamp[0]
    })
    return this;
}

function hoursWorkedOnDate(dateInput) {
    const timeIn = this.timeInEvents.find(({date}) => date === dateInput);
    const timeOut = this.timeOutEvents.find(({date}) => date === dateInput);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(dateInput) {
    const hours = hoursWorkedOnDate.call(this, dateInput);
    return hours * this.payPerHour;
}

const findEmployeeByFirstName = function(srcArray, firstNameInput) {
    return srcArray.find(({firstName}) => firstName === firstNameInput);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate.call(this, d)
    }, 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = function(employees) {
    return employees.reduce((labor, employee) => labor + allWagesFor.call(employee), 0);
}