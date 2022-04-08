import React from 'react'

const Contact = () => {
    return (
        <div>

            <div id="fh5co-started" className="fh5co-bg-dark">
                <div className="overlay" />
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Hire Me!</h2>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p><a href="#" className="btn btn-default btn-lg">Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div id="fh5co-consult">
                <div className="video fh5co-video" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }}>
                    <div className="overlay" />
                </div>
                <div className="choose animate-box">
                    <h2>Contact</h2>
                    <form action="#">
                        <div className="row form-group">
                            <div className="col-md-6">
                                <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-6">
                                <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-12">
                                <input type="text" id="email" className="form-control" placeholder="Your email address" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-12">
                                <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-12">
                                <textarea name="message" id="message" cols={30} rows={10} className="form-control" placeholder="Say something about us" defaultValue={""} />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact
