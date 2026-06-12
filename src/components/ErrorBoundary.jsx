import { Component } from "react";
import "./ErrorBoundary.css";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary" role="alert">
          <div className="eb-inner">
            <div className="eb-id">Observatory Error</div>
            <h1 className="eb-title">This record could not be rendered</h1>
            <p className="eb-detail">
              {this.props.context === "record"
                ? "A Frontier Record file may be malformed — check the assessments array and mutation log."
                : "A page component encountered an unexpected error."}
            </p>
            <div className="eb-technical">
              <span className="eb-technical-label">Error</span>
              <span className="eb-technical-message">{this.state.error.message}</span>
            </div>
            <a href="/" className="eb-return">← Return to Observatory</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
