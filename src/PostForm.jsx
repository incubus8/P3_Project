import React, {useState} from 'react'

export default function PostForm({addPost}) {
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [breed, setBreed] = useState("")
    const [description, setDescription] = useState("")
    const [form, setForm] = useState(false)

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

        fetch('http://localhost:9292/pet_posts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(formData),
            })
            .then((res) => res.json())
            .then(postData => addPost(postData))

            const clearForm =[setName(""), setImg(""), setBreed(""), setDescription("")]
         }
    
    function handleForm(){
        setForm(form => !form)
    }

    return (
        <div className="card" id="post-card" style={{width: "52rem"}}>
            <button onClick={handleForm} type="submit" class="btn btn-primary"
            style={{boxShadow: '3px 1px 1px 1px #00000034', borderRadius: "25px", borderWidth:"0.5px", width: "13rem"}}>Post a pet!</button>
            <br/>

            {form ? 
            
            <form onSubmit={handleSubmit}>

                <div class="row">
                    <div class="col">
                        <input  type="text" class="form-control" id="pets-name" placeholder="Pet's Name" value={name} onChange={handleName}/>
                    </div>
                    <div class="col" style={{paddingLeft: "1px"}}>
                        <input type="text" class="form-control" id="breed" placeholder="Dog Breed" value={breed} onChange={handleBreed}/>
                    </div>
                    <div class="col" style={{paddingLeft: "1px"}}>
                        <input type="text" class="form-control" id="img" placeholder="Pet Image URL" value={img} onChange={handleImg}/>
                    </div>
                    <div class="col" style={{paddingLeft: "1px"}}>
                        <input type="text" class="form-control" id="description" placeholder="Description" value={description} onChange={handleDescription}/>
                    </div>
                    <div class="col" style={{paddingLeft: "1px"}}>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
            :    
            null
            }
        </div>
    )
}
