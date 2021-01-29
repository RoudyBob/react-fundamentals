const Contacts = (props) => {
    
    const {name, age, school, graduationYear} = props

    return (
        <div>
            <h3>{name}</h3>
            <p>I am {age} and graduated from {school} in {graduationYear}.</p>
        </div>
    );
};

export default Contacts;