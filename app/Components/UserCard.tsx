"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
    name: string;
    email: string;
    role: string;
    id: string;
}

function UserCard({ name, email, role, id }: Props) {
    // @ts-ignore
    const { theme } = useGlobalState();

    return (
        <UserCardStyled theme={theme}>
            <h1>{name}</h1>
            <p className="email">{email}</p>
            <p className="role">{role}</p>
            <div className="flex justify-end">
                <Link
                    href={`/${encodeURIComponent(name)}`}
                    className="boton-elegante relative overflow-hidden px-6 py-3 border-2 border-gray-800 bg-[#1a1a1a] text-white text-lg font-bold rounded-full transition-all duration-400 ease-linear focus:outline-none">
                    Explore
                    <span
                        className="absolute inset-0 scale-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)] transition-transform duration-500 ease-in-out"></span>
                </Link>

            </div>
        </UserCardStyled>
    );
}

const UserCardStyled = styled.div`
    padding: 1.2rem 1rem;
    width: full;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.borderColor2};
    box-shadow: ${(props) => props.theme.shadow7};
    border: 2px solid ${(props) => props.theme.borderColor2};

    height: 12rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .email {
    font-size: 1rem;
    color: ${(props) => props.theme.colorGrey2};
  }

  .role {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colorPrimary};
  }

  .card-footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;

    button {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
      color: ${(props) => props.theme.textLight};
    }
  }
`;

export default UserCard;
