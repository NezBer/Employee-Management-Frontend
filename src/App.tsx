

function EmployeeList() {

  const employees = [
    { id: 1, name: "Somchai", department: "IT" },
    { id: 2, name: "Somsri", department: "HR" },
    { id: 3, name: "Anan", department: "Finance" },
  ];


  return (
    <>
      <div>
        <div>
          <h3><b>Employee Management</b></h3>
        <p>Manage your employee</p>
        </div>
        <div>
          <button>+ Add Employee</button>
          </div>
        <div>
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
      </div>
    </>
  )
}

export default EmployeeList
