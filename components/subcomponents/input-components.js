import React from "react";

export const SingleLineInput = ({
    label,
    storageId,
    handleInput
}) => {
    return (
        <>
            <label onChange={handleInput}>{label}
            <input className={storageId} type="text" />
            </label>
        </>
    )
}

export const TextAreaInput = ({
    label,
    storageId,
    handleInput
}) => {
    return (
        <>
            <label onChange={handleInput}>{label}
            <textarea className={storageId} type="text"/>
            </label>
        </>
    )
}