import React, { useState } from 'react'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  Typography,
  message
} from 'antd';
import axios from "axios";
import { conversionFactor } from '../conversionFactor'
import { useHistory } from 'react-router';

const { Title } = Typography;

export const FormPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = fieldsValue => {

    const values = {
      ...fieldsValue,
      "date": fieldsValue['date'].format('L'),
      "CO2PerPerson": conversionFactor[fieldsValue['transportType']] * fieldsValue['kilometers'] * fieldsValue['travelType'],
      "totalCO2": fieldsValue['numberOfWorkers'] * (conversionFactor[fieldsValue['transportType']] * fieldsValue['kilometers'] * fieldsValue['travelType'])
    }
    setLoading(true);
    axios.post(`http://localhost:8080/api/add-data`,
      values
    )
      .then(res => {
        setLoading(false);
        message.success('¡Los datos fueron añadidos satisfactoriamente!');
        history.push('/tabla');
      })
      .catch(error => {
        setLoading(false);
        console.error(error)
      })
  }

  return (
    <>
      <Title level={2}>
        Ingresa un nuevo recorrido
      </Title>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size={'large'}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="date"
          label="Fecha"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa la fecha',
            }
          ]}>
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="startPoint"
          label="Dirección de punto partida"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa punto de partida',
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="endPoint"
          label="Dirección de punto de termino"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa punto de termino',
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="transportType"
          label="Medio de transporte"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa el medio de transporte'
            }
          ]}>
          <Select>
            <Select.Option value="Metro(Tren, Subway, Subterráneo)">Metro(Tren, Subway, Subterráneo)</Select.Option>
            <Select.Option value="Auto(Gasolina)">Auto(Gasolina)</Select.Option>
            <Select.Option value="Camioneta(Diésel)">Camioneta(Diésel)</Select.Option>
            <Select.Option value="Motocicleta(Gasolina)">Motocicleta(Gasolina)</Select.Option>
            <Select.Option value="Bus Transantiago(Transporte público)">Bus Transantiago(Transporte público)</Select.Option>
            <Select.Option value="Avión(Chile)">Avión(Chile)</Select.Option>
            <Select.Option value="Caminando">Caminando</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="kilometers"
          label="Cantidad de kilometros"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa la cantidad de km',
            }
          ]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="numberOfWorkers"
          label="Numero de empleados"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa el numero de empleados',
            }
          ]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="travelType"
          label="Tipo de viaje"
          rules={[{ required: true, message: '¡Por favor selecciona uno!' }]}
        >
          <Radio.Group>
            <Radio.Button value={1}>Solo ida</Radio.Button>
            <Radio.Button value={2}>Ida y vuelta</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Button type="primary" loading={loading} htmlType="submit">
          Agregar información
      </Button>{' '}
        <Button type="danger" htmlType="button" onClick={() => history.push('/tabla')}>
          Volver a la tabla
      </Button>

      </Form>

    </>
  );
}