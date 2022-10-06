import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      Homepage
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}

function About() {
  return (
    <div>
      About Us
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

function Teams() {
  return (
    <ul>
      <li>Ge</li>
      <li>Sam</li>
      <li>Lucy</li>
      <li>Ken</li>
    </ul>
  )
}

function TeamMember() {
  const params = useParams();
  return (
    <div>
      Team member: {params.member}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teams">
          <Route index element={<Teams />} />
          <Route path=":member" element={<TeamMember />} />
        </Route>
        <Route path="*" element={<div>Sorry, page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
