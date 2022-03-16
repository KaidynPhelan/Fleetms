import MainNavigation from "./MainNavigation";
import BtnBox from '../BtnBox';
import ContentBox from "../ContentBox";
import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <div className={classes.content}>
                <ContentBox />
                <BtnBox />
            </div>
            
        </div>
    );
}

export default Layout;