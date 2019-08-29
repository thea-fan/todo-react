class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word : "",
      list : [],
      className : "",
      warning: ""
    }
  }

  addItem(){
     var pass = {
        className: "",
        warning: ""
    }

    var item = this.state.word;
    if (item.length > 0){
        var updateList = this.state.list;
        updateList.push(item);
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
      const addToList = this.state.list.map((item)=>{
            return <p>{item}</p>
        });

      return (
        <div className="list">
            <input type="text" onChange={(event)=>{this.changeHandler(event)}} onKeyDown = {(event)=>{this.enterHandler(event)}} value={this.state.word} className = {this.state.className}/>
            <button onClick={()=>{this.addItem()}}>add item</button>
            <p className = "warning-text">{this.state.warning}</p>
            <div>
                <p>*******</p>
                {addToList}
            </div>
        </div>
      );
  }
}


ReactDOM.render(
    <div>
        <h1>TODOOOOOODODODODODO</h1>
        <List/>
    </div>,
    document.getElementById('root')
);