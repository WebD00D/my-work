import React, { PureComponent } from 'react'

import '../layouts/index.css'

class Work extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
    }
  }

  render() {
    return (
      <div className="list-item" id={this.props.id}>
        <div className="list-item__header">
          <div className="t-serif--basic t-caps ls-2">{this.props.project}</div>
          <div className="fx fx-sb mb-20 fx-col-sm">
            <div className="t-serif--basic fw-light fc-grey fx-col f-12 t-caps ls-2">
              <div>
                <b>Date: </b>{this.props.timeline}
              </div>
              <div>
                <b>Type: </b>{this.props.projectType}
              </div>
              <div>
                <b>Role: </b>{this.props.role}
              </div>
            </div>
            <div>
              <a
                target="_blank"
                href={this.props.siteLink}
                className="t-serif--basic fw-light fc-blue f-10 t-caps ls-2"
              >
                {this.props.siteLinkTitle}
              </a>
            </div>
          </div>
          <div className="t-serif--basic fw-light f-14">
            {this.props.paragraphOne}
          </div>
          {this.props.paragraphTwo ? (
            <div className="t-serif--basic fw-light f-14 mt-20">
              {this.props.paragraphTwo}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default Work
