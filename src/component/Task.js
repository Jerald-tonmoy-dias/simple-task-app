import React, { Component } from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
padding: 8px;
margin-bottom: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
`;
export default class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                <Container>
                    {this.props.task.content}
                </Container>
            </Draggable>
        )
    }
}
