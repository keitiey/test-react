import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//  COMPONENTS
import Header from './header/header';
import Content from './content/content';

//  FETCH DATA
import { fetchCompanies } from '../fetchData/fetchCompanies';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveTab: 'TopGainers',
            data: []
        };
        fetchCompanies()
        .then(data => this.setState({ data: data.companies }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            fetchCompanies()
            .then(data => this.setState({ data: data.companies }))
            .catch(err => console.log(err));
        }, 5 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    handleTabActive(tab) {
        const { value } = tab.props;
        this.setState({ isActiveTab: value });
    }

    render() {
        const { data, isActiveTab } = this.state;
        if (!data) return <h1>Loading ... </h1>;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header handleTabActive={this.handleTabActive.bind(this)} />
                    <Content data={data} isActiveTab={isActiveTab} />
                </div>
            </MuiThemeProvider>
        );
    }
}

module.exports = Main;
