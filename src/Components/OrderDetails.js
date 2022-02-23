//  import React, { Fragment } from 'react'




//  const orderArray = [
//         {
//             orderDate: '2022-01-05' ,
//             orderDetails : {
//                 ProductId: 12,
//                 VendorID: 23541
//             },
//             userDetails: {
//                 userID: 89032,
//                 Address: 'ahdj, kkll , kkkk'
//             }
//         },
//         {
//             orderDate: '2022-02-03',
//             orderDetails:{
//                 ProductId: 34,
//                 VendorID: 32141
//             },
//             userDetails :{
//                 userID: 54321,
//                 Address: 'gfghhj, hkfg , hjjhut'
//             }
//         },
//         {
//             orderDate: '2022-03-04',
//             orderDetails:{
//                 ProductId: 53,
//                 VendorID: 87543
//             },
//             userDetails :{
//                 userID: 87594,
//                 Address: 'hjjhdfjk, bdfjkf, vjhufj'
//             }
//         }
//     ]



// function OrderDetails(){
//   return (
    
//     <div>
      
      
//     <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//       <div className="px-4 py-5 sm:px-6">
//         <h3 className="text-lg leading-6 font-medium text-gray-900">Order Details</h3>
//       </div>
//       {orderArray.map(person => {
//      return   <div>

//       <div className="border-t border-gray-200">
//         <dl>
//           <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//             <dt className="text-sm font-medium text-gray-500">UserId:{person.userDetails.userID}</dt>
//            {/* // <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">COD</dd> */}
//             <dt className="text-sm font-medium text-gray-500">OrderDate:{person.orderDate}</dt>
//           {/* //  <dt className="text-sm font-medium text-gray-500">1kg units</dt> */}
//             <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Address: {person.userDetails.Address}</dd>
//             <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">ProductId: {person.orderDetails.ProductId}</dd>
//             <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">VendorId: {person.orderDetails.VendorID}</dd>
//           </div>
//           <br></br>
          
//         </dl>
//       </div>
//        </div>
       


          
        
//       })}
//          </div>
//       </div>

//   );
      
// };


// export default OrderDetails;
