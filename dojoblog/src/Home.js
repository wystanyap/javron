import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'My new Website', body:'lorem ipsum...', author:'tope', id: 1},
        {title:'Henlo Negima', body:'lorem ipsum...', author:'koy', id: 2},
        {title:'Tips for beniggers', body:'lorem ipsum...', author:'wil', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    })

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>  
     );
}
 
export default Home;