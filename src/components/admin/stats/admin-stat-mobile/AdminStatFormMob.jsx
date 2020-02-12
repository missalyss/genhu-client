import React from "react";
import { AdminButton } from "../../Styles";

class StatFormMob extends React.Component {
  state = { name: "", value: "",};

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        name: this.props.statName,
        value: this.props.statValue,
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editStat(this.props.id, this.state);
      this.props.editToggle();
    } else {
      this.props.addStat({ ...this.state });
    }
    this.setState({ name: "", value: "", });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, value, } = this.state;
    return (
      <div className='form-cont'>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Name"
            required
            onChange={this.handleChange}
          />
          <label>Value:</label>
          <input
            name="value"
            value={value}
            placeholder="Value"
            required
            onChange={this.handleChange}
          />
          <div className="button-cont-stat">
          <AdminButton type="submit">Submit</AdminButton>
          </div>
        </form>
      </div>
    );
  }
}

export default StatFormMob;
