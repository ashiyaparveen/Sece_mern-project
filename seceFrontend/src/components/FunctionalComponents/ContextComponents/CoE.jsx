import ExamResults from "./ExamResults";
const CoE =(res)=>{
    return (
        <div>
<h4>Paper correction done.</h4>
<h5>Mark publishing is handed over to coe</h5>
<ExamResults sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
        )
    }
export default CoE;