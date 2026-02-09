import './Registration.css'
export default function Registration(){
    return(
        <div>
            <form action="onSubmit">
                <label >
                <input type="text" placeholder="Enter Your Name"/>
                </label>
                <br /> <br />
                <label> 
                <input type="text" placeholder="Enter Your Branch"/>
                </label>
                <br /> <br />
                <button className='button'>Submit</button>
                
            </form>
        </div>
    )
}