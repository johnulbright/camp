const Box=(props)=>{
    return (
        
        <div style={{height:'150px',width:'100px',border:'3px solid black'}}>
                {props.isActive&&props.number}
                <h1>{props.isActive}</h1>
                {props.number}
            </div>
            
    )
}

export default Box;