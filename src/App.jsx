import './App.css';

// Main Component
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <NewDeveloper></NewDeveloper>
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
  );
};

// Another component I created
function Student() {
  const name = "Monir";
  const age = 33;

  return (
    // Using Div

    // 1. External CSS: Using CSS 'class' Selector to Style
    <div className="student">
      <h3>This is a Student Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Another component I created
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",

    // "border-radius": "10px", this can be written also
    borderRadius: "10px"
  };

  return (
    // 2. Inline CSS [method 01]: Using HTML 'style' Attribute to Style
    <div style={developerStyle}>
      <h3>Web Developer</h3>
      <p>Coding Technology: ReactJS</p>
    </div>
  );
};


// Another Component I created
function NewDeveloper() {
  return (
    // 3. Inline CSS [method 02]: Using HTML 'style' Attribute to Style, direct style-properties method
    <div style={{
      margin: "20px",
      padding: "20px",
      border: "2px solid red",
      borderRadius: "10px",
    }}>
      <h3>New Web Developer</h3>
      <p>Technology: React and Node</p>
    </div>
  );
};

export default App;