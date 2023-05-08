import React, {useState, useEffect, Fragment} from 'react';
import {getProfessionals} from "../functions/professionalMethods.js";
import ProCardItem from './ProCardItem.js';

const Professional = () => {
    const [professional, setProfessional] = useState([])

    useEffect( () => {
        async function loadProfessional() {
            const response = await getProfessionals();  
            if (response.status === 200) {
                setProfessional(response.data)
            }
        }
        loadProfessional();
    }, [])

  return (
    <Fragment>
        <div> <ProCardItem data={professional}/> </div>
    </Fragment>
  )
}

export default Professional