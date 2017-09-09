window.onload = function() {

    var monthNames = ["იან", "თებ", "მარტ", "აპრ", "მაი", "ივნ",
    "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"];
    var dates = {
        endDate: new Date(),
        startDate: (new Date()).subDays(1)
    }

    var createli = function(minus) {
        minus = minus !== 'undefined' ? minus : false;
        var currDate = !minus ? dates.endDate : dates.startDate;

        if(!minus)
            dates.endDate = dates.endDate.addDays(1);
        else dates.startDate = dates.startDate.subDays(1);

        var li = document.createElement('li');
        var div = document.createElement('div');
        var div1 = document.createElement('div');
        div1.className = "wrapper";
        var span = document.createElement('span');
        span.textContent = monthNames[currDate.getMonth()]
        div.textContent = currDate.getDate();
        if(currDate.setHours(0,0,0,0) == (new Date()).setHours(0,0,0,0)) {
            li.className = 'active';
        }
        div1.appendChild(div);
        div1.appendChild(span);

        li.appendChild(div1);

        return li;
    }

    
    for(var i = 0; i < 10; i++) {
        document.querySelector('.calendar-wrap ul').appendChild(createli());
    }

    var currentEl = document.querySelector('.calendar-wrap ul').firstElementChild;

    document.getElementById('prev-day').onclick = function() {
        var el = currentEl;
        for(var i = 0; i < 4; i++) {
            console.log(el.previousElementSibling);
            if(el.previousElementSibling == null) {
                console.log('hj');
                document.querySelector('.calendar-wrap ul').insertBefore(createli(true),document.querySelector('.calendar-wrap ul').firstChild);
                el = el.previousElementSibling;
            } else {
                el = el.previousElementSibling;
            }
        }

        document.querySelector('.calendar-wrap ul').style.left = "";
        document.querySelector('.calendar-wrap ul').style.left = "-" + currentEl.offsetLeft + "px";

        currentEl = el;

        if(document.querySelector('.calendar-wrap ul').className != "animate")
            document.querySelector('.calendar-wrap ul').className = "animate";
    
        document.querySelector('.calendar-wrap ul').style.left = "-" + currentEl.offsetLeft + "px";
    }

    document.getElementById('next-day').onclick = function() {
        var el = currentEl;
        for(var i = 0; i < 14; i++) {
            if(el.nextElementSibling == null) { 
                document.querySelector('.calendar-wrap ul').appendChild(createli());
                el = el.nextElementSibling;
            }

            else {
                el = el.nextElementSibling;
            }

            if(i == 3) {
                currentEl = el;
            }
        }
        if(document.querySelector('.calendar-wrap ul').className != "animate")
            document.querySelector('.calendar-wrap ul').className = "animate";

        document.querySelector('.calendar-wrap ul').style.left = "-" + currentEl.offsetLeft + "px";
    }


    document.querySelector('.calendar-wrap ul').style.left = 0;
}


Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  }

  Date.prototype.subDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() - days);
    return dat;
  }