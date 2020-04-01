import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class AddMovie extends React.Component {
  state = {
    open: false,
    newmovie: {
      title: "",
      rate: "",
      year: "",
      image: ""
    }
  };

  OpenModal = () => {
    this.setState({
      open: true
    });
  };
  closeModal = () => {
    this.setState({
      open: false
    });
  };
  handleAdd = e => {
    this.setState({
      newmovie: { ...this.state.newmovie, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        <button className="add-btn-modal" onClick={this.OpenModal}>
          Add
        </button>
        <Modal isOpen={this.state.open} className="Modal">
          <h2>Add Movie</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.addMovie({
                ...this.state.newmovie,
                id: Math.random()
              });
              this.closeModal();
            }}
          >
            <label>Enter Movie title</label>
            <input name="title" onChange={this.handleAdd} />
            <label>Enter Movie rate </label>
            <input name="rate" onChange={this.handleAdd} />
            <label>Enter Movie year</label>
            <input name="year" onChange={this.handleAdd} />
            <label>Enter Movie image </label>
            <input name="image" onChange={this.handleAdd} type="url" />

            <div className="btn-container">
              <button>Add Movie</button>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
export default AddMovie;
