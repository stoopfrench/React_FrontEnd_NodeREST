import React, { Component } from "react"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"

import "./SearchForm.css"
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"

export class SearchForm extends Component {
    constructor(props) {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            movies: [],
            selectValue: 'Titles',
            placeHolder: 'Search by Titles',
            noResultsMessage: ''
        }
    }

    handleChange(event) {
        this.setState({
            selectValue: event.target.value,
            placeHolder: `Search by ${event.target.value}`
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const searchValue = this.state.selectValue
        const searchTerm = this.refs[`${searchValue}`].value
        let url
        switch (searchValue) {
            case 'Genre':
            url = `http://localhost:8080/api/genre/${searchTerm}`
            break
            case 'Year':
            url = `http://localhost:8080/api/year/${searchTerm}`
            break
            default:
            url = `http://localhost:8080/api/titles/${searchTerm}`
        }

        fetch(url)
        .then((data) => {    
            if(data.status === 404) {
                this.setState({
                    noResultsMessage: "No Movies Found",
                    movies: []
                })
            } else {this.setState({noResultsMessage: ''})}
            
            return data.json();
        }).then( json => {
            this.setState({
                movies: json.data
            })
        })
    }

    render() {
        return (
            <div className="container mx-auto">
                <h1 id="searchFormTitle">Movie Search</h1>
                <hr/>
                <div className="row">
                    <div className="col-lg-12">
                        <form id="searchForm" onSubmit={this.handleSubmit}>
                            <div id="searchContainer" className="form-group">
                                <input id="search" ref={this.state.selectValue} type="text" className="form-control-lg col-12" placeholder={this.state.placeHolder} autoComplete="off"/>
                            </div>
                            <div className="form-group col-lg-4 col-sm-6 col-xs-8 mx-auto my-3">
                                <select className="custom-select" value={this.state.selectValue} onChange={this.handleChange}>
                                    <option value="Title">Title</option>
                                    <option value="Genre">Genre</option>
                                    <option value="Year">Year</option>
                                </select>
                            </div>
                            <button id="submitButton" type="submit" className="btn btn-secondary">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-12">
                        <h3>{this.state.noResultsMessage}</h3>
                        <BootstrapTable data={this.state.movies} striped={true} version="4">
                            <TableHeaderColumn dataField="title" dataSort={true} isKey={true}>Title</TableHeaderColumn>
                            <TableHeaderColumn dataField="year" width="10vw" dataSort={true}>Year</TableHeaderColumn>
                            <TableHeaderColumn dataField="genres">Genres</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        )
    }
}
