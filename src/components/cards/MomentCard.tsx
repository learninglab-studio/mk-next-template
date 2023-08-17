/**
 * MomentCard Component
 * 
 * This component renders a card displaying a moment's title and description.
 */

import React from 'react';

interface MomentCardProps {
    record: {
        title: string;
        description: string;
    };
}

const MomentCard: React.FC<MomentCardProps> = ({ record }) => {
    const { title, description } = record;

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default MomentCard;
