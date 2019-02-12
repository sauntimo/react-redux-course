import React from 'react'

export class Searchbar extends React.Component {
    state = {term: ''};


    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Seearch</label>
                        <input type="text" onChange={e => this.setState({term:e.target.value})} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
