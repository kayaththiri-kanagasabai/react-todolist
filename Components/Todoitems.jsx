import './CSS/Todoitems.css';
import ImCross from './Assets/cross.png';
import GrCheckboxSelected from './Assets/tick.png';
import nottik from './Assets/not_tick.png'

const Todoitems = ({no,display,text,setToDos}) => {

    const deleteTodo =(no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.no!==no);
        setToDos(data);
 
    }

    const toggle =(no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i=0; i<data.length; i++)
        {
            if(data[i].no === no){
                if(data[i].display==="")
                {
                    data[i].display="line-through";
                }
                else
                {
                    data[i].display="";
                }
                break;
            }
        }
        setToDos(data);
    }
  return (
    <div className='todoitems'>
         <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}> {/*add dynamic class name `todoitems-container ${display}  */}
            {display===""?<img src={nottik} alt="" />:<img src={GrCheckboxSelected} alt="" />}
             
             <div className="todoitems-text">{text}</div>

        </div>
        <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={ImCross} alt="" />
    </div>
  )
}

export default Todoitems