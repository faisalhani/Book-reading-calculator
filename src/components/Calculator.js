import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            pagePerMenuits: 1,
            timePerDay: 5
        };
        this.handlePage = this.handlePage.bind(this);
        this.handlePagePerMenuits = this.handlePagePerMenuits.bind(this);
        this.handleTimePerDay = this.handleTimePerDay.bind(this);
    }

    handlePage(event) {
        this.setState({ page: event.target.value.replace(/\D/, '') });
    }

    handlePagePerMenuits(event) {
        this.setState({ pagePerMenuits: event.target.value });
    }

    handleTimePerDay(event) {
        this.setState({ timePerDay: event.target.value });
    }

    finishCalculator = () => {
        var pagePerMenuits = parseInt(this.state.pagePerMenuits);
        var timePerDay = parseInt(this.state.timePerDay);

        var divide = this.state.page * pagePerMenuits

        var value = divide / timePerDay

        return parseInt(value)
    }


    render() {
        return (
            <div>
                <h3 style={titleStyle}>Book reading calculator</h3>
                <div style={content}>
                    <div>
                        <p style={{ paddingTop: "10px" }}> How many Pages in the Book?</p>
                        <input style={pageInput} type="text" value={this.state.page} onChange={this.handlePage} />
                    </div>
                    <div>
                        <p style={{ paddingTop: "10px" }}>  How musch time you take reading a single page per minute? </p>

                        <select style={select} value={this.state.pagePerMenuits} onChange={this.handlePagePerMenuits} >
                            <option value="1">1 Minute</option>
                            <option value="2">2 Minute</option>
                            <option value="3">3 Minute</option>
                            <option value="4">4 Minute</option>
                            <option value="5">5 Minute</option>
                            <option value="10">10 Minute</option>
                            <option value="20">20 Minute</option>
                            <option value="30">30 Minute</option>
                        </select>
                    </div>
                    <div>
                        <p style={{ paddingTop: "10px" }}>   How much time you want to read per day?</p>

                        <select style={select} value={this.state.timePerDay} onChange={this.handleTimePerDay}  >
                            <option value="5">5 Minute</option>
                            <option value="15">15 Minute</option>
                            <option value="20">20 Minute</option>
                            <option value="30">30 Minute</option>
                            <option value="60">1 Hour</option>
                            <option value="120">2 Hour</option>
                            <option value="180">3 Hour</option>
                            <option value="240">4 Hour</option>
                            <option value="300">5 Hour</option>

                        </select>
                    </div>
                </div>
                <p style={value}>  {this.finishCalculator()} day </p>
            </div>
        )
    }
}
const titleStyle = {
    marginTop: "10px",
    padding: "10px",
    color: 'white',
    borderRadius: '33px',
    background: '#288d9a',
    boxShadow: 'inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1',
    textAlign: "center"
}
const content = {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: 'white',
    borderRadius: '33px',
    background: '#288d9a',
    boxShadow: 'inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1',
    textAlign: "center"
}

const pageInput = {
    padding: "10px",
    color: 'white',
    borderRadius: '33px',
    background: '#288d9a',
    boxShadow: 'inset 7px 7px 13px #227883, inset -7px -7px 13px #2ea2b1',
    textAlign: "center",
    borderColor: "transparent"
}

const select = {
    padding: "10px",
    color: 'white',
    borderRadius: '33px',
    background: '#288d9a',
    boxShadow: '7px 7px 13px #227883, -7px -7px 13px #2ea2b1',
    textAlign: "center"
}

const value = {
    fontSize: "20px",
    padding: "10px",
    color: 'white',
    borderRadius: '33px',
    background: '#288d9a',
    boxShadow: '7px 7px 13px #227883, -7px -7px 13px #2ea2b1',
    textAlign: "center",
    marginRight: "80px",
    marginLeft: "80px",
    marginTop: "30px"
}

export default Calculator;