import React from 'react'

const messageDetails = [
    {id: 1, title: 'Message001', content: ' 我爱你,  中国'},
    {id: 2, title: 'Message002', content: ' 我爱你,  老婆'},
    {id: 3, title: 'Message003', content: ' 我爱你,  孩子'},
    {id: 4, title: 'Message004', content: ' 我爱你,  父母'}
]

//函数组件
export default function MessageDetail(props) {
    console.log(props);
    const id = props.match.params.id
    const md = messageDetails.find(md => md.id===id*1)
    return (
        <ul>
            <li>ID: {md.id}</li>
            <li>TITLE: {md.title}</li>
            <li>CONTENT: {md.content}</li>
        </ul>
    )
}

// export default class MessageDetail extends Component{
//
//     render() {
//         return (
//             <div></div>
//         )
//     }
// }
