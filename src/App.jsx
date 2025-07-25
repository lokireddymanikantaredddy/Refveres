import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inprogress from './pages/Inprogress';
import Home from './pages/Home';
import JavaScript from './pages/mainprograming/JavaScript';
import Python from './pages/mainprograming/Py'
import Java from './pages/mainprograming/Java';
import TypeScript from './pages/mainprograming/TypeScript';
import Cpp from './pages/mainprograming/Cpp';
import Csharp from './pages/mainprograming/Csharp';
import Go from './pages/mainprograming/Go';
import Rust from './pages/mainprograming/Rust';
import Kotlin from './pages/mainprograming/Kotlin';
import Php from './pages/mainprograming/Php';
import Ruby from './pages/mainprograming/Ruby';
import Swift from './pages/mainprograming/Swift';
import HTML from './pages/web-development/Html';
import CSS from './pages/web-development/Css';
import ReactPage from './pages/web-development/React';
import AngularPage from './pages/web-development/Angular';
import VuePage from './pages/web-development/Vue';
import SassPage from './pages/web-development/Sass';
import TailwindPage from './pages/web-development/Tailwind';
import NextPage from './pages/web-development/Next';
import ExpressPage from './pages/web-development/Express';
import NodePage from './pages/web-development/Node';
import GraphQLPage from './pages/web-development/GraphQL';
import JQueryPage from './pages/web-development/JQuery';


import Footer from './pages/Footer';
import ScrollToTop from './pages/ScrollTop';

function App() {
  return (
    <Router> 
      <ScrollToTop />
      <Routes>
        
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Inprogress />} />
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path='/javascript' element={<JavaScript/>} />
        <Route path="/python" element={< Python />} />
        <Route path="/java" element={<Java />} />
        <Route path="/typescript" element={<TypeScript />} />
        <Route path="/csharp" element={<Csharp />} /> 
        <Route path="/cplusplus" element={<Cpp />} /> 
        <Route path="/go" element={<Go />} /> 
        <Route path="/rust" element={<Rust />} /> 
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/swift" element={<Swift />} /> 
        <Route path="/php" element={<Php />} /> 
        <Route path="/ruby" element={<Ruby />} />
        <Route path="/html5" element={<HTML />} />
        <Route path="/css3" element={<CSS />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/angular" element={<AngularPage />} />
        <Route path="/vue-js" element={<VuePage />} />
        <Route path="/sass" element={<SassPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/next-js" element={<NextPage />} />
        <Route path="/express" element={<ExpressPage />} />
        <Route path="/node-js" element={<NodePage />} />
        <Route path="/graphql" element={<GraphQLPage />} />
        <Route path="/jquery" element={<JQueryPage />} />
  
        

      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App; 