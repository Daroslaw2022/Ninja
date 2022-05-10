import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState ([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        
    ]);
    
    const hanleDelete = (id) => {
        const newBlogs = blogs.filter(blog =>blog.id !== id);
        setBlogs(newBlogs)
    };

    useEffect(() => {
console.log('use effect ran');
    });
     
    return (
        <div className="home">
            <BlogList blogs={blogs} title = 'All Blogs!' hanleDelete={hanleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} 
            title = "Mario's blogs"
            hanleDelete={hanleDelete}/>
        </div>
    );
} 

export default Home;
