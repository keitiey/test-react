import React from 'react';

//  COMPONENTS
import ATable from './table/table';

class Content extends React.Component {
    render() {
        const { data, isActiveTab } = this.props;
        return (
            <div>
                <ATable data={data} isActiveTab={isActiveTab} />
            </div>
        );
    }
}
module.exports = Content;
