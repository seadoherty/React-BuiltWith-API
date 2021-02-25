import { useState } from 'react';
import CompanyContext from './contexts/CompanyContext';
import Form from './components/Form';
import Results from "./components/Results";
import './App.css';

function App() {
  const [company, setCompany] = useState(CompanyContext);

  return (
    <main>
      <h1>Free BuiltWith API</h1>
      <p>Check the tech stack of a given domain (i.e. builtwith.com)</p>
      <CompanyContext.Provider value={{ company, setCompany }}>
        <Form />        
        <Results/>
      </CompanyContext.Provider>
    </main>
  );
}

export default App;
