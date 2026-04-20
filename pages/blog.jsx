import { getBlogPosts } from './api/blog-posts';
import styles from '../styles/BlogPage.module.css';

const BlogPage = ({ posts }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <h3>Blog</h3>
        <span className={styles.count}>{posts.length} posts</span>
      </div>

      <div className={styles.container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeader}>
                <h3>{post.title}</h3>
                <span className={styles.category}>{post.category}</span>
              </div>
              <p className={styles.description}>{post.description}</p>
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
        ))}
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
