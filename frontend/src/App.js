import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormPage } from './pages/FormPage'
import { TablePage } from './pages/Table/TablePage'
import { Graphics } from './pages/Graphics';
import { PlusCircleOutlined, TableOutlined, BarChartOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;

function App() {

  return (
    <Router>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<PlusCircleOutlined />}>
              Ingresar datos
            <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<TableOutlined />}>
              Visualizar datos
            <Link to="/tabla" />
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
              Gráficas
            <Link to="/graficas" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/" component={FormPage} />
              <Route path="/tabla" component={TablePage} />
              <Route path="/graficas" component={Graphics} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ricardo Trejos ©2020</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
