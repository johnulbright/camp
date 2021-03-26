const Box=(props)=>{
    let color=props.isActive?"lightblue":"white";
    return (
        <div style={{height:'150px',width:'100px',border:'3px solid black',backgroundColor:color}}>
                {props.isActive&&props.number}
                <h1>{props.isActive}</h1>
            </div>
            
    )
}

export default Box;