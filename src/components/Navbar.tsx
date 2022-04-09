import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-3 bg-gray-100 select-none">
            <Link to="/" className="text-4xl cursor-pointer">HS</Link>
            <div>
                <Link to="/" className="mr-6">Home</Link>
                <Link to="/projects" className="mr-6">Projects</Link>
            </div>
        </nav>
    )
}
