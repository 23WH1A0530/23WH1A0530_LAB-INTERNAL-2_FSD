import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import TaskList from "../src/components/TaskList";
function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskList />}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;