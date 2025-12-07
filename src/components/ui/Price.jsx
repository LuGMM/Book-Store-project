import React from "react";

const Price = ({original, sale}) => {
    return(
        <div className="book__price">
            {sale ? (
                <><span className="book__price--normal">${original.toFixed(2)}</span>
            $ {sale.toFixed(2)}
            </> ): (
            <>  ${original.toFixed(2)}</>
            )}
        </div>
    )
}

export default Price