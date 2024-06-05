// components/Tbody.js
import React from 'react';

const Tbody = () => {
  return (
    <>
      <div className="container mx-auto mt-8 flex text-black items-center text-center justify-center pt-10">
        <h2 className="text-3xl font-semibold font-mono mb-4 text-black text center">Group Members</h2>
      </div>
      <div className="container mx-auto mt-8 flex text-black items-center text-center justify-center">

        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Adarsh Gothankar</td>
              <td className="border px-4 py-2">Student</td>
              <td className="border px-4 py-2">adarshgothankar@gmail.com</td>
            </tr>
            {/* Add additional rows for group members */}
            <tr>
              <td className="border px-4 py-2">Yash Bora</td>
              <td className="border px-4 py-2">Student</td>
              <td className="border px-4 py-2">yashlok@gmail.com</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shreyas Choure</td>
              <td className="border px-4 py-2">Student</td>
              <td className="border px-4 py-2">shreyaschoure@gmail.com</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Yash Pise</td>
              <td className="border px-4 py-2">Student</td>
              <td className="border px-4 py-2">YashPise@gmail.com</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Prof. Sujata Sonawane</td>
              <td className="border px-4 py-2">Project Guide</td>
              <td className="border px-4 py-2">sujata.sonawane@moderncoe.edu.in</td>
            </tr>
            {/* Add more rows for additional group members */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tbody;
