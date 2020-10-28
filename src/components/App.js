import React from 'react';
import SearchBar from './SearchBar';
import plaschemaAPI from '../apis/plaschemaAPI';
import ResultList from './ResultList';
import ResultDetail from './ResultDetail';
import MenuBar from './MenuBar';
import Header from './header/Header';
import Footer from './footer/Footer';
import Dashboard from './dashboard/Dashboard';
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedResult: null,
            selectedMenu: null,
            showAccreditations: false
        };
    }

    componentDidMount() {
        this.onSearchSubmit('cat');
    }

    onSearchSubmit = async (term) => {
        const response = await plaschemaAPI.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items, selectedResult: response.data.items[0] });
    }

    onResultSelect = (video) => {
        this.setState({ selectedResult: video });
    }

    onMenuSelect = (menu) => {
        this.setState({ selectedMenu: menu });
    }

    showAccreditations = () => {
        // this.setState((prevState, preProps) => ({ showAccreditations: !prevState.showAccreditations }));
        this.setState({ showAccreditations: true })
    }

    returnToDashboard = () => {
        this.setState({ showAccreditations: false });
    }

    render() {
        console.log(this.state.showAccreditations)
        return (
            <div>
                <Header />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="four wide column">
                            <MenuBar
                                showAccreditations={this.showAccreditations}
                                returnToDashboard={this.returnToDashboard} />
                        </div>
                        
                        <div className="eight wide column">
                            <ResultDetail video={this.state.selectedResult} />
                        </div>
                        
                        <div className="four wide column">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.videos.length} records.
                            <ResultList onResultSelect={this.onResultSelect} videos={this.state.videos} />
                        <div className="twelve wide column">
                            <Dashboard />
                        </div>
                        {
                            this.state.showAccreditations ?
                                <div className="content-overlay">
                                    <div className="content-wrapper">
                                        <div className="eight wide column">
                                            <ResultDetail video={this.state.selectedResult} />
                                        </div>

                                        <div className="four wide column">
                                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                                            Total: {this.state.videos.length} records.
                                            <ResultList onResultSelect={this.onResultSelect} videos={this.state.videos} />
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default App;