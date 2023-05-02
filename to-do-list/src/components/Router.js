import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


const Router = () => {

const Home = () => <h1>Home</h1>;

const about = () => <h1>Pet List</h1>;

const contacto = () => <h1>Contacto en router.js</h1>;
const Error404 = () => <h1>Error page</h1>;

// const Layout = () => <h1>Layout</h1>;

return (

<>

<BrowserRouter>

<Routes>

<Route path="/" element={<Layout />}>

<Route index element={<Home />}></Route>

<Route path="/about" element={<aboutabc />}></Route>

<Route path="contacto" element={<contacto />}></Route>

**<Route path="*" element={<Error404 />}></Route>**

</Route>

</Routes>

</BrowserRouter>

</>

);

};

export default Router;