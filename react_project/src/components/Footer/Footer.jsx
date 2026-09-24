import './footer.scss'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='footerContainer'>
                    <h2>Join the Movement</h2>
                    <div className='info'>
                        <div className='email'>
                            <input type="text" id='inp' placeholder='Enter your Email'/>
                            <button>&rarr;</button>
                        </div>
                        <hr style={{ border: 'none', width: '100%', height: '1px', backgroundColor: 'black' }}/>
                        <p>Stay up to date with the latest news from the coalition.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}