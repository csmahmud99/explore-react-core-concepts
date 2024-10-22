import './App.css';

// Main Component
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
};


// Component I created, in the same file, so 'no need' to EXPORT this
function Person() {
  const age = 30;
  const money = 100;

  const person = {name: "Mahmud", Country: "Bangladesh"};

  return (
    // Using Fragment
    <>
      <h3>I am {person.name} with age: {age}; I have the money {age + money}</h3>
    </>
  )
};

// Another component I created
function Student() {
  const name = "Monir";
  const age = 33;

  return (
    // Using Div
    <div>
      <h3>This is a Student Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default App;