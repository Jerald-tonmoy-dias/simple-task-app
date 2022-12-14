import React, { Component } from 'react';
import Task from './Task';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
`;
const Title = styled.h3`
padding: 8px`;
const TaskList = styled.div`
padding: 8px `;


export default class Column extends Component {

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provider) => {
                        <TaskList
                            innerRef={provider.innerRef}
                            {...provider.droppableProps}

                        >
                            {this.props.tasks.map((task, index) => <Task
                                key={task.id} task={task} index={index} />
                            )}
                            {provider.placeholder}
                        </TaskList>
                    }}
                </Droppable>
            </Container>
        )
    }
}
