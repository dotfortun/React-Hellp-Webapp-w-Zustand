import React from "react"
import { useParams } from "react-router-dom"

export const Planet = () => {
    const params = useParams()
    return (<div>{params.planetId}</div>)
}