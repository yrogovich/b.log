import Footer from "./Footer"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
