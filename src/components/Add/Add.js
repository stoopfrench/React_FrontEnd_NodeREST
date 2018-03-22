import React, { Component } from "react" 

import "./Add.css"

export class Add extends Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
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
            console.log(data)
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Add a Movie</h1>
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
                            <button type="submit" className="btn btn-primary">Create New Movie</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
