import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

class Header extends React.Component {
    render() {
        const { handleTabActive } = this.props;
        return (
            <AppBar style={{ height: 48 }} title={'S&P ASX'} showMenuIconButton={false}>
                <Tabs style={{ width: '25%' }}>
                    <Tab 
                        label="TOP GAINERS" value="TopGainers" 
                        className="top-gainers"
                        onActive={handleTabActive.bind(this)} 
                    />
                    <Tab 
                        label="TOP LOSERS" value="TopLosers" 
                        className="top-losers"
                        onActive={handleTabActive.bind(this)} 
                    />
                </Tabs>
            </AppBar>
        );
    }
}

module.exports = Header;
