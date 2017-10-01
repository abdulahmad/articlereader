import { Line } from 'rc-progress';
import React from 'react';
import './ProgressBar.scss';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      timeout: null
    };
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    if (this.state.timeout !== null) {
      clearTimeout(this.state.timeout);
    }
  }
  animate() {
    if (this.state.progress >= 100 && !this.state.didUnmount) { return; }
    this.setState({
      progress: this.state.progress + 0.25,
      timeout: setTimeout(() => { this.animate(); }, 3)
    });
  }
  render() {
    return (
      <div>
        <Line
          percent={this.state.progress}
          strokeWidth="1"
          strokeColor="#2299dd"
          strokeLinecap="square"
        />
      </div>
    );
  }
}

export default ProgressBar;
