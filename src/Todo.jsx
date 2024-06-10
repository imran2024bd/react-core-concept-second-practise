// export default function Todo({ task }) {
//     return (
//         <li> Task : {task} </li>
//     )
// }

// 38 - 6 Read Only Props Two Way Of Conditional Rendering

// conditional rendering option 1 :

// export default function Todo({ task, Isdone }) {
//     if (Isdone === true) {
//         return <li> Finished : {task} </li>
//     }
//     else {
//         return <li> Work on : {task} </li>
//     }

// }



// conditional rendering option 2 :

// export default function Todo({ task, Isdone }) {
// if (Isdone) {
//     return <li> Finished : {task} </li>
// }
//     return <li> Work on : {task} </li>
// }


// conditional rendering 2nd task
// export default function Todo({ task, Isdone }) {
//    if (Isdone) {
//     return <li> We already Finished : {task} </li>
//    }
//    else {
//     return <li> we have to learn : {task} </li>
//    }

// }






// 38 - 7 Six Ways To Do Conditional Rendering: If, Ternary And AND OR

// Conditional Rendering: If & Ternary Operator

// export default function Todo({ task, isdone }) {
//     return (
//         <li> {isdone ? 'Finished the course' : 'Work on'} : {task} </li>
//     )
// }


// Conditional Rendering: && _ if true then execute done

// export default function Todo({ task, isdone }) {
//     return(
//         <li> {task} {isdone && ': Done'} </li>
//     )
// }


// Conditional Rendering: || - if false then execute do it

export default function Todo({ task, isdone }) {
    return (
        <li> {task} {isdone || ': Do it'} </li>
    )
}

