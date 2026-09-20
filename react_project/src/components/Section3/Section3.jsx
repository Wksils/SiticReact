import './section3.scss'
import {Photo} from "../../Photo.js"

export default function Section3(){
    return(
    <>
        <section className='section3'>
            <div className='sectionContainer'>
                <div className='top'>
                    <p>“</p>
                    <h2>At Travalyst, we’re bringing travellers, communities, and the travel industry to the table to change the way we see and share the world.</h2>
                </div>
                <p className='text'>By working with Travalyst and our industry partners, we aim to build tools and technology that enable travelers and businesses around the world to prioritize sustainability.</p>
                <div className='ppls'>
                    <button>&larr;</button>
                    <div className='ppl'>
                        <div className='fp'><img src={Photo.face1} alt="" /> <p>Prince Harry </p><p>The Duke of Sussex</p></div>
                        <div><img src={Photo.face2} alt="" /></div>
                        <div><img src={Photo.face3} alt="" /></div>
                        <div><img src={Photo.face4} alt="" /></div>
                        <div><img src={Photo.face5} alt="" /></div>
                    </div>
                    <button>&rarr;</button>
                </div>
            </div>
        </section>
    </>
    )
}