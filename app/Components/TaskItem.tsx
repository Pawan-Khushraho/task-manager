"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";
import {useParams} from "next/navigation";

interface Props {
    title: string;
    description: string;
    date: string;
    completed: boolean;
    id: string;
    prioties:boolean;
}

function TaskItem({ title, description, date, completed, id,prioties }: Props) {
    const params = useParams();
    // @ts-ignore
    const { theme, deleteTask, updateTask ,openEditModal} = useGlobalState();
    return (
        <TaskItemStyled prioties={prioties} theme={theme}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p className="date">{formatDate(date)}</p>
            <div className="task-footer">
                {completed ? (
                    <button
                        className="completed"
                        onClick={() => {
                            const task = {
                                id,
                                completed: !completed, // Toggle completion
                            };
                            updateTask(params.username, task); // Update the task
                        }}
                    >
                        Completed
                    </button>
                ) : (
                    <button
                        className="incomplete"
                        onClick={() => {
                            const task = {
                                id,
                                completed: !completed, // Toggle completion
                            };
                            updateTask(params.username, task); // Update the task
                        }}
                    >
                        Incomplete
                    </button>
                )}
                <button
                    className="edit"
                    onClick={() =>
                        openEditModal({
                            id,
                            title,
                            description,
                            date,
                            completed,
                            important: prioties,
                        })
                    }
                >
                    {edit}
                </button>
                <button
                    className="delete"
                    onClick={() => {
                        deleteTask(params.username, id);
                    }}
                >
                    {trash}
                </button>
            </div>
        </TaskItemStyled>
    );
}

const TaskItemStyled = styled.div<{ prioties: boolean }>`
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.borderColor2};
    box-shadow: ${(props) => props.theme.shadow7};
    border: 2px solid ${(props) => (props.prioties ? props.theme.colorDanger : props.theme.borderColor2)};
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .date {
        margin-top: auto;
    }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem;