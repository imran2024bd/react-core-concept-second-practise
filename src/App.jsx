
import Actor from './Actor';
import './App.css'
import Todo from './Todo';
import Singer from './Singer';
import Shilpi from './Shilpi';
import BookStore from './BookStore';
import Book from './Book';

function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const books = [
    { id: 1, name: 'physics', price: 100 },
    { id: 2, name: 'Math', price: 120 },
    { id: 3, name: 'Chemistry', price: 130 },
    { id: 4, name: 'Biology', price: 150 },
  ];

  const singers = [
    { id: 1, name: 'Dr. Mahfuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 },
  ];
  // const shilpis = [
  //   { id: 1, name: 'Dr. Mahfuzur', age: 68 },
  //   { id: 2, name: 'Eva Rahman', age: 38 },
  //   { id: 3, name: 'Shuvro Dev', age: 58 },
  //   { id: 4, name: 'Pritom', age: 28 },
  // ];

  return (
    <>
      <h3>Vite + React</h3>

      <BookStore books={books} ></BookStore>

      {/* {
        singers.map(singer => <Singer singer={singer} ></Singer>)
      } */}

      {/* {
        shilpis.map(shilpy => <Shilpi shilpy={shilpy}></Shilpi>)
      } */}




      {/* <Actor name={"Sakib"}></Actor> */}
      {/* {
        actors.map(actor => <Actor name={actor} ></Actor>)
      } */}


      {/* <Todo task='Learn React' isdone={true}></Todo>
      <Todo task='Explore React Core Concept' isdone={false}></Todo>
      <Todo task='Explore JSX' isdone={true}></Todo> */}
      {/* <Father></Father> */}
      {/* <Device name='Laptop' price='35000'></Device>
      <Device name='mobile' price='17000' ></Device>
      <Device name='watch' price='25000'></Device>
      <Person></Person>
      <Student grade="9" score="98" version="English"></Student>
      <Student grade="7" score="68" version="Bangla"></Student>
      <Student grade={12} score="58" ></Student>
      <Developer skill="React" Language="Jsx"></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return (
    <h2>This Device is a name : {props.name} and price: {props.price} </h2>
  )
}

// Destructuring Procedure & Default value set
const { grade, score, version } = { grade: "6", score: "58", version: "English & Bangla" };

function Student({ grade = 1, score = 0, version = 'Bangla' }) {
  return (
    <div className='student'>
      <h3> This is a student profile</h3>
      <p>Grade : {grade} </p>
      <p>Score : {score} </p>
      <p>Version: {version} </p>
    </div>
  )
}

// Basic Step on props

// function Student(props) {
//   console.log(props);
//   return (
//     <div className='student'>
//       <h3> This is a student profile</h3>
//       <p>Grade :{props.grade} </p>
//       <p>Score : {props.score} </p>
//       <p>Version: {props.version} </p>
//     </div>
//   )
// }






function Father() {
  const name = 'Abdus salam';
  const age = 75;
  const address = { village: 'Kashinathpur', post: 'Dhamadhor', thana: 'Bera', dist: 'pabna' };

  return (<div>
    <h2> My Father name {name} With {age} years old </h2>
    <p> and home {address.village} of {address.post} of {address.thana} of {address.dist} . </p>
  </div>
  )
}







function Person() {
  const age = 18;
  const money = 20;
  const person = { name: 'Imran Hossain', age: 32 };
  return <h3> I am {person.name} with age {age + money}</h3>
}



function Developer(props) {

  const developerstyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '60px'
  };
  return (
    <div style={developerstyle}>
      <h3>Web Development</h3>
      <p> Coding : {props.skill} </p>
      <p> Language : {props.Language} </p>
    </div>
  )
}

// function Student(props) {
//   return (
//     <div className='student'>
//       <h3> This is a student profile</h3>
//       <p>Name : </p>
//       <p>age : </p>
//     </div>
//   )
// }

export default App
