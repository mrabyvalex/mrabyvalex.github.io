import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (<BrowserRouter>
        <Routes> 
            <Route path="*" element={<App />} />    
        </Routes>
      </BrowserRouter>)
}

export default Router