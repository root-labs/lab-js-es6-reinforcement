// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  };
  return userFirstNames;
};
getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]




// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  let userFullNames = [];
  for(let user of arr){
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  };
  return userFullNames;
};
getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]



// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  let userWithCredits = [];
  for(const user of arr){
    let {firstName,lastName,balance} = user;
    userWithCredits.push({firstName,lastName,balance});
  };
  return userWithCredits;
};
getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]



// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  let femaleUsers = users.filter((user)=>{return user.gender === 'female'}).map((eachElement)=>{
    return `${eachElement.firstName} ${eachElement.lastName}`;
  });
  let maleUsers = users.filter((user)=>{return user.gender === 'male'}).map((eachElement)=>{
    return `${eachElement.firstName} ${eachElement.lastName}`;
  });

  return {femaleUsers:femaleUsers, maleUsers:maleUsers};
};
genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }



// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  return `Female:${data.femaleUsers.length} Male:${data.maleUsers.length}`  
};
genderCount(data);
// expected output:
// Female: 4
// Male: 3



// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  let balance = 0;
  let msg =""
  for(let user of users){
        balance = Number(((user.balance).replace('$','')).replace(',' , ''));
        if(balance > 20000){
          msg = msg + `Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.\n`
        };        
  };
  return msg;
};
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.




// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  let allData = [];
  for(let user of users){    
    allData.push({...user, isUserAdult:true})
  };
  return allData;
};


addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
