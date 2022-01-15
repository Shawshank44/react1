import React,{useState} from 'react'


export default function About() {
    const [btntext,setBtnText ] = useState("Enable Dark Mode")
    
    const[mystyle,setmystyle] = useState(
        {
            color : 'black',
            backgroundColor : 'white',
        }
    )
    const togglestyle = ()=>{
        if (mystyle.color === 'black'){
            setmystyle({
                color : 'white',
                backgroundColor : 'black',
            })
            setBtnText("Enable Light Mode")
        }else{
            setmystyle({
                color : 'black',
                backgroundColor : 'white',
            })
            setBtnText("Enable dark Mode")
        }
    }


    return (
        <>
            <div className="container mt-5">
            <div className="jumbotron" style={mystyle}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <button onClick={togglestyle} type='button' className='btn btn-warning'>{btntext}</button>
          </div>
            </div>
        </>
    )
}
