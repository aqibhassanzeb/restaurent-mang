import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
const about = () => {
  return (
    <div className={`${styles.aboutSection} flex items-center justify-center`}>
      <div>
        <Image
          src="/img/banner.jpg"
          alt=""
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className={styles.innerContainer}>
        <h1>About Us</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit ducimus, enim inventore earum, eligendi nostrum pariatur
          necessitatibus eius dicta a voluptates sit deleniti autem error eos
          totam nisi neque voluptates sit deleniti autem error eos totam nisi
          neque.
        </p>
        <div className={styles.skills}>
          <Link href="#">
            <i className="bi bi-facebook text-lg mr-4"></i>Facebook
          </Link>
          <Link href="#">
            <i className="bi bi-instagram text-lg mr-4"></i>Instagram
          </Link>
          <Link href="#">
            <i className="bi bi-phone text-lg mr-4"></i> +1 xxx xx xx xx
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
