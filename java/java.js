// Navigation bar

function navBar()
{
    if ( document.URL.includes("index.html") ) { // Check if user is on HOME page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">Home</button></nav>' // Home
    }
    else if ( document.URL.includes("players.html") ) { // Check if user is on PLAYERS page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button">Home</button></nav>' // Home
    }
    else if ( document.URL.includes("clubs.html") ) { // Check if user is on CLUBS page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button">Home</button></nav>' // Home
    }
    else if ( document.URL.includes("events.html") ) { // Check if user is on EVENTS page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button">Home</button></nav>' // Home
    }
    else if ( document.URL.includes("favourites.html") ) { // Check if user is on FAVOURITES page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button">Home</button></nav>' // Home
    }
    else if ( document.URL.includes("worldcup.html") ) { // Check if user is on WORLDCUP page
        var nav = '<nav style="float: right;"><a href=worldcup.html><button class="navButton" type="button" disabled style="color: deeppink;min-height: 54px;">World Cup</button></nav>' // World Cup
        nav += '<nav style="float: right;"><a href=favourites.html><button class="navButton" type="button">Favourites</button></nav>' // Favourites
        nav += '<nav style="float: right;"><a href=events.html><button class="navButton" type="button">Events</button></nav>' // Events
        nav += '<nav style="float: right;"><a href=clubs.html><button class="navButton" type="button">Clubs</button></nav>' // Clubs
        nav += '<nav style="float: right;"><a href=players.html><button class="navButton" type="button">Players</button></nav>' // Players
        nav += '<nav style="float: right;"><a href=index.html><button class="navButton" type="button">Home</button></nav>' // Home
    }

    return(nav)
}

document.getElementById("navBar").innerHTML = navBar();

// Scroll page

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        /* -- remove comment to  keep revealing 
        else { 
            entry.target.classList.remove('show');
        }      
        */  
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); // variable HiddenElements gets all .hidden classes
hiddenElements.forEach((el) => observer.observe(el));

// Moon logo function

function moonFunction() {
    alert("Hi!")
}

// Choose a random football player

let randomFootballers = [
    "Lionel Messi","Neymar","Erling Haaland","Karim Benzema","Kylian Mbappé","Kevin De Bruyne","Luka Modric","Robert Lewandowski","Mohamed Salah","Sadio Mané","Cristiano Ronaldo",
    "Vinícius Júnior","Son Heung-Min","Harry Kane","Bernardo Silva","Casemiro","Phil Foden","Thibaut Courtois","Virgil van Dijk","Jude Bellingham","David Alaba","Gabriel Jesus",
    "Jamal Musiala","João Cancelo","Joshua Kimmich","Antonio Rüdiger","Christopher Nkunku","Rafael Leão","Riyad Mahrez","Serge Gnabry","Luis Díaz","Trent Alexander-Arnold","Darwin Núñez",
    "Theo Hernández","Fabinho","Dusan Vlahovic","Julián Álvarez","Victor Osimhen","Kalidou Koulibaly","Ciro Immobile","Jack Grealish","Fikayo Tomori","Lorenzo Pellegrini",
    "Hirving Lozano","Mike Maignan","Sébastien Haller","Gabriel Barbosa","Hulk","Patrik Schick","Raphael Veiga",
    ];
    
let wordDiv = document.getElementById( 'randomFooty' );
    
function randomWord() {
    wordDiv.innerHTML = randomFootballers[ Math.floor(  Math.random() * randomFootballers.length ) ]; // Gets the entire length of a random string, in the array
}

// World Cup Countdown

var end = new Date('06/08/2026 10:1 AM');
            
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
            
function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0 && distance > -30) {
            
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'World Cup 2026 is on!';
            
        return;
    }
    else if (distance <= 31){
        clearInterval(timer)
        document.getElementById('countdown').innerHTML = "Timer has expired. World Cup 2026 has finished!";
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
            
    document.getElementById('countdown').innerHTML = days + ' days ';
    document.getElementById('countdown').innerHTML += hours + ' hrs ';
    document.getElementById('countdown').innerHTML += minutes + ' mins ';
    document.getElementById('countdown').innerHTML += seconds + ' secs';
}

timer = setInterval(showRemaining, 1000);

// Calendar

function buildCal(m, y, cM, cH, cDW, cD, brdr){
    var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
    
    var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
    oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
    
    var todaydate=new Date() //DD added
    var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
    
    dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
    var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
    t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
    for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
    t+='</tr><tr align="center">';
    for(i=1;i<=42;i++){
    var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
    if (x==scanfortoday) //DD added
    x='<span id="today">'+x+'</span>' //DD added
    t+='<td class="'+cD+'">'+x+'</td>';
    if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
    }
    return t+='</tr></table></div>';
    }
    
