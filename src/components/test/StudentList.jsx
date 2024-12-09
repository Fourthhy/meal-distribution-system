import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function StudentList() {
    const [studentList, setStudentList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [state, setState] = useState(0);

    const fetchList = async () => {
        const collectionRef = collection(db, 'studentList');
        const querySelection = await getDocs(collectionRef);
        const students = querySelection.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setStudentList(students);
        console.log(students);
    };

    useEffect(() => {
        fetchList();
    }, []);

    const filterList = (course) => {
        const selectedCourses = studentList.filter((student) => student.course === course);
        setFilteredList(selectedCourses);
        setState(1); // Set state to show filtered list
    };

    const showAllStudents = () => {
        setFilteredList([]);
        setState(0); // Set state to show all students
    };

    const StudentItem = ({ student }) => (
        <div className="border-[1px] border-black m-[5px]" key={student.id}>
            <li>{student.name}</li>
            <li>{student.course}</li>
            <li>{student.LvID}</li>
            <li>{student.unclaimed ? 'true' : 'false'}</li>
        </div>
    );

    function ShowAllStudents() {
        return (
            <ul>
                {studentList.map((student) => (
                    <StudentItem key={student.id} student={student} />
                ))}
            </ul>
        );
    }

    function ShowFilteredStudents() {
        return (
            <ul>
                {filteredList.length > 0 ? (
                    filteredList.map((student) => (
                        <StudentItem key={student.id} student={student} />
                    ))
                ) : (
                    <div>No students found for this course.</div>
                )}
            </ul>
        );
    }

    return (
        <>
            <div className="border-[1px] border-black flex justify-evenly">
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class1')}>
                    class 1
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class2')}>
                    class 2
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class3')}>
                    class 3
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class4')}>
                    class 4
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class5')}>
                    class 5
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={() => filterList('class6')}>
                    class 6
                </button>
                <button 
                    className="border-[1px] border-black p-[5px] w-[75px]"
                    onClick={showAllStudents}>
                    Show All
                </button>
            </div>

            <div>
                {state === 0 ? <ShowAllStudents /> : <ShowFilteredStudents />}
            </div>
        </>
    );
}

export default StudentList;
