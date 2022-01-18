




export function CreatePost() {


    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const title = formData.get('title')
        const postText = formData.get('postcontent')

        console.log(title, postText)
    }


    return (
        <div>
            <h3>Create you post</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <label tohtml="title">Title:</label>
                    </div>
                    <input type="text" name="title" id="title" defaultValue="" />
                </div>
                <div>
                    <div>
                    <label tohtml="postcontent">Write your post:</label>
                    </div>
                    <textarea name="postcontent" id="postcontent" defaultValue="" ></textarea>

                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>

            </form>
        </div>
    )
}


