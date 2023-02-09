import Header from '../header/Header'
import Footer from '../header/Footer'
import { NavLink } from 'react-router-dom'

export default function FrontPage() {
    return (
        <>
            <Header />
                <div className='Title'>
                    <h1> What Are You Having?</h1>
                </div>
            <Footer />
        </>
    )
}
