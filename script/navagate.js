function moveToPage(week, day) {
    var command = "$('#content').load('mainContent/week" + week + "/day" + day + ".html')";
    eval(command);
}