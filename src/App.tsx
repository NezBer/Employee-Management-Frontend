import './App.css'

function EmployeeList() {

  const employees = [
    { id: 1, name: "Somchai", department: "IT" },
    { id: 2, name: "Somsri", department: "HR" },
    { id: 3, name: "Anan", department: "Finance" },
  ];

  const departments = [...new Set(employees.map(emp => emp.department))];

  return (
    <>
      <div className='flex items-center justify-between pr-3'>
        <div>
          <h3 className='text-2xl font-bold text-blue-700 '>Employee Management</h3>
        <p>Manage your employee</p>
        </div>
        <div>
          <button className='bg-blue-500 rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-700'>+ Add Employee</button>
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
          <table>
            <thead>
              <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            </tr>
            </thead>
            <tbody>
            {employees.length > 0 
              ? (
                employees.map((emp) => {
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
              <h2>ไม่พบข้อมูล</h2>
            )
            }
          </tbody>
          </table>
        </div>
    </>
  )
}

export default EmployeeList
