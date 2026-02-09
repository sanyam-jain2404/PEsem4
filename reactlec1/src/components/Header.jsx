import './Header.css'
export default function Header(props){
    return(
        <div>
            <h1>{props.title}
                
            </h1>
        <nav className="Nav">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">Next Page</a>
        </nav>
        <h1>Welcome to our First React app</h1>
        </div>
    )
}