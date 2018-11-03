var socket = io();

socket.on('welcome', function(data) {
    addMessage(data.message);

// Respond with a message including this clients' id sent from the server
socket.emit('i am client', {data: 'foo!', id: data.id});

});

// weather dates
        socket.on('date1', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("date1").innerHTML = data.data;
        });

        socket.on('date2', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("date2").innerHTML = data.data;
        });

        socket.on('date3', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("date3").innerHTML = data.data;
        });

        socket.on('date4', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("date4").innerHTML = data.data;
        });

        socket.on('date5', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("date5").innerHTML = data.data;
        });

// weather week days

        socket.on('weekDay1', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("weekDay1").innerHTML = data.data;
        });

        socket.on('weekDay2', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("weekDay2").innerHTML = data.data;
        });

        socket.on('weekDay3', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("weekDay3").innerHTML = data.data;
        });

        socket.on('weekDay4', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("weekDay4").innerHTML = data.data;
        });

        socket.on('weekDay5', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("weekDay5").innerHTML = data.data;
        });

// high
        socket.on('high1', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("high1").innerHTML = data.data +" C °";
        });

        socket.on('high2', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("high2").innerHTML = data.data +" C °";
        });

        socket.on('high3', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("high3").innerHTML = data.data +" C °";
        });

        socket.on('high4', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("high4").innerHTML = data.data +" C °";
        });

        socket.on('high5', function(data) {
            var text = document.createTextNode(data.data);
                document.getElementById("high5").innerHTML = data.data +" C °";
        });

// low

    socket.on('low1', function(data) {
        var text = document.createTextNode(data.data);
            document.getElementById("low1").innerHTML = data.data +" C °";
    });

    socket.on('low2', function(data) {
        var text = document.createTextNode(data.data);
            document.getElementById("low2").innerHTML = data.data +" C °";
    });

    socket.on('low3', function(data) {
        var text = document.createTextNode(data.data);
            document.getElementById("low3").innerHTML = data.data +" C °";
    });

    socket.on('low4', function(data) {
        var text = document.createTextNode(data.data);
            document.getElementById("low4").innerHTML = data.data +" C °";
    });

    socket.on('low5', function(data) {
        var text = document.createTextNode(data.data);
            document.getElementById("low5").innerHTML = data.data +" C °";
    });


// weather six

socket.on('six1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("six1").innerHTML = data.data  +" C °";
});

socket.on('six2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("six2").innerHTML = data.data  +" C °";
});

socket.on('six3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("six3").innerHTML = data.data  +" C °";
});

socket.on('six4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("six4").innerHTML = data.data  +" C °";
});

socket.on('six5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("six5").innerHTML = data.data  +" C °";
});

// weather six

socket.on('nine1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("nine1").innerHTML = data.data  +" C °";
});

socket.on('nine2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("nine2").innerHTML = data.data  +" C °";
});

socket.on('nine3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("nine3").innerHTML = data.data  +" C °";
});

socket.on('nine4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("nine4").innerHTML = data.data  +" C °";
});

socket.on('nine5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("nine5").innerHTML = data.data  +" C °";
});


// weather six

socket.on('twelve1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelve1").innerHTML = data.data  +" C °";
});

socket.on('twelve2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelve2").innerHTML = data.data  +" C °";
});

socket.on('twelve3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelve3").innerHTML = data.data  +" C °";
});

socket.on('twelve4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelve4").innerHTML = data.data  +" C °";
});

socket.on('twelve5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelve5").innerHTML = data.data  +" C °";
});

// weather six

socket.on('fifteen1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteen1").innerHTML = data.data  +" C °";
});

socket.on('fifteen2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteen2").innerHTML = data.data  +" C °";
});

socket.on('fifteen3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteen3").innerHTML = data.data  +" C °";
});

socket.on('fifteen4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteen4").innerHTML = data.data  +" C °";
});

socket.on('fifteen5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteen5").innerHTML = data.data  +" C °";
});

// weather six

socket.on('eightteen1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteen1").innerHTML = data.data  +" C °";
});

socket.on('eightteen2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteen2").innerHTML = data.data  +" C °";
});

socket.on('eightteen3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteen3").innerHTML = data.data  +" C °";
});

socket.on('eightteen4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteen4").innerHTML = data.data  +" C °";
});

socket.on('eightteen5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteen5").innerHTML = data.data  +" C °";
});

// weather six

socket.on('twentyone1', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyone1").innerHTML = data.data  +" C °";
});

socket.on('twentyone2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyone2").innerHTML = data.data  +" C °";
});

socket.on('twentyone3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyone3").innerHTML = data.data  +" C °";
});

socket.on('twentyone4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyone4").innerHTML = data.data  +" C °";
});

socket.on('twentyone5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyone5").innerHTML = data.data  +" C °";
});


// weather six

socket.on('sixdesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("sixdesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("sixdesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
        
});

socket.on('sixdesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("sixdesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('sixdesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("sixdesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('sixdesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("sixdesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('sixdesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("sixdesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

// weather six

socket.on('ninedesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("ninedesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("ninedesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
});

socket.on('ninedesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("ninedesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('ninedesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("ninedesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('ninedesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("ninedesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('ninedesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("ninedesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});


// weather six

socket.on('twelvedesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("twelvedesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("twelvedesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
});

socket.on('twelvedesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelvedesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twelvedesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelvedesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twelvedesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelvedesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twelvedesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twelvedesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

// weather six

socket.on('fifteendesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("fifteendesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("fifteendesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
});

socket.on('fifteendesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteendesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('fifteendesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteendesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('fifteendesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteendesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('fifteendesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("fifteendesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

// weather six

socket.on('eightteendesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("eightteendesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("eightteendesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
});

socket.on('eightteendesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteendesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('eightteendesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteendesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('eightteendesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteendesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('eightteendesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("eightteendesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

// weather six

socket.on('twentyonedesc1', function(data) {
    var text = document.createTextNode(data.data);
    if(data.data === ""){
        document.getElementById("twentyonedesc1").src = "http://openweathermap.org/img/w/01d.png"
    }
    else{
        document.getElementById("twentyonedesc1").src = "http://openweathermap.org/img/w/" + data.data +".png"
    }
});

socket.on('twentyonedesc2', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyonedesc2").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twentyonedesc3', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyonedesc3").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twentyonedesc4', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyonedesc4").src = "http://openweathermap.org/img/w/" + data.data +".png"
});

socket.on('twentyonedesc5', function(data) {
    var text = document.createTextNode(data.data);
        document.getElementById("twentyonedesc5").src = "http://openweathermap.org/img/w/" + data.data +".png"
});



var observer = new MutationObserver(function(mutations) {

mutations.forEach(function(mutation) {
    console.log(mutation.type);
});
});

var config = {
attributes: true,
childList: false,
characterData: false
};

observer.observe(target, config);

socket.on('error', console.error.bind(console));
socket.on('message', console.log.bind(console));

function addMessage(message) {
    var text = document.createTextNode(message),
        el = document.createElement('li'),
        messages = document.getElementById('data');

    el.appendChild(text);
    messages.appendChild(el);
}


