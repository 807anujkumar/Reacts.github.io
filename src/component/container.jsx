import Advance_confi from './Advanced_confi';
import { OrderForm } from './OrderForm';
import Button from './ButoonSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import style from "./container.module.css"
export default function Container({onclickxicon,onclicksubmit}){
    let [showicon,seticon]=useState(<FontAwesomeIcon icon={faAngleUp} />)
    let[showadvacconfig,setadvanceconfig]=useState()

   function  AdvanceiconHandler()
   {
seticon(<FontAwesomeIcon icon={faAngleDown} />)
setadvanceconfig(<Advance_confi></Advance_confi>)
  Updateorderform();

 }
 let [orgname,setorgname]=useState()
 let [channame,setchanname]=useState()
 let [order,setorder]=useState()
  
 function Updateorderform(){
     setorgname("Organization Name1")
setorder("3")

setchanname("Channel Name1");

 }
   
return<>
    <div className={style.Container}>

    <div className={style.mainpart}> 
    <h4>
        Create Order service
    </h4>
    <div className={style.iconx} onClick={(e)=>onclickxicon(e)}>
    <FontAwesomeIcon icon={faXmark} />
    </div>

    </div>
<div className={style.form} >
    <OrderForm intialicon={showicon} onclickAdvancedconfig={AdvanceiconHandler} updateform={Updateorderform}orgname={orgname} channelname={channame} Order={order}  ></OrderForm>   
     <div>{showadvacconfig}</div>
 <Button submitclick={onclicksubmit}></Button>
        
    </div>

    </div>

    </>


}