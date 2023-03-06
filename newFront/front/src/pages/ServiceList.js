import React, { useState } from 'react'

export default function ServiceList() {

    const [servicelist,setServiceList]=useState([])



  return (
    <div className='Container'>
        <h2 className='text-center'>Services Provided By Us!</h2>
        <table className='table table-bordered table-stripped'>
            <thead>
               <th>Id</th>
               <th>Name</th>
               <th>Price</th>
               </thead>

               <tbody>
                <tr>
                <td>1</td>
                <td>Air Filter Change</td>
                <td>550</td>
                </tr>

                <tr>
                <td>2</td>
                <td>Camshaft replacement</td>
                <td>950</td>
                </tr>

                <tr>
                <td>3</td>
                <td>Battery replacement</td>
                <td>750</td>
                </tr>
                 
               </tbody>

        </table>

    </div>

  )
}

