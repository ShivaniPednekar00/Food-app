import styles from "./InnerContainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={styles.innercont}>{children}</div>;
}
