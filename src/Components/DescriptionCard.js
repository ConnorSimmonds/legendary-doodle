import React from 'react';
import Card from '@material-ui/core/Card';


const DescriptionCard = ({description}) => {
    return (
        <Card>
            <p>{description}</p>
        </Card>
    )
}

export default DescriptionCard;