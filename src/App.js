import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense } from 'react';
import Main from './components/Main';

function App() {
  return (
    <Suspense>
      <div className="top_div">
        <Header />
        <Main />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
