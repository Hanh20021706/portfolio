import React from 'react'

const Skills = () => {
    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Skills</h2>
                    </div>
                </div>
                <div className="row row-pb-md">
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent={95}><span><strong>HTML5</strong>95%</span></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent={93}><span><strong>CSS3</strong>93%</span></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent={89}><span><strong>PHP</strong>89%</span></div>
                    </div>
                   
                    
                  
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <div className="chart" data-percent={90}><span><strong>Javasctrips</strong>90%</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">HTML5/CSS3</span><span className="value-right">95%</span></h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">React</span><span className="value-right">90%</span></h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">PHP</span><span className="value-right">80%</span></h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3><span className="name-left">Design</span><span className="value-right">100%</span></h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrap">
                            <h3><span className="name-left">Javasctrips</span><span className="value-right">85%</span></h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills
