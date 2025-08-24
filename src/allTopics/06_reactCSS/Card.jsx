import styles from "./Card.module.css"

const Card = () => {
  return (
    <div id={styles.card}>
        <h1 className={styles.heading}>
            Card Box
        </h1>
    </div>
  )
}

export default Card