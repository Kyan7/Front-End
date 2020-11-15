function solveDateExercise() {
    var a = [];
    // 1
    var result1 = [];
    a.push(new Date());
    a.map((el) => {
        result1.push(a.toLocaleString());
    });
    console.log("Result after exercise 1: ");
    console.log(result1);
    console.log("----")

    // 2
    var result2 = [];
    a.push(new Date("08 December 2018"));
    a[1].setHours(21, 0, 0, 0);
    a.map((el) => {
        result2.push(a.toLocaleString());
    });
    console.log("Result after exercise 2: ");
    console.log(result2);
    console.log("----")

    // 3
    var daysInMonth = [];
    var dayOfTheWeek = [];
    var strDayOfTheWeek = [];
    var result3daysInMonth = [];
    var result3dayOfTheWeek = [];
    a.map((date) => {
        var daysInMonthTemp = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        daysInMonth.push(daysInMonthTemp);
        var dayOfTheWeekTemp = date.getDay();
        dayOfTheWeek.push(dayOfTheWeekTemp);
        var strDayOfTheWeekTemp;
        switch (date.getDay()) {
            case 0:
                strDayOfTheWeekTemp = "неделя";
                break;
            case 1:
                strDayOfTheWeekTemp = "понеделник";
                break;
            case 2:
                strDayOfTheWeekTemp = "вторник";
                break;
            case 3:
                strDayOfTheWeekTemp = "сряда";
                break;
            case 4:
                strDayOfTheWeekTemp = "четвъртък";
                break;
            case 5:
                strDayOfTheWeekTemp = "петък";
                break;
            case 6:
                strDayOfTheWeekTemp = "събота";
                break;
            default:
                break;
        }
        strDayOfTheWeek.push(strDayOfTheWeekTemp);
        result3daysInMonth.push(a.toLocaleString() + ", " + daysInMonthTemp)
        result3dayOfTheWeek.push(a.toLocaleString() + ", " + dayOfTheWeekTemp + " - " + strDayOfTheWeekTemp);
    })
    console.log("Result after exercise 3: ");
    console.log(result3daysInMonth);
    console.log(result3dayOfTheWeek);
    console.log("----");

    // 4
    var result4 = [];
    for (var i = 0; i < a.length; i++) {
        result4.push(`Дата: ${('0' + a[i].getDate()).slice(-2)}.${('0' + a[i].getMonth()).slice(-2)}.${a[i].getFullYear()}, час: ${('0' + a[i].getHours()).slice(-2)}:${('0' + a[i].getMinutes()).slice(-2)}:${('0' + a[i].getSeconds()).slice(-2)}, ${strDayOfTheWeek[i]}, ${daysInMonth[i]} дни`);
    }
    console.log("Result after exercise 4: ");
    console.log(result4);
}