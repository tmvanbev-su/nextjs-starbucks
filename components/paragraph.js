import styles from './parapgraph.module.scss'

export default function Paragraph({children}) {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}