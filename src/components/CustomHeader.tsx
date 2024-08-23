
export function CustomHeader() {
    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-transparent backdrop-filter backdrop-blur-lg text-black">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center" >
                <div className="text-2xl font-bold">
                    Brand
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:text-gray-700">Home</a></li>
                    <li><a href="#services" className="hover:text-gray-700">Services</a></li>
                    <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}