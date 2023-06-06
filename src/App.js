import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNav from "./Layout/WithNav";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import NewOrder from "./pages/Sales Module/Orders/Profile/NewOrder";
import OrderListCreated from "./pages/Sales Module/Orders/Profile/OrderList/OrderListCreated";
import Create from "./pages/Sales Module/Orders/Combined Schedules/Job Work/Create/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="/home" element={<Home/>} />

        <Route element={<WithNav />}>
          <Route path="/orders" element={<Parentroute />}> 
           <Route path="/orders/NewOrder" element={<NewOrder/>}/>
           <Route path="/orders/orderList/orderlistCreated" element={<OrderListCreated/>}/>
           <Route path="/orders/combinedSchedules/JobWork/Create" element={<Create/>}/>



          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
