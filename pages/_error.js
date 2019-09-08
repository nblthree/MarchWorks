import { Component } from 'react';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <div>
          {this.props.statusCode && this.props.statusCode === 404 ? (
            <span>
              No such page or post{' '}
              <span
                className="back"
                onClick={() => {
                  window.history.back();
                }}
              >
                return back
              </span>
            </span>
          ) : this.props.statusCode ? (
            `An error ${this.props.statusCode} occurred on server`
          ) : (
            'An error occurred'
          )}
        </div>
        <style jsx>{`
          div {
            display: flex;
            height: 100%;
            width: 100%;
          }
          span {
            margin: auto;
            font-size: 1.2rem;
            font-weight: 600;
          }
          .back {
            color: #45baff;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }
}

export default Error;
