import './section3.scss'
import {Photo} from "../../Photo.js"

export default function Section3(){
    <>
        <section className='section3'>
            <div className='sectionContainer'>
                <div className='top'>
                    <div>
                        <p>"</p>
                    </div>
                    <h2>AWDAafe</h2>
                </div>
                <p></p>
                <div className='ppls'>
                    <div className='arrow'><img src="" alt="" /></div>
                    <div className='ppl'>
                        <div><img src={Photo.face1} alt="" /> <p></p></div>
                        <div><img src={Photo.face2} alt="" /></div>
                        <div><img src={Photo.face3} alt="" /></div>
                        <div><img src={Photo.face4} alt="" /></div>
                        <div><img src={Photo.face5} alt="" /></div>
                    </div>
                    <div className='arrow'><img src="" alt="" /></div>
                </div>
            </div>
        </section>
    </>
}