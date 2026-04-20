import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';
import getExperience from './api/experience';

export default function HomePage({ experience }) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 className={styles.name}>Diego Bravo</h1>
            <h2 className={styles.title}>Enthusiastic Learner</h2>

            <p className={styles.description}>
              PhD Machine Learning Engineer with 4+ years building production ML systems
              for focused on real-time and edge AI. His work centers on computer vision and multimodal learning for deployable medical imaging systems.
            </p>

            <div className={styles.expertise}>
              <div className={styles.expertiseTitle}>Specialization</div>
              <div className={styles.expertiseGrid}>
                  <span className={styles.expertiseTag}>Computer Vision</span>
                  <span className={styles.expertiseTag}>Multimodal Learning</span>
                  <span className={styles.expertiseTag}>Temporal Modeling</span>
                  <span className={styles.expertiseTag}>Real-Time AI</span>
                  <span className={styles.expertiseTag}>Edge AI (Jetson)</span>
                  <span className={styles.expertiseTag}>Medical Imaging</span>
                  <span className={styles.expertiseTag}>Deep Learning</span>
                  <span className={styles.expertiseTag}>VLMs</span>
                  <span className={styles.expertiseTag}>PyTorch</span>
                  <span className={styles.expertiseTag}>Model Deployment</span>
                  <span className={styles.expertiseTag}>Applied AI Systems</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/resume">
                <button className={styles.primaryButton}>
                  <span className={styles.buttonLabel}>Hiring?</span>
                  <span className={styles.buttonMain}>See CV & proof of impact</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className={styles.secondaryButton}>Contact</button>
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.profileImage}
                src="/diegobravo.png"
                width={280}
                height={280}
                alt="Diego Bravo"
              />
            </div>

            <section className={styles.affiliations}>
              <p className={styles.affiliationsLabel}>Memberships</p>
              <div className={styles.affiliationsGrid}>
                <a
                  href="https://www.miccai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.affiliationCard}
                  aria-label="MICCAI Student Member — Medical Image Computing and Computer Assisted Intervention Society"
                >
                  <div className={styles.affiliationLogo}>
                    <img src="/logos/miccai-logo.png" width={96} height={96} alt="MICCAI logo" />
                  </div>
                  <div className={styles.affiliationInfo}>
                    <span className={styles.affiliationOrg}>MICCAI Society</span>
                    <span className={styles.affiliationRole}>Student Member</span>
                  </div>
                </a>

                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.affiliationCard}
                  aria-label="IEEE Student Member — Institute of Electrical and Electronics Engineers"
                >
                  <div className={styles.affiliationLogo}>
                    <img src="/logos/ieee-logo.svg" width={96} height={96} alt="IEEE logo" />
                  </div>
                  <div className={styles.affiliationInfo}>
                    <span className={styles.affiliationOrg}>IEEE</span>
                    <span className={styles.affiliationRole}>Student Member</span>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <Link href="/resume">
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.company}>{job.company} - {job.location}</p>
                    </div>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const experience = getExperience();

  return {
    props: {
      title: 'Home',
      experience
    },
  };
}
