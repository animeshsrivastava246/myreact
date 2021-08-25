import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
    return (
        <div className="container"  style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}: <strong>{capitalize(props.alert.type)}</strong></div>}
        </div>
    )
}

export default Alert
