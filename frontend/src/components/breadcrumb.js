import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbComponent = ({datos}) => {

    return(
        <div>
            <Breadcrumb>
                {datos.map((element, index) => {
                    if(element.estado === 'activo'){
                        return(
                            <BreadcrumbItem key={index}><a >{element.ubicacion}</a></BreadcrumbItem>
                        )
                    } else {
                        return(
                            <BreadcrumbItem key={index} active>{element.ubicacion}</BreadcrumbItem>
                        )
                    }
                })}
            </Breadcrumb>
        </div>
    )
};

export default BreadcrumbComponent;