import React, {useState} from 'react'

export default function PostForm({newPost, setNewPost, addPost}) {
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [breed, setBreed] = useState("")
    const [description, setDescription] = useState("")

    const handleName = (e) => setName(e.target.value)
    const handleImg = (e) => setImg(e.target.value)
    const handleBreed = (e) => setBreed(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    function handleSubmit(e){
        e.preventDefault()
        let formData = {
            name: name,
            breed: breed,
            img_url: img,
            description: description
        }

        fetch('http://localhost:9393/pet_posts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(formData),
            })
            .then((res) => res.json())
            .then(postData => addPost(postData))
         }
    
    return (
        <div className="card" style={{width: "40rem"}} id="post-card">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pet's Name</label>
                    <input type="text" class="form-control" id="pets-name" value={name} onChange={handleName}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Breed</label>
                    <input type="text" class="form-control" id="breed" value={breed} onChange={handleBreed}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Image Url</label>
                    <input type="text" class="form-control" id="img" value={img} onChange={handleImg}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="description" value={description} onChange={handleDescription}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
