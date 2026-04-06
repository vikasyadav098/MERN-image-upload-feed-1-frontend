import React from 'react'
   import api from "../api/axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {

  const navigate =useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const formData =new FormData(e.target)


api.post("/create-post", formData)
    .then((res)=>{
     navigate("/feed")
    })
    .catch((err)=>{
      console.log(err)
      alert("Error in creating post")
    })
  }

  return (
    <div>
      <section className='create-post-section'>
<h1>Create Post</h1>
<form onSubmit={handleSubmit}>
    <input type='file' name='image' accept='image/*'/>
    <input type='text' name='caption' placeholder='Enter Caption'/>
    <button type='submit'>Submit</button>
</form>

      </section>
    </div>
  )
}

export default CreatePost
