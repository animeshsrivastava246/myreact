import React from 'react'

export default function About(props) {
    return (
        <div className="container"  style={{color: props.mode==='light' ? 'black' : 'white'}}>
            <h1 className="my-3"><b>About</b></h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Text Customizer
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light' ? 'white' : 'black'}}>
                            Text Customizer is an app which can be used for daily basis text enhancement by using the tools like copy, capitalise, time to read the text and etc.<br/> Hope my small work contribute in your daily life by doing the small tasks of text customization.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        About Me
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light' ? 'white' : 'black'}}>
                        Hello guys, I am <strong>ANIMESH SRIVASTAVA</strong>, a coder who has kicked off his journey with full of enthusiasm and energy irrespective of many hurdles and snags. My field of interest includes exploring different domains in technology and interacting with every new update that comes with time. I am open to learning and developing new skills. I firmly believe in saying, "What I do, I must strive to do it the best." I prefer constructive criticism and acknowledge suggestions coming from everyone. I am honest in my work and aspire to achieve perfection in every task given.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
