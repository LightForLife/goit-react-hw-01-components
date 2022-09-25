import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  background-color: #e5e5e5;
  margin-top: 50px;

  & thead {
    width: 250px;
  }

  & thead th {
    width: 260px;
    height: 40px;
    text-transform: uppercase;
    background-color: #9edaff;
  }

  & tbody td {
    text-align: center;
    height: 40px;
    /* text-transform: uppercase; */
    font-size: 16px;
    background-color: #f9f4f8;
  }
`;

export const HeadTable = styled.thead``;

export const HeadRow = styled.tr``;

export const HeadTitle = styled.tr``;

export const BodyTable = styled.tbody``;

export const RowTable = styled.tr``;

export const DataTable = styled.td``;
