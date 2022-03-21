import classes from './BtnBox.module.css';

function BtnBox () {
    return (
        <div className={classes.content}>
            <button className={classes.btn}>Test</button>
            <button className={classes.btn}>Test</button>
            <button className={classes.btn}>Test</button>
            <button className={classes.btn}>Test</button>
            <button className={classes.btn}>Test</button>

        </div>
    );

}
export default BtnBox;


