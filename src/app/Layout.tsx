import type { Metadata } from 'next'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

interface IProps { 
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Hasan Sattar',
    description: 'Personal Portfolio Website for Hasan Sattar',
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