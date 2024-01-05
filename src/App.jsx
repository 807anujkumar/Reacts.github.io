import { useState } from 'react'
import Showorder from './component/showOrder'
import AddOrderService from './component/AddOrderService';
 import Container from './component/container';
import './App.css'
 
function App() {
let [showOrder,setorder ]= useState("No ordering service here.")
let [ordershow, setordershow]=useState()
function Buttonhandler(event)
{
  setorder();
  setordershow(<Container onclickxicon={Buttonhandler1} onclicksubmit={handlesunmitbutton} ></Container>)
 
}
function Buttonhandler1()
{
  setordershow();
  let massege=[...showOrder];
  setorder(massege);
} 
function handlesunmitbutton()
{
setordershow("Thank You & Successfully submitted Your Form")
}
 return <>
   <Showorder aboutOrder={showOrder}></Showorder>
   <AddOrderService onclickhandler={Buttonhandler}></AddOrderService>
    <div>{ordershow}</div>
</>
}
export default App
