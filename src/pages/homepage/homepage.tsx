import * as React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Homepage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login")
    }, [navigate])
    return null
}

export default Homepage