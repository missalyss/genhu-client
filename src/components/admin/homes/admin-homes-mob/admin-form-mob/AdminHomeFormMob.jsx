import React from "react";
import ReactQuill from "react-quill";
import '../../../quill/EditorStyles.css';
import 'react-quill/dist/quill.snow.css'
import { AdminButton } from "../../../Styles";


class AdminHomeFormMob extends React.Component {
  constructor(props){ 
    super(props)  
    this.state = {
      name: "",
      role: "",
      sheltered_children: "",
      victims: "",
      orphans: "",
      volunteers: "",
      director: "",
      sponsor: "",
      description: ""
    };
  }

  static modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],

      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  static formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  componentDidMount() {
    if (this.props.id) {
      const {
        
        deleteHome,
        editHome,
        editToggle,
        created_at,
        updated_at,
        id,
        ...orest
      } = this.props;

      this.setState({
        ...orest
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      // debugger
      this.props.editHome(this.props.id, this.state);
      this.props.editToggle();
    } else {
      // debugger
      this.props.addHome({ ...this.state });
    }
    this.setState({
      name: "",
      role: "",
      shelter: "",
      sheltered_children: "",
      victims: "",
      orphans: "",
      volunteers: "",
      director: "",
      sponsor: "",
      description: "",
    });
    // this.props.renderHomes();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleContentChange = (value) => {
    this.setState({ description: value})
  }

  render() {
    const {
      name,
      role,
      sheltered_children,
      victims,
      orphans,
      volunteers,
      director,
      sponsor,
      description
    } = this.state;
    return (
      // <div className='form-cont'>
        <div>
        <form onSubmit={this.handleSubmit} className='home-form'>
          <label>Home Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Home Role:</label>
          <select
            required
            name="role"
            onChange={this.handleChange}
            value={role}
          >
            <option value="" name=""></option>
            <option value="orphanage" name="orphanage">
              Orphanage
            </option>
            <option value="center" name="center">
              Drop-In Center
            </option>
          </select>
          <label>Sheltered Children:</label>
          <input
            name="sheltered_children"
            value={sheltered_children}
            placeholder="Number of children"
            required
            onChange={this.handleChange}
          />
          <label>Victims of Armed Conflict:</label>
          <input
            name="victims"
            value={victims}
            placeholder="Percent of victims"
            required
            onChange={this.handleChange}
          />
          <label>Orphans:</label>
          <input
            name="orphans"
            value={orphans}
            placeholder="Percent of orphans"
            required
            onChange={this.handleChange}
          />
          <label>Regular Volunteers:</label>
          <input
            name="volunteers"
            value={volunteers}
            placeholder="Number of volunteers"
            required
            onChange={this.handleChange}
          />
          <label>Director:</label>
          <input
            name="director"
            value={director}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Home Sponsor:</label>
          <input
            name="sponsor"
            value={sponsor}
            placeholder="Name of sponsor"
            required
            onChange={this.handleChange}
          />
          <div>
           <label>Home Description:</label>
         <ReactQuill className='text-editor'
            name="description"
            value={description}
            placeholder="Write about the home here"
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            // required
            onChange={this.handleContentChange}
            />
          
          </div>
          <div className="button-cont-stat">
            <AdminButton type="submit">Submit</AdminButton>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminHomeFormMob;
