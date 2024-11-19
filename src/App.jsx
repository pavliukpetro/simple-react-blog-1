import { useEffect, useMemo, useState } from "react";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/posts?limit=10")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.posts?.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [posts, searchTerm]);

    return (
        <>
            <Header />
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BlogList posts={filteredPosts} />
            <Footer />
        </>
    );
}

export default App;
