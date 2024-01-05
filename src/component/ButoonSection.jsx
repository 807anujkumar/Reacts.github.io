  import style from "./ButoonSection.module.css"
  export default function Button({submitclick}){

 return<>
 <div className={style.container}>
<button className={style.submit} onClick={submitclick}>Submit</button>
<button className={style.cancel}>Cancel</button>
</div>
 </>

}