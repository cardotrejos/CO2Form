import React, { useState, useEffect } from 'react'
import { api } from "../../utils/api";
import { columns } from './columns'
import { Table, Typography } from 'antd';

const { Title } = Typography;

export const TablePage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    api.get("api/")
      .then(response => {
        setData(response.data);
      }).catch(e => console.log("Error:", e));
  }, []);

  function onChange(filters) {
    console.log('params', filters);
  }

  return (
    <>
      <Title level={2}>
        Lista de recorridos
      </Title>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </>
  )
}