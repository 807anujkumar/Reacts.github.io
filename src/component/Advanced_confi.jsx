
import style from "./Advanced_confi.module.css"
function Advance_confi()
{
   return<> 
    <div className={style.container}>

<div class="row">

<div className={`col ${style.advanced}`}>
  <label for="exampleInputEmail1" class="form-label">Max Message Count<span>*</span></label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="E.g. 10"/>
  </div>
  <div className={`col ${style.advanced}`}>
  <label for="exampleInputEmail1" class="form-label">Absolute Max Bytes</label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="E.g. 1038723"/>
</div>
  </div>
  <div class="row">
  <div className={`col ${style.advanced2}`}>
  <label for="exampleInputEmail1" class="form-label">Preffered Max Bytes<span>*</span></label>
    <input type="text" id="exampleInputEmail1" class="form-control" placeholder="E.g. 524288"/>
  </div>


  </div>

    </div>
 
</> 
}
export default Advance_confi