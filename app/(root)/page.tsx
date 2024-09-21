import HeaderBox from "@/components/ui/HeaderBox"

const HomeBox = ()=> {
    const loggedIn = {firstname:'Adrian'}
    return (
        <section className="home">
            <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstname || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />
            </header>
            </div>
        </section>
    )
}


export default HomeBox 