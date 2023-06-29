import React, {useState} from 'react';
import '../styles.css';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../ohGnarlyLogo.png';
import killBill from '../KillBillbloodsplatterbanner.jpg';
import leftNav1 from '../leftNav1.png';
import leftNav2 from '../leftNav2.png';
import rightNav from '../rightNav.png';


interface Props {
    isLoggedIn?: boolean
}

interface Category {
    categoryDesc: string;
    _id: string;
}

interface User {
    userName?: string;
    firstName: string;
    lastName?: string;
    emailAddress?: string;
    userId: string;
}

const App = (props: Props) => {
    const [showCategories, setShowCategories] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    let categories: Category[] = [{_id: '1', categoryDesc: 'Games'}];
    let users: User[] = [{userId: '1', firstName: 'Aaron'}];

    return (
        <section className="main-app-shell">
            <div id={styles.pageBody}>
                <div className={styles.headingSpace}></div>
                <div id={styles.siteHeader}>
                    <div id={styles.headerContent}>
                        {props.isLoggedIn ?
                            <ul className={styles.mynav}>
                                <li onMouseOver={() => setShowCategories(true)}
                                    onMouseOut={() => setShowCategories(false)}>
                                    <a href="#" role="button">Categories</a>
                                    <ul className={showCategories ? styles.visible : styles.hidden}>
                                        {categories.map((category) => {
                                            return <li key={category._id}><span>{category.categoryDesc}</span></li>
                                        })}
                                    </ul>
                                </li>
                                <li onMouseOver={() => setShowUsers(true)} onMouseOut={() => setShowUsers(false)}>
                                    <a href="#">Authors</a>
                                    <ul className={showUsers ? styles.visible : styles.hidden}>
                                        {users.map((user) => {
                                            return <li key={user.userId}>
                                                <span>{user.firstName}</span>
                                            </li>
                                        })}
                                    </ul>
                                </li>
                            </ul> : <></>
                        }
                        <a href="/">
                            <img src={logo} id={styles.siteLogo} />
                        </a>
                    </div>
                </div>
                <div className={styles.contentLogoContainer}>
                    <a>
                        <img className={styles.contentLogo} src={killBill} />
                    </a>
                </div>
                <div className={styles.contentContainter}>
                    <div className={styles.leftNav}>
                        <img className={styles.leftNavAd} src={leftNav1} />
                        <span className={styles.leftNavSpace} />
                        <img className={styles.leftNavAd} src={leftNav2} />
                    </div>
                    <div className={styles.pageContent}>

                    </div>
                    <div className={styles.rightNav}>
                        <img className={styles.rightNavAd} src={rightNav} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
