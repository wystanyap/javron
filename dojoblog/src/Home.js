import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'My new Website', body:'lorem ipsum...', author:'tope', id: 1},
        {title:'Henlo Negima', body:'lorem ipsum...', author:'koy', id: 2},
        {title:'Tips for beniggers', body:'lorem ipsum...', author:'wil', id: 3}
    ]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>  
     );
}
 
export default Home;