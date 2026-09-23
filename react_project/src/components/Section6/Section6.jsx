import './section6.scss'

export default function Section6(){
    return(
        <>
            <section className='section6'>
                <div className='container'>
                    <div className='infoDiv'>
                        <h2>Travellers want to travel more sustainably:</h2>
                        <div className='info'>
                            <div>
                                <h3><span className='num'>71</span> %</h3>
                                <p>of travellers want to make more effort in the next year to travel more sustainably, up 10% from 2021</p>
                                <button>*</button>
                            </div>
                            <div>
                                <h3><span className='num'>68</span> mn</h3>
                                <p>have selected lower emissions flights on Skyscanner since 2019</p>
                                <button>*</button>
                            </div>
                            <div>
                                <h3><span className='num'>7</span> in 10</h3>
                                <p>feel overwhelmed by starting the process of being a more sustainable traveller</p>
                                <button>*</button>
                            </div>
                        </div>
                        <p>It’s not always easy for travellers to know whether they are making good choices from a sustainability perspective, even when they want to. This is why we are bringing the industry together to help make it clearer to consumers what to look for.</p>
                    </div>
                    <div className='balloon'></div>
                </div>
            </section>
        </>
    )
}