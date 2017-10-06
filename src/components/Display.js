/**
 * Created by sravankumarganji on 10/4/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    const {panelHeader,panelText,buttonName,buttonEvent} = this.props;
    return (
      <div>
        <hr/>
        <div className="row">
          <div className="form-inline col-12">
            <div className="col-8">
              <h5>{panelHeader}</h5>
              <p>{panelText}</p>
            </div>
            <button type="submit" name={buttonName} onClick={buttonEvent} className="btn btn-primary">{buttonName}</button>
          </div>
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  panelHeader : PropTypes.string,
  panelText:PropTypes.string,
  buttonName:PropTypes.string,
  buttonEvent:PropTypes.func
};
Display.defaultProps = {};

export default Display;
