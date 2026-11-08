import logo from './logo.svg';
import './App.css';
import StudentHeader from './StudentHeader';

function App() {
  return (
    <div className="App">
      <StudentHeader 
        logo={logo}
        title="Welcome to FullStack Development - I"
        subtitle="React JS Programming Week09 Lab exercise"
        studentID="101544778"
        studentName="O'Neal Jean"
        institution="George Brown College, Toronto"
      />
    </div>
  );
}

export default App;