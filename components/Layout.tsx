import Footer from "./Footer"
import Navbar from "./Navbar"
import ReusableHead from "./ReusableHead"

interface IProps { 
    children: React.ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <>
        <ReusableHead title="Hasan Sattar" />
        <Navbar />
        { children }
        <Footer />
        </>
    )
}