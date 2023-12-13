import './Home.css';

import chat from '../../assets/icon-chat.png';
import money from '../../assets/icon-money.png';
import security from '../../assets/icon-security.png';
import FeatureItem from '../../components/FeatureItem/FeatureItem';

function Home() {
    const features = [
        {
            icon: chat,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            icon: money,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            icon: security,
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]

    return(
        <main>
            <div className='herobanner'>
                <section className='herobanner-content'>
                    <p className='herobanner-content-subtitle'>No fees.</p>
                    <p className='herobanner-content-subtitle'>No minimum deposit.</p>
                    <p className='herobanner-content-subtitle'>High interest rates.</p>
                    <p className='herobanner-content-text'>Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <section className='features'>
                {
                    features.map((infos, index) => (
                        <FeatureItem
                            key={`${infos.title}-${index}`}
                            icon={infos.icon}
                            title={infos.title}
                            text={infos.text}
                        />
                    ))
                }
            </section>
        </main>
    )
}

export default Home