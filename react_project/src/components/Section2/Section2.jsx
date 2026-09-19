import './section2.scss'
import {Photo} from "../../Photo.js"

export default function Section2(){
    return(
        <>
            <section className='section2'>
                <div  className='mainContainer'>
                    <h2>Founded by Prince Harry, The Duke of Sussex, Travalyst is a coalition of some of the biggest names in travel:</h2>
                    <div>
                        <img src={Photo.amadeus} alt="" />
                        <img src={Photo.booking} alt="" />
                        <img src={Photo.expedia} alt="" />
                        <img src={Photo.google} alt="" />
                        <img src={Photo.skyscanner} alt="" />
                        <img src={Photo.travelport} alt="" />
                        <img src={Photo.sova} alt="" />
                    </div>
                    <p>Our mission is to make the travel industry more sustainable. We do this by convening leading industry players in a pre-competitive coalition to collaborate on bringing consistent sustainability information to the mainstream for the first time. This means we can empower consumers to make better choices: for themselves, and for the planet.</p>
                </div>
            </section>
        </>
    )
}