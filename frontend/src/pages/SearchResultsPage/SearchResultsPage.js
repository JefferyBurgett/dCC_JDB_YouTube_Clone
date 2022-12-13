import React from "react"
import { useNavigate } from "react-router-dom"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    user: "",
    video_id: "",
    text: "",
    likes: "",
    dislikes: "",
};

const SearchResultsPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)
}


export default SearchResultsPage