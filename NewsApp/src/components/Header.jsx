export default function Header() {
    return (
        <header>
            <h1 className="text-4xl font-bold text-red-500 text text-center bg-yellow-200">News App</h1>
            <nav className="flex justify-center gap-4 bg-gray-200 p-4"  >
                <a href="/">Home </a> 
                <a href="/about">About </a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}   