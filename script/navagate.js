function moveToDate(week, day) {
    var command = "$('#content').load('mainContent/week" + week + "/day" + day + ".html')";
    eval(command);
}
function moveToTopic(topic, page) {
    if(topic == 1){ //Javascript
        topic = "javascript";
    }else if(topic == 2){ //html
        topic = "html";
    }else if(topic == 3){ //css
        topic = "css";
    }else if(topic == 4){ //python
        topic = "python";
    }else if(topic == 5){ //c++
        topic = "cpp";
    }
    var command = "$'#content').load('topics/"+topic+"/page"+page+".html')";
    eval(command);
}