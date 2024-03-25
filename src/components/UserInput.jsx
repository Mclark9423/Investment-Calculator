import InputField from "./InputField";

//State gets lifted into this file, then goes into the one above

export default function UserInput({updateUserData}) {

    const handleField = (name,value) => {
        updateUserData(name,value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <InputField name={"initial Investment"} onInputChange={handleField} 
                    text={"Initial Investment"} 
                />
                <InputField name={"annual Investment"} onInputChange={handleField} 
                text={"Annual Investment"} 
                />
            </div>
            <div className="input-group">
                <InputField name={"expected Return"} text={"Return"} onInputChange={handleField} />
                <InputField name={"duration"} text={"Duration"} onInputChange={handleField} />
            </div>
        </div>
    )
}