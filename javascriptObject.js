let user = new Object();
let user1 = {};
user.name = 'John';
user.surname = 'Smith';
alert(user.name);
user.name = 'Pete';
alert(user.name);

let schedule = {};
function isEmpty(object){
    for (let key in object) {
        return false; 
    }
        return true;
}
alert (isEmpty(schedule));

function multiplyNumeric(obj) {
    for (let key in obj){
        if (typeof obj[key]  ==='number') {
            obj[key] *=2;
        }
  
    }
}

let testObj = {
    width: 500,
    height: 600,
    name: "joyce",
}

multiplyNumeric(testObj);
alert(testObj.width);