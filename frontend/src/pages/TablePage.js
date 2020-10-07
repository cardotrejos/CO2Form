import React, { useState, useEffect } from 'react'
import { api } from "../utils/api";
import { Table, Typography, Tag } from 'antd';

const { Title } = Typography;

export const TablePage = () => {
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'date',
      width: '10%',
    },
    {
      title: 'Punto de inicio',
      dataIndex: 'startPoint',
      width: '15%',
    },
    {
      title: 'Punto de termino',
      dataIndex: 'endPoint',
      width: '15%',
    },
    {
      title: 'Kilometros recorridos',
      dataIndex: 'kilometers',
      sorter: (a, b) => a.kilometers - b.kilometers,
      width: '10%',
    },
    {
      title: 'Medio de transporte',
      dataIndex: 'transportType',
      filters: [
        { text: "Metro", value: "Metro(Tren, Subway, Subterráneo)" },
        { text: "Auto", value: "Auto(Gasolina)" },
        { text: "Camioneta", value: "Camioneta(Diésel)" },
        { text: "Motocicleta", value: "Motocicleta(Gasolina)" },
        { text: "Bus Transantiago", value: "Bus Transantiago(Transporte público)" },
        { text: "Bus", value: "Bus(Vehículo privado)" },
        { text: "Avión(Chile)", value: "Avión(Chile)" },
        { text: "Avión(Internacional)", value: "Avión(Internacional)" },
        { text: "Caminando", value: "Caminando" },
      ],
      onFilter: (value, record) => record.transportType.indexOf(value) === 0,
      width: '20%',
    },
    {
      title: 'Personas en el viaje',
      dataIndex: 'numberOfWorkers',
      sorter: (a, b) => a.numberOfWorkers - b.numberOfWorkers,
      width: '10%',
    },
    {
      title: 'Viaje de ida y vuelta',
      key: 'travelType',
      dataIndex: 'travelType',
      onFilter: (value, record) => record.travelType.indexOf(value) === 0,
      filters: [
        { text: "Verdadero", value: 2 },
        { text: "Falso", value: 1 },
      ],
      render: travelType => {
        let str = travelType === 1 ? "Solo ida" : "Ida y vuelta"
        return (
          <Tag color={"gray"} key={travelType}>
            {str}
          </Tag>
        )
      },
      width: '10%',
    },
    {
      title: 'kgCO2 por persona',
      dataIndex: 'CO2PerPerson',
      sorter: (a, b) => a.CO2PerPerson - b.CO2PerPerson,
      width: '15%',
    },
    {
      title: 'CO2 Total',
      sorter: true,
      dataIndex: 'totalCO2',
      render: totalC02 => totalC02.toFixed(2),
      sorter: (a, b) => a.totalCO2 - b.totalCO2,
      width: '10%',
    },
  ];

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