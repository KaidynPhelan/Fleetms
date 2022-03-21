import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div>Fleet Management System</div>
        <button>Login</button>
    </header>
}

export default MainNavigation;