import HeaderBar from "./reusableComponents/HeaderBar";
import { useState, useEffect } from "react";
import { X, CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"

const KStaffPage = () => {
  const [studentID, setStudentID] = useState("");
  const [mealStatus, setMealStatus] = useState("INELIGIBLE");
  const [studentName, setStudentName] = useState("Surname, Firstname M.I.");
  const [course, setCourse] = useState("Program and Year");

  // Simulate fetching data from an API or database
  const fetchStudentData = (id) => {
    const mockDatabase = {
      "21-00012345": {
        name: "Manlulu, Ines C.",
        course: "BS INFORMATION SYSTEMS 3",
        mealStatus: "INELIGIBLE",
      },
      "21-00067890": {
        name: "Garcia, Juan A.",
        course: "BS INFORMATION SYSTEMS 2",
        mealStatus: "CLAIMED",
      },
      "22-00157JCI": {
        name: "Imperial, Jerome C.",
        course: "BS INFORMATION SYSTEMS 3",
        mealStatus: "ELIGIBLE",
      },
      "22-00168PCM": {
        name: "Puno, Miguel C.",
        course: "BS INFORMATION SYSTEMS 3",
        mealStatus: "CLAIMED",
      },
    };
    return mockDatabase[id] || null;
  };

  useEffect(() => {
    if (studentID.trim()) {
      const data = fetchStudentData(studentID.toUpperCase());

      if (data) {
        setStudentName(data.name);
        setCourse(data.course);
        setMealStatus(data.mealStatus);
      } else if (studentID.trim().length >= 11) { // Validate ID length
        setStudentName("Unknown");
        setCourse("Unknown");
        setMealStatus("INELIGIBLE");
      }

      // Auto-clear the input after 2 seconds
      const timer = setTimeout(() => setStudentID(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [studentID]);


  const handleInputChange = (e) => {
    setStudentID(e.target.value);
  };

  const clearInput = () => {
    setStudentID("");
  };

  const getLabelStyle = () => {
    switch (mealStatus) {
      case "ELIGIBLE":
        return "text-[#17634F] bg-[#BCF0DA]";
      case "CLAIMED":
        return "text-[#F8F8F8] bg-[#A9A9A9]";
      case "INELIGIBLE":
      default:
        return "text-[#8C3939] bg-[#FBD5D5]";
    }
  };

  return (
    <>
      <HeaderBar />

      <main
        className="relative w-full bg-cover bg-center flex justify-center items-center"
        style={{
          'height': "calc(100vh - 110px)",
          'backgroundImage': "url('/background-image.svg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1F3463] bg-opacity-80 backdrop-blur-[5px] z-0"></div>

        {/* Back button */}
        <div className="absolute top-0 left-0 px-4 py-2 flex items-center">
          <Link to="/">
            <button
              className="flex items-center text-[#F8F8F899] hover:text-[#F8F8F8]">
              <CircleArrowLeft size={24} className="mr-2" /> {/* Back Icon */}
              <span className="text-lg">Back</span>
            </button>
          </Link> 
        </div>

        <div className="form-wrapper max-w-[60%] flex flex-col justify-center items-center relative z-10">
          <div className="grid grid-cols-[auto,1fr] gap-7 px-20 pb-10 z-10">
            <div className="profile-picture">
              <img
                src="/user-default.svg"
                alt="Profile"
                className="max-w-none"
              />
            </div>
            <div className="student-info flex flex-col justify-end items-start">
              <div className="text-nowrap text-white">
                <p className="text-3xl font-bold mb-1">{studentName}</p>
                <p className="text-2xl font-regular">{course}</p>
              </div>
            </div>
            <div className="meal-status">
              <div className="text-nowrap cursor-default">
                <p className="text-2xl font-light text-white mb-2">Meal Status:</p>
                <div
                  className={`meal-status-label text-center text-2xl font-bold py-[2px] rounded-[4px] ${getLabelStyle()}`}
                >
                  <p>{mealStatus}</p>
                </div>
              </div>
            </div>
            <div className="input-form relative">
              <label
                htmlFor="student-id"
                className="block text-2xl font-light text-white mb-2"
              >
                Student ID:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="student-id"
                  name="student-id"
                  value={studentID}
                  onChange={handleInputChange}
                  className="px-[12px] py-[5px] rounded-[4px] w-full text-base 
                  font-light placeholder:text-slate-400 block bg-white 
                  border border-slate-500 shadow-sm focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff]"
                  placeholder="XX-XXXXXXXX"
                />
                {studentID && (
                  <button
                    onClick={clearInput}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-blue w-full min-h-[15em] max-w-[724px] max-h-[275px] bg-[#1F3463] rounded-[10px] border-[1px] border-[#FAFAFA] absolute bottom-0 z-0"></div>
        </div>
      </main>
    </>
  );
};

export default KStaffPage;
