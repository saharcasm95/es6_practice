(function () {
    class DateHelper {
        constructor(day){
            this.dayIndex = day;
        }
        getFullDayName(){
            let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            this.dayString = dayList[this.dayIndex];
        }
    }
    class DateManipulation extends DateHelper{
        constructor(date) {
            super(date.getDay());
            this.date = date;
            this.currentDate =  date.getDate();
            this.month =  date.getMonth();
            this.year =  date.getFullYear();
            this.hour = date.getHours() % 12;
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
            this.timePeriod = (date.getHours() >= 12) ? 'PM' : 'AM';
            this.getFullDayName();
        }
        getDateInFormat(format){
            let returnDateString;

            switch(format){

                case 'mm/dd/yyyy':
                    returnDateString = `${this.month}/${this.currentDate}/${this.year}`;
                    break;
                case 'dd-mm-yyyy':
                    returnDateString = `${this.currentDate}-${this.month}-${this.year}`;
                    break;
                case 'dd/mm/yyyy':
                    returnDateString = `${this.currentDate}/${this.month}/${this.year}`;
                    break;
                default:
                    returnDateString = `${this.month}-${this.currentDate}-${this.year}`;
                    break;
            }
            return returnDateString;
        }
        isLeapYear(year = this.year){
            return `The year ${year} is ${year % 4 === 0 ? "" : "not "}a leap year `;
        }
        DisplayDayAndTime(){
            let dayString = `Day is : ${this.dayString}`;
            let timeString = `${this.hour} ${this.timePeriod} : ${this.minutes} : ${this.seconds}`;
            console.log(this.date.getDay(), dayString);
            console.log(timeString)
        }
        isDay(matchWith){
            return matchWith === this.dayString;
        }

        getDaysLeft(tillDate){
            tillDate = new Date(tillDate);
            let timeDifference = tillDate.getTime() - this.date.getTime();
            return (timeDifference / (1000 * 3600 * 24)).toFixed();
        }

    }

    class DateSeries{
        constructor(startYear, endYear, matchWith){
            this.startYear = startYear;
            this.endYear = endYear;
            this.matchWith = matchWith;

        }
        getMatchingDaysInSeries(){
            let matches = [];
            for(let year = this.startYear; year <= this.endYear; year++){
                let dateString  = `January 1, ${year}`;
                let dateObject = new DateManipulation(new Date(dateString));
                dateObject.isDay(this.matchWith) ? matches.push(dateString) : null;
            }
            return matches;
        }
    }

    let dateObject = new DateManipulation(new Date());

    let daysToChristmas= dateObject.getDaysLeft("December 25, 2019");
    console.log(daysToChristmas);




})();