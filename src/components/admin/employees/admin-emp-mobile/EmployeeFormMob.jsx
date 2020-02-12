import React from "react";
import Dropzone from 'react-dropzone';
import './EmployeeFormMob.css';
import { AdminButton } from "../../Styles";

class EmployeeFormMob extends React.Component {
  state = { form_fields: { first_name: "", last_name: "", bio: "", title: "", email: "", phone: "", other: "", role: "", image: ""}, imgSrc: "", };

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        form_fields: {
          first_name: this.props.firstName,
          last_name: this.props.lastName,
          bio: this.props.bio,
          title: this.props.title,
          email: this.props.email,
          phone: this.props.phone,
          other: this.props.other,
          role: this.props.role,
          image: this.props.image
        }
      });
    }
  }

  onDrop = (files) => {
    this.setState({ form_fields: { ...this.state.form_fields, image: files[0] }});
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = function () {
      this.setState({
        imgSrc: [reader.result]
      })
    }.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editEmployee(this.props.id, this.state.form_fields);
      this.props.editToggle();
    } else {
      this.props.addEmployee({ ...this.state.form_fields });
    }
    this.setState({form_fields: {first_name: "", last_name: "", bio: "", title: "", email: "", phone: "", other: "", role: "", image: "", }});
  };

  handleChange = e => {
    const { name, value } = e.target;
    let fields = { ...this.state.form_fields }
    fields [name] = value
    this.setState({ form_fields: fields });
  };

  render() {
    const { first_name, last_name, bio, title, email, phone, other, role, image } = this.state.form_fields;
    return (
      <div className='form-cont-mob'>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            name="first_name"
            value={first_name}
            placeholder="First Name"
            required
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            name="last_name"
            value={last_name}
            placeholder="Last Name"
            required
            onChange={this.handleChange}
          />
          <label>Phone:</label>
          <input
            name="phone"
            value={phone}
            placeholder="Phone"
            
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            name="email"
            value={email}
            placeholder="Email"
            type='email'
            required
            onChange={this.handleChange}
          />
          <label>Bio:</label>
          <input
            name="bio"
            value={bio}
            placeholder="Bio"
            
            onChange={this.handleChange}
          />
          <label>Title:</label>
          <input
            name="title"
            value={title}
            placeholder="Title"
            required
            onChange={this.handleChange}
          />
          <label>Role:</label>
          <select
            name='role'
            value={ role }
            required
            onChange={this.handleChange}
          >
            <option></option>
            <option value='staff'>Staff</option>
            <option value='director'>Director</option>
            <option value='volunteer'>Volunteer</option>
          </select>
          <label>Image:</label>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className='dropzone-mob'
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                  <p>Drop files here...</p> :
                  <img src={this.state.imgSrc} className='img-preview-mob'/> 
                }
              </div>
            )
          }}
        </Dropzone>
          <label>Other:</label>
          <input
            name="other"
            value={other}
            placeholder="Other"
            onChange={this.handleChange}
          />
          <div className="button-cont-stat-mob">
          <AdminButton type="submit">Submit</AdminButton>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeFormMob;
