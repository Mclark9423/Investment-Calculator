import InputField from "./InputField";

//State gets lifted into this file, then goes into the one above

export default function UserInput({ updateUserData }) {

    const handleField = (name, value) => {
        updateUserData(name, value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <InputField name={"initial Investment"} onInputChange={handleField}/>
                <InputField name={"annual Investment"} onInputChange={handleField}/>
            </div>
            <div className="input-group">
                <InputField name={"Interest Rate %"} text={"Return"} onInputChange={handleField}/>
                <InputField name={"duration (Years)"} text={"Duration"} onInputChange={handleField} />
            </div>
        </div>
    )
}