

export function CreatePost ({title, postcontent}) {


const onSubmit=(e) => {
    e.preventDefault();

    const formData= new FormData(e.currentTarget);


    const title= formData.get('title')
    const postText= formData.get('postcontent')

    console.log (title, postText)
}


    return (
        <div>
            <form  onSubmit={onSubmit}>
                <div>
                <label>
                    Title:
                </label>
                   <input type="text" name="title" value={title}/>
                </div>
                <div>
                   <label>Write your post:</label>
                    <textarea name="postcontent" id="postcontent" value={postcontent} ></textarea>
                    
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>

            </form>
        </div>
    )
}


