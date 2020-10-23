import React from 'react';
import SearchBar from './SearchBar';
import plaschemaAPI from '../apis/plaschemaAPI';
import ResultList from './ResultList';
import ResultDetail from './ResultDetail';
import MenuBar from './MenuBar';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

class App extends React.Component {
    state = { videos: [], selectedResult: null, selectedMenu: null };

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
        this.setState({selectedResult: video});
    }

    onMenuSelect = (menu) => {
        this.setState({selectedMenu: menu});
    }

    render() {
        return (
            <div>
                <Header />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="four wide column">
                            <MenuBar />
                        </div>
                        
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
                <Footer />
            </div> 
        );
    }
}

export default App;