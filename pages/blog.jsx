import { useState } from 'react';
import { getBlogPosts } from './api/blog-posts';
import styles from '../styles/BlogPage.module.css';

const DESCRIPTION_MAX_LENGTH = 200;

const truncateText = (text, maxLength = DESCRIPTION_MAX_LENGTH) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const BlogPage = ({ posts }) => {
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const toggleExpanded = (postId) => {
    const next = new Set(expandedPosts);
    if (next.has(postId)) {
      next.delete(postId);
    } else {
      next.add(postId);
    }
    setExpandedPosts(next);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <h3>Blog</h3>
        <span className={styles.count}>{posts.length} posts</span>
      </div>

      <div className={styles.container}>
        {posts.map((post) => {
          const isExpanded = expandedPosts.has(post.id);
          const isLong = post.description.length > DESCRIPTION_MAX_LENGTH;

          return (
            <div key={post.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <h3>{post.title}</h3>
                  <span className={styles.category}>{post.category}</span>
                </div>
                <p className={styles.description}>
                  {isExpanded || !isLong
                    ? post.description
                    : truncateText(post.description)}
                  {isLong && (
                    <button
                      className={styles.expandButton}
                      onClick={() => toggleExpanded(post.id)}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.metadata}>
                  <div className={styles.metadataItem}>
                    <span className={styles.metadataLabel}>Date:</span>
                    <span className={styles.metadataValue}>{post.date}</span>
                  </div>
                  <div className={styles.metadataItem}>
                    <span className={styles.metadataLabel}>Read:</span>
                    <span className={styles.metadataValue}>{post.readTime} min</span>
                  </div>
                </div>

                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getBlogPosts();
  return {
    props: { title: 'Blog', posts },
  };
}

export default BlogPage;
