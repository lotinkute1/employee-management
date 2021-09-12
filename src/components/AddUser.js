// đây là sử lý khi thằng button và form thêm mới nằm khác component
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    saveData=(event)=> {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            id:uuidv4(),//uuidv4 dùng để sinh ngẩu nhiên id mà không trùng với bất cứ id nào có sẳng
            [name]:value
        })
    }
    exportItem=()=>{
        const item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.telephone=this.state.telephone;
        item.permission=this.state.permission;
        this.props.getItems(item);
    }
     
    renderForm=()=> {
        if(this.props.formState) {
            return (
                <div className="col-12">

                    <div className="card border-dark mb-3 mt-2">
                        <div className="card-header">Thêm Nhân viên</div>
                        <div className="card-body text-dark">
                            <form>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.saveData(event)}  className="form-control" name="name" placeholder="Họ và Tên" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.saveData(event)}  className="form-control" name="telephone" placeholder="Số Điện Thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <select  onChange={(event) => this.saveData(event)} name="permission"  className="form-control" >
                                        <option value="">Chọn Quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={()=>this.exportItem()} className="btn btn-block btn-primary" value="Thêm"/> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
   
    render() {
        return (
            
                <div>

                {this.renderForm()}
                </div>
            
        );
    }
}

export default AddUser;