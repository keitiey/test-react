import React from 'react';
import PropTypes from 'prop-types';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { TableRow, TableRowColumn } from 'material-ui/Table';

//  STYLES
import { tableRow, body } from '../../../../styles/contents';
//  GLOBAL
import { addCommaToNumber } from '../../../../../global';

class ARow extends React.Component {
    constructor(props) {
        super(props);

        let isIncresea = 0;
        isIncresea = props.company.change > 0 ? 1 : -1;

        this.state = { isIncresea };
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    componentWillReceiveProps(nextProps) {
        let isIncresea = 0;
        isIncresea = nextProps.company.change > 0 ? 1 : -1;

        this.setState({ isIncresea });
    }

    handleColorChange() {
        const { change } = this.props.company;
        const { isIncresea } = this.state;
        const { Change } = body;
        switch (isIncresea) {
            case -1:
                return (
                    <TableRowColumn style={{ ...Change, color: '#FF1345' }}>
                        {change}
                    </TableRowColumn>
                );
            case 1:
                return (
                    <TableRowColumn style={{ ...Change, color: '#08D66B' }}>
                        {change}
                    </TableRowColumn>
                );
            default:
                return <TableRowColumn style={Change}>--</TableRowColumn>;
        }
    }

    handleColorPercentChange() {
        const { percentChange } = this.props.company;
        const { isIncresea } = this.state;
        const { PercentChange } = body;
        switch (isIncresea) {
            case -1:
                return (
                    <TableRowColumn style={{ ...PercentChange, color: '#FF1345' }}>
                        {percentChange}%
                    </TableRowColumn>
                );
            case 1:
                return (
                    <TableRowColumn style={{ ...PercentChange, color: '#08D66B' }}>
                        {percentChange}%
                    </TableRowColumn>);
            default:
                return <TableRowColumn style={PercentChange}>0%</TableRowColumn>;
        }
    }

    render() {
        const { code, name, price, volume, value } = this.props.company;
        return (
            <TableRow hoverable style={{ tableRow, backgroundColor: '#FDFDFD' }}>
                <TableRowColumn style={body.Code}>{code}</TableRowColumn>
                <TableRowColumn style={body.Name}>{name}</TableRowColumn>
                <TableRowColumn style={body.Price}>{price}</TableRowColumn>
                <TableRowColumn style={{ display: 'none' }}>{volume}</TableRowColumn>
                <TableRowColumn style={body.Value}>{addCommaToNumber(value)}</TableRowColumn>
                {this.handleColorChange()}
                {this.handleColorPercentChange()}
            </TableRow>
        );
    }
}

ARow.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};

module.exports = ARow;
