import style from "./showOrder.module.css"
const Showorder=({aboutOrder})=>{

    return<>
    <div className={style.container}>
        <h3 className={style.heading}>{aboutOrder}</h3>
        <p className={style.list}>Service list will be listed here</p>
    </div>
    </>
}
export default Showorder