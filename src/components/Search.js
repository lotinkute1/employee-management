import React, { Component } from 'react';
import EditForm from './EditForm';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            findValue: ''
        }
    }
    getText(event) {
        const value= event.target.value;
        this.setState({findValue: value});
    }
    renderBtn=()=> {
        if(!this.props.formState) return <button className="btn  btn-outline-info " onClick={()=>this.props.ketnoi()}>Thêm Mới</button>
        else return <button className="btn  btn-outline-warning " onClick={()=>this.props.ketnoi()}>Đóng</button>
    }
    renderEditFrom=()=>{
        if(this.props.editFormState){
            return   < EditForm editData={this.props.editData} editedData={(editedItem)=>this.props.editedData(editedItem)}/>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event)=>this.getText(event)} type="text" className="form-control" placeholder="Tìm kiếm" aria-describedby="helpId" />
                        <div onClick={()=>this.props.findButtonConn(this.state.findValue)} className="btn btn-info">Tìm</div>
                    </div>
                </div>
                {this.renderBtn()}
                {this.renderEditFrom()}
            </div>
        );
    }
}

export default Search;