import { Breadcrumb } from "antd";

const BreadCrumb: React.FC = () => {
  
  return (
    <Breadcrumb style={{ margin: '30px 0', fontSize: '30px', fontWeight: 900  }}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadCrumb
