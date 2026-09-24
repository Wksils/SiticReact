import './section8.scss'

export default function Section8(){
    return(
        <>
            <section className='section8'>
                <div className='container'>
                    <h2>Become a Partner</h2>
                    <p>Travalyst partners are part of a global network of change-makers, independent experts and academics – all working together to create viable, visible sustainability solutions. Fundamentals of our partnership include:</p>
                    <div className='cards'>
                        <div className='card'>
                            <div className='cardCont'>
                                <div className='num'><p>1</p></div>
                                <div className='text'>
                                    <h4>Collaboration</h4>
                                    <p>Creating game-changing impact through collaboration, sharing ideas and information in a supportive, pre-competitive structure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardCont'>
                                <div className='num'><p>2</p></div>
                                <div className='text'>
                                    <h4>Scale</h4>
                                    <p>Travalyst’s connections and access to world-renowned sustainability specialists and academics enable us to scale initiatives at speed.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardCont'>
                                <div className='num'><p>3</p></div>
                                <div className='text'>
                                    <h4>Networking</h4>
                                    <p>Being part of a group of changemakers and energising collaborators, all with a laser-sharp focus on changing the travel industry for the better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btns'>
                        <button className='more'>Learn More</button>
                        <div>
                            <button>&larr;</button>
                            <button>&rarr;</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}