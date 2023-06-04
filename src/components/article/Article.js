import styles from './Article.module.css';

const Article = (props) => {
    return(
        <div className={styles.article}>
            <img className={styles.articleImage} src={props.img} alt="item"/>
            <span className={styles.articleAuthor}>{props.author}</span>
            <h2 className={styles.articleTitle}>{props.title}</h2>
        </div>
    )
}

export default Article;