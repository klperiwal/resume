var flag=1;

var x= document.getElementById('welcomeButton');
x.addEventListener('click', function() {
    if(flag==1) {
        const messageElement = document.getElementById('message');
        flag=0;
        messageElement.textContent = 'Welcome to the ABG website created by Kishan!';
        x.innerHTML="Hide Message";
    }
    else {
        document.getElementById('message').textContent = '';
        x.innerHTML="Show Message";
        flag=1;
    }
});

document.getElementById('colorButton').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});