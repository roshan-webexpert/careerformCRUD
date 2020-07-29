import React, { Component } from "react";
import "../css/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { response } from "express";

const Career = (props) => (
  <tr>
    <td className={props.career.selected ? "selected" : "rejected"}>
      {props.career.name}
    </td>
    <td className={props.career.selected ? "selected" : "rejected"}>
      {props.career.mobile}
    </td>
    <td className={props.career.selected ? "selected" : "rejected"}>
      {props.career.email}
    </td>
    <td className={props.career.selected ? "selected" : "rejected"}>
      {props.career.position}
    </td>
    <td className={props.career.selected ? "selected" : "rejected"}>
      {props.career.resume}
    </td>

    <td>
      <Link to={"/edit/" + props.career._id}>Edit</Link>
    </td>
    <td>
      <Button outline color="danger" className="deleteForm" onClick={onDelete}>
        Delete
      </Button>
    </td>
  </tr>
);

const onDelete = () => {
  //   let careerId = this.props.state.params.id;
  axios
    .delete("http://localhost:5000/careers/delete/" + id)
    .then((response) => {
      this.props.history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

class Home extends Component {
  // To display added record of careerForm
  constructor(props) {
    super(props);

    this.state = {
      careers: [],
    };
  }

  componentDidMount() {
    // const id = response.data.id;
    axios
      .get("http://localhost:5000/careers/")
      .then((response) => {
        const id = response.data.id;
        this.setState({ careers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // axios.delete('http://localhost:5000/careers/:id')
    // Career.deleteOne({ _id: this.props.match.params.id })
    //     .exec()
    //     .then(result => {
    //         console.log(result);
    //         res.status(200).json({
    //             message: 'Form Deleted Successfully'
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });

    //         DeleteData(id){
    //             var studentDelete = {
    //                   'id': id
    //                      };
    //               $.ajax({
    //                 url: "/api/Removedata/",
    //                 dataType: 'json',
    //                 type: 'POST',
    //                 data: studentDelete,
    //                 success: function(data) {
    //                   alert(data.data);
    //                    this.componentDidMount();

    //                 }.bind(this),  , (req, res, next) => {
    //                 error: function(xhr, status, err) {
    //                    alert(err);

    //                 }.bind(this),
    //                 });
    //               }
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/careers/")
      .then((response) => {
        this.setState({ careers: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // componentWillMount() {
  //     this.getCareerDetails();
  // }

  // getCareerDetails() {
  //     let careerId = this.props.match.params.id;
  //     axios.get('http://localhost:5000/careers/' + careerId)
  //         .then((prevState, response) => {
  //             this.setState({
  //                 name: response.data.name,
  //                 mobile: response.data.mobile,
  //                 email: response.data.email,
  //                 position: response.data.pcompletedosition,
  //                 resume: response.data.resume,
  //                 selected: response.data.selected,
  //                 rejected: response.data.rejected

  //             });
  //         })
  //         .catch(function (error) {
  //             console.log(error)
  //         });
  // };
  // onDelete() {
  //     let careerId = this.props.match.params.id;
  //     axios.delete('http://localhost:5000/careers/delete/' + careerId)
  //         .then(response => {
  //             this.props.history.push('/');
  //         }).catch(err => {
  //             console.log(err)
  //         });
  // }
  // componentWillUnmount() {
  //     this._isMounted = false;
  // }

  // componentDidUpdate() {
  //     this._isMounted = true;

  //     axios.get('http://localhost:5000/careers/')
  //         .then(response => {
  //             this.setState({ careers: response.data });
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }
  careerList() {
    return this.state.careers.map((currentCareer, i) => {
      return <Career career={currentCareer} key={i}></Career>;
    });
  }

  render() {
    const myStyle = {
      textAlign: "center",
      marginTop: "30px",
    };
    return (
      <div className="container heading">
        <h4 style={myStyle}>
          Home Component Just temperary displaying the careerForm List
        </h4>
        <h2 style={{ textAlign: "center" }}>Career Form List</h2>
        <Table striped style={{ marginTop: 40 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Position</th>
              <th>Resume</th>
              <th>Action</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>{this.careerList()}</tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
