/**
 * Created by 15366 on 2016/12/29.
 */
let Board = React.createClass({
    getInitialState(){
        return {arr:[]};
    },
    handleClick(){
        this.setState({arr:this.state.arr.concat(this.refs.myText.value)});
    },
    del(event){
        var e = event ||window.event;
        this.state.arr = this.state.arr.filter(function (item,index) {
            return index != e.target.parentNode.id;
        });
        this.setState({arr:this.state.arr});
    },
    render(){
        return (
            <div className="panel panel-default">
                 <div className="panel-heading">
                    <h1>珠峰留言版</h1>
                  </div>
                 <div className="panel-body">
                    <ul className="list-group">
                     {
                         this.state.arr.map(function (item,index) {
                         return <li key={index} className="list-group-item" id={index}><span>{item}</span><button onClick={this.del}>删除</button></li>
                     },this)
                     }
                    </ul>
                 </div>
                <div className="panel-footer">
                    <input type="text" className="form-control" ref="myText"/>
                     <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
                </div>
            </div>
          )
    }
});
ReactDOM.render(<Board/>,document.querySelector('#container'));
