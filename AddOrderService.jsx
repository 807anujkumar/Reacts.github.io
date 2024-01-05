import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import style from "./AddOrderService.module.css"
 export default function AddOrderService({onclickhandler}){
return<>
 
     
     <button className={style.btm} onClick={(e)=>onclickhandler(e)}>
        <span className={style.icon}> <FontAwesomeIcon icon={faPlus} />
    </span>

  Add Ordering Service
     </button>


</>

 }