import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editData.id,
            name: this.props.editData.name,
            telephone: this.props.editData.telephone,
            permission: this.props.editData.permission,
        }
    }
    saveData=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
        // console.log("item da duoc sua thanh:");
        // console.log("name:"+this.state.name+",tele:"+this.state.telephone+",permission:"+this.state.permission);
    }
    
    exportEditedItem=()=>{
        const editedItem={}
        editedItem.id=this.state.id;
        editedItem.name=this.state.name;
        editedItem.telephone=this.state.telephone;
        editedItem.permission=Number(this.state.permission);
        this.props.editedData(editedItem);
    }
    render() {
        console.log("form editform da nhan duoc editItem");
        console.log(this.props.editData);
        return (
            <div className="col-12 p-0">

                    <div className="card border-dark  mb-3 mt-2 bg-warning">
                        <div className="card-header">Sửa Nhân viên</div>
                        <div className="card-body text-dark">
                            <form>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.saveData(event)}  className="form-control" name="name" placeholder="Họ và Tên" aria-describedby="helpId" defaultValue={this.props.editData.name}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.saveData(event)}  className="form-control" name="telephone" placeholder="Số Điện Thoại" aria-describedby="helpId" defaultValue={this.props.editData.telephone}/>
                                </div>
                                <div className="form-group">
                                    <select  onChange={(event) => this.saveData(event)} name="permission"  className="form-control" defaultValue={this.props.editData.permission}>
                                        <option value="">Chọn Quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={()=>this.exportEditedItem()} className="btn btn-block btn-success" value="Sửa"/> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default EditForm;