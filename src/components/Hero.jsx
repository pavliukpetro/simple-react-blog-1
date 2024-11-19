function Hero({searchTerm, setSearchTerm}) {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">My Simple React Blog</h1>
                <p>A simple blog built with React</p>
            </div>
            <div className="hero-search">
                <input
                    type="text"
                    placeholder="Search posts"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Hero;