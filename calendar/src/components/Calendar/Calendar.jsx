function daysInMonth(month, year) {
    let date1 = new Date(year, month, 1);
    let date2 = new Date(year, month + 1, 1);
    return Math.round((date2 - date1) / 1000 / 3600 / 24);
}

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
        ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
}

function getMonth(date) {
    const month = new Date(date).getMonth();
    return isNaN(month) ? null :
        ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][month];
}

function getDays(daysValue) {
    const days = [];
    for (let i = 1; i <= daysValue; i++) {
        days.push(i);
    }
    return days;
}

const Calendar = (props) => {
    const date = props.date;
    const dayOfWeek = getDayOfWeek(date);
    const month = getMonth(date);

    const dayInCurrentMonthCount = daysInMonth(date.getMonth(), date.getFullYear());
    const dayInNextMonthCount = daysInMonth(date.getMonth() + 1, date.getFullYear());
    const daysInPreviousMonthCount = daysInMonth(date.getMonth() - 1, date.getFullYear());

    let previosDays = getDays(daysInPreviousMonthCount);
    let currentDays = getDays(dayInCurrentMonthCount);
    let nextDays = getDays(dayInNextMonthCount);

    let p = 0;

    let firtsDayCurrMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    switch (firtsDayCurrMonth) {
        case 7:
            p = 6 // Воскресенье
            break;
        case 1:
            p = 0 // Понедельник
            break;
        case 2:
            p = 1 // Вторник
            break;
        case 3:
            p = 2 // Среда
            break;
        case 4:
            p = 3 // Четверг
            break;
        case 5:
            p = 4 // Пятница
            break;
        case 6:
            p = 5 // Суббота
            break;
    }

    let content = previosDays.concat(currentDays).concat(nextDays);


    previosDays = previosDays.slice(-p);
    nextDays = nextDays.slice(0, (42 - (currentDays.length + previosDays.length)));

    return (
        <div class="ui-datepicker">
            <div class="ui-datepicker-material-header">
                <div class="ui-datepicker-material-day">{dayOfWeek}</div>
                <div class="ui-datepicker-material-date">
                    <div class="ui-datepicker-material-day-num">{date.getday}</div>
                    <div class="ui-datepicker-material-month">{month}</div>
                    <div class="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div class="ui-datepicker-header">
                <div class="ui-datepicker-title">
                    <span class="ui-datepicker-month">Март</span>&nbsp;<span class="ui-datepicker-year">2017</span>
                </div>
            </div>
            <table class="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col class="ui-datepicker-week-end"></col>
                    <col class="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((item, index) => {
                        <tr>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                            <td key={index} className="ui-datepicker-other-month">{item}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;