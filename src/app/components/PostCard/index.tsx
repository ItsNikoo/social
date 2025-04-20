import styles from "./PostCard.module.css"
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostCard({id,title, body}: Post) {
    return (
        <Link href={`/${Number(id)}`} className={styles.Container}>
            <h1 className={styles.Title}>{title}</h1>
            <p>{body}</p>
        </Link>
    )
}