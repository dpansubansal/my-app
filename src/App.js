import "./App.css";
import data from "./data.json";
import Department from "./Department";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const [newData, setNewData] = useState([]);

  // const [departments, setDepartments] = useState([]);

  // const [titles, setTitles] = useState([]);

  // useEffect(() => {
  //   const fetchDepartments = async () => {
  //     try {
  //       const departmentsResponse = await axios.get(
  //         "https://api-regional.codesignalcontent.com/employee-management-system/departments"
  //       );

  //       const departmentsData = departmentsResponse.data;
  //       // console.log("departmentsData",departmentsData)
  //       setTitles(departments.map((department) => department.title))

  //       // Fetch details for each employee in departments
  //       const employeeRequests = departmentsData.map(async (department) => {
  //         const employees = await Promise.all(
  //           department.employees.map(async (empId) => {
  //             try {
  //               const employeeResponse = await axios.get(
  //                 `https://api-regional.codesignalcontent.com/employee-management-system/employees/${empId}`
  //               );
  //               return employeeResponse.data;
  //             } catch (er) {
  //               console.log("emp id not found");
  //               return null;
  //             }
  //           })
  //         );
  //         return {
  //           ...department,
  //           employees: employees,
  //         };
  //       });

  //       // Wait for all employee requests to complete
  //       const departmentsWithEmployees = await Promise.all(employeeRequests);

  //       setDepartments(departmentsWithEmployees);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchDepartments();
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formdata = new FormData(e.target);
  //   let addNew = {
  //     firstName: formdata.get("name"),
  //     position: formdata.get("position"),
  //   };
  //   setNewData([addNew, ...newData]);
  // };
  return (
    <><h1>dbahsdb</h1></>
  //   <div className="App">
  //     {/*------------------------------------------------ sol3 */}
  //     {/* {departments.map((d) => {
  //       return d.employees.map((i) => {
  //         if (i !== null) {
  //           return <Department dept={i} options={titles} />;
  //         }
  //       });
  //     })} */}
  //     {/*------------------------------------------------ sol3 */}
  //     {/*------------------------------------------------ sol2 */}
  //     <form onSubmit={handleSubmit}>
  //       Name
  //       <input name="name" id="name" />
  //       Position
  //       <input name="position" id="position" />
  //       <button type="submit">Add</button>
  //     </form>

  //     {newData.map((d) => {
  //       return <Department dept={d} />;
  //     })}
  //     {/*------------------------------------------------ sol2 */}
  //     {/*------------------------------------------------ sol1 */}
  //     {data.map((d) => {
  //       return d.employees.map((i) => {
  //         return <Department dept={i} />;
  //       });
  //     })}
  //     {/*------------------------------------------------ sol1 */}
  //   </div>
  );
}

export default App;
