var friends = ['Steph', 'Julius', 'Glenn', 'Tyler', 'Jason'];
var btn = document.createElement('button');
var btnText = document.createTextNode('Sing!')

btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', function() {
    

    for (i = 0; i < 5; i++) {
        var friendDiv = document.createElement('div');
        document.body.appendChild(friendDiv);

        friendDiv.className = 'friend'
    }

    for (i = 0; i < friends.length; i++){
        var friend = friends[i]; {
            for (s = 99; s > 0; s--) {
                var minusOne = s - 1;
                if (s > 1) {
                    console.log(s + ' lines of code in the file, ' + s + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file');
                } else {
                    console.log('1 line of code in the file, 1 line of code; ' + friend + ' strikes one out, clears it all out, no more lines of code in the file');
                }
            }
        }
    };
});