import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items:center;
    height:100px;
    background:var(darkgrey);
    padding:0 20px;
`;

export const Content = styled.div`
    position:relative;
    max-width:var(455px);
    width:100%;
    height:55px;
    background:var(#001100);
    border-radius:40px;
    color:var(#111111);

    img{
        position:absolute;
        left:15px;
        top:14px;
        width:30px;
    }
    input{
        font-size:var(50px);
        position:absolute;
        left:0;
        margin:8px 0;
        padding:0 0 0 60px;
        border:0;
        width:95%;
        background:transparent;
        height:40px;
        color:var(--white);
        :focus{
            outline:none;
        }
    }
`;