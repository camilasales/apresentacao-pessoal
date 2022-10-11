import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  QuemSouEu  from './screens/QuemSouEu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<QuemSouEu/>}></Route>
          {/* <Route path="/detalhes/:id" element={<Details/>}></Route> */}

      </Routes>
		</BrowserRouter>
  );
}

export default App;
