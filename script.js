// первое задание//

const user = {
    name: "lol"
};
let num = 123;

function  checkDataType(value){
    if(typeof value === 'object'){
        return('не примитивный тип');
    }else{
        return('примитивный тип');
    }
}
console.log(checkDataType(user));
console.log(checkDataType(num));

// первое задание//


// второе задание//
function updateProfileMutably(userObject, newName, newRole){
    userObject.name = newName
    userObject.name = newRole
}
    const user2 = {
        name: 'lol',
        role: 'hs'
    }
updateProfileMutably(user2, 'lollll', 'kek')

console.log(user2);

// второе задание//



// третье задание//
function updateProfileImmutably(userObject, newName, newRole) {
    const tempUser = {};
    for (const key in userObject) {
        if (userObject.hasOwnProperty(key)) {
            tempUser[key] = userObject[key];
        }
    }
    tempUser.name = newName;
    tempUser.role = newRole;
    
    updatedUser = tempUser;
    return tempUser;
}

const originalUser = {
    name: 'mirislam',
    role: 'student'
};

console.log(updateProfileImmutably(originalUser, 'Руслан', 'преподователь'));
console.log("оригинальный объект", originalUser); 
console.log("новый обьект", updatedUser);

// третье задание//
