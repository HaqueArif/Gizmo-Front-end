import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center my-5">
      <div className={styles.container}>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
        <div className={styles.cube}>
          <div className={styles.cube__inner}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
