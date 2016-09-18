function ANDresults() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        var cDate= document.getElementById('dField').value;
        var country=document.getElementById('cField').value;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].date).substr(0,4)==cDate && json[i].country==country){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function Yearresults() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        var cDate= document.getElementById('dField').value;
        var country=document.getElementById('cField').value;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].date).substr(0,4)==cDate){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function Countryresults() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        var country=document.getElementById('cField').value;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if (json[i].country==country){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function displayAll() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        function all(){
          for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            //if eva is undefined, replace it with un
            if ((typeof json[i].eva)=='undefined'){
              tr.append("<td id='eva'>" + 'un' + "</td>");
            }
            else{
              tr.append("<td id='eva'>" + json[i].eva + "</td>");
            }          
            
            //if the date is a string, cut off the timestamp, otherwise leave it as undef
            if ((typeof json[i].date)=='string'){
              tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
            }
            else{
              tr.append("<td id='date'>" + 'undef' + "</td>");
            }

            //if the duration is undefined, replace it with undf
            if ((typeof json[i].duration)=='undefined'){
              tr.append("<td id='eva'>" + 'undf' + "</td>");
            }
            else{
              tr.append("<td id='eva'>" + json[i].duration + "</td>");
            }
            
            tr.append("<td id='eva'>" + json[i].country + "</td>");
            tr.append("<td id='crew'>" + json[i].crew + "</td>");
            tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
            tr.append("<td id='last'>" + json[i].purpose + "</td>");
            $('RES').append(tr);
          }
        };
      all()
    });
  };
function time1() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function timeOne(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].date).substr(0,4)==1965 || (json[i].date).substr(0,4)==1966 || (json[i].date).substr(0,4)==1967 || (json[i].date).substr(0,4)==1968 || (json[i].date).substr(0,4)==1969 || (json[i].date).substr(0,4)==1970
                || (json[i].date).substr(0,4)==1971 || (json[i].date).substr(0,4)==1972 || (json[i].date).substr(0,4)==1973 || (json[i].date).substr(0,4)==1974 || (json[i].date).substr(0,4)==1975 || (json[i].date).substr(0,4)==1976
                || (json[i].date).substr(0,4)==1977 || (json[i].date).substr(0,4)==1978 || (json[i].date).substr(0,4)==1979 || (json[i].date).substr(0,4)==1980) {
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      timeOne()
    });
  };

function time2() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function timeTwo(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].date).substr(0,4)==1981 || (json[i].date).substr(0,4)==1982 || (json[i].date).substr(0,4)==1983 || (json[i].date).substr(0,4)==1984 || (json[i].date).substr(0,4)==1985 || (json[i].date).substr(0,4)==1986
                || (json[i].date).substr(0,4)==1987 || (json[i].date).substr(0,4)==1988 || (json[i].date).substr(0,4)==1989 || (json[i].date).substr(0,4)==1990 || (json[i].date).substr(0,4)==1991 || (json[i].date).substr(0,4)==1992
                || (json[i].date).substr(0,4)==1993 || (json[i].date).substr(0,4)==1994 || (json[i].date).substr(0,4)==1995 || (json[i].date).substr(0,4)==1996 || (json[i].date).substr(0,4)==1997 || (json[i].date).substr(0,4)==1998 
                || (json[i].date).substr(0,4)==1999 || (json[i].date).substr(0,4)==2000) {
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      timeTwo()
    });
  };
function time3() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function timeThree(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].date).substr(0,4)==2001 || (json[i].date).substr(0,4)==2002 || (json[i].date).substr(0,4)==2003 || (json[i].date).substr(0,4)==2004 || (json[i].date).substr(0,4)==2005 || (json[i].date).substr(0,4)==2006
                || (json[i].date).substr(0,4)==2007 || (json[i].date).substr(0,4)==2008 || (json[i].date).substr(0,4)==2009 || (json[i].date).substr(0,4)==2010 || (json[i].date).substr(0,4)==2011 || (json[i].date).substr(0,4)==2012
                || (json[i].date).substr(0,4)==2013) {
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      timeThree()
    });
  };
function veh1() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='Apo'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function veh2() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='Gem'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function veh3() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='ISS'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function veh4() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='Sky'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function veh5() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='Soy'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };
function veh6() {
    $.getJSON('https://data.nasa.gov/resource/q8u9-7uq7.json',
    function (json) {
        var Table = document.getElementById("RES");
        Table.innerHTML = "";
        var tr;
        function field(){
          for (var i = 0; i < json.length; i++) {
            if ((typeof json[i].date)=='string'){
              if ((json[i].vehicle).substr(0,3)=='STS'){
                tr = $('<tr/>');
                //if eva is undefined, replace it with un
                if ((typeof json[i].eva)=='undefined'){
                  tr.append("<td id='eva'>" + 'un' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].eva + "</td>");
                }          
                
                //if the date is a string, cut off the timestamp, otherwise leave it as undef
                if ((typeof json[i].date)=='string'){
                  tr.append("<td id='date'>" + (json[i].date).substr(0,10) + "</td>");
                }
                else{
                  tr.append("<td id='date'>" + 'undef' + "</td>");
                }

                //if the duration is undefined, replace it with undf
                if ((typeof json[i].duration)=='undefined'){
                  tr.append("<td id='eva'>" + 'undf' + "</td>");
                }
                else{
                  tr.append("<td id='eva'>" + json[i].duration + "</td>");
                }
                
                tr.append("<td id='eva'>" + json[i].country + "</td>");
                tr.append("<td id='crew'>" + json[i].crew + "</td>");
                tr.append("<td id='veh'>" + json[i].vehicle + "</td>");
                tr.append("<td id='last'>" + json[i].purpose + "</td>");
                $('RES').append(tr);
              }
            }
          }
        };
      field()
    });
  };