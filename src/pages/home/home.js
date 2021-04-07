import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>关注【前端咖】公众号</h1>
        <div>欢迎您，体验webpack dll例子</div>
      </div>
    )
  }
}