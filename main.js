/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

//3.  Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
    const water = {
    lake: {
    description: 'surrounded by land',
    popular: { state: 'Michigan', name: 'Lake Michigan' },
    },
    river: {
    definition: 'flows towards ocean',
    known: { place: 'New York', label: 'Hudson River' },
    },
    ocean: {
    context: 'body of water that composes much of a planet hydrosphere',
    names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    },

    };
    let {lake:{description,popular:{state,name}},river:{definition,known:{place,label}},ocean:{context,names}}=water;
    names = ['AT','PA','IN','AR'];

    

//4.  Using destructuring create a new array that maps through the items array and from each item in the loop, a string of the color and shape values should be logged. for example one loop should return 'blue circle' from the items array. This is not a function. you will just map and use the items array as the only array.
    let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
    ];
    let [item1,item2,item3] = items;
    items.map((item)=>console.log(Object.values(item).join(' ')))

    

//5.  Deconstruct the complete car object literal
    //Find a way to call just one variable name for each of the carTypes
    //rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
    const car = {
    carTypes: {
    one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
    two: {make: 'toyota', model: 'Landcruiser', year: 2018,},},
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
    main: 'Dealership',
    second: 'Roe Park Car Shop',
    otherShops: [
    'Bozo Repair',
    'Johnson Body',
    'Fixer Upper Central',
    'Last Chance Repairs',
    ],
    },
    };
    let {one:mer,two:toyota,}= car.carTypes;
    
    

    let [third,fourth,...fifth] = car.repairPlaces.otherShops;
    
    
/*6.  Create a class Cars that takes make, color, and year
    Instantiate 4 cars, car1,car2, car3, car4
    Using destructuring declare the make, color and year variables for each car and console.log the variables
    OR SHOULD I SAY declare the make, color and year and list a string for each showing their values.*/
    class Car{
        constructor(make,color,year){
            this.make = make;
            this.color = color;
            this.year = year;
        }
    }
    const car1 = new Car('mk1','clr1','yr1');
    const car2 = new Car('mk2','clr2','yr2');
    const car3 = new Car('mk3','clr3','yr3');
    const car4 = new Car('mk4','clr4','yr4');
    let cars =[car1,car2,car3,car4]
    cars.map((car)=> console.log(Object.values(car))) 

    
 //7. Using destructuring, choose all the schools with a gpa higher than 3.5,
      //and list the chosen object ascending by major and log the average gpa,
      //use method chaining if you can

let schoolArray = [
  { school: 'Pataway', major: 'comp sci', year: 'sophomore', gpa: 3.2 },
  { school: 'Bronxville', major: 'medicine', year: 'junior', gpa: 4.0 },
  { school: 'Scarsdale', major: 'accounting', year: 'freshman', gpa: 2.6 },
  { school: 'Peekskill', major: 'liberal arts', year: 'freshman', gpa: 4.0 },
  { school: 'Anopram', major: 'accounting', year: 'senior', gpa: 3.7 },
];
const [one,two,three,four,five]= schoolArray;
const goodSchool = schoolArray.filter((school)=>school.gpa>3.5);
goodSchool
goodSchool.sort((a,b)=>(a.major>b.major)?1:((a.major<b.major)?-1:0));
let average =goodSchool.reduce((ave,school)=>school.gpa/goodSchool.length+ave,0);
console.log(average)




