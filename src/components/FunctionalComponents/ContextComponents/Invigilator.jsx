import Faculty from "./Faculty";

const Invigilator =(res)=>{
    return (
        <div>
<h2>Invigilation is done.</h2>
<Faculty sgpa={res.sgpa}cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator;