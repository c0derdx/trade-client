const Hamburger = (props) => {
    return (
        <>
            <div className={props.toggle ? "bar bar1" : "bar"}></div>
            <div className={props.toggle ? "bar bar2" : "bar"}></div>
            <div className={props.toggle ? "bar bar3" : "bar"}></div>
        </>
    )
}

export default Hamburger;