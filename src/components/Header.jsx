import globe from "../images/globe.png";
export default function Header(){
    return (
        <header>
            <img src={globe} alt="Globe"/>
            <h1>My travel Journal</h1>
        </header>
    )
}