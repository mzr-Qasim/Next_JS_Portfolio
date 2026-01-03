import styles from "./blog.module.scss";
import Image from "next/image";

export default function BlogDetailPage() {
    return (
        <main>
            <section className={styles.MainHero}>
                <Image className={styles.HeroImage} src="/blog_img.jpg" alt="Blog Hero" fill />
                <div className={styles.MainHeroContent}>
                    <div className="container">
                        <div className={styles.InnerContent}>
                              <h1 className="Title">The Home of the Future
                            Could Bebes</h1>
                        <ul>
                            <li>May 18, 2020</li>
                            <li>NipaBali</li>
                        </ul>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}