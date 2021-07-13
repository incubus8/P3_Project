import React, {useState} from 'react'

export default function PostForm() {
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [breed, setBreed] = useState("")
    const [description, setDescription] = useState("")

    const handleName = (e) => setName(e.target.value)
    const handleImg = (e) => setImg(e.target.value)
    const handleBreed = (e) => setBreed(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    function handleSubmit(){
        e.preventDefault()
        let formData = {
            name: name,
            breed: breed,
            img_url: img,
            description: description
        }
    }

    return (
        <div>
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
