import { Routes, Route, useNavigate } from "react-router-dom";
import Search from "../search/Search";


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Search navigate={useNavigate()} />} />
   </Routes>
  );
}

export default App;
