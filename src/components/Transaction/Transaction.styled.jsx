import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-spacing: 1px;

  & thead {
    width: 250px;
  }

  & thead th {
    width: 260px;
    height: 40px;
    font-size: 16px;
    text-transform: uppercase;
    background-color: #9edaff;
  }

  & tbody td {
    text-align: center;
    height: 40px;
    font-size: 16px;
    color: #324e63;
  }

  & tbody tr {
    background-color: #f9f4f8;
  }

  & tbody tr:nth-child(even) {
    background-color: #e5e5e5;
  }
`;
