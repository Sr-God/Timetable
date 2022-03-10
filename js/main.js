$(function () {
    let restName = {
        sr: 'Перемена',
        br: 'Большая перемена',
    }
    let lessonName = {
        para1: '1 Пара',
        para2: '2 Пара',
        para3: '3 Пара',
        para4: '4 Пара',
        para5: '5 Пара',
        para6: '6 Пара',
        para7: '7 Пара',
        para8: '8 Пара'
    }
    let lessonTime = {
        para1S: '8:30',
        para2S: '9:50',
        para3S: '11:20',
        para4S: '12:40',
        para5S: '14:10',
        para6S: '15:30',
        para7S: '17:00',
        para8S: '18:20',

        para1E: '9:45',
        para2E: '11:05',
        para3E: '12:35',
        para4E: '13:55',
        para5E: '15:25',
        para6E: '16:45',
        para7E: '18:15',
        para8E: '19:35',
    }
    function getTime(time){
        time = time.split(':');
        return Number(time[0]) * 60 + Number(time[1]);
    }
    function upd() {
        let date = new Date()
        let Hours = date.getHours();
        let Minutes = date.getMinutes();
        let Seconds = date.getSeconds();
        let time = 60 * Hours + Minutes + 2;
        let leftTime;
        // ---------------------- FUNCTION GET NOUN ----------------------
        function getNoun(number, one, two, five) {
            let n = Math.abs(number);
            n %= 100;
            if (n >= 5 && n <= 20) {
                return five;
            }
            n %= 10;
            if (n === 1) {
                return one;
            }
            if (n >= 2 && n <= 4) {
                return two;
            }
            return five;
        }
        // ---------------------- FUNCTION ADD ZERO ----------------------
        function addZero(num) {
            if (num < 10) return num = '0' + num;
            else
                return num;
        }
        // ---------------------- FUNCTION GET PERCENT FOR LESSONS ----------------------
        function getPercentLesson(num) {
            let number = num - time;
            let hundred = 75;
            let result = number / hundred * 100
            return result
        }
        // ---------------------- FUNCTION GET PERCENT FOR SHORT REST ----------------------
        function getPercentShortRest(num) {
            let number = num - time;
            let hundred = 5;
            let result = number / hundred * 100
            return result
        }
        // ---------------------- FUNCTION GET PERCENT FOR BIG REST ----------------------
        function getPercentBigRest(num) {
            let number = num - time;
            let hundred = 15;
            let result = number / hundred * 100
            return result
        }
        function getPercentRelax(num, dif){
            let hundred = dif;
            let number = num - time;
            let result = number / hundred * 100;
            return result;
        }
        function getLessonDuration(lesson, lessontime){
            lesson.css({
                background: `linear-gradient(to top, orange ${getPercentLesson(lessontime)}%, #75EE3B 0%`,
            })
        }
        function getLessonAfter(lesson){
            lesson.css({
                background: `linear-gradient(to top, orange 0%, #75EE3B 0%`,
            })
        }
        function getLessonBefore(lesson){
            lesson.css({
                background: `linear-gradient(to top, orange 100%, #75EE3B 0%`,
            })
        }
        function getRestDuration(rest, resttime ,duration, dif ){
            if(duration === 'short'){
                rest.css({
                    background: `linear-gradient(to left, orange ${getPercentShortRest(resttime)}%, #75EE3B 0%`,
                })
            }else if(duration === 'big'){
                rest.css({
                    background: `linear-gradient(to left, orange ${getPercentBigRest(resttime)}%, #75EE3B 0%`,
                })
            }else if(duration === 'relax'){
                rest.css({
                    background: `linear-gradient(to left, orange ${getPercentRelax(resttime, dif)}%, #75EE3B 0%`,
                })
            }
        }
        function getRestAfter(rest){
            rest.css({
                background: `linear-gradient(to left, orange 0%, #75EE3B 0%`,
            })
        }
        function getRestBefore(rest){
            rest.css({
                background: `linear-gradient(to left, orange 100%, #75EE3B 0%`,
            })
        }
        // LESSON 1 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para1S) && time < getTime(lessonTime.para1E)) {
            getLessonDuration($('.les1 .contentLesson'), getTime(lessonTime.para1E))
            leftTime = getTime(lessonTime.para1E)
            $(".nameLesson").text(`${lessonName.para1}`)
        }
        else if (time >= getTime(lessonTime.para1E)) {
            getLessonAfter($('.les1 .contentLesson'))
        }
        else {
            getLessonBefore($('.les1 .contentLesson'))
        }
        // REST 1 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para1E) && time < getTime(lessonTime.para2S)) {
            getRestDuration($('.rest1 .contentRest'), getTime(lessonTime.para2S), "short")
            leftTime = getTime(lessonTime.para2S);
            $(".nameLesson").text(`${restName.sr}`);
        }
        else if(time >= getTime(lessonTime.para2S)){
            getRestAfter($('.rest1 .contentRest'))
        }
        else{
            getRestBefore($('.rest1 .contentRest'))
        }
        // LESSON 2 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para2S) && time < getTime(lessonTime.para2E)) {
            getLessonDuration($('.les2 .contentLesson'), getTime(lessonTime.para2E))
            leftTime = getTime(lessonTime.para2E)
            $(".nameLesson").text(`${lessonName.para2}`)
        }
        else if (time >= getTime(lessonTime.para2E)) {
            getLessonAfter($('.les2 .contentLesson'))
        }
        else {
            getLessonBefore($('.les2 .contentLesson'))
        }
        // REST 2 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para2E) && time < getTime(lessonTime.para3S)) {
            leftTime = getTime(lessonTime.para3S)
            getRestDuration($('.rest2 .contentRest'), getTime(lessonTime.para3S), "big")
            $(".nameLesson").text(`${restName.br}`);
        }
        else if(time >= getTime(lessonTime.para3S)){
            getRestAfter($('.rest2 .contentRest'))
        }
        else{
            getRestBefore($('.rest2 .contentRest'))
        }
        // LESSON 3 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para3S) && time < getTime(lessonTime.para3E)) {
            getLessonDuration($('.les3 .contentLesson'), getTime(lessonTime.para3E))
            leftTime = getTime(lessonTime.para3E)
            $(".nameLesson").text(`${lessonName.para3}`)
        }
        else if (time >= getTime(lessonTime.para3E)) {
            getLessonAfter($('.les3 .contentLesson'))
        }
        else {
            getLessonBefore($('.les3 .contentLesson'))
        }
        // REST 3 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para3E) && time < getTime(lessonTime.para4S)) {
            leftTime = getTime(lessonTime.para4S)
            getRestDuration($('.rest3 .contentRest'), getTime(lessonTime.para4S), "short")
            $(".nameLesson").text(`${restName.sr}`);
        }
        else if(time >= getTime(lessonTime.para4S)){
            getRestAfter($('.rest3 .contentRest'))
        }
        else{
            getRestBefore($('.rest3 .contentRest'))
        }
        // LESSON 4 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para4S) && time < getTime(lessonTime.para4E)) {
            getLessonDuration($('.les4 .contentLesson'), getTime(lessonTime.para4E))
            leftTime = getTime(lessonTime.para4E)
            $(".nameLesson").text(`${lessonName.para4}`)
        }
        else if (time >= getTime(lessonTime.para4E)) {
            getLessonAfter($('.les4 .contentLesson'))
        }
        else {
            getLessonBefore($('.les4 .contentLesson'))
        }
        // REST 4 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para4E) && time < getTime(lessonTime.para5S)) {
            leftTime = getTime(lessonTime.para5S)
            getRestDuration($('.rest4 .contentRest'), getTime(lessonTime.para5S), "big")
            $(".nameLesson").text(`${restName.br}`);
        }
        else if(time >= getTime(lessonTime.para5S)){
            getRestAfter($('.rest4 .contentRest'))
        }
        else{
            getRestBefore($('.rest4 .contentRest'))
        }
        // LESSON 5 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para5S) && time < getTime(lessonTime.para5E)) {
            getLessonDuration($('.les5 .contentLesson'), getTime(lessonTime.para5E))
            leftTime = getTime(lessonTime.para5E)
            $(".nameLesson").text(`${lessonName.para5}`)
        }
        else if (time >= getTime(lessonTime.para5E)) {
            getLessonAfter($('.les5 .contentLesson'))
        }
        else {
            getLessonBefore($('.les5 .contentLesson'))
        }
        // REST 5 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para5E) && time < getTime(lessonTime.para6S)) {
            leftTime = getTime(lessonTime.para6S)
            getRestDuration($('.rest5 .contentRest'), getTime(lessonTime.para6S), "short")
            $(".nameLesson").text(`${restName.sr}`);
        }
        else if(time >= getTime(lessonTime.para6S)){
            getRestAfter($('.rest5 .contentRest'))
        }
        else{
            getRestBefore($('.rest5 .contentRest'))
        }
        // LESSON 6 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para6S) && time < getTime(lessonTime.para6E)) {
            getLessonDuration($('.les6 .contentLesson'), getTime(lessonTime.para6E))
            leftTime = getTime(lessonTime.para6E)
            $(".nameLesson").text(`${lessonName.para6}`)
        }
        else if (time >= getTime(lessonTime.para6E)) {
            getLessonAfter($('.les6 .contentLesson'))
        }
        else {
            getLessonBefore($('.les6 .contentLesson'))
        }
        // REST 6 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para6E) && time < getTime(lessonTime.para7S)) {
            leftTime = getTime(lessonTime.para7S)
            getRestDuration($('.rest6 .contentRest'), getTime(lessonTime.para7S), "big")
            $(".nameLesson").text(`${restName.br}`);
        }
        else if(time >= getTime(lessonTime.para7S)){
            getRestAfter($('.rest6 .contentRest'))
        }
        else{
            getRestBefore($('.rest6 .contentRest'))
        }
        // LESSON 7 ---------------------------------
        if (time >= getTime(lessonTime.para7S) && time < getTime(lessonTime.para7E)) {
            getLessonDuration($('.les7 .contentLesson'), getTime(lessonTime.para7E))
            leftTime = getTime(lessonTime.para7E)
            $(".nameLesson").text(`${lessonName.para7}`)
        }
        else if (time >= getTime(lessonTime.para7E)) {
            getLessonAfter($('.les7 .contentLesson'))
        }
        else {
            getLessonBefore($('.les7 .contentLesson'))
        }
        // REST 7 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para7E) && time < getTime(lessonTime.para8S)) {
            leftTime = getTime(lessonTime.para8S)
            getRestDuration($('.rest7 .contentRest'), getTime(lessonTime.para8S), "short")
            $(".nameLesson").text(`${restName.sr}`);
        }
        else if(time >= getTime(lessonTime.para8S)){
            getRestAfter($('.rest7 .contentRest'))
        }
        else{
            getRestBefore($('.rest7 .contentRest'))
        }
        // LESSON 8 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para8S) && time < getTime(lessonTime.para8E)) {
            getLessonDuration($('.les8 .contentLesson'), getTime(lessonTime.para8E))
            leftTime = getTime(lessonTime.para8E)
            $(".nameLesson").text(`${lessonName.para8}`)
        }
        else if (time >= getTime(lessonTime.para8E)) {
            getLessonAfter($('.les8 .contentLesson'))
        }
        else {
            getLessonBefore($('.les8 .contentLesson'))
        }
        // REST 8 ---------------------------------------------------------------------
        if (time >= getTime(lessonTime.para8E) && time < 1440) {
            leftTime = 1950;
            getRestDuration($('.rest8 .contentRest'), 1440 , "relax", 265)
            $(".nameLesson").text(`Отдых`);
        }
        if (time >= 0 && time < getTime(lessonTime.para1S)) {
            leftTime = 510;
            getRestDuration($('.rest8 .contentRest'), getTime(lessonTime.para1S) , "relax", 510)
            $(".nameLesson").text(`Отдых`)
        }
        else{
            getRestDuration($('.rest8 .contentRest'), 1440 , "relax", 265)
        }
        // ---------------------- TIME ----------------------
        $('.time').text(`Время: ${addZero(Hours)}:${addZero(Minutes)}:${addZero(Seconds)}`);
        // ---------------------- TIME LEFT ----------------------
        $('.timeLeft').text(`Осталось: ${leftTime - time} ${getNoun(leftTime - time, 'минута', 'минуты', 'минут')} `);
    }
    setInterval(upd, 20)
});