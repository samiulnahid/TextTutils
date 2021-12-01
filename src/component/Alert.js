import React from 'react'

function Alert(props) {

    ///capitalize

    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        <div style={{height:"55px"}}>

            {/* /// props.alert && ata jodi valuable hoi ta hole e return ar maje oi sob run hobe noile . r  props.alert && jodi null , undefine hoi ta hole run hobe na div  */}

           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}

            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}

export default Alert
