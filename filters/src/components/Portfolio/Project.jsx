import React from 'react';

export default function Project(props) {
    const { pic } = props;
    return <img src={pic.img} alt={pic.category} />;
}