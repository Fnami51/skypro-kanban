import { Link } from 'react-router-dom';
import '../App.css'
import { getStyle } from './data.js';
import * as card from './style_components/Card.styled.js'

function Card({ id, topic, title, date }) {


    return <card.Item>
    <card.Card>
        <card.Group>
            <card.Topic className={getStyle(topic)}>
                <card.TopicName className={getStyle(topic)}>{topic}</card.TopicName>
            </card.Topic>
            <Link to={'/card/' + String(id)} target="_self">
                <card.Button>
                    <card.CardBtnDiv></card.CardBtnDiv>
                    <card.CardBtnDiv></card.CardBtnDiv>
                    <card.CardBtnDiv></card.CardBtnDiv>
                </card.Button>
            </Link>
        </card.Group>
        <card.Content>
            <a href="" target="_blank">
                <card.Title>{title}</card.Title>
            </a>
            <card.DateBox>
                <card.DateSvg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clipPath="url(#clip0_1_415)">
                        <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                        <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_415">
                            <rect width="13" height="13" fill="white" />
                        </clipPath>
                    </defs>
                </card.DateSvg>
                <card.DateText>{date}</card.DateText>
            </card.DateBox>
        </card.Content>
    </card.Card>
</card.Item>;
  }
 
  export default Card;