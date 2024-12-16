'use client'

import React from 'react';

interface NavButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={`your-default-class ${className}`}>
            {children}
        </button>
    );
};

export default NavButton;
