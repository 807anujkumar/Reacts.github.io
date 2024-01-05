 import style from "./orderForm.module.css"
 export function OrderForm({intialicon,onclickAdvancedconfig,Updateorderform,orgname,channelname,Order}){
 return<>
<div className={`row ${style.order}`}>
  <div className={`col ${style.orderinput}`}>
  <label for="exampleInputEmail1" class="form-label">Organization Name<span>*</span></label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="Organization Name1" value={orgname}/>
  </div>
  <div className={`col ${style.orderinput}`}>
  <label for="exampleInputEmail1" class="form-label">No. of ordering Nodes <span>*</span></label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="Organization Name1" value={Order}/>
  </div>
 </div>
<div class="row">
<div className={`col ${style.orderinput}`}>
  <label for="exampleInputEmail1" class="form-label">Channel Name(Optional)</label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="Organization Name1" value={channelname}/>
  </div>
  <div className={`col ${style.orderinput}`}>
  <label for="exampleInputEmail1" class="form-label">Domain <span>*</span></label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="Organization Name1"/>
  </div>

</div>
<div className={style.advanced} onClick={()=>onclickAdvancedconfig()}>
<p>Advanced Configurations
<span className="">{intialicon}</span></p>
   </div>
    </>
}
