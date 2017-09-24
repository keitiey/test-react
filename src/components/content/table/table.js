import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

//  STYLES
import { tableRow, header } from '../../../styles/contents';
//  COMPONENTS
import ARow from './row/row';
//  GLOBAL
import { increCompare, decreCompare } from '../../../../global';

class ATable extends React.Component {
    render() {
        const { data, isActiveTab } = this.props;
        const sortedData = isActiveTab === 'TopGainers' 
            ? data.sort(decreCompare).slice(0, 20)
            : data.sort(increCompare).slice(0, 20);
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={tableRow}>
                        <TableHeaderColumn style={header.Code}>Code</TableHeaderColumn>
                        <TableHeaderColumn style={header.Name}>Company</TableHeaderColumn>
                        <TableHeaderColumn style={header.Price}>Price</TableHeaderColumn>
                        <TableHeaderColumn style={{ display: 'none' }}>Volume</TableHeaderColumn>
                        <TableHeaderColumn style={header.Value}>Value</TableHeaderColumn>
                        <TableHeaderColumn style={header.Change}>Change</TableHeaderColumn>
                        <TableHeaderColumn style={header.PercentChange}>%Change</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedData.map((company, index) => (
                        <ARow key={index} company={company} />
                    ))}
                </TableBody>
            </Table>
        );
    }
}
module.exports = ATable;
