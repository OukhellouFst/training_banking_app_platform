import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"

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
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.30}
                />
            </header>
            </div>
        </section>
    )
}


export default HomeBox 