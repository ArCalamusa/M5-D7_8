import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ErrorPage from './components/ErrorPage'
import BookDetails from "./components/BookDetails";
import ContactUs from "./pages/ConctatUs";
import WhoWeAre from "./pages/WhoWeAre";
import Fantasy from "./pages/Fantasy";
import './styles/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="/Fantasy" element={<Fantasy />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App