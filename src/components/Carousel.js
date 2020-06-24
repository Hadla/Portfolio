import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card'
import mindlerImage from '../images/mindler.jpg';
import seraviImage from '../images/seravi.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mindler',
                    subTitle: 'Psychologists online',
                    imgSrc: mindlerImage,
                    link: 'https://mindler.se',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Seravi',
                    subTitle: 'Informational platform',
                    imgSrc: seraviImage,
                    link: 'https://seravi.io',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Jessica Hansén',
                    subTitle: 'Portfolio for client',
                    imgSrc: mindlerImage,
                    link: 'https://github.com/Hadla/Portfolio-Jessica-Hansen',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;