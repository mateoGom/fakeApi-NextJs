import Style from '../styles/User.module.css'

const user=(props)=>{
    return(
        
        <div className={Style.Card}>
             <img src={props.picture} alt="" />
            <div className={Style.Container}>
                <h1>{props.login}</h1>
                <p>{props.email}</p>
               
            </div>

        </div>
    )

}

export default user