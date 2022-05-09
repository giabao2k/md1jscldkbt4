let browser = prompt("Enter borwser name!")
switch(browser){
    case 'edge':
        alert("You've got the Edge!");
        break;
    case 'chrome':
        alert("Okay we support these browsers too");
        break;
    case 'firefox':
        alert("Okay we support these browsers too");
        break;
    case 'safari':
        alert("Okay we support these browsers too");
        break;
    case 'opera':
        alert("Okay we support these browsers too");
        break;
    default:
    
    alert('We hope that this page looks ok!');
}
//-------------
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }
    //-------------

    let value = parseFloat(prompt('Type a number'));
    if (value > 0) {
        alert(1);
    } else if (value < 0) {
        alert(-1);
    } else {
        alert(0);
    }
    let b = value > 0;
    switch(b){
        case(true):
            alert(1);
            break;
        case(false):
            alert(-1);
            break;   
        }