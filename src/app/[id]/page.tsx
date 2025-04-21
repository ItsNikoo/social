'use client'

import {useParams} from 'next/navigation';
import {mockPosts} from "@/app/api/posts/route";
import styles from './SinglePostPage.module.css';
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useState} from "react";

interface Comment {
    id: number;
    text: string;
    author: string;
    createdAt: string;
}

export default function SinglePostPage() {
    const {data: session} = useSession();
    const params = useParams();
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState<Comment[]>([]);

    const id = params?.id;

    function handleComment(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setCommentText(e.target.value);
    }

    function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment: Comment = {
            id: Date.now(),
            text: commentText,
            author: session?.user?.name || "Неизвестен",
            createdAt: new Date().toISOString(),
        }

        setComments([...comments, newComment]);
        setCommentText('')
    }

    const post = mockPosts.find((p) => p.id === Number(id));

    if (!post) {
        return <div className={styles.notFound}>Пост с ID {id} не найден</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.HigherContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.ContainerButton}>
                    <Link href={"/"} className={styles.Button}>На Главную</Link>
                </div>
            </div>
            <p className={styles.body}>{post.body}</p>
            <div className={styles.CommentsContainer}>
                <div className={styles.GlobalFormContainer}>
                    {session ? (
                        <form onSubmit={handleSubmitComment} action="" className={styles.FormContainer}>
                            <input className={styles.Input}
                                   value={commentText} onChange={handleComment}
                            placeholder="Оставьте комментарий"/>
                            <button className={styles.Button} type={"submit"}>Отправить</button>
                        </form>
                    ) : (
                        <div className={styles.LoginSection}>
                            <Link href="/login" className={styles.Button}>
                                Войдите, чтобы оставить комментарий
                            </Link>
                        </div>
                    )}
                </div>
                <div className={styles.GlobalFormContainer}>
                    {comments.map((comment: Comment) => (
                        <div key={comment.id} className={styles.Comment}>
                            <div className={styles.HighestCommentSection}>
                                <h1 className={styles.Author}>{comment.author}</h1>
                                <p className={styles.Date}>{new Date(comment.createdAt).toLocaleString()}</p>
                            </div>
                            <p className={styles.CommentText}>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
