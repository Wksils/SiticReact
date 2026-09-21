import './section4.scss'

export default function Secton4(){
    return(
        <>
            <section className="section4">
                <div className='s3Container'>
                    <h2>We're aligning on sustainability frameworks, across the industry</h2>
                    <div className="cards">
                        <div className="card">
                            <div>
                                <p>Aviation</p>
                                <button>&rarr;</button>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <p>Accommodation</p>
                                <button>&rarr;</button>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <p>Coming Soon</p>
                                <button>&rarr;</button>
                            </div>
                        </div>
                    </div>
                    <div className="infoNiz">
                        <p>By coming together, we create a shared understanding of what sustainability means, and source reliable sustainability data that is consistent across the industry. That data includes everything from a hotel’s individual practices to route-based carbon emissions calculations for flights. This then allows trusted travel platforms to display credible, easy-to-understand information for their customers.</p>
                        <div>
                            <button>&larr;</button>
                            <button>&rarr;</button>
                        </div>
                    </div>
                    <p>Working closely with academics and travel experts, our data-driven, collaborative approach is helping to streamline and scale the provision of sustainability information, meeting the growing demand from travellers.</p>
                </div>
            </section>
        </>
    )
}