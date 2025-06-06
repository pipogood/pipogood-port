import styles from './Button.module.css'

function Button(){
    const handleClick = (e) => e.target.textContent = "OUCH! LOL"
    return(
        <button onDoubleClick={(e) => handleClick(e)} className={styles.button}>Click Me</button>
    )
}

export default Button