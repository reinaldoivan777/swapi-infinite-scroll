import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import People from './people'
import {css} from 'react-emotion'

//untuk animasi loading
import {PropagateLoader} from 'react-spinners'

//styling buat animasi loading
const override = css`
    display: block;
    margin-left: 48%;
    border-color: red;
    position: center;
`;

class PeopleList extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            peoples: [],
            page: 1,
            next: '',
            loading: false,
            scrolling: false,   
        }
    }

    componentWillMount() {
        this.loadPeoples()
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    handleScroll = () => {
        const { scrolling } = this.state
        if (scrolling) return
        let lastLi = document.querySelector('ul.peoples > li:last-child')
        let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
        let pageOffset = window.pageYOffset + window.innerHeight
        let bottomOffset = 20
        if(pageOffset > lastLiOffset - bottomOffset) {
            this.loadMore()
        }
    }

    //mengambil data dari API SWAPI
    loadPeoples = () => {
        const { page, peoples } = this.state
        let url = `https://swapi.co/api/people/?page=${page}&format=json`
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({
                peoples: [...peoples, ...json.results],
                next: json.next,
                scrolling: false,
                loading: false,
                endofpage: false
            }))
    }

    //ketika sudah sampai bawah akan load more
    loadMore = () => {
        if (this.state.next != null) {
            this.setState(prevState => ({
                page: prevState.page + 1,
                scrolling: true,
                loading: true
            }), this.loadPeoples)
        }
        else 
            this.setState({endofpage:true})
    }

    render() { 
        return (
            <div>
                <ul className="peoples">
                    {
                        this.state.peoples.map(people => <li key={people.url}>
                            <People {...people} />
                        </li>)
                    }
                </ul>
                <PropagateLoader
                    className={override}
                    sizeUnit={"px"}
                    size={32}
                    color={'#e1e300'}
                    loading={this.state.loading}
                />
                {(this.state.endofpage === true) ? <h3>Back to the top</h3>: ''}
            </div>
        )
    }
}
 
export default PeopleList;
