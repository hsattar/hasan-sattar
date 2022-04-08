export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-3 bg-gray-100">
            <h3 className="text-4xl cursor-pointer">HS</h3>
            <div>
                <a className="mr-6" href="index.html">Tech</a>
                <a className="mr-6" href="#hobbies-section">Projects</a>
                <a href="#education-section">Experiences</a>
            </div>
        </nav>
    )
}
