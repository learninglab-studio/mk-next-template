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

const MomentCard: React.FC<MomentCardProps> = ({ data }) => {
    const { Name, ChatGPTText } = data;

    return (
        <div>
            <h1>{Name}</h1>
            <p>{ChatGPTText}</p>
        </div>
    );
};

export default MomentCard;
