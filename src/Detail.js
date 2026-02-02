import { Outlet , Link } from "react-router" ;

export default function Detail(){
    
    
    return(

        <>
        <nav>
            <Link to = "Hello">Hello</Link>
            <Link to = "Hii">Hii</Link>
        </nav>
        <h2>Hii i am Detail page</h2>
        <Outlet></Outlet>
        </>
    )
}