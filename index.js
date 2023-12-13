
function Header() {
    return (
        <header>
        <nav className="nav">
        <img src="./logo.png" alt="logo" width ="40px" height="40px"  className="logo"/>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        </nav>
    </header>
    )}



    function MainContent() {
        return (
            <div>
            <h1>Fun Facts About React</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originaly created by Jotrdane Walke</li>
            <li>Has over 100k stars on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thuosands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        )}
















        function Footer() {
            return (
                <footer>
                    <p>&#169; 2023 Anyona develpment. All Right Reserved</p>
                </footer>
            )}







function Page() {
    return (
        <div>
            <Header />
           
            <MainContent />

            <Footer />
        </div>
    )
} 

ReactDOM.render(<Page />,document.getElementById("root"))