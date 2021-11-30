const person:{
    name:string,
    age:number,
    hobbies:string[],
    role: [number,string]
} ={
    name:'Habib',
    age:36,
    hobbies:['spots','cooking'],
    role:[10,'admin']
}

let favoriteActivities:string;
favoriteActivities ='hiking';
person.role.push('users');
person.hobbies.push(favoriteActivities);
for (const hobby of person.role){
    console.log(hobby);
}

