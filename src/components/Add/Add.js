import React, { Component } from "react" 

import "./Add.css"

export class Add extends Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            resultMessage: ''
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        const title = this.refs.Title.value
        const year = this.refs.Year.value
        const genres = this.refs.Genres.value

        const postBody = JSON.stringify({
            title: title,
            year: year,
            genres: genres
        })

        fetch('http://localhost:8080/api/titles', {
            method: 'POST',
            headers : { "Content-type": "application/json"},
            body: postBody
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                resultMessage: data.created
            })
        })
    }
    render() {
        return (
            <div className="container">
                <h1 id="createFormTitle">Add a Movie</h1>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Title</label>
                                <input type="text" className="form-control-lg col-12" ref="Title" placeholder="Enter Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Year</label>
                                <input type="text" className="form-control-lg col-12" ref="Year" placeholder="Enter Year"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Genres</label>
                                <input type="text" className="form-control-lg col-12" ref="Genres" placeholder="Enter Genres"/>
                            </div>
                            <button id="submitButton" type="submit" className="btn btn-secondary">Create New Movie</button>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <p>{this.state.resultMessage.title}</p>
                        <p>{this.state.resultMessage.year}</p>
                        <p>{this.state.resultMessage.genres}</p>
                        <p>{this.state.resultMessage.index}</p>
                        <p>{this.state.resultMessage._id}</p>
                    </div>
                </div>
            </div>
        )
    }
}
