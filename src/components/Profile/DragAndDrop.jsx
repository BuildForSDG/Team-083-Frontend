import React from 'react';
import PropTypes from 'prop-types';

class DragAndDrop extends React.Component {
  dropRef = React.createRef();

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter += 1;
    if (e.dataTransfer.items) {
      if (e.dataTransfer.items.length === 1) {
        this.props.setDragging(true);
        this.props.setMessage('Drop now!');
      }
    }
  };

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter -= 1;
    console.log(this.dragCounter);

    if (this.dragCounter === 0) {
      this.props.setDragging(false);
      this.props.setMessage('Drag and drop file here');
    }
  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.setDragging(false);
    if (e.dataTransfer.files) {
      if (e.dataTransfer.files.length === 1) {
        this.props.handleDrop(e.dataTransfer.files);
        e.dataTransfer.clearData();
        this.dragCounter = 0;
        this.props.setMessage('Drag and drop file here');
        this.props.setDragging(false);
      } else if (e.dataTransfer.files.length > 1) {
        this.props.setMessage('attempting to drop multiple files');
        this.props.setDragging(false);
      }
    }
  };

  componentDidMount() {
    this.dragCounter = 0;
    const div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    const div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  render() {
    return (
      <div ref={this.dropRef}>
        {/* {this.state.dragging} */}
        {this.props.children}
      </div>
    );
  }
}

DragAndDrop.propTypes = {
  children: PropTypes.array,
  dragCounter: PropTypes.number,
  handleDrop: PropTypes.func,
  setDragging: PropTypes.func,
  setMessage: PropTypes.func
};

export default DragAndDrop;
