import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
            <form className='search-form' onSubmit={this.props.handleSearch}>
                <input type='text' name='search' value={this.props.searchField} onChange={this.props.handleSearchText} />
                <button>Search</button>
            </form>
        );
    };
};

export default SearchForm;