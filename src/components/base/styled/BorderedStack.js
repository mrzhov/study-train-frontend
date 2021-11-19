import React from 'react';

const BorderedStack = ({children, style}) => (
    <div
        style={{
			display: 'flex',
			flexDirection: 'column',
            padding: 2,
            border: '1px solid rgba(145, 158, 171, 0.32)',
            borderRadius: 1.5,
            ...style,
        }}
    >
        {children}
    </div>
);

export default BorderedStack;
