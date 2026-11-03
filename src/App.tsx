import { useState } from 'react';
import './App.css'

function EmployeeList() {

  const [searchEmp,setSearchEmp] = useState("");
  const [selectDep,setSelectDep] = useState("All");
  const [showForm,setShowForm] = useState(false);
  const [empName,setEmpName] = useState("");
  const [empDpm,setEmpDpm] = useState("")

  const employees = [
    { id: 1, name: "Somchai", department: "IT" },
    { id: 2, name: "Somsri", department: "HR" },
    { id: 3, name: "Anan", department: "Finance" },
  ];

  const departments = [...new Set(employees.map(emp => emp.department))];
  const filterEmployees = employees.filter((emp) => {
    return emp.name.includes(searchEmp) && (selectDep === "All" || emp.department.includes(selectDep));
  });

  return (
    <>
      <div className='flex items-center justify-between pr-3'>
        <div>
          <h3 className='text-2xl font-bold text-blue-700 '>Employee Management</h3>
        <p>Manage your employee</p>
        </div>
        <div>
          <button className='bg-blue-500 rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-700' onClick={()=>setShowForm(true)}>+ Add Employee</button>
          </div>
        </div>
        <div>
         <div className='my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {departments.map(department => {
            const count = employees.filter(emp => emp.department === department).length;

            return (
              <div key={department} className='rounded-lg border border-gray-200 bg-white p-3 shadow-sm '>
                <h3 className="text-lg font-semibold">{department}</h3>
                <p className="mt-2 text-3xl font-bold text-blue-600">
          {count}
          <span className="ml-2 text-sm font-normal text-gray-500">
            คน
          </span>
        </p>

              </div>
            );
          })}
         </div>
          <h3>Employee List</h3>
          <div className='my-4'>
          <input type="text" placeholder='ค้นหาพนักงาน' value={searchEmp} onChange={(e) => setSearchEmp(e.target.value)} className="w-150 rounded-lg border border-gray-300 px-4 py-2 mx-2"/>
          <select value={selectDep} onChange={(e) => setSelectDep(e.target.value)}   className="department-select rounded-lg border border-gray-300 bg-white px-4 py-2"
>
              <option value="All">ทุกแผนก</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
            <th className='px-3 py-2'>ID</th>
            <th className='px-3 py-2'>Name</th>
            <th className='px-3 py-2'>Department</th>
            </tr>
            </thead>
            <tbody>
            {filterEmployees.length > 0 
              ? (
                filterEmployees.map((emp) => {
                  return (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.department}</td>
                    </tr>
                  );
                })
              )
            : (
              <tr>
                <td colSpan={3} className='px-3 py-2 text-center'>ไม่พบข้อมูล</td>
              </tr>
            )
            }
          </tbody>
          </table>
        </div>

        {/* Form Add EMP */}
        {showForm && (
          <div>
            <div>
          <p>ชื่อ</p>
          <input className='border rounded border-gray-200' type="text" placeholder='ชื่อพนักงาน' value={empName} onChange={(e)=>setEmpName(e.target.value)}/>

          <p>แผนก</p>
          <select value={empDpm} onChange={(e)=> setEmpDpm(e.target.value)}>
            <option value="">เลือกแผนก</option>
            {departments.map((department) => {
              return (
                <option key={department} value={department}>
                  {department}
                </option>
              )
            })}
          </select>

          <button className='rounded-lg border border-gray-300 px-3 py-2' onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}
    </>
  )
}

export default EmployeeList
