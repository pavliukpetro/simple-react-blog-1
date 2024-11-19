import heart from '../assets/heart.svg';
import eye from '../assets/eye.svg';

function BlogListItem({post}) {
    return (
        <article className="post">
            <div className="post-content">
                <h2 className="post-content-title">{post.title}</h2>
                <p className="post-content-text">{post.body}</p>
                <div className="post-content-info">
                    <div>
                        <img src={heart} alt="likes" width='16' /> {post.reactions.likes}
                    </div>
                    <div>
                        <img src={eye} alt="views" width='16' /> {post.views}
                    </div>
                </div>
                <div>{post.tags.map(tag => <button key={tag} className="post-tag">{tag}</button>)}</div>
            </div>
            <div>
                <img src={`https://dummyjson.com/icon/${post.id}/250`} alt={post.title} />
            </div>
        </article>
    );
}

export default BlogListItem;