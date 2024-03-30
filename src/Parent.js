import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App.js";
import Peddaproject from "./PeddaAmberpet.js";




function Parent(){
    return <BrowserRouter>
         <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/pedda-amberpet' element={<Peddaproject/>}/>
         </Routes>
    </BrowserRouter>
}
export default Parent;