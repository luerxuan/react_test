import React,{Component} from 'react'
import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'

class App extends Component{

    componentDidMount() {
        // 模拟发送ajax请求，获取数据
        setInterval(() => {
            const comments = [
                {username: 'Tom', content: 'React挺好的！'},
                {username: 'Jack', content: 'React太难了！'}
                ]
            // 更新状态
            this.setState({comments})
        })
    }

    // 添加评论
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }

    // 删除执行评论
    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mb-3 clearfix">
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={comments} deleteComment={this.deleteComment} />
                </div>
            </div>
        )
    }
}
export default App
