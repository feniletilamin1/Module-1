import React from 'react'
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export default function Stars(props) {
    const { count } = props;

    const arr = Array.from({ length: count }, (_, index) => index);
    let c = 0;

    return (
        <ul class="card-body-stars u-clearfix">
            {arr.map((star, index) =>
                <li key={index}>
                    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                    </svg>
                </li>
            )}
        </ul>
    )
}
