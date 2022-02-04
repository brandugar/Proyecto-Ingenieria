// import React from "react";
// import { Link } from 'react-router-dom';

// const Contact = () => {
//     return (

//         <div className="w-full bg-gray-200 h-1">
//             <div className="bg-blue-600 h-1" style="width: 45%"></div>
//         </div>


//     )
// }

// export default Contact;
const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
};
export default ProgressBar;