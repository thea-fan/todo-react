class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word : "",
      list : []
    }
  }

  addItem(){
    var item = this.state.word;
    var updateList = this.state.list;
    updateList.push(item);
    this.setState({list:updateList});
  }

  changeHandler(event){
    if (event.keyCode === 13){
        this.addItem();
    } else {
        var input = event.target.value;
        this.setState({word:input});
    }
  }

  render() {
      // render the list with a map() here
      const addToList = this.state.list.map((item)=>{
            return <p>{item}</p>
        });

      return (
        <div className="list">
            <input type="text" onChange={(event)=>{this.changeHandler(event)}} onKeyDown = {(event)=>{this.changeHandler(event)}} value={this.state.word}/>
            <button onClick={()=>{this.addItem()}}>add item</button>
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