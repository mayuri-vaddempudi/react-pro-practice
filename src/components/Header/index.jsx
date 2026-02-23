import styles from "../Header/header.module.css";
import SubTitle from "../SubTitle"

const Header = ({ title, childProp }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.pageTitle}>{title}</h1>
            <SubTitle subTitle={childProp} />
        </header>
    )
}
export default Header;