import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onMouseMove = (item, e) => {
    this.setState({
      title: item.title
    })
  }
  onMouseOut = () => {
    this.setState({
      title: ''
    })
  }

  render() {
    const self = this;
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item}>
                      <div onMouseOver={this.onMouseMove.bind(this, item)} onMouseOut={this.onMouseOut}>
                        {item.children.map(function (child, i) {
                          return getChildrenToRender(child, i, self.state.title === item.title);
                        })}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
