import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

function App() {
  const schoolName = 'Your School Name';
  const className = 'Software Development - Level 5';

  const [currentPage, setCurrentPage] = useState('home');

  function navigateTo(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <header>
        <h1>{schoolName}</h1>
        <p>{className}</p>
      </header>

      <nav aria-label="Main navigation">
        <button onClick={() => navigateTo('home')}>Home</button>{' '}
        <button onClick={() => navigateTo('about')}>About</button>{' '}
        <button onClick={() => navigateTo('students')}>Students</button>{' '}
        <button onClick={() => navigateTo('contact')}>Contact</button>
      </nav>

      <main>
        {currentPage === 'home' && (
          <Home
            schoolName={schoolName}
            className={className}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <About schoolName={schoolName} />
        )}

        {currentPage === 'students' && (
          <Students className={className} />
        )}

        {currentPage === 'contact' && (
          <Contact
            schoolName={schoolName}
            onNavigate={navigateTo}
          />
        )}
      </main>

      <footer>
        <p>
          &copy; 2026 {schoolName} - Class Website
        </p>
      </footer>
    </div>
  );
}

export default App;