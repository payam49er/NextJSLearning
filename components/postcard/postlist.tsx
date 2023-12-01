import { PostCardProps } from '@/types/PostCard';
import React from 'react';
import PostCard from './postcard';




async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    console.log(posts);
    return posts;
}




const PostList = async () => {
    const posts: PostCardProps[] = await fetchData();
    return (
        <div>
            <h1>Post List</h1>
            {posts.map((post) => <PostCard key={post.id} {...post} />)}
        </div>
    );
}

export default PostList;