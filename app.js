var friends = ['Steph', 'Julius', 'Glenn', 'Tyler', 'Jason'];
var btn = document.createElement('button');
var btnText = document.createTextNode('Sing!')

btn.appendChild(btnText);
document.body.appendChild(btn);//adds btn to body

btn.addEventListener('click', function () {
    for (i = 0; i < 5; i++) {
        var friendDiv = document.createElement('div');
        document.body.appendChild(friendDiv);//adds `friendDiv`s to body

        friendDiv.className = 'friend';//assigns all divs a class name of 'friend'

        var nameHeader = document.createElement('h3');
        friendDiv.appendChild(nameHeader);//adds nameHeader to friendDiv

        var divClass = document.getElementsByClassName('friend');
        divClass[i].firstChild.textContent = friends[i];//adds friends based on divClass array

        for (s = 99; s > 0; s--) {
            var minusOne = s - 1;
            if (s > 1) {
                var p = document.createElement('p')
                friendDiv.appendChild(p)//adds p to `friendDiv`s
                divClass[i].lastChild.textContent += s + ' lines of code in the file, ' + s + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file ';
            } else {
                var p = document.createElement('p')
                friendDiv.appendChild(p)//adds p to `friendDiv`s
                divClass[i].lastChild.textContent += ' 1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file';
            };
        };//adds textContent to `p`s
    };
});