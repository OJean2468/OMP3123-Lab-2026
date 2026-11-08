function StudentHeader(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>Your Student ID: {props.studentID}</h3>
      <h4>Your Name: {props.studentName}</h4>
      <h5>{props.institution}</h5>
    </header>
  );
}

export default StudentHeader;