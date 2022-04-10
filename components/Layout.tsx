import Footer from "./Footer"
import Navbar from "./Navbar"

interface IProps { 
    children: React.ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <>
        <Navbar />
        { children }
        <Footer />
        </>
    )
}