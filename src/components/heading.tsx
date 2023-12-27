import React from 'react';

type HeadingProps = {
    children: string;
}

const heading = (props: HeadingProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    );
}

export default heading;
