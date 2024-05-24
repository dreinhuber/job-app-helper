import React from "react";

export const SingleLineInput = ({
    label,
    storageId,
    handleInput,
    info
}) => {
    return (
        <>
            <label onChange={handleInput}>{label}
            <input
                className={storageId}
                type="text"
                value={info[storageId]}
            />
            </label>
        </>
    )
}

export const TextAreaInput = ({
    label,
    storageId,
    handleInput,
    info
}) => {
    return (
        <>
            <label onChange={handleInput}>{label}
            <textarea
                className={storageId}
                type="text"
                value={info[storageId]}
            />
            </label>
        </>
    )
}