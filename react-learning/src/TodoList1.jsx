

// export default class TodoList1 extends Component {
//   render() {
//     return (
//       <div>
//          <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//         </div>
//     )
//   }
// }

import React from 'react'

export default function TodoList1(props) {
  return (
    <div>
        <ul>
            {
                props.items.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))
            }
        </ul>
    </div>
  )
}
