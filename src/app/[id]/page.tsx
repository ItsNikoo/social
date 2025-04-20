'use client'

import { useParams } from 'next/navigation';
import {mockPosts} from "@/app/api/posts/route";

export default function SinglePostPage() {
    const params = useParams();
    const id = params?.id;

    const post = mockPosts.find((p) => p.id === Number(id));

    if (!post) {
        return <div>Пост с ID {id} не найден</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}