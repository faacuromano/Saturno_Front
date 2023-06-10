import { useState } from "react"

function App() {
    const [image, setImage] = useState('');    

    const convert2base64 = e => { 
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result.toString());
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="app">
            <h1>Base64 Converter</h1>
            {image ? (
                <img src={image} />
            ) : (
                <div>
                        <input id='fileupload' className="hidden" type="file" onChange={e => convert2base64(e)}> </input>
                        <label htmlFor="fileupload">Upload file</label>
                </div>
            )}
        </div>
    );
}

export default App
