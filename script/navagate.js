function moveToDate(week, day) {
    'use strict';
    var command = "$('#content').load('mainContent/week" + week + "/day" + day + ".html')";
    eval(command);
}

function moveToTopic(topic, page) {
    'use strict';
    if (topic === 1) { //Javascript
        topic = "javascript";
    } else if (topic === 2) { //html
        topic = "html";
    } else if (topic === 3) { //css
        topic = "css";
    } else if (topic === 4) { //python
        topic = "python";
    } else if (topic === 5) { //c++
        topic = "cpp";
    } else if (topic === 6) {
        topic = "generalConference";
    } else if (topic === 7) {
        topic = "ubuntu";
    }
    var command = "$('#content').load('topics/" + topic + "/page" + page + ".html')";
    eval(command);
}
$(document).ready(function () {
    'use strict';
    $('.link').click(function () {
        $(this).addClass('active');
        setTimeout(function () {
            $('.active').removeClass('active');
        }, 2000);
    });
});
