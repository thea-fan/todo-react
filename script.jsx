class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word : "",
      list : [],
      className : "",
      warning: "",
      done : []
    }
  }
  doneItem(index){
    let updatedState = this.state
    let checked = updatedState.list.splice(index, 1);
    updatedState.done.push(checked[0]); //console.log(checked) will give you an array of objects
    this.setState(updatedState);
  }

  addItem(){
     var pass = {
        className: "",
        warning: ""
    }

    var item = this.state.word;
    if (item.length > 0){
        var updateList = this.state.list;
        updateList.push({
            word: item,
            date: moment().format('DD MMM YYYY, h:mm a')
        });
        this.setState({list:updateList});
        this.state.word = "";
        this.setState(pass)
    } else {
        this.setState({className: "warning", warning: "Pls enter smth"})
    }
  }

  changeHandler(event){
    var pass = {
        className: "",
        warning: ""
    }
    var input = event.target.value;
    if (input.length <= 25){
        this.setState(pass)
    } else {
        this.setState({className: "warning", warning: "Max 25 characters only"})
    }

    this.setState({word:input});
  }

  enterHandler(event){
     if (event.keyCode === 13){
        this.addItem();
    }
  }

  render() {
      // render the list with a map() here
      const addToList = this.state.list.map((item, index)=>{
            return <li className="list-group-item d-flex justify-content-between"><div>{item.word}<br/><small>Added on {item.date}</small></div><button type="button" onClick={()=>{this.doneItem(index)}} className="btn btn-outline-warning">Done</button></li>
        });
      const doneList = this.state.done.map((item)=>{
            console.log(item);
            return <li className="list-group-item d-flex justify-content-between"><div><del>{item.word}</del><br/><small>Added on {item.date}</small></div></li>
        });

      return (
        <div className="list">
            <input type="text" onChange={(event)=>{this.changeHandler(event)}} onKeyDown = {(event)=>{this.enterHandler(event)}} value={this.state.word} className = {this.state.className}/>
            <button onClick={()=>{this.addItem()}}>add item</button>
            <p className = "warning-text">{this.state.warning}</p>
            <p>*******</p>
            <div className = "row justify-content-around min-size mx-auto">
                <div className = "card col-5 p-0">
                    <div className="card-header font-weight-bold text-center">
                        Things to do
                    </div>
                    <ul className="list-group list-group-flush">
                        {addToList}
                    </ul>
                </div>
                <div className = "card col-5 p-0">
                    <div className="card-header font-weight-bold text-center">
                        Things DONEEEE
                    </div>
                    <ul className="list-group list-group-flush">
                        {doneList}
                    </ul>
                </div>
            </div>
        </div>
      );
  }
}




ReactDOM.render(
    <div className = "container">
        <h1>TODOOOOOODODODODODO</h1>
        <List/>
    </div>,
    document.getElementById('root')
);