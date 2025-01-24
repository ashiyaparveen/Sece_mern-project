import Invigilator from "../ContextComponents/Invigilator";

const UseContext=()=>{

return (
    <div>
        <h2>This is an example of UseContext Hook which is the alternative for props drilling.</h2>
        <h3>The student are writing the their exam.</h3>

        <Invigilator sgpa="9.5" cgpa="6.5"/>
    </div>
);
};

export default UseContext;