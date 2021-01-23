import React ,{useState} from 'react';
import './student.styles.css';
// import Course from '../course/course.components'
const Student=()=>{
    const [show,inputChange]=useState(false);
    const [todos, setTodos]=useState([]);
    const [items,setItems]=useState([]);
    const [courseTextArea,courseButton]=useState(false);
    const [allCourse,setCourse]=useState([]);
    const [courseTodos,allCourseItems]=useState([]);
    const [unlock,unlockStudent]=useState(false);
    const inputText=(e)=>{
        setTodos(e.target.value)
    }
    const courseText=(e)=>{
        allCourseItems(e.target.value)
    }
    const submitHandler=(e)=>{
        setItems((oldItems)=>{
            console.log(oldItems)
            return [...oldItems,todos]
        })
        inputChange("")
        
    }
    const courseHandler=(e)=>{
        setCourse((oldCourse)=>{
            console.log(oldCourse)
            return [...oldCourse,courseTodos]
        })
        courseButton("")
    }




    return(
        <div>
        <div className="course">
            <h1 className="course-title">COURSE</h1>

            <div className="allcourse">
                <select className="select-tag" onClick={()=>unlockStudent(true)}>
                    {
                        // eslint-disable-next-line array-callback-return
                        allCourse.map((value)=>{
                        return <option>{value}</option>
                        })
                    }
                </select>
               
                <button className="button" onClick={()=>courseButton(true)}>Add New Course</button>

                {
                    courseTextArea?
                        <div className="font-icons">
                            <span className="icons icons-green" onClick={courseHandler}><i className="fas fa-check-circle"></i></span>
                            <input type="text" onChange={courseText}></input>
                            <span className="icons icons-red"onClick={()=>courseButton(false)}><i className="fas fa-times"></i></span>
                        </div>
                    :null
                }
                
        
            </div>
        </div>
        {
            unlock?
            <div className="student">
            <h1 className="student-title">STUDENTS</h1>
            <div>
        
                <div className="allstudent">
               
                    <select className="select-tag">
                        {
                            // eslint-disable-next-line array-callback-return
                            items.map((value)=>{
                            return <option>{value}</option>
                            })
                        }
                    </select>
                        <button className="button" onClick={()=>inputChange(true)}>Add New Student</button>
                        
              
                    {
                        show?
                        <div className="font-icons">
                            <span className="icons icons-green" onClick={submitHandler}><i className="fas fa-check-circle"></i></span>
                            <input type="text" onChange={inputText}></input>
                            <span className="icons icons-red" onClick={()=>inputChange(false)}><i className="fas fa-times"></i></span>
                        </div>
                        :null
                    }
                </div>
             

            </div>
        </div>   
        :null
    }

        </div>  
            
    )

}



export default Student