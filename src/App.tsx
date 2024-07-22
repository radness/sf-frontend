import ContextSample from "./sample/ContextSample";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Example1} from "./pages/Example1";
import {Example12} from "./pages/Example2";
import {NotFound} from "./pages/NotFound";

function App() {
    return (
        <>
            {/*<Layout>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/example1" element={<Example1/>}/>
                <Route path="/example2" element={<Example12/>}/>
                <Route path={'*'}
                       element={
                           <>
                               <NotFound>
                                   404 <br/> Not Found.
                               </NotFound>
                           </>
                       }
                >
                </Route>
            </Routes>
            {/*</Layout>*/}
        </>
    );
}

export default App;
