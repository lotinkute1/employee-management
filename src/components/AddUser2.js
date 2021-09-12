
// cái này là xử lý khi button và form thêm mới  nằm chung component
import React, { Component } from 'react';

class AddUser2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hideState:true
        }
    }
    changeHideState=()=> {
        if(this.state.hideState) this.setState({hideState:false})
        else this.setState({hideState:true})
    }
    renderBtn=()=> {
        if(this.state.hideState) return <button className="btn btn-block btn-outline-info " onClick={()=>this.changeHideState()}>Thêm Mới</button>
        else return <button className="btn btn-block btn-outline-warning "  onClick={()=>this.changeHideState()}>Đóng</button>
    }
    rednerForm=()=> {
        if(!this.state.hideState) {
            return (
                <div className="card border-dark mb-3 mt-2">
                    <div className="card-header">Thêm Nhân viên</div>
                    <div className="card-body text-dark">
                        <div className="form-group">
                            <input type="text"  className="form-control" placeholder="Họ và Tên" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <input type="text"  className="form-control" placeholder="Số Điện Thoại" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" >
                                <option value>Chọn Quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-primary"> Thêm</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                {this.renderBtn()}
                {this.rednerForm()}
            </div>
        );
    }
}

export default AddUser2;