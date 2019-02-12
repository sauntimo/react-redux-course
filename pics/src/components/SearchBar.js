import React from 'react'

export class Searchbar extends React.Component {

    state = {term: ''};

    onInputChange(event) {
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={e => this.setState({term:e.target.value})} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
