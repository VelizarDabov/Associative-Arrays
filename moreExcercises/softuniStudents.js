function softuniStudents(input){
let list = {};

for(let line of input){
    if(!line.includes('[')){
        let [courseName, capacity] = line.split(': ');
        if(!list.hasOwnProperty(courseName)){
            list[courseName] = {
                capacity:Number(capacity),
                students: [],
            }
        }else{
            list[courseName].capacity += Number(capacity);
        }
    }else if (line.includes(`with email`)){
        line = line.split('[');
        let userName = line.shift();
        line = line[0].split(']');

        let count = Number(line.shift());
        let temp = line[0].split(' ');
        let email = temp[3];
        let courseName = line[0].split(' joins ')[1];

        if(list.hasOwnProperty(courseName) && list[courseName].capacity > 0){
            list[courseName].students.push({
                userName: userName,
                count: count,
                email: email,
            })
            list[courseName].capacity--;
        }

    }
}
let sortByCapacity = Object.entries(list)
.sort((a,b) => Object.keys(b[1].students).length - Object.keys(a[1].students).length);

for(let el of sortByCapacity){
    console.log(`${el[0]}: ${el[1].capacity} places left`);
    el[1].students.sort((a,b) => b.count - a.count).forEach(x => 
        console.log(`--- ${x.count}: ${x.userName}, ${x.email}`));
        
    }
}
softuniStudents(['JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics',
 'C#Advanced: 3', 'JSCore: 4', 
 'user2[30] with email user2@user.com joins C#Basics',

'user13[50] with email user13@user.com joins JSCore',

'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced',

'user6[85] with email user6@user.com joins JSCore', 
'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',

'user45[105] with email user45@user.com joins JSCore',

'user007[20] with email user007@user.com joins JSCore',

'user700[29] with email user700@user.com joins JSCore',

'user900[88] with email user900@user.com joins JSCore'])