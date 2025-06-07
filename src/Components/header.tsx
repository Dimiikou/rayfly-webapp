export default function Header() {
    return (
        <>
            <header className={"flex pl-15 pr-15 pt-5 pb-5 justify-between flex-row"}>
                <h3>RayFly</h3>
                <button className={"bg-button-highlight"}>Log in</button>
            </header>
            <hr className="text-button-primary"/>
        </>
    );
}