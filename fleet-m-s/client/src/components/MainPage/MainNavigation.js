import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div>
            <Link to={"/"} className = {classes.title}>Fleet Management System: </Link>
        </div>
        <button>Login</button>
    </header>
}

export default MainNavigation;