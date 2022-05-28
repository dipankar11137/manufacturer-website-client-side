import React from 'react';

const CameraOrderRow = ({ book }) => {
    const { name, date, quantity } = book;
    return (
        <tr>
            <td>{name}</td>
            <td>{date}</td>
            <td>{quantity}</td>
            <td><button class="btn btn-xs">Remove Order</button></td>
        </tr>
    );
};

export default CameraOrderRow;