import { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";

function BlogList({posts}) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const allTags = posts?.flatMap(post => post.tags);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
    }, [posts]);

    return (
        <div className="blog-list">
            <div className="blog-list-content">
                <ul className="blog-list-tags">
                    {tags.map(tag => <li key={tag}><button>{tag}</button></li>)}
                </ul>
                {posts?.map(post => (
                    <BlogListItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;