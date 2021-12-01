enum Role {ADMIN='ADMIN',READ_ONLY="AUTHOR"}

const person:{
    name:string,
    age:number,
    hobbies:string[],
    role: string
} ={
    name:'Habib',
    age:36,
    hobbies:['spots','cooking'],
    role:Role.ADMIN
}

let favoriteActivities:string;
favoriteActivities ='hiking';
person.role.push('users');
person.hobbies.push(favoriteActivities);
for (const hobby of person.role){
    console.log(hobby);
}

